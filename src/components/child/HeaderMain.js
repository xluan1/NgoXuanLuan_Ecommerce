import React, { useEffect, useState } from 'react';
import { generatePath, Link, useNavigate } from "react-router-dom";
import Logo from '../child/logo.png';
import { useCart } from 'react-use-cart';
import { LogOut } from '../../fetch/UseFetch';

const useNavigateParams = () => {
    const navigate = useNavigate();

    return (url, params) => {
        const path = generatePath(":url?:queryString", {
            url,
            queryString: params
        });
        navigate(path);
    };
};

const HeaderMain = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigateParams();
    const { totalUniqueItems } = useCart();
    const [customer, setCustomer] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)
        navigate("/search", `key=${encodeURIComponent(search)}`);
    };

    const fetchData = () => {

        fetch("http://localhost:8080/currentEmail", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
            })
            .then(result => {
                setCustomer(result);
            })
            .catch(() => {
                LogOut();
            });
    }
    const isLogin = localStorage.getItem("isLogin");

    useEffect(() => {
        fetchData();
    }, [customer])

    return (
        <>
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-12">
                            <Link to="/" className="brand-wrap">
                                <img className="logo" src={Logo} />
                            </Link> {/* brand-wrap.// */}
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-6">
                            <form className="search-header">
                                <div className="input-group w-100">
                                    <input type="text" className="form-control" placeholder="Nhập từ khóa cần tìm" onChange={handleChange} />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
                                            <i className="fa fa-search" /> Tìm kiếm
                                        </button>
                                    </div>
                                </div>
                            </form> {/* search-wrap .end// */}
                        </div> {/* col.// */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="widgets-wrap float-md-right">
                                {
                                    isLogin && customer ?
                                        (<>
                                            <div className="widget-header mr-3">
                                                <Link to="/profile/main" className="widget-view">
                                                    <div className="icon-area">
                                                        <i className="fa fa-user" />
                                                    </div>
                                                    <small className="text"> {customer} </small>
                                                </Link>
                                            </div>



                                            <div className="widget-header mr-3">
                                                <a href="#" className="widget-view">
                                                    <div className="icon-area">
                                                        <i className="fa fa-bell" />
                                                        <span className="notify">1</span>
                                                    </div>
                                                    <small className="text"> Thông báo </small>
                                                </a>
                                            </div>
                                        </>)
                                        : (<>
                                            <div className="widget-header mr-3">
                                                <Link to="/login" className="widget-view">
                                                    <div className="icon-area">
                                                        <i className="fa fa-sign-in-alt" />
                                                    </div>
                                                    <small className="text"> Đăng nhập </small>
                                                </Link>
                                            </div>
                                            <div className="widget-header mr-3">
                                                <Link to="/register" className="widget-view">
                                                    <div className="icon-area">
                                                        <i className="fa fa-user-plus" />
                                                    </div>
                                                    <small className="text"> Đăng ký </small>
                                                </Link>
                                            </div>
                                        </>)
                                }
                                <div className="widget-header">
                                    <Link to={`/cart`} className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-shopping-cart" />
                                            <span className="notify">{totalUniqueItems}</span>
                                        </div>
                                        <small className="text"> Giỏ hàng </small>
                                    </Link>
                                </div>
                            </div> {/* widgets-wrap.// */}
                        </div> {/* col.// */}
                    </div> {/* row.// */}
                </div> {/* container.// */}
            </section> {/* header-main .// */}
        </>
    )
}


export default HeaderMain
