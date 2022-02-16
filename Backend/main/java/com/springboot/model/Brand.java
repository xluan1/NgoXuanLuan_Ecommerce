package com.springboot.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "brands")
public class Brand implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int brand_id;

	private String brand_name;

	private String brand_image;

	public Brand() {
		super();
	}

	public Brand(String brand_name, String brand_image) {
		super();
		this.brand_name = brand_name;
		this.brand_image = brand_image;
	}

	public int getBrand_id() {
		return brand_id;
	}

	public void setBrand_id(int brand_id) {
		this.brand_id = brand_id;
	}

	public String getBrand_name() {
		return brand_name;
	}

	public void setBrand_name(String brand_name) {
		this.brand_name = brand_name;
	}

	public String getBrand_image() {
		return brand_image;
	}

	public void setBrand_image(String brand_image) {
		this.brand_image = brand_image;
	}

}
