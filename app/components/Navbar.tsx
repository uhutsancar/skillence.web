import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient"><img src="icons/skillence.svg" alt="Skillence" /></p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Özgeçmişi Yükle
            </Link>
        </nav>
    )
}
export default Navbar
