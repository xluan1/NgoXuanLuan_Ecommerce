import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div>
                <h1>404 Error Page </h1>
                <p className="zoom-area"> <b>Trang bạn cần tìm không được tìm thấy hoặc lỗi.</b> </p>
                <section className="error-container">
                    <span className="four"><span className="screen-reader-text">4</span></span>
                    <span className="zero"><span className="screen-reader-text">0</span></span>
                    <span className="four"><span className="screen-reader-text">4</span></span>
                </section>
                <div className="link-container">
                    <Link to="/" className="more-link">Quay lại trang chủ</Link>
                </div>
            </div>

        </>
    )
}

export default NotFound
