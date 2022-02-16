package com.springboot.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.ShoppingCart;
import com.springboot.repository.ShoppingCartRepository;

@Service
public class CartService {

	@Autowired
	private ShoppingCartRepository shoppingCartRepository;
	
	public HashMap<Long, ShoppingCart> AddCart(long id, HashMap<Long, ShoppingCart> cart) {
		return shoppingCartRepository.AddCart(id, cart);
	}
	
	public HashMap<Long, ShoppingCart> EditCart(long id, int quanty, HashMap<Long, ShoppingCart> cart){
		return shoppingCartRepository.EditCart(id, quanty, cart);
	}
	
	public HashMap<Long, ShoppingCart> DeleteCart(long id, HashMap<Long, ShoppingCart> cart){
		return shoppingCartRepository.DeleteCart(id, cart);
	}
	
	public long TotalQuanty(HashMap<Long, ShoppingCart> cart) {
		return shoppingCartRepository.TotalQuantityCart(cart);
	}

	public double TotalPrice(HashMap<Long, ShoppingCart> cart) {
		return shoppingCartRepository.TotalPrice(cart);
	}
}
