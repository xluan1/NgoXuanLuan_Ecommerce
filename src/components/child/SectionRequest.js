import React from 'react'
import UseFetch from '../../fetch/UseFetch'

const SectionRequest = () => {
    const { data: brands } = UseFetch('http://localhost:8080/brands/');

    return (
        <>
            {/* =============== SECTION REQUEST =============== */}
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">YÊU CẦU TÌM KIẾM</h4>
                </header>
                <div className="row">
                    <div className="col-8">
                        <div className="card-banner banner-quote overlay-gradient" style={{ backgroundImage: 'url("images/banners/banner9.jpg")' }}>
                            <div className="card-img-overlay white">
                                <h3 className="card-title">Gửi yêu cầu một cách dễ dàng đến nhà cung cấp</h3>
                                <p className="card-text" style={{ maxWidth: '400px' }}>Hãy nhập yêu cầu mà khách hàng muốn tìm kiếm ở đây</p>
                                <a href="#" className="btn btn-primary rounded-pill">Xem thêm</a>
                            </div>
                        </div>
                    </div> {/* col // */}
                    <div className="col-md-4">
                        <div className="card card-body">
                            <h4 className="title py-3">Một yêu cầu, nhiều trích dẫn</h4>
                            <form>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Bạn đang muốn tìm gì?" type="text" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input className="form-control" placeholder="Thương hiệu" type="text" />
                                        <select className="custom-select form-control">
                                            {brands.map((brand, i) => (
                                                <option key={i}>{brand.brand_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group text-muted">
                                    <p>Chọn mẫu:</p>
                                    <label className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" defaultValue="option1" />
                                        <span className="form-check-label">Yêu cầu giá</span>
                                    </label>
                                    <label className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" defaultValue="option2" />
                                        <span className="form-check-label">Yêu cầu một ví dụ
                                        </span></label>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-warning">Gửi yêu cầu</button>
                                </div>
                            </form>
                        </div>
                    </div> {/* col // */}
                </div> {/* row // */}
            </section>
            {/* =============== SECTION REQUEST .//END =============== */}
        </>
    )
}

export default SectionRequest
