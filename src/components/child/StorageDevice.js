import { Link } from 'react-router-dom';
import UseFetch from '../../fetch/UseFetch';


const StorageDevice = () => {
    const { data: products, isLoading, error } = UseFetch('http://localhost:8080/products/cate/2');
    const { data: categories } = UseFetch('http://localhost:8080/categories/2');

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/* =============== SECTION StorageDevice =============== */}
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">{categories.category_name}</h4>
                </header>
                <div className="card card-home-category">
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="home-category-banner bg-light-orange">
                                <h5 className="title">{categories.category_name}</h5>
                                <p>Đừng lo về việc thiếu hụt dung lượng, chúng tôi có nhiều thiết bị để lưu trữ
                                    hãy nhanh tay mua sắm để không phải lo về việc không đủ dung lượng. </p>
                                <Link to="#" className="btn btn-outline-primary rounded-pill">Xem thêm</Link>
                                <img src={"assets/" + categories.category_image} className="img-bg" loading="lazy" />
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
                                            <Link to={`product/${product.id}`}><h6 className="title">{product.product_name.substring(0, 40) + "...."}</h6></Link>
                                            {
                                                (product.price_sale !== 0 ?
                                                    <>
                                                        <div className="price mt-1">{product.price_sale.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                                                        <div className="price-muted">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                                                    </>
                                                    : <div className="price mt-1">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>)
                                            }
                                            <Link to={`product/${product.id}`}><img className="img-sm float-right" src={"assets/" + product.image} loading="lazy" /></Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div> {/* col.// */}
                    </div> {/* row.// */}
                </div> {/* card.// */}
            </section>
            {/* =============== SECTION StorageDevice END =============== */}
        </>
    )
}

export default StorageDevice
