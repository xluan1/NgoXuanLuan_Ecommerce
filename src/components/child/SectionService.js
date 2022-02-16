
const SectionService = () => {
    return (
        <>
            {/* =============== SECTION SERVICES =============== */}
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Dịch Vụ Thương Mại</h4>
                </header>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <article className="card card-post">
                            <img src="assets/images/posts/1.jpg" className="card-img-top" loading="lazy" alt="" />
                            <div className="card-body">
                                <h6 className="title">Đảm bảo an toàn</h6>
                                <p className="small text-uppercase text-muted">Bảo hành</p>
                            </div>
                        </article> {/* card.// */}
                    </div> {/* col.// */}
                    <div className="col-md-3 col-sm-6">
                        <article className="card card-post">
                            <img src="assets/images/posts/2.jpg" className="card-img-top" loading="lazy" alt="" />
                            <div className="card-body">
                                <h6 className="title">Thanh toán bất cứ lúc nào</h6>
                                <p className="small text-uppercase text-muted">Giải pháp tài chính</p>
                            </div>
                        </article> {/* card.// */}
                    </div> {/* col.// */}
                    <div className="col-md-3 col-sm-6">
                        <article className="card card-post">
                            <img src="assets/images/posts/3.jpg" className="card-img-top" loading="lazy" alt="" />
                            <div className="card-body">
                                <h6 className="title">Giải pháp kiểm tra</h6>
                                <p className="small text-uppercase text-muted">KIỂM TRA DỄ DÀNG</p>
                            </div>
                        </article> {/* card.// */}
                    </div> {/* col.// */}
                    <div className="col-md-3 col-sm-6">
                        <article className="card card-post">
                            <img src="assets/images/posts/4.jpg" className="card-img-top" loading="lazy" alt="" />
                            <div className="card-body">
                                <h6 className="title">Vận chuyển bằng nhiều phương tiện</h6>
                                <p className="small text-uppercase text-muted">DỊCH VỤ GIAO HÀNG</p>
                            </div>
                        </article> {/* card.// */}
                    </div> {/* col.// */}
                </div> {/* row.// */}
            </section>
            {/* =============== SECTION SERVICES .//END =============== */}
        </>
    )
}

export default SectionService
