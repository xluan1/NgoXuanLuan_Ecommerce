package com.springboot.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.Order;
import com.springboot.model.OrderDetail;
import com.springboot.model.Product;
import com.springboot.repository.OrderDetailRepository;
import com.springboot.repository.OrderRepository;
import com.springboot.repository.ProductRepository;

@Service
public class OrderService {
	@Autowired
	private OrderDetailRepository orderDetailRepository;
	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private ProductRepository productRepository;
	
	public Long countAll() {
		return orderDetailRepository.count();
	}

	public List<Order> findAll() {
		return orderRepository.findAll();
	}

	public List<Order> findOrderByEmail(String email) {
		return orderRepository.findOrderByEmail(email);
	}

	public Order postOrder(Order validOrder, Map<Long, Long> product_id) {
		Order order = new Order();
		List<OrderDetail> orderDetailList = new ArrayList<>();

		for (Map.Entry<Long, Long> entry : product_id.entrySet()) {
			Product product = productRepository.findById(entry.getKey()).get();
			OrderDetail orderDetail = new OrderDetail();
			orderDetail.setProduct(product);
			orderDetail.setQuantity(entry.getValue());
			if (product.getDiscount() != null) {
				orderDetail.setAmount(product.getPrice_sale() * entry.getValue());
			} else {
				orderDetail.setAmount(product.getPrice() * entry.getValue());
			}
			orderDetailList.add(orderDetail);
			orderDetailRepository.save(orderDetail);
		}
		order.getOrderDetails().addAll(orderDetailList);
		order.setAddress(validOrder.getAddress());
		order.setCustomer_name(validOrder.getCustomer_name());
		order.setNumber_phone(validOrder.getNumber_phone());
		order.setTotal_price(validOrder.getTotal_price());
		order.setEmail(validOrder.getEmail());
		orderRepository.save(order);

		return order;
	}

	public List<Order> deleteOrder(Integer order_id) {
		Order order = orderRepository.findById(order_id).get();
		order.getOrderDetails().forEach(orderItem -> orderDetailRepository.deleteById(orderItem.getId()));
		orderRepository.delete(order);
		return orderRepository.findAll();
	}
}
