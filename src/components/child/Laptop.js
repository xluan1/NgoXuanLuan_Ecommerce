import { Link } from 'react-router-dom'
import UseFetch from '../../fetch/UseFetch';

const Laptop = () => {
    const { data: products, isLoading, error } = UseFetch('http://localhost:8080/products/cate/1');
    const { data: categories } = UseFetch('http://localhost:8080/categories/1');

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/* =============== SECTION Laptop =============== */}
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">{categories.category_name}</h4>
                </header>
                <div className="card card-home-category">
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="home-category-banner bg-light-orange">
                                <h5 className="title">{categories.category_name}</h5>
                                <p>Laptop đa dạng từ nhiều thương hiệu lớn nhỏ và được bán với giá cả phù hợp.
                                    Được nhiều ưu đãi cho sinh viên. Đặc biệt hơn là còn được bảo hành trong 12 tháng </p>
                                <Link to={`/category/1`} className="btn btn-outline-primary rounded-pill">Xem thêm</Link>
                                <img src={"assets/" + categories.category_image} className="img-bg" loading="lazy" alt='' />
                            </div>
                        </div> {/* col.// */}
                        <div className="col-md-9">
                            <ul className="row no-gutters bordered-cols">
                                {products.slice(0, 8).map((product) => (
                                    <li key={product.id} className="col-6 col-lg-3 col-md-4">
                                        {
                                            product.discount !== null ?
                                                <span className='scale-tl badge-danger'>{product.discount}%</span>
                                                : <></>
                                        }
                                        <div className="item card-body">
                                            <Link to={`/product/${product.id}`}><h6 className="title">{product.product_name.substring(0, 40) + "...."}</h6></Link>
                                            <div className='row'>
                                                {
                                                    product.varientValue.filter(item => item.varient.id === 2 || item.varient.id === 4)
                                                        .sort((a, b) => a.id - b.id)
                                                        .map((item, i) => (
                                                            <div key={i} className='col-6'>
                                                                {item.varient.id === 2 ?
                                                                    <>
                                                                        <i className="fas fa-memory" /><small> {item.value.substring(0, 4)}</small>
                                                                    </>
                                                                    : <>
                                                                        <i className="fas fa-hdd" /><small> {item.value.substring(0, 10)}</small>
                                                                    </>
                                                                }
                                                            </div>
                                                        ))
                                                }
                                            </div>
                                            {
                                                product.price_sale !== 0 ?
                                                    <>
                                                        <div className="price mt-1">{product.price_sale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                                                        <div className="price-muted">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                                                    </>
                                                    : <div className="price mt-1">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                                            }
                                            <Link to={`/product/${product.id}`}><img className="img-sm float-right" src={"assets/" + product.image} loading="lazy" alt='' /></Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div> {/* col.// */}
                    </div> {/* row.// */}
                </div> {/* card.// */}
            </section>
            {/* =============== SECTION Laptop END =============== */}
        </>
    )
}

export default Laptop
