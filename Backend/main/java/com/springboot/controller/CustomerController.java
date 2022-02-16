package com.springboot.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.springboot.jwt.JwtUtil;
import com.springboot.model.Customer;
import com.springboot.model.Login;
import com.springboot.model.Role;
import com.springboot.repository.CustomerRepository;
import com.springboot.service.FileUploadService;
import com.springboot.service.FileUtil;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {

	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private FileUploadService fileUploadService;

	@GetMapping("/admin")
	public ResponseEntity<?> getAllCustomer(Authentication authentication) {
		List<Customer> customers = customerRepository.findAllSortCID();
		
		boolean checkAuthority = authentication.getAuthorities().contains(new SimpleGrantedAuthority("ADMIN"));

		if (checkAuthority) {
			if (!customers.isEmpty())
				return new ResponseEntity<>(customers, HttpStatus.OK);
			else
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}

	@GetMapping("/customer")
	public ResponseEntity<Customer> getByEmailCustomer(Authentication authentication) {
		if (authentication.getAuthorities() != null) {
			Customer checkMail = customerRepository.findByEmail(authentication.getName());
			return new ResponseEntity<>(checkMail, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}

	@GetMapping("/role")
	public ResponseEntity<Object> getRole(Authentication authentication) {

		return new ResponseEntity<>(authentication.getAuthorities(), HttpStatus.OK);
	}

	@GetMapping("/currentEmail")
	public ResponseEntity<String> onlyGetByEmailCustomer(Authentication authentication) {
		return new ResponseEntity<>(authentication.getName(), HttpStatus.OK);
	}

	@PutMapping("/edit")
	public ResponseEntity<Customer> editProfile(@RequestBody Customer customer, Authentication authentication) {
		try {
			Customer checkMail = customerRepository.findByEmail(authentication.getName());
			if (checkMail != null) {
				checkMail.setFirst_name(customer.getFirst_name());
				checkMail.setLast_name(customer.getLast_name());
				checkMail.setAddress(customer.getAddress());
				checkMail.setNumber_phone(customer.getNumber_phone());
				checkMail.setGender(customer.getGender());
				return new ResponseEntity<>(customerRepository.save(checkMail), HttpStatus.OK);
			}
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/uploadAvatar")
	public ResponseEntity<?> uploadAvatarImage(@RequestParam("file") MultipartFile file, Authentication user) {

		try {
			Customer customer = customerRepository.findByEmail(user.getName());
			String fileUserCurrent = "user_" + customer.getCustomer_id() + "_" + file.getOriginalFilename();

			String fileName = StringUtils.cleanPath(fileUserCurrent);
			customer.setImage("images/avatars/"+fileName);

			Customer savedUser = customerRepository.save(customer);

			String uploadDir = FileUtil.folderAvatarPath;

			fileUploadService.saveFile(uploadDir, fileName, file);
			return new ResponseEntity<>(savedUser, HttpStatus.OK);
		} catch (IOException e) {
			return new ResponseEntity<>("Tải file ảnh không thành công", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody Customer customer) {
		try {
			Customer checkMail = customerRepository.findByEmail(customer.getEmail());
			if (checkMail == null) {
				customer.setRole(Role.USER);
				customer.setPassword(bCryptPasswordEncoder.encode(customer.getPassword()));
				customerRepository.save(customer);
				return new ResponseEntity<>("Đăng ký thành công!", HttpStatus.CREATED);
			} else {
				return new ResponseEntity<>("Tài khoản đã tồn tại!", HttpStatus.CONFLICT);
			}

		} catch (Exception e) {
			return new ResponseEntity<>("Đăng ký không thành công", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody Login customer) {
		try {
			authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(customer.getEmail(), customer.getPassword()));
			return new ResponseEntity<>(jwtUtil.generateToken(customer.getEmail()), HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>("Email hoặc mật khẩu không hợp lệ", HttpStatus.NOT_FOUND);
		}
	}
}
