import React from 'react'

const Footer = () => {
    return (
        <>
            {/* ========================= FOOTER ========================= */}
            <footer className="section-footer bg-secondary">
                <div className="container">
                    <section className="footer-top padding-y-lg text-white">
                        <div className="row">
                            <aside className="col-md col-6">
                                <h6 className="title">Công ty</h6>
                                <ul className="list-unstyled">
                                    <li> <a href="#">Về chúng tôi</a></li>
                                    <li> <a href="#">Nghề nghiệp</a></li>
                                    <li> <a href="#">Tim môt cửa hàng</a></li>
                                    <li> <a href="#">Quy tắc và điều khoản</a></li>
                                    <li> <a href="#">Sơ đồ trang web</a></li>
                                </ul>
                            </aside>
                            <aside className="col-md col-6">
                                <h6 className="title">Giúp đỡ</h6>
                                <ul className="list-unstyled">
                                    <li> <a href="#">Liên hệ chúng tôi</a></li>
                                    <li> <a href="#">Hoàn tiền</a></li>
                                    <li> <a href="#">Tình trạng đặt hàng</a></li>
                                    <li> <a href="#">Thông tin vận chuyển</a></li>
                                    <li> <a href="#">Tranh chấp mở</a></li>
                                </ul>
                            </aside>
                            <aside className="col-md col-6">
                                <h6 className="title">Tài khoản</h6>
                                <ul className="list-unstyled">
                                    <li> <a href="#"> Đăng nhập </a></li>
                                    <li> <a href="#"> Đăng ký </a></li>
                                    <li> <a href="#"> Thiết lập tài khoản </a></li>
                                    <li> <a href="#"> Đơn hàng của tôi </a></li>
                                </ul>
                            </aside>
                            <aside className="col-md">
                                <h6 className="title">Mạng xã hội</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#"> <i className="fab fa-facebook" /> Facebook </a></li>
                                    <li><a href="#"> <i className="fab fa-twitter" /> Twitter </a></li>
                                    <li><a href="#"> <i className="fab fa-instagram" /> Instagram </a></li>
                                    <li><a href="#"> <i className="fab fa-youtube" /> Youtube </a></li>
                                </ul>
                            </aside>
                        </div> {/* row.// */}
                    </section>	{/* footer-top.// */}
                    <section className="footer-bottom text-center">
                        <p className="text-white">Chính sách bảo mật - Điều khoản sử dụng - Thông tin người dùng Hướng dẫn hỏi đáp pháp lý</p>
                        <p className="text-muted"> © Tên công ty, Mọi quyền được bảo lưu 2019 </p>
                        <br />
                    </section>
                </div>{/* //container */}
            </footer>
            {/* ========================= FOOTER END // ========================= */}
        </>
    )
}

export default Footer
