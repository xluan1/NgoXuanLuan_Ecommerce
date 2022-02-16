import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ContentOrder = () => {
    const { items, emptyCart } = useCart();
    const navigate = useNavigate();
    const iniState = {
        customer_name: '', number_phone: '', address: '', email: ''
    }
    const [order, setOrder] = useState(iniState);
    const product_id = items.map(item => { return ([[item.id], item.quantity]) });

    const submit = e => {
        e.preventDefault();
        const _order = JSON.stringify({
            customer_name: order.customer_name,
            number_phone: order.number_phone,
            address: order.address,
            email: order.email,
            total_price: items.reduce((a, v) => a = a + v.itemTotal, 0),
            product_id: Object.fromEntries(product_id)
        })
        axios.post(`http://localhost:8080/orders`, _order, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 201) {
                    alert("Thanh toán thành công");
                    emptyCart();
                    navigate("/");
                }
            })
    }
    const orderChange = event => {
        const newdata = { ...order };
        newdata[event.target.id] = event.target.value;
        setOrder(newdata);
    }

    return (
        <>
            {/* ========================= SECTION SHOPPING CART ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-6">
                            <div className="card mx-auto" style={{ maxWidth: '440px', margin: '50px 0' }}>
                                <div className="card-body">
                                    {/* ============================ COMPONENT PAYMENT  ================================= */}
                                    <h4 className="card-title mb-4">Thanh toán</h4>
                                    <form role="form" onSubmit={submit}>
                                        <div className="form-group">
                                            <label htmlFor="username">Tên khách hàng</label>
                                            <input id="customer_name" onChange={orderChange} value={order.customer_name} type="text" className="form-control" placeholder="Vd: Nguyễn Văn A" required />
                                        </div> {/* form-group.// */}
                                        <div className="form-group">
                                            <label htmlFor="cardNumber">Số điện thoại</label>
                                            <input id="number_phone" onChange={orderChange} value={order.number_phone} type="text" className="form-control" placeholder="Số điện thoại để nhận hàng" maxLength={10} required />
                                        </div> {/* form-group.// */}
                                        <div className="form-group">
                                            <label htmlFor="address">Địa chỉ</label>
                                            <input id="address" onChange={orderChange} value={order.address} type="text" className="form-control" placeholder="Tỉnh, thành phố,..." required />
                                        </div> {/* form-group.// */}
                                        <div className="form-group">
                                            <label htmlFor="Email">Địa chỉ Email</label>
                                            <input id="email" onChange={orderChange} value={order.email} type="email" className="form-control" placeholder="Email" />
                                        </div> {/* form-group.// */}
                                        <p className="alert alert-success"> <i className="fa fa-lock" /> Thông tin của bạn sẽ được bảo mật</p>
                                        <button className="subscribe btn btn-primary btn-block" type="submit"> Thanh toán</button>
                                    </form>
                                    {/* ============================ COMPONENT PAYMENT END.// ================================= */}
                                </div>
                            </div>
                        </aside>

                        <aside className="col-md-6">
                            <div className="card mx-auto" style={{ margin: '50px 0' }}>
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Sản phẩm thanh toán</h4>
                                    <div className='container'>
                                        {items.map((item) =>
                                            <React.Fragment key={item.id}>
                                                <div className='col'>
                                                    <figure className="itemside">
                                                        <div className="aside"><img src={`/assets/${item.image}`} className="img-sm" loading='lazy' alt='' /></div>
                                                        <figcaption className="info">
                                                            <a href="#" className="title text-dark"></a>
                                                            <p className="text-muted small">{item.product_name.substring(0, 60)}... <br />
                                                                Loại: {item.category.category_name} <br />
                                                                Thương hiệu: {item.brand.brand_name}<br />
                                                                Số lượng: {item.quantity}
                                                            </p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                                <div className='col-md-3'>
                                                    <div className="price-wrap">
                                                        <var className="price">{item.itemTotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</var>
                                                    </div> {/* price-wrap .// */}
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </div>
                                </div>
                                <dl className="dlist-align" style={{ margin: '0 30px' }}>
                                    <dt>Thành tiền:</dt>
                                    <dd className="text-right  h5"><strong>{items.reduce((a, v) => a = a + v.itemTotal, 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong></dd>
                                </dl>
                            </div>
                        </aside>

                    </div>{/* row.// */}
                </div>{/* container.// */}

                <div className="card-body border-top">
                    <Link to="/cart" className="btn btn-light"> <i className="fa fa-chevron-left" /> Về giỏ hàng</Link>
                </div>
            </section >
            {/* ========================= SECTION SHOPPING CART END// ========================= */}
        </>
    )
}

export default ContentOrder
