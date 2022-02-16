package com.springboot.repository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.springboot.model.Product;
import com.springboot.model.ShoppingCart;

@Repository
public class ShoppingCartRepository {
	@Autowired
	private ProductRepository productRepository;

	public HashMap<Long, ShoppingCart> AddCart(long id, HashMap<Long, ShoppingCart> cart) {
		ShoppingCart itemCart = new ShoppingCart();
		Product product = productRepository.findByProductId(id);
		if (product != null && cart.containsKey(id)) {
			itemCart = cart.get(id);
			itemCart.setQuantity(itemCart.getQuantity() + 1);
			itemCart.setTotal(
					itemCart.getQuantity() * itemCart.getCart().getPrice() * itemCart.getCart().getDiscount());
		} else {
			itemCart.setCart(product);
			itemCart.setQuantity(1);
			itemCart.setTotal(product.getPrice());
		}
		cart.put(id, itemCart);
		return cart;
	}

	public HashMap<Long, ShoppingCart> EditCart(long id, int quanty, HashMap<Long, ShoppingCart> cart) {
		if (cart == null) {
			return cart;
		}
		ShoppingCart itemCart = new ShoppingCart();
		if (cart.containsKey(id)) {
			itemCart = cart.get(id);
			itemCart.setQuantity(quanty);
			long totalPrice = quanty * itemCart.getCart().getPrice();
			itemCart.setTotal(totalPrice);
		}
		cart.put(id, itemCart);
		return cart;
	}

	public HashMap<Long, ShoppingCart> DeleteCart(long id, HashMap<Long, ShoppingCart> cart) {
		if (cart == null) {
			return cart;
		}
		if (cart.containsKey(id)) {
			cart.remove(id);
		}
		return cart;
	}

	public long TotalQuantityCart(HashMap<Long, ShoppingCart> cart) {
		int totalQuanty = 0;
		for (Map.Entry<Long, ShoppingCart> itemCart : cart.entrySet()) {
			totalQuanty += itemCart.getValue().getQuantity();
		}

		return totalQuanty;
	}

	public long TotalPrice(HashMap<Long, ShoppingCart> cart) {
		int totalPrice = 0;
		for (Map.Entry<Long, ShoppingCart> itemCart : cart.entrySet()) {
			totalPrice += itemCart.getValue().getTotal();
		}
		return totalPrice;
	}
}
