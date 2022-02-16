package com.springboot.controller;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.ShoppingCart;
import com.springboot.repository.ShoppingCartRepository;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
@RestController
public class ShoppingCartController {
	@Autowired
	private ShoppingCartRepository shoppingCartRepository;

	@GetMapping("/cart")
	public ResponseEntity<?> getCart(HttpSession session) {
		return new ResponseEntity<>(session.getAttribute("Cart"), HttpStatus.OK);
	}

	@GetMapping("/cart/total")
	public ResponseEntity<?> getTotalPriceCart(HttpSession session) {
		HashMap<String, Long> maps = new HashMap<>();
		maps.put("total_price", (Long) session.getAttribute("TotalQuantityCart"));
		maps.put("total_quantity", (Long) session.getAttribute("TotalPriceCart"));
		return new ResponseEntity<>(maps, HttpStatus.OK);
	}

	@PostMapping("/cart/{id}")
	public ResponseEntity<?> addCart(@PathVariable long id, HttpSession session) {
		@SuppressWarnings("unchecked")
		HashMap<Long, ShoppingCart> cart = (HashMap<Long, ShoppingCart>) session.getAttribute("Cart");
		if (cart == null) {
			cart = new HashMap<Long, ShoppingCart>();
		}
		cart = shoppingCartRepository.AddCart(id, cart);
		session.setAttribute("Cart", cart);
		session.setAttribute("TotalQuantityCart", shoppingCartRepository.TotalQuantityCart(cart));
		session.setAttribute("TotalPriceCart", shoppingCartRepository.TotalPrice(cart));
		return new ResponseEntity<>(cart, HttpStatus.OK);
	}

	@PutMapping("/cart/{id}/{quantity}")
	public ResponseEntity<?> updateCart(@PathVariable long id, HttpSession session, @PathVariable int quantity) {
		@SuppressWarnings("unchecked")
		HashMap<Long, ShoppingCart> cart = (HashMap<Long, ShoppingCart>) session.getAttribute("Cart");
		if (cart == null) {
			cart = new HashMap<Long, ShoppingCart>();
		}
		cart = shoppingCartRepository.EditCart(id, quantity, cart);
		session.setAttribute("Cart", cart);
		session.setAttribute("TotalQuantityCart", shoppingCartRepository.TotalQuantityCart(cart));
		session.setAttribute("TotalPriceCart", shoppingCartRepository.TotalPrice(cart));
		return new ResponseEntity<>(cart, HttpStatus.OK);
	}

	@DeleteMapping("/cart/{id}")
	public ResponseEntity<?> deleteCart(@PathVariable long id, HttpSession session) {
		@SuppressWarnings("unchecked")
		HashMap<Long, ShoppingCart> cart = (HashMap<Long, ShoppingCart>) session.getAttribute("Cart");
		if (cart == null) {
			cart = new HashMap<Long, ShoppingCart>();
		}
		cart = shoppingCartRepository.DeleteCart(id, cart);
		session.setAttribute("Cart", cart);
		session.setAttribute("TotalQuantityCart", shoppingCartRepository.TotalQuantityCart(cart));
		session.setAttribute("TotalPriceCart", shoppingCartRepository.TotalPrice(cart));
		return new ResponseEntity<>(cart, HttpStatus.OK);
	}
}
