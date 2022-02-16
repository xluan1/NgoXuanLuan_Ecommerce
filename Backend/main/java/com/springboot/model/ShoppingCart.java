package com.springboot.model;

import java.io.Serializable;

import org.springframework.stereotype.Component;

@Component
public class ShoppingCart implements Serializable {

	private static final long serialVersionUID = 1L;
	private Product cart;
	private int quantity;
	private long total;

	public ShoppingCart() {

	}

	public ShoppingCart(Product cart, int quantity, long total) {
		super();
		this.cart = cart;
		this.quantity = quantity;
		this.total = total;
	}

	public Product getCart() {
		return cart;
	}

	public void setCart(Product cart) {
		this.cart = cart;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

}
