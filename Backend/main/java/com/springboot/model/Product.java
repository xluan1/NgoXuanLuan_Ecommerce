package com.springboot.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "products")
public class Product implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "product_name")
	private String product_name;

	@Column(name = "product_image")
	private String image;

	@Column(name = "product_price")
	private long price;

	@Column(name = "product_price_sale")
	private long price_sale;

	@OneToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "category_id", nullable = false)
	@JsonIgnoreProperties(value = { "applications", "hibernateLazyInitializer" })
	private Category category;

	@OneToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "brand_id")
	@JsonIgnoreProperties(value = { "applications", "hibernateLazyInitializer" })
	private Brand brand;

	@Column(name = "product_image1")
	private String image1;

	@Column(name = "product_image2")
	private String image2;

	@Column
	private Integer discount;

	@Column
	private Integer available;

	@OneToMany(mappedBy = "product")
	@JsonIgnoreProperties(value = { "applications", "hibernateLazyInitializer" })
	private List<VarientValue> varientValue;

	@OneToMany(mappedBy = "product")
	@JsonIgnoreProperties(value = { "applications", "hibernateLazyInitializer" })
	private List<Description> descriptions;

	@Column
	private String title;

	@Column
	private String video;

	public Product() {

	}

	public Product(String product_name, String image, long price, long price_sale, Category category, Brand brand,
			String image1, String image2, Integer discount, Integer available, String title, String video) {
		super();
		this.product_name = product_name;
		this.image = image;
		this.price = price;
		this.price_sale = price_sale;
		this.category = category;
		this.brand = brand;
		this.image1 = image1;
		this.image2 = image2;
		this.discount = discount;
		this.available = available;
		this.title = title;
		this.video = video;
	}

	public Product(String product_name, String image, long price, long price_sale, Category category, Brand brand,
			String image1, String image2, Integer discount, Integer available, List<VarientValue> varientValue,
			List<Description> descriptions, String title, String video) {
		super();
		this.product_name = product_name;
		this.image = image;
		this.price = price;
		this.price_sale = price_sale;
		this.category = category;
		this.brand = brand;
		this.image1 = image1;
		this.image2 = image2;
		this.discount = discount;
		this.available = available;
		this.varientValue = varientValue;
		this.descriptions = descriptions;
		this.title = title;
		this.video = video;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public long getPrice_sale() {
		if (discount != null)
			return (price * (100 - discount)) / 100;
		return 0;
	}

	public void setPrice_sale(long price_sale) {
		this.price_sale = price_sale;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	public String getImage1() {
		return image1;
	}

	public void setImage1(String image1) {
		this.image1 = image1;
	}

	public String getImage2() {
		return image2;
	}

	public void setImage2(String image2) {
		this.image2 = image2;
	}

	public Integer getDiscount() {
		return discount;
	}

	public void setDiscount(Integer discount) {
		this.discount = discount;
	}

	public Integer getAvailable() {
		return available;
	}

	public void setAvailable(Integer available) {
		this.available = available;
	}

	public List<VarientValue> getVarientValue() {
		return varientValue;
	}

	public void setVarientValue(List<VarientValue> varientValue) {
		this.varientValue = varientValue;
	}

	public List<Description> getDescriptions() {
		return descriptions;
	}

	public void setDescriptions(List<Description> descriptions) {
		this.descriptions = descriptions;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getVideo() {
		return video;
	}

	public void setVideo(String video) {
		this.video = video;
	}

}
