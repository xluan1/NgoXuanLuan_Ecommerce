import React from 'react'
import { Link } from 'react-router-dom'
import UseFetch from '../../fetch/UseFetch';


const SectionItem = () => {

    const { data: products, isLoading, error } = UseFetch('http://localhost:8080/products?limit=12');

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/* =============== SECTION ITEMS =============== */}
            <section className="padding-bottom-sm">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Sản Phẩm Gợi Ý</h4>
                </header>
                <div className="row row-sm">
                    {products.map((product, i) => (
                        <div key={i} className="col-lg-3 col-md-4 col-6">
                            <div className="card card-sm card-product-grid">
                                <Link to={"/product/" + product.id} className="img-wrap"> <img src={"assets/" + product.image} loading="lazy" /> </Link>
                                <figcaption className="info-wrap">
                                    <Link to={"/product/" + product.id} className="title">{product.product_name.substring(0, 35)}...</Link>
                                    <div className='title-item'>Thương hiệu: {product.brand.brand_name}</div>
                                    {
                                        (product.price_sale === 0 ?
                                            <>
                                                <var className="price-item">
                                                    {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                                </var>
                                            </>
                                            : <>
                                                <var className="price-item">{product.price_sale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</var>
                                                <small className='text-warning'>-{product.discount}%</small>
                                                <span className="price-muted float-right">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                            </>)
                                    }
                                </figcaption>
                            </div>
                        </div>
                    ))}
                </div> {/* row.// */}
            </section>
            {/* =============== SECTION ITEMS .//END =============== */}
        </>
    )
}

export default SectionItem
