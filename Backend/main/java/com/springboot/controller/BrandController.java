package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Brand;
import com.springboot.repository.BrandRespository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BrandController {
	@Autowired
	private BrandRespository brandRepository;

	@GetMapping("/brands")
	public ResponseEntity<List<Brand>> getAllCategory() {
		try {
			List<Brand> brands = brandRepository.findAll();
			if (brands.isEmpty())
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			else
				return new ResponseEntity<>(brands, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
