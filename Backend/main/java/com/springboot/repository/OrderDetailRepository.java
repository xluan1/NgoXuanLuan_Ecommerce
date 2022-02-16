package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Integer> {

}
