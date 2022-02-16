package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.Brand;

public interface BrandRespository extends JpaRepository<Brand, Integer> {

}
