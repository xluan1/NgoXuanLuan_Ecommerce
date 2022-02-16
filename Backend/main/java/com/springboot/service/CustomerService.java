package com.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.springboot.model.Customer;
import com.springboot.model.CustomerDetail;
import com.springboot.repository.CustomerRepository;

@Service
public class CustomerService implements UserDetailsService {

	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Customer customer = customerRepository.findByEmail(email);
		if (customer == null)
			throw new UsernameNotFoundException("Không tìm thấy địa chỉ email" + email);
		return new CustomerDetail(customer);
	}

}
