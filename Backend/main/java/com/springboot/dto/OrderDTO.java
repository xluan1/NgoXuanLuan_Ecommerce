package com.springboot.dto;

import java.util.Map;

public class OrderDTO {
	private Map<Long, Long> product_id;

	private String customer_name;
	private String number_phone;
	private String address;
	private String email;
	private Long total_price;

	public OrderDTO() {

	}

	public OrderDTO(Map<Long, Long> product_id, String customer_name, String number_phone, String address, String email,
			Long total_price) {
		super();
		this.product_id = product_id;
		this.customer_name = customer_name;
		this.number_phone = number_phone;
		this.address = address;
		this.email = email;
		this.total_price = total_price;
	}

	public Map<Long, Long> getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Map<Long, Long> product_id) {
		this.product_id = product_id;
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

}
