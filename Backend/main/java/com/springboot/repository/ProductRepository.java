package com.springboot.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.springboot.model.Product;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {

	@Query(value = "Select * From Products p, Categories c, Brands b Where p.category_id = c.category_id AND p.brand_id = b.brand_id"
			+ " AND c.category_id=:category_id", nativeQuery = true)
	public Page<Product> findAllByCategory(@Param(value = "category_id") int category_id, Pageable pageable);

	@Query(value = "Select * From Products p, Categories c, Brands b"
			+ " Where c.category_id=p.category_id AND p.brand_id=b.brand_id"
			+ " AND (UPPER(p.product_name) LIKE CONCAT('%',UPPER(:keyword),'%')"
			+ " OR UPPER(c.category_name) LIKE CONCAT('%',UPPER(:keyword),'%')"
			+ " OR UPPER(b.brand_name) LIKE CONCAT('%',UPPER(:keyword),'%'))", nativeQuery = true)
	public List<Product> search(@Param(value = "keyword") String keyword, Pageable pageable);

	@Query(value = "Select * From Products p Where id=:id", nativeQuery = true)
	public Product findByProductId(@Param(value = "id") long id);
}
