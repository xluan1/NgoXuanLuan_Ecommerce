import React from 'react'
import { Link } from 'react-router-dom';
import { UseFetchUser, LogOut } from '../../fetch/UseFetch';

const ContentProfile = ({ child }) => {
    const requestOption = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        }
    }
    const { data: role } = UseFetchUser('http://localhost:8080/role', requestOption);

    return (
        <>
            <section className="section-pagetop bg-gray">
                <div className="container">
                    <h2 className="title-page">{role[0]?.authority === "ADMIN" ? "Đây là trang ADMIN" : "Tài khoản của tôi"}</h2>
                </div> {/* container //  */}
            </section>
            {/* ========================= SECTION PAGETOP END// ========================= */}
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <nav className="list-group">
                                <a className="list-group-item active" href="/profile/main"> Tổng quan về tài khoản</a>
                                {
                                    role[0]?.authority === "ADMIN" ?
                                        <a className="list-group-item" href="./seller"> Quản lý sản phẩm </a>
                                        : <>
                                            <a className="list-group-item" href="page-profile-orders.html"> Đơn hàng </a>
                                            <a className="list-group-item" href="page-profile-address.html"> Địa chỉ </a>
                                            <a className="list-group-item" href="page-profile-wishlist.html"> Sản phẩm yêu thích </a>
                                        </>
                                }

                                <a className="list-group-item" href="/profile/setting"> Thiết lập </a>
                                <Link className="list-group-item" to="/login" onClick={LogOut} > Đăng xuất </Link>
                            </nav>
                        </aside> {/* col.// */}

                        {child} {/* Element */}
                    </div>
                </div> {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}
        </>
    )
}

export default ContentProfile
