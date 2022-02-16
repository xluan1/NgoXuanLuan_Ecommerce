import { Link } from 'react-router-dom'
import UseFetch from '../fetch/UseFetch';

const ContentCategory = () => {
    const { data: categories, isLoading, error } = UseFetch('http://localhost:8080/categories/');

    return (
        <>
            {/* ========================= SECTION CONTENT ========================= */}
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <section className="section-content padding-y">
                <div className="container">
                    <nav className="row">
                        {categories.map((cate, i) => (
                            <div key={i} className="col-md-4">
                                <div className="card card-category">
                                    <Link to={`./${cate.category_id}`}>
                                        <div className="img-wrap" style={{ background: '#ffd7d7' }}>
                                            <img src={`assets/${cate.category_image}`} loading="lazy" alt='' />
                                        </div>
                                    </Link>
                                    <div className="card-body">
                                        <h4 className="card-title"><a href="#">{cate.category_name}</a></h4>
                                        <ul className="list-menu">
                                            <li><a href="#">Unisex T shirts</a></li>
                                            <li><a href="#">Casual shirts</a></li>
                                            <li><a href="#">Casual shirts</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav> {/* row.// */}
                </div> {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}
        </>
    )
}

export default ContentCategory
