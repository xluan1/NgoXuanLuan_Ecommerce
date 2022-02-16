import UseFetch from '../../fetch/UseFetch';

const SectionRegion = () => {
    const { data: brands, isLoading, error } = UseFetch('http://localhost:8080/brands/');

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/* =============== SECTION REGION =============== */}
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Thương hiệu</h4>
                </header>
                <ul className="row mt-4">
                    {brands.map((brand, i) => (
                        <li key={i} className="col-md col-6">
                            <a href="/" className="icontext">
                                <img className="icon-flag-sm" src={`/assets/${brand.brand_image}`} loading="lazy" />
                                <span className="price">{brand.brand_name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            {/* =============== SECTION REGION .//END =============== */}
        </>
    )
}

export default SectionRegion
