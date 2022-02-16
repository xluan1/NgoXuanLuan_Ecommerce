package com.springboot.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.springboot.dto.OrderDTO;
import com.springboot.dto.OrderResponseDTO;
import com.springboot.model.Order;
import com.springboot.service.OrderService;

@Component
public class OrderMapper {
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private OrderService orderService;

	private Order convertToEntity(OrderDTO orderDTO) {
		return modelMapper.map(orderDTO, Order.class);
	}

	private OrderResponseDTO convertToResponseDTO(Order order) {
		return modelMapper.map(order, OrderResponseDTO.class);
	}

	private List<OrderResponseDTO> convertListToResponseDTO(List<Order> orders) {
		return orders.stream().map(this::convertToResponseDTO).collect(Collectors.toList());
	}
	
	public Long countOrder() {
		return orderService.countAll();
	}

	public List<OrderResponseDTO> getAllOrder() {
		return convertListToResponseDTO(orderService.findAll());
	}

	public List<OrderResponseDTO> getOrderByEmail(String email) {
		return convertListToResponseDTO(orderService.findOrderByEmail(email));
	}

	public OrderResponseDTO postOrder(OrderDTO orderDTO) {
		return convertToResponseDTO(orderService.postOrder(convertToEntity(orderDTO), orderDTO.getProduct_id()));
	}

	public List<OrderResponseDTO> deleteOrder(Integer order_id) {
		return convertListToResponseDTO(orderService.deleteOrder(order_id));
	}
}
