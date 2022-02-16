import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const ContentLogin = () => {
    const [login, setLogin] = useState({ email: '', password: '', isLogin: localStorage.getItem("accessToken") != null });
    const navigate = useNavigate();

    const setUsers = (event) => {
        const inputdata = { ...login };
        inputdata[event.target.name] = event.target.value;
        setLogin(inputdata);
    }

    const signIn = (e) => {
        e.preventDefault();

        const raw = JSON.stringify({
            "email": login.email,
            "password": login.password
        });

        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: raw,
        };

        fetch("http://localhost:8080/login", requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw Error(response.status)
            })
            .then(result => {
                localStorage.setItem("accessToken", result)
                localStorage.setItem("isLogin", login.isLogin)
                navigate("/")
            })
            .catch(() => {
                alert("Email hoặc mật khẩu không hợp lệ")
            });
    }

    return (
        <>
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-conten padding-y" style={{ minHeight: '84vh' }}>
                {/* ============================ COMPONENT LOGIN   ================================= */}
                <div className="card mx-auto" style={{ maxWidth: '380px', marginTop: '100px' }}>
                    <div className="card-body">
                        <h4 className="card-title mb-4"></h4>
                        <form onSubmit={signIn}>
                            <a href="#" className="btn btn-facebook btn-block mb-2"> <i className="fab fa-facebook-f" /> &nbsp; Đăng nhập bằng Facebook</a>
                            <a href="#" className="btn btn-google btn-block mb-4"> <i className="fab fa-google" /> &nbsp;  Đăng nhập bằng Google</a>
                            <div className="form-group">
                                <input name='email' value={login.email} className="form-control" placeholder="Email" type="email" onChange={setUsers} />
                            </div> {/* form-group// */}
                            <div className="form-group">
                                <input name='password' value={login.password} className="form-control" placeholder="Mật khẩu" type="password" onChange={setUsers} />
                            </div> {/* form-group// */}
                            <div className="form-group">
                                <label className="float-left custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" defaultChecked />
                                    <div className="custom-control-label"> Lưu tài khoản </div>
                                </label>
                            </div> {/* form-group form-check .// */}
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Đăng nhập</button>
                            </div> {/* form-group// */}
                        </form>
                    </div> {/* card-body.// */}
                </div> {/* card .// */}
                <p className="text-center mt-4">Bạn chưa có tài khoản? <a href="#">Đăng ký</a></p>
                <br /><br />
                {/* ============================ COMPONENT LOGIN  END.// ================================= */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}

        </>
    )
}

export default ContentLogin
