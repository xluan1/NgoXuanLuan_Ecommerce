package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.dto.OrderDTO;
import com.springboot.dto.OrderResponseDTO;
import com.springboot.mapper.OrderMapper;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/orders")
public class OrderController {

	@Autowired
	private OrderMapper orderMapper;

	@GetMapping
	public ResponseEntity<List<OrderResponseDTO>> getOrder() {
		return new ResponseEntity<>(orderMapper.getAllOrder(), HttpStatus.OK);
	}

	@GetMapping("/email")
	public ResponseEntity<?> getOrderByEmail(Authentication authentication) {
		return new ResponseEntity<>(orderMapper.getOrderByEmail(authentication.getName()), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<OrderResponseDTO> addOrder(@RequestBody OrderDTO orderDTO) {
		return new ResponseEntity<>(orderMapper.postOrder(orderDTO), HttpStatus.CREATED);
	}

	@DeleteMapping("/{order_id}")
	public ResponseEntity<List<OrderResponseDTO>> deleteOrder(@PathVariable Integer order_id) {
		return new ResponseEntity<>(orderMapper.deleteOrder(order_id), HttpStatus.CREATED);
	}
}
