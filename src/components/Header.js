import HeaderMain from './child/HeaderMain'
import HeaderNavbar from './child/HeaderNavbar'

const Header = () => {
    return (
        <>
            <header className="section-header">

                <HeaderMain />
                <HeaderNavbar />

            </header> {/* section-header.// */}
        </>
    )
}

export default Header
