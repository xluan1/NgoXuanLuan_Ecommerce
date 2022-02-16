package com.springboot.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Product;
import com.springboot.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	private ProductRepository productRepository;

	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAllProduct(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int limit, @RequestParam(defaultValue = "id") String sortBy,
			@RequestParam(defaultValue = "asc") String sortDir) {

		try {
			Sort sort = sortDir.equals("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
			Pageable paging = PageRequest.of(page, limit, sort);
			Page<Product> products = productRepository.findAll(paging);
			if (products.isEmpty()) {
				return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
			} else
				return new ResponseEntity<>(products.getContent(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/products/{id}")
	public ResponseEntity<?> getProductById(@PathVariable long id) {

		try {
			Optional<Product> productData = productRepository.findById(id);
			if (productData.isPresent()) {
				return new ResponseEntity<>(productData.get(), HttpStatus.OK);
			} else {
				return new ResponseEntity<>("Không tìm thấy sản phẩm" + id, HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/products/search")
	public ResponseEntity<?> getProductByKeyWord(@RequestParam(value = "key") String keyword,
			@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int limit,
			@RequestParam(defaultValue = "id") String sortBy, @RequestParam(defaultValue = "asc") String sortDir) {

		try {
			Sort sort = sortDir.equals("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
			Pageable paging = PageRequest.of(page, limit, sort);
			List<Product> productData = productRepository.search(keyword, paging);
			if (productData.isEmpty()) {
				return new ResponseEntity<>("Không tìm thấy sản phẩm", HttpStatus.NOT_FOUND);
			} else {
				return new ResponseEntity<>(productData, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/products/cate/{category_id}")
	public ResponseEntity<List<Product>> getByCateId(@PathVariable int category_id,
			@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int limit,
			@RequestParam(defaultValue = "id") String sortBy, @RequestParam(defaultValue = "asc") String sortDir) {
		try {
			Sort sort = sortDir.equals("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
			Pageable paging = PageRequest.of(page, limit, sort);
			Page<Product> products = productRepository.findAllByCategory(category_id, paging);

			if (products.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} else {
				return new ResponseEntity<>(products.getContent(), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@PostMapping("/products")
	public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product, Authentication authentication) {

		try {
			boolean checkAuthority = authentication.getAuthorities().contains(new SimpleGrantedAuthority("ADMIN"));
			if (checkAuthority) {
				Product _product = productRepository.save(product);
				return new ResponseEntity<>(_product, HttpStatus.CREATED);
			} else {
				return new ResponseEntity<>(HttpStatus.FORBIDDEN);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product product,
			Authentication authentication) {
		Optional<Product> productData = productRepository.findById(id);
		boolean checkAuthority = authentication.getAuthorities().contains(new SimpleGrantedAuthority("ADMIN"));

		if (checkAuthority) {
			if (productData.isPresent()) {
				Product _product = productData.get();
				_product.setProduct_name(product.getProduct_name());
				_product.setImage(product.getImage());
				_product.setPrice(product.getPrice());
				_product.setPrice_sale(product.getPrice_sale());
				_product.setCategory(product.getCategory());
				_product.setBrand(product.getBrand());
				_product.setImage1(product.getImage1());
				_product.setImage2(product.getImage2());
				_product.setDiscount(product.getDiscount());
				return new ResponseEntity<>(productRepository.save(_product), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);

	}

	@DeleteMapping("/products/{id}")
	public ResponseEntity<?> deleteProductById(@PathVariable long id, Authentication authentication) {
		try {
			Optional<Product> product=productRepository.findById(id);
			boolean checkAuthority = authentication.getAuthorities().contains(new SimpleGrantedAuthority("ADMIN"));
			if(checkAuthority) {
				if(product.isPresent()) {
					productRepository.deleteById(id);
					return new ResponseEntity<>("Xóa thành công",HttpStatus.OK);
				}
				else {
					return new ResponseEntity<>(HttpStatus.NOT_FOUND);
				}
			}
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
