import { Link, useLocation } from 'react-router-dom'
import UseFetch from '../fetch/UseFetch';

const ContentList = () => {
    const { search } = useLocation();
    const { data: products, isLoading, error } = UseFetch(`http://localhost:8080/products/search${search}`);
    const { data: categories } = UseFetch('http://localhost:8080/categories/');
    const { data: brands } = UseFetch('http://localhost:8080/brands/');

    return (
        <>
            {error && <div>Error</div>}
            {isLoading && <div>Loading...</div>}
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-2">
                            <article className="filter-group">
                                <h6 className="title">
                                    <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1"> Loại sản phẩm </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_1">
                                    <div className="inner">
                                        <ul className="list-menu">
                                            {categories.map((cate, i) => (
                                                <li key={i}><Link to={`/category/${cate.category_id}`} >{cate.category_name}</Link></li>
                                            ))}
                                        </ul>
                                    </div> {/* inner.// */}
                                </div>
                            </article> {/* filter-group  .// */}
                            <article className="filter-group">
                                <h6 className="title">
                                    <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> Thương hiệu </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_2">
                                    <div className="inner">
                                        {brands.map((brand, i) => (
                                            <label key={i} className="custom-control custom-checkbox">
                                                <input type="checkbox" defaultChecked className="custom-control-input" />
                                                <div className="custom-control-label">{brand.brand_name}
                                                    <b className="badge badge-pill badge-light float-right">120</b>
                                                </div>
                                            </label>
                                        ))}
                                    </div> {/* inner.// */}
                                </div>
                            </article> {/* filter-group .// */}

                            <article className="filter-group">
                                <h6 className="title">
                                    <a href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5"> Điều kiện </a>
                                </h6>
                                <div className="filter-content collapse show" id="collapse_5">
                                    <div className="inner">
                                        <label className="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" defaultChecked className="custom-control-input" />
                                            <div className="custom-control-label">Mặt hàng mới </div>
                                        </label>
                                        <label className="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                                            <div className="custom-control-label">Mặt hàng bán lại</div>
                                        </label>
                                        <label className="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                                            <div className="custom-control-label">Đã cũ</div>
                                        </label>
                                    </div> {/* inner.// */}
                                </div>
                            </article> {/* filter-group .// */}
                        </aside> {/* col.// */}
                        <main className="col-md-10">
                            <header className="mb-3">
                                <div className="form-inline">
                                    <strong className="mr-md-auto"></strong>
                                    <select className="mr-2 form-control">
                                        <option>Mới nhất</option>
                                        <option>Xu hướng</option>
                                        <option>Phổ biến nhất</option>
                                        <option>Mắc nhất</option>
                                        <option>Rẻ nhất</option>
                                    </select>
                                    <div className="btn-group">
                                        <a href="page-listing-grid.html" className="btn btn-light" data-toggle="tooltip" title="List view">
                                            <i className="fa fa-bars" /></a>
                                        <a href="page-listing-large.html" className="btn btn-light active" data-toggle="tooltip" title="Grid view">
                                            <i className="fa fa-th" /></a>
                                    </div>
                                </div>
                            </header>{/* sect-heading */}

                            {products && products.map((product, i) => (
                                <article key={i} className="card card-product-list">
                                    <div className="row no-gutters">
                                        <aside className="col-md-3">
                                            <Link to={`/product/${product.id}`} className="img-wrap">
                                                <span className="badge badge-danger"> Mới </span>
                                                <img src={`/assets/${product.image}`} loading="lazy" />
                                            </Link>
                                        </aside> {/* col.// */}
                                        <div className="col-md-6">
                                            <div className="info-main">
                                                <Link to={`/product/${product.id}`} className="h5 title"> {product.product_name}</Link>
                                                <div className="rating-wrap mb-2">
                                                    <ul className="rating-stars">
                                                        <li style={{ width: '100%' }} className="stars-active">
                                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                                            <i className="fa fa-star" /> <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </li>
                                                    </ul>
                                                    <div className="label-rating">9/10</div>
                                                </div> {/* rating-wrap.// */}
                                                <p className="mb-3">
                                                    <span className="tag"> <i className="fa fa-check" /> Còn hàng</span>
                                                    <span className="tag"> 5 năm </span>
                                                    <span className="tag"> 80 đánh giá </span>
                                                    <span className="tag"> {product.brand.brand_name} </span>
                                                </p>
                                                <p> {product.description} </p>
                                            </div> {/* info-main.// */}
                                        </div> {/* col.// */}
                                        <aside className="col-sm-3">
                                            <div className="info-aside">
                                                <div className="price-wrap">
                                                    {(
                                                        product.price_sale !== 0 ?
                                                            <>
                                                                <span className="h6 price">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                                                    -{product.price_sale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                                            </>
                                                            : <span className="h5 price">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                                    )}
                                                </div> {/* price-wrap.// */}
                                                <small className="text-warning">Thanh toán sau khi giao</small><br />
                                                <p><small>Hoặc</small></p>
                                                <small className="text-warning">Thanh toán trước qua thẻ</small>
                                                <p className="mt-3">
                                                    <a href="#" className="btn btn-outline-primary"> <i className="fa fa-shopping-cart" /> Thêm vào giỏ </a>
                                                    <a href="#" className="btn btn-light"><i className="fa fa-heart" /> Thích </a>
                                                </p>
                                                <label className="custom-control mt-3 custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <div className="custom-control-label">Lưu trữ
                                                    </div>
                                                </label>
                                            </div> {/* info-aside.// */}
                                        </aside> {/* col.// */}
                                    </div> {/* row.// */}
                                </article>
                            ))}

                            <nav className="mb-4" aria-label="Page navigation sample">
                                <ul className="pagination">
                                    <li className="page-item disabled"><a className="page-link" href="#">Trước</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Sau</a></li>
                                </ul>
                            </nav>
                            <div className="box text-center">
                                <p>Bạn đã tìm được những gì mình cần đang tìm kiếm chưa？</p>
                                <a href="#" className="btn btn-light">Có</a>
                                <a href="#" className="btn btn-light">Không</a>
                            </div>
                        </main> {/* col.// */}
                    </div>
                </div> {/* container .//  */}
            </section>

            {/* ========================= SECTION CONTENT END// ========================= */}

        </>
    )
}

export default ContentList
