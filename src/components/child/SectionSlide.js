import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UseFetch from '../../fetch/UseFetch';

const SectionSlide = () => {
    const { data: categories, isLoading, error } = UseFetch('http://localhost:8080/categories/');

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/* ========================= SECTION MAIN  ========================= */}
            <section className="section-main padding-y">
                <main className="card">
                    <div className="card-body">
                        <div className="row">
                            <aside className="col-lg col-md-3 flex-lg-grow-0">
                                <nav className="nav-home-aside">
                                    <h6 className="title-category">Danh mục <i className="d-md-none icon fa fa-chevron-down" /></h6>
                                    <ul className="menu-category">
                                        {categories.map((category, i) => (
                                            <li key={i}><Link to={`/category/${category.category_id}`}>{category.category_name}</Link></li>
                                        ))}
                                    </ul>
                                </nav>
                            </aside> {/* col.// */}
                            <div className="col-md-9 col-xl-7 col-lg-7">
                                {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
                                <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel1_indicator" data-slide-to={0} className="active" />
                                        <li data-target="#carousel1_indicator" data-slide-to={1} />
                                        <li data-target="#carousel1_indicator" data-slide-to={2} />
                                        <li data-target="#carousel1_indicator" data-slide-to={2} />
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="assets/images/slide/1.jpg" alt="First slide" loading="lazy" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/slide/2.jpg" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/slide/3.jpg" alt="Third slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="assets/images/slide/4.jpg" alt="Fourth slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Trước</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Sau</span>
                                    </a>
                                </div>
                                {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}
                            </div> {/* col.// */}
                            <div className="col-md d-none d-lg-block flex-grow-1">
                                <aside className="special-home-right">
                                    <h6 className="bg-blue text-center text-white mb-0 p-2">Loại sản phẩm nổi tiếng</h6>
                                    {categories.slice(0, 3).map((cate, i) => (
                                        <div key={i} className="card-banner border-bottom">
                                            <div className="py-3" style={{ width: '80%' }}>
                                                <h6 className="card-title">{cate.category_name}</h6>
                                                <Link to={`/category/${cate.category_id}`} className="btn btn-secondary btn-sm"> Xem thêm </Link>
                                            </div>
                                            <img src={`assets/${cate.category_image}`} height={80} className="img-bg" loading="lazy" />
                                        </div>
                                    ))}
                                </aside>
                            </div> {/* col.// */}
                        </div> {/* row.// */}
                    </div> {/* card-body.// */}
                </main> {/* card.// */}
            </section>
            {/* ========================= SECTION MAIN END// ========================= */}
        </>
    )
}

export default SectionSlide
