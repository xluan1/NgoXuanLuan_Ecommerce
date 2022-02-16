package com.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
	List<Order> findOrderByEmail(String email);
}
