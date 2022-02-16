import React, { UseFetchUser } from '../../fetch/UseFetch';
import { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';

const ProfileMain = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [singleProgress, setSingleProgress] = useState(0);
    const [isFilePicked, setIsFilePicked] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile);
        const option = {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
            },
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
                setSingleProgress(percentage);
            },
        }

        await axios.put("http://localhost:8080/uploadAvatar", formData, option)

    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
        setSingleProgress(0);
        setIsFilePicked(true);
    }
    const handleFileCancel = () => {
        setSelectedFile(null);
        setIsFilePicked(false);
    }

    const requestOption = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        }
    }
    const { data: customer } = UseFetchUser('http://localhost:8080/customer', requestOption);
    const { data: orderOfEmail } = UseFetchUser('http://localhost:8080/orders/email', requestOption);
    const { data: orderAll } = UseFetchUser('http://localhost:8080/orders', requestOption);

    return (
        <>
            <main className="col-md-9">

                <article className="card mb-3">
                    <div className="card-body">
                        <figure className="icontext">
                            <div className="icon">
                                <img className="rounded-circle img-sm border" src={`/assets/${customer.image}`} />
                            </div>
                            <div className="text">
                                <strong> {customer.last_name + " " + customer.first_name} </strong> <br />
                                <p className="mb-2"> {customer.email}</p>
                                <span className="btn btn-file">
                                    Thay đổi<input type="file" onChange={handleFileSelect} accept="image/png ,image/jpeg" />
                                </span>

                                {isFilePicked ? (
                                    <div>
                                        <p>Tên file: {selectedFile?.name}</p>
                                        <p>Loại file: {selectedFile?.type}</p>
                                        <p>Kích thước: {selectedFile?.size} bytes</p>
                                        {singleProgress > 0 && <ProgressBar now={singleProgress} label={`${singleProgress}%`} />}
                                        <button className='btn btn-cancel' onClick={handleFileCancel}>Hủy bỏ</button>
                                        <button className='btn btn-update' onClick={handleSubmit}>Cập nhật</button>
                                    </div>
                                ) : (
                                    <></>
                                )}

                            </div>
                        </figure>
                        <hr />

                        {customer.role === "ADMIN" ?
                            (<article className="card-group card-stat">
                                <figure className="card bg">
                                    <div className="p-3">
                                        <h4 className="title">{orderAll.length}</h4>
                                        <span>Đơn hàng</span>
                                    </div>
                                </figure>
                                <figure className="card bg">
                                    <div className="p-3">
                                        <h4 className="title">0</h4>
                                        <span>Yêu thích</span>
                                    </div>
                                </figure>
                                <figure className="card bg">
                                    <div className="p-3">
                                        <h4 className="title">0</h4>
                                        <span>Hàng đang giao</span>
                                    </div>
                                </figure>
                                <figure className="card bg">
                                    <div className="p-3">
                                        <h4 className="title">0</h4>
                                        <span>Sản phẩm đã giao</span>
                                    </div>
                                </figure>
                            </article>)

                            : (<article className="card-group card-stat">
                                <figure className="card bg">
                                    <div className="p-3">
                                        <h4 className="title">{orderOfEmail.length}</h4>
                                        <span>Đơn hàng</span>
                                    </div>
                                </figure>
                                <figure className="card bg">
                                    <div className="p-3">
                                        <h4 className="title">0</h4>
                                        <span>Yêu thích</span>
                                    </div>
                                </figure>
                                <figure className="card bg">
                                    <div className="p-3">
                                        <h4 className="title">0</h4>
                                        <span>Hàng đang giao</span>
                                    </div>
                                </figure>
                                <figure className="card bg">
                                    <div className="p-3">
                                        <h4 className="title">0</h4>
                                        <span>Sản phẩm đã giao</span>
                                    </div>
                                </figure>
                            </article>)
                        }
                    </div> {/* card-body .// */}
                </article> {/* card.// */}
                <article className="card  mb-3">
                    <div className="card-body">
                        <h5 className="card-title mb-4">Đơn hàng gần đây đã đặt </h5>
                        <div className="row">
                            {customer.role === "ADMIN" ?
                                (<>
                                    {orderAll.map(item => (
                                        item.orderDetails.map((order, i) =>
                                            <div key={i} className="col-md-6">
                                                <figure className="itemside  mb-3">
                                                    <div className="aside"><img src={`/assets/${order.product.image}`} className="border img-sm" /></div>
                                                    <figcaption className="info">
                                                        <time className="text-muted"><i className="fa fa-calendar-alt" /> {item.date}</time>
                                                        <p>{order.product.product_name.substring(0, 36)} ...</p>
                                                        <p className='text-warning'>{item.email}</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        )))}
                                </>)
                                : (<>
                                    {orderOfEmail.map((item) => (
                                        item.orderDetails.map((order, i) =>
                                            <div key={i} className="col-md-6">
                                                <figure className="itemside  mb-3">
                                                    <div className="aside"><img src={`/assets/${order.product.image}`} className="border img-sm" /></div>
                                                    <figcaption className="info">
                                                        <time className="text-muted"><i className="fa fa-calendar-alt" /> {item.date}</time>
                                                        <p>{order.product.product_name.substring(0, 36)} ...</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        )))}
                                </>)
                            }
                        </div> {/* row.// */}
                        <a href="#" className="btn btn-outline-primary btn-block"> Xem tất cả đơn hàng <i className="fa fa-chevron-down" /></a>
                    </div> {/* card-body .// */}
                </article> {/* card.// */}
            </main> {/* col.// */}
        </>
    )
}

export default ProfileMain
