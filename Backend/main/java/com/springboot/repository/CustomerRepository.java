package com.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springboot.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	@Query(value = "Select * From Customers c Order By customer_id ASC", nativeQuery = true)
	List<Customer> findAllSortCID();

	@Query(value = "Select * From Customers Where email=:email", nativeQuery = true)
	Customer findByEmail(String email);

}
