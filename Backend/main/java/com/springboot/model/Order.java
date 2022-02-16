package com.springboot.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(nullable = false)
	private String customer_name;

	@Column(nullable = false)
	private String number_phone;

	@Column(nullable = false)
	private String address;

	@Column(nullable = true)
	private Long total_price;

	private LocalDate date;

	private String email;

	@OneToMany
	private List<OrderDetail> orderDetails;

	public Order() {
		super();
		this.date = LocalDate.now();
		this.orderDetails = new ArrayList<>();
	}

	public Order(String customer_name, String number_phone, String address, Long total_price, LocalDate date,
			List<OrderDetail> orderDetails) {
		super();
		this.customer_name = customer_name;
		this.number_phone = number_phone;
		this.address = address;
		this.total_price = total_price;
		this.date = date;
		this.orderDetails = orderDetails;
	}

	public Order(String customer_name, String number_phone, String address, Long total_price, LocalDate date,
			String email, List<OrderDetail> orderDetails) {
		super();
		this.customer_name = customer_name;
		this.number_phone = number_phone;
		this.address = address;
		this.total_price = total_price;
		this.date = date;
		this.email = email;
		this.orderDetails = orderDetails;
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

	public Integer getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<OrderDetail> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<OrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}

}
