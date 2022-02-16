import React from 'react'
import UseFetch from '../../fetch/UseFetch';

const ProfileSeller = () => {
    const requestOption = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        }
    }
    const { data: products } = UseFetch('http://localhost:8080/products?limit=12');

    return (
        <>
            <main className="col-md-9">
                <article className="card">
                    <div className="card-body">
                        <div className="row">
                            {products.map((product, i) => (
                                <div key={i} className="col-md-4">
                                    <figure className="card card-product-grid">
                                        <div className="img-wrap">
                                            <img src={`/assets/${product.image}`} />
                                        </div> {/* img-wrap.// */}
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title mb-2">{product.product_name.substring(0, 30)}</a>
                                            <div className="price-wrap mb-3">
                                                <var className="price-item">{product.price_sale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</var>
                                                <small className='text-warning'>-{product.discount}%</small>
                                                <span className="price-muted float-right">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                                <small className="text-muted">/mỗi sản phẩm</small>
                                            </div> {/* price-wrap.// */}
                                            <a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen" /> Sửa </a>
                                            <a href="#" className="btn btn-primary"> <i className="fa fa-delete" /> Xóa</a>
                                            <hr />
                                            <a href="#" className="btn btn-success btn-block">  Quảng bá </a>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}

                        </div> {/* row .//  */}
                    </div> {/* card-body.// */}
                </article>
            </main> {/* col.// */}
        </>
    )
}

export default ProfileSeller
