import { useParams, Link } from 'react-router-dom'
import { SRLWrapper } from "simple-react-lightbox";
import UseFetch from '../fetch/UseFetch';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import ShowMoreText from "react-show-more-text";
import Modal from './Modal/Modal';
import ReactPlayer from 'react-player';
import { useCart } from 'react-use-cart';

const ContentDetail = () => {
    const { id } = useParams();
    const { data: product, isLoading, error } = UseFetch(`http://localhost:8080/products/${id}`);
    const { data: relates } = UseFetch(`http://localhost:8080/products?limit=30`);
    const [openVideo, setOpenVideo] = useState(false);
    const { addItem } = useCart();
    const [count, setCount] = useState(1);

    const options = {
        buttons: {
            showAutoplayButton: false,
            showDownloadButton: false,
            showFullscreenButton: false,
            showThumbnailsButton: false,
        },
    };
    const settings = {
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    const inputChange = (e) => {
        setCount(e.target.value);
    }

    const buttonPlus = () => {
        if (count < product.available) {
            setCount(count + 1);
        }
    }
    const buttonMinus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <>
            {error && <div>Error</div>}
            {isLoading && <div>Loading...</div>}
            <section className="py-3 bg-light">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                        <li className="breadcrumb-item"><Link to={`/category/${product?.category?.category_id}`}>{product?.category?.category_name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{product.product_name}</li>
                    </ol>
                </div>
            </section>
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content bg-white padding-y">
                <div className="container">
                    {/* ============================ ITEM DETAIL ======================== */}
                    <div className="row">
                        <aside className="col-md-6">
                            <div className="card">
                                <article className="gallery-wrap">
                                    <SRLWrapper options={options}>
                                        <div className="img-big-wrap">
                                            <img src={`/assets/${product.image}`} loading="lazy" />
                                        </div> {/* slider-product.// */}
                                        <div className="thumbs-wrap">
                                            <img src={`/assets/${product.image1}`} className="item-thumb" loading="lazy" />
                                            <img src={`/assets/${product.image2}`} className="item-thumb" loading="lazy" />
                                            {product.video === null ? <></> :
                                                <>
                                                    <button onClick={() => setOpenVideo(true)} className="item-thumb">
                                                        <i className="fab fa-youtube" />
                                                        Xem Video
                                                    </button>
                                                    <Modal isOpen={openVideo} close={() => setOpenVideo(false)}>
                                                        <ReactPlayer
                                                            className="react-player"
                                                            url={`/assets/${product.video}`}
                                                            width=""
                                                            height=""
                                                            playing
                                                            controls={true}
                                                        />
                                                    </Modal>
                                                </>}
                                        </div> {/* slider-nav.// */}
                                    </SRLWrapper>
                                </article> {/* gallery-wrap .end// */}
                            </div> {/* card.// */}
                        </aside>
                        <main className="col-md-6">
                            <article className="product-info-aside">
                                <h2 className="title mt-3"> {product.product_name}</h2>
                                <div className="rating-wrap my-3">
                                    <ul className="rating-stars">
                                        <li style={{ width: '80%' }} className="stars-active">
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
                                    <small className="label-rating text-muted">132 đánh giá</small>
                                    <small className="label-rating text-success"> <i className="fa fa-clipboard-check" /> đã bán 154 </small>
                                </div> {/* rating-wrap.// */}
                                <div className="mb-3">
                                    {(
                                        product.price_sale === 0 ? <var className="price h4">{Number(product.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</var>
                                            : (<>
                                                <var className="price h4">{Number(product.price_sale).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</var>
                                                <span className="text-muted"> {Number(product.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                            </>)
                                    )}
                                    {product.discount === null ? <></> : <><span className="text-warning"> -{product.discount}%</span></>}
                                </div> {/* price-detail-wrap .// */}

                                <dl className="row">
                                    <dt className="col-sm-3">Loại sản phẩm</dt>
                                    <dd className="col-sm-9"><Link to={`/category/${product?.category?.category_id}`}>{product?.category?.category_name}</Link></dd>
                                    <dt className="col-sm-3">Thương hiệu</dt>
                                    <dd className="col-sm-9"><a href="#">{product?.brand?.brand_name}</a></dd>
                                    <dt className="col-sm-3">Thời gian giao hàng</dt>
                                    <dd className="col-sm-9">3-4 ngày</dd>
                                    {(
                                        product.available !== null ?
                                            <>
                                                <dt className="col-sm-3">Số lượng hàng</dt>
                                                <dd className="col-sm-9">{product.available}</dd></>
                                            : <dt className="col-sm-3 text-danger">Đã hết hàng</dt>
                                    )}
                                </dl>

                                <div className="form-row  mt-4">
                                    <div className="form-group col-md flex-grow-0">
                                        <div className="input-group mb-3 input-spinner">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-light" onClick={() => buttonPlus()}> + </button>
                                            </div>
                                            <input type="button" className="form-control" value={count} onChange={(e) => inputChange(e)} />
                                            <div className="input-group-append">
                                                <button className="btn btn-light" onClick={() => buttonMinus()}> − </button>
                                            </div>
                                        </div>
                                    </div> {/* col.// */}
                                    <div className="form-group col-md">
                                        <a href="#" className="btn  btn-primary" onClick={() => addItem(product, count)}>
                                            <i className="fas fa-shopping-cart" /> <span className="text">Thêm vào giỏ</span>
                                        </a>
                                        <a href="#" className="btn btn-light">
                                            <i className="fas fa-money-bill-wave" /> <span className="text">Mua hàng</span>
                                        </a>
                                    </div> {/* col.// */}
                                </div> {/* row.// */}

                            </article> {/* product-info-aside .// */}
                        </main> {/* col.// */}
                    </div> {/* row.// */}
                    {/* ================ ITEM DETAIL END .// ================= */}
                </div> {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}
            {/* ========================= SECTION  ========================= */}
            <section className="section-name padding-y bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="title-description">Mô tả sản phẩm</h5>
                            <ul className="list-check">
                                {
                                    product?.varientValue?.sort((a, b) => a.id - b.id).map((item) => (
                                        <li key={item.id}>{item.varient.name}: {item.value}</li>
                                    ))
                                }
                                <li>Thương hiệu: {product?.brand?.brand_name}</li>
                            </ul>
                            <h5>Đặc điểm nổi bật</h5>

                            <div className="title">{product.title}</div>
                            <ShowMoreText lines={1} more="Xem thêm" less="Ẩn bớt" width={1} truncatedEndingComponent="">
                                {product?.descriptions?.map((item, i) => (
                                    <React.Fragment key={i}>
                                        <h6>{item.name}</h6>
                                        <p>{item.value}</p>
                                        <p><img src={`/assets/${item.image}`} className="img-description" /></p>
                                    </React.Fragment>
                                ))}
                            </ShowMoreText>
                        </div> {/* col.// */}

                        <aside className="col-md-4">
                            <div className="box">
                                <h5 className="title-description">Thông số kĩ thuật</h5>
                                <table className="table table-bordered">
                                    <tbody><tr><th colSpan={2}>Thông tin chung</th></tr>
                                        {
                                            product?.varientValue?.map((item, i) => (
                                                <tr key={i}>
                                                    <td>{item.varient.name}</td>
                                                    <td>{item.value}</td>
                                                </tr>
                                            ))
                                        }
                                        {
                                            <tr>
                                                <td>Thương hiệu</td>
                                                <td>{product?.brand?.brand_name}</td>
                                            </tr>
                                        }
                                    </tbody></table>
                            </div> {/* box.// */}
                        </aside> {/* col.// */}
                    </div> {/* row.// */}
                </div> {/* container .//  */}

                <div className="container">
                    <div className="section-heading">
                        <h4 className="title-description">Loại sản phẩm liên quan</h4>
                        <Slider {...settings}>
                            {relates.filter(data => data.category.category_id === product?.category?.category_id && data.id !== product.id)
                                .map((item, i) => (
                                    <div key={i} className="col card-home-category">
                                        <div className="card card-product-grid">
                                            <Link className="img-wrap item" to={`./../${item.id}`}><img className="card-body" src={"/assets/" + item.image} loading="lazy" /></Link>
                                            <div className="info-wrap">
                                                <Link className="title" to={`./../${item.id}`}>{item.product_name.substring(0, 30)}...</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </Slider>
                    </div>
                </div>

                <div className="container">
                    <div className="section-heading">
                        <h4 className="title-description">Cùng thương hiệu</h4>
                        <Slider {...settings}>
                            {relates.filter(data => data.brand.brand_id === product?.brand?.brand_id && data.id != product.id)
                                .map((item, i) => (
                                    <div key={i} className="col card-home-category">
                                        <div className="card card-product-grid">
                                            <Link className="img-wrap item" to={`./../${item.id}`}><img className="card-body" src={"/assets/" + item.image} loading="lazy" /></Link>
                                            <div className="info-wrap">
                                                <Link className="title" to={`./../${item.id}`}>{item.product_name.substring(0, 30)}...</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </Slider>
                    </div>
                </div>

            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}

        </>
    )
}

export default ContentDetail
