import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { UserAuth } from "../../context/AuthContext";
import { FiShoppingCart } from "react-icons/fi";

import "./Navbar.css";

const Navbar = () => {
    const { user } = UserAuth();

    return (
        <div className="navbar">
            <div className="navbar__left">
                <a href="/Book_Store_Management_FE">
                    <img
                        src={require("../../assets/images/logo.gif")}
                        alt=""
                        className="navbar__logo-img"
                    />
                </a>
                <h1 className="navbar__logo-name">Bookly.</h1>
            </div>

            <div className="navbar__middle">
                <div className="navbar__middle-search-wrap">
                    <input
                        type="text"
                        className="navbar__middle-search"
                        placeholder="Search books, authors, news,..."
                    />
                    <button href="/#" className="navbar__middle-search-btn">
                        <BiSearchAlt className="navbar__middle-search-btn-icon" />
                    </button>
                </div>

                <div className="navbar__middle-suggest">
                    <ul className="navbar__middle-suggest-list">
                        <a href="/#" className="navbar__middle-suggest-item">
                            <li>New Books</li>
                        </a>
                        <a href="/#" className="navbar__middle-suggest-item">
                            <li>Best sellers</li>
                        </a>
                        <a href="/#" className="navbar__middle-suggest-item">
                            <li>Confiction</li>
                        </a>
                        <a href="/#" className="navbar__middle-suggest-item">
                            <li>Gift card</li>
                        </a>
                    </ul>
                </div>
            </div>

            <div className="navbar__right">
                {user?.displayName ? (
                    <Link to="/profile">
                        <img className="navbar__right-profile" src={user.photoURL} alt="profile" />
                    </Link>
                ) : (
                    <Link to="/signIn" className="navbar__right-login-text">
                        Sign in
                    </Link>
                )}
                <a href="/#" className="navbar__right-cart">
                    <FiShoppingCart className="navbar__right-cart-logo" />
                    <i className="fa-solid fa-"></i>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
