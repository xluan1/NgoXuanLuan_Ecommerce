import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const ContentRegister = () => {
    const iniState = {
        email: '', password: '', address: '', first_name: '', last_name: '', number_phone: '', gender: ''
    }
    const navigate = useNavigate();
    const [register, setRegister] = useState(iniState);

    const submit = e => {
        e.preventDefault();
        const _register = JSON.stringify({
            email: register.email,
            password: register.password,
            address: register.address,
            first_name: register.first_name,
            last_name: register.last_name,
            number_phone: register.number_phone,
            gender: register.gender
        });

        axios.post(`http://localhost:8080/register`, _register, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                if (res.status === 201) {
                    alert(JSON.stringify(res.data));
                    navigate("/");
                }
            }).catch(error => {
                alert(error.response.data);
            })
    }
    const inputRegister = event => {
        const newdata = { ...register };
        newdata[event.target.name] = event.target.value;
        setRegister(newdata);
    }
    return (
        <>
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
                {/* ============================ COMPONENT REGISTER   ================================= */}
                <div className="card mx-auto" style={{ maxWidth: '520px', marginTop: '40px' }}>
                    <article className="card-body">
                        <header className="mb-4"><h4 className="card-title">Đăng ký</h4></header>
                        <form onSubmit={submit}>
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>Họ</label>
                                    <input type="text" className="form-control" name='last_name' value={register.last_name} onChange={inputRegister} />
                                </div> {/* form-group end.// */}
                                <div className="col form-group">
                                    <label>Tên</label>
                                    <input type="text" className="form-control" name='first_name' value={register.first_name} onChange={inputRegister} />
                                </div> {/* form-group end.// */}
                            </div> {/* form-row end.// */}
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name='email' value={register.email} onChange={inputRegister} />
                                <small className="form-text text-muted">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</small>
                            </div> {/* form-group end.// */}
                            <div className="form-group">
                                <label className="custom-control custom-radio custom-control-inline">
                                    <input className="custom-control-input" type="radio" name="gender" value="Nam" onChange={inputRegister} />
                                    <span className="custom-control-label"> Nam </span>
                                </label>
                                <label className="custom-control custom-radio custom-control-inline">
                                    <input className="custom-control-input" type="radio" name="gender" value="Nữ" onChange={inputRegister} />
                                    <span className="custom-control-label"> Nữ </span>
                                </label>
                                <label className="custom-control custom-radio custom-control-inline">
                                    <input className="custom-control-input" type="radio" name="gender" value="Khác" onChange={inputRegister} />
                                    <span className="custom-control-label"> Khác </span>
                                </label>
                            </div> {/* form-group end.// */}
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>Địa chỉ</label>
                                    <input type="text" className="form-control" name="address" value={register.address} onChange={inputRegister} />
                                </div> {/* form-group end.// */}
                                <div className="col form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" className="form-control" name="number_phone" value={register.number_phone} onChange={inputRegister} />
                                </div> {/* form-group end.// */}
                            </div> {/* form-row.// */}
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Mật khẩu</label>
                                    <input className="form-control" type="password" name="password" value={register.password} onChange={inputRegister} />
                                </div> {/* form-group end.// */}

                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Đăng ký</button>
                            </div> {/* form-group// */}
                            <div className="form-group">
                                <label className="custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" defaultChecked />
                                    <div className="custom-control-label"> Tôi đồng ý với các điều khoản và điều kiện
                                    </div> </label>
                            </div> {/* form-group end.// */}
                        </form>
                    </article>{/* card-body.// */}
                </div > {/* card .// */}
                <p className="text-center mt-4" > Đã có tài khoản ? <a href="/login">Đăng nhập</a></p >
                <br /><br />
                {/* ============================ COMPONENT REGISTER  END.// ================================= */}
            </section >
            {/* ========================= SECTION CONTENT END// ========================= */}

        </>
    )
}

export default ContentRegister
