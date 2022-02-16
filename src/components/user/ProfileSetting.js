import React from 'react'
import { UseFetchUser } from '../../fetch/UseFetch';

const ProfileSetting = () => {
    const requestOption = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        }
    }
    const { data: customer } = UseFetchUser('http://localhost:8080/customer', requestOption);

    return (
        <>
            <main className="col-md-9">
                <div className="card">
                    <div className="card-body">
                        <form className="row">
                            <div className="col-md-9">
                                <div className="form-row">
                                    <div className="col form-group">
                                        <label>Họ</label>
                                        <input type="text" className="form-control" defaultValue={customer.last_name} />
                                    </div> {/* form-group end.// */}
                                    <div className="col form-group">
                                        <label>Tên</label>
                                        <input type="email" className="form-control" defaultValue={customer.first_name} />
                                    </div> {/* form-group end.// */}
                                </div> {/* form-row.// */}
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Giới tính</label>
                                        <input type="gender" className="form-control" defaultValue={customer.gender} />
                                    </div> {/* form-group end.// */}
                                    <div className="form-group col-md-6">
                                        <label>Địa chỉ</label>
                                        <input type="text" className="form-control" defaultValue={customer.address} />
                                    </div> {/* form-group end.// */}
                                </div> {/* form-row.// */}
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Số điện thoại</label>
                                        <input type="text" className="form-control" defaultValue={customer.number_phone} />
                                    </div> {/* form-group end.// */}
                                </div> {/* form-row.// */}
                                <button className="btn btn-primary">Lưu</button>
                                <button className="btn btn-light">Đổi mật khẩu</button>
                                <br /><br /><br /><br /><br /><br />
                            </div> {/* col.// */}
                            <div className="col-md">
                                <img src={`/assets/${customer.image}`} className="img-md rounded-circle border" alt="" />
                            </div>  {/* col.// */}
                        </form>
                    </div> {/* card-body.// */}
                </div> {/* card .// */}
            </main> {/* col.// */}

        </>
    )
}

export default ProfileSetting
