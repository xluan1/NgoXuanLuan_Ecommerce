import React from 'react'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import UseFetch from '../../fetch/UseFetch';


const Completionist = () => <header><h3 className="section-title">Hết thời gian giảm giá</h3></header>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    }

    return (
        <>
            <header className="section-heading">
                <h3 className="section-title">Giảm giá cực sốc</h3>
                <p>Thời gian còn lại</p>
            </header>
            <div className="timer">
                <div> <span className="num">{days}</span><small>Ngày</small></div>
                <div> <span className="num">{hours}</span><small>Giờ</small></div>
                <div> <span className="num">{minutes}</span><small>Phut</small></div>
                <div> <span className="num">{seconds}</span><small>Giây</small></div>
            </div>
        </>
    );
};
const SectionDeal = () => {
    const { data: products, isLoading, error } = UseFetch('http://localhost:8080/products');

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/* =============== SECTION DEAL =============== */}
            <section className="padding-bottom">
                <div className="card card-deal">
                    <div className="col-heading content-body">
                        <Countdown date={Date.now() + 220967000} renderer={renderer} />
                    </div> {/* col.// */}
                    <div className="row no-gutters items-wrap">
                        {products.filter(p => p.discount > 15).slice(0, 4).map((product, i) => (
                            <div key={i} className="col-md col-6">
                                <figure className="card-product-grid card-sm">
                                    <Link to={`product/${product.id}`} className="img-wrap">
                                        <img src={"assets/" + product.image} loading="lazy" />
                                    </Link>
                                    <div className='row'>
                                        {
                                            product.varientValue.filter(item => item.varient.id === 2 || item.varient.id === 4)
                                                .sort((a, b) => a.id - b.id)
                                                .map((item, i) => (
                                                    <div key={i} className='col-6'>
                                                        {item.varient.id === 2 ?
                                                            <>
                                                                <i className="fas fa-memory" /><small> {item.value.substring(0, 4)}</small>
                                                            </>
                                                            : <>
                                                                <i className="fas fa-hdd" /><small> {item.value.substring(0, 10)}</small>
                                                            </>
                                                        }
                                                    </div>
                                                ))
                                        }
                                    </div>
                                    <div className="text-wrap p-3">
                                        <Link to={`product/${product.id}`} className="title">{product.product_name.substring(0, 20) + "...."}</Link>
                                        <span className="badge badge-danger"> {product.discount}%</span>
                                    </div>
                                    <div className='col'>
                                        {
                                            product.varientValue.filter(item => item.varient.id === 5)
                                                .sort((a, b) => a.id - b.id)
                                                .map((item, i) => (
                                                    <React.Fragment key={i}>
                                                        <b>Màn hình:</b> {item.value.substring(0, 18)}
                                                    </React.Fragment>
                                                ))
                                        }
                                    </div>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* =============== SECTION DEAL // END =============== */}
        </>
    )
}

export default SectionDeal
