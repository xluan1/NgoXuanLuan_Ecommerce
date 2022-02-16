package com.springboot.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "product_varient_value")
public class VarientValue implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "varient_value")
	private String value;

	@OneToOne
	@JoinColumn(name = "varient_id", nullable = false)
	private Varient varient;

	@ManyToOne
	@JoinColumn(name = "product_id", nullable = false)
	private Product product;

	public VarientValue() {

	}

	public VarientValue(String value, Varient varient) {
		super();
		this.value = value;
		this.varient = varient;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Varient getVarient() {
		return varient;
	}

	public void setVarient(Varient varient) {
		this.varient = varient;
	}

}
