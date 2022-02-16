package com.springboot.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "customers")
public class Customer implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "customer_id_sequence", sequenceName = "customer_id_sequence", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "customer_id_sequence")
	private long customer_id;

	@Column(nullable = false)
	private String password;

	@Column(name = "first_name", nullable = false)
	private String first_name;

	@Column(name = "last_name", nullable = false)
	private String last_name;

	@Column(nullable = false)
	private String address;

	@Column(unique = true, nullable = false)
	private String email;

	@Column(nullable = false)
	private String number_phone;

	@Column(nullable = false)
	private String gender;

	@Column(name = "user_role")
	@Enumerated(EnumType.STRING)
	private Role role;

	@Column(name = "user_image")
	private String image;

	public Customer() {
		super();
	}

	public Customer(String first_name, String last_name, String address, String number_phone, String gender) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.address = address;
		this.number_phone = number_phone;
		this.gender = gender;
	}

	public Customer(String password, String first_name, String last_name, String address, String email,
			String number_phone, String gender, Role role, String image) {
		super();
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.address = address;
		this.email = email;
		this.number_phone = number_phone;
		this.gender = gender;
		this.role = role;
		this.image = image;
	}

	public long getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(long customer_id) {
		this.customer_id = customer_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getNumber_phone() {
		return number_phone;
	}

	public void setNumber_phone(String number_phone) {
		this.number_phone = number_phone;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Customer [customer_id=" + customer_id + ", password=" + password + ", first_name=" + first_name
				+ ", last_name=" + last_name + ", address=" + address + ", email=" + email + ", number_phone="
				+ number_phone + ", gender=" + gender + ", role=" + role + "]";
	}

}
