package com.springboot.dto;

import java.time.LocalDate;
import java.util.List;

import com.springboot.model.OrderDetail;

public class OrderResponseDTO {
	private Integer id;
	private String customer_name;
	private String number_phone;
	private String address;
	private String email;
	private Long total_price;
	private LocalDate date;
	private List<OrderDetail> orderDetails;

	public OrderResponseDTO() {

	}

	public OrderResponseDTO(Integer id, String customer_name, String number_phone, String address, String email,
			Long total_price, LocalDate date, List<OrderDetail> orderDetails) {
		super();
		this.id = id;
		this.customer_name = customer_name;
		this.number_phone = number_phone;
		this.address = address;
		this.email = email;
		this.total_price = total_price;
		this.date = date;
		this.orderDetails = orderDetails;
	}

	public OrderResponseDTO(String customer_name, String number_phone, String address, String email, Long total_price,
			LocalDate date, List<OrderDetail> orderDetails) {
		super();
		this.customer_name = customer_name;
		this.number_phone = number_phone;
		this.address = address;
		this.email = email;
		this.total_price = total_price;
		this.date = date;
		this.orderDetails = orderDetails;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getNumber_phone() {
		return number_phone;
	}

	public void setNumber_phone(String number_phone) {
		this.number_phone = number_phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getTotal_price() {
		return total_price;
	}

	public void setTotal_price(Long total_price) {
		this.total_price = total_price;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public List<OrderDetail> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<OrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}

}
