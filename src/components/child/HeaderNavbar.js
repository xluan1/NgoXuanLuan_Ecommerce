import React from 'react'
import { Link } from 'react-router-dom'
import UseFetch from '../../fetch/UseFetch';

const HeaderNavbar = () => {
    const { data: categories, isLoading, error } = UseFetch('http://localhost:8080/categories/');
    const { data: brands } = UseFetch('http://localhost:8080/brands/');

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <nav className="navbar navbar-main navbar-expand-lg border-bottom">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="container">
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"> Trang chủ</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/category" className="nav-link">Sản phẩm</Link>
                                <Link to="#" className="nav-link dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown"></Link>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                    {categories?.map((cate, i) => (
                                        <Link key={i} className="dropdown-item" to={`/category/${cate.category_id}`}>{cate.category_name}</Link>
                                    ))}
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link">Thương hiệu</Link>
                                <Link to="#" className="nav-link dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown"></Link>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                    {brands?.map((brand, i) => (
                                        <a key={i} className="dropdown-item" href="#">{brand.brand_name}</a>
                                    ))}
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tin tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Liên hệ</a>
                            </li>
                        </ul>
                    </div> {/* collapse .// */}
                </div> {/* container .// */}
            </nav>
        </>
    )
}

export default HeaderNavbar
