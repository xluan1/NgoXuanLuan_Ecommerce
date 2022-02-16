package com.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Category;
import com.springboot.repository.CategoryRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CategoryController {
	@Autowired
	private CategoryRepository categoryRepository;

	@GetMapping("/categories")
	public ResponseEntity<List<Category>> getAllCategory() {
		try {
			List<Category> categories = categoryRepository.findAll();
			if (categories.isEmpty())
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			else
				return new ResponseEntity<>(categories, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/categories/{category_id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable(value = "category_id") int category_id) {
			
		Optional<Category> category = categoryRepository.findById(category_id);
			if (category.isPresent())
				return new ResponseEntity<>(category.get(), HttpStatus.OK);
			else
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
