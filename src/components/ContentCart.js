import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const ContentCart = () => {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem
    } = useCart();

    return (
        <>
            {/* ========================= SECTION SHOPPING CART ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <main className="col-md-9">
                            <div className="card">
                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            <th scope="col">Sản phẩm</th>
                                            <th scope="col" width={120}>Quantity</th>
                                            <th scope="col" width={120}>Giá</th>
                                            <th scope="col" className="text-right" width={140}> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isEmpty ? (<tr><td><figure className="itemside">Giỏ hàng chưa có sản phẩm nào</figure></td></tr>)
                                            : (items.map((item) =>
                                                <tr key={item.id}>
                                                    <td>
                                                        <figure className="itemside">
                                                            <div className="aside"><img src={`/assets/${item.image}`} className="img-sm" loading='lazy' alt='' /></div>
                                                            <figcaption className="info">
                                                                <span className="title text-dark">{item.product_name.substring(0, 30)}...</span>
                                                                <p className="text-muted small">
                                                                    Loại: {item.category.category_name} <br />
                                                                    Thương hiệu: {item.brand.brand_name}</p>
                                                            </figcaption>
                                                        </figure>
                                                    </td>
                                                    <td className='display-fl'>
                                                        <button className='btn btn-small' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                                        <select className="form-control">
                                                            {Array.from(Array(item.quantity), (e, i) => {
                                                                return <option key={i}>{i + 1}</option>
                                                            })}
                                                        </select>
                                                        <button className='btn btn-small' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                                    </td>
                                                    <td>
                                                        <div className="price-wrap">
                                                            <var className="price">{item.itemTotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</var>
                                                            <small className="text-muted"> {(item.discount !== 0
                                                                ? item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                                                                : item.price_sale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }))} /1 </small>
                                                        </div> {/* price-wrap .// */}
                                                    </td>
                                                    <td className="text-right">
                                                        <a data-original-title="Save to Wishlist" href="#" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart" /></a>
                                                        <a href="#" className="btn btn-light" onClick={() => removeItem(item.id)}> Xóa</a>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                                <div className="card-body border-top">
                                    {isEmpty ? <></> : <Link to="/order" className="btn btn-primary float-md-right"> Thanh toán <i className="fa fa-chevron-right" /> </Link>}
                                    <Link to="/" className="btn btn-light"> <i className="fa fa-chevron-left" /> Tiếp tục mua sắm </Link>
                                </div>
                            </div> {/* card.// */}
                            <div className="alert alert-success mt-3">
                                <p className="icontext"><i className="icon text-success fa fa-truck" /> Giao hàng miễn phí cho sản phẩm từ 700k</p>
                            </div>
                        </main> {/* col.// */}
                        <aside className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Nhập phiếu giảm giá</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Mã giảm giá" />
                                                <span className="input-group-append">
                                                    <button className="btn btn-primary">Áp dụng</button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div> {/* card-body.// */}
                            </div>  {/* card .// */}
                            <div className="card">
                                <div className="card-body">
                                    <dl className="dlist-align">
                                        <dt>Tổng tiền:</dt>
                                        <dd className="text-right">
                                            {items.reduce((a, v) => a = a + v.itemTotal, 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                        </dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Giảm giá:</dt>
                                        <dd className="text-right"></dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Thành tiền:</dt>
                                        <dd className="text-right  h5">
                                            <strong>{items.reduce((a, v) => a = a + v.itemTotal, 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong>
                                        </dd>
                                    </dl>
                                    <hr />
                                    <p className="text-center mb-3">
                                        <img src="/assets/images/bank.png" width="100%" height="60px" />
                                    </p>
                                </div> {/* card-body.// */}
                            </div>  {/* card .// */}
                        </aside> {/* col.// */}
                    </div>
                </div> {/* container .//  */}
            </section >
            {/* ========================= SECTION SHOPPING CART END// ========================= */}
            {/* ========================= SECTION  ========================= */}
            <section className="section-name border-top padding-y">
                <div className="container">
                    <h6>Chính sách thanh toán và hoàn tiền</h6>
                    <p></p>
                </div>{/* container // */}
            </section>
            {/* ========================= SECTION  END// ========================= */}
        </>
    )
}

export default ContentCart
