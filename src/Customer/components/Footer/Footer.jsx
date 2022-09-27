import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__wrap">
                    <div className="footer__wrap-left">
                        <h1 className="footer__wrap-left-header">Payment Accepted</h1>
                        <img
                            src={require("../../assets/images/payment.webp")}
                            alt=""
                            className="footer__wrap-left-img"
                        />
                    </div>
                    <div className="footer__wrap-middle">
                        <a href="/#">
                            <h1 className="footer__wrap-middle-item">About</h1>
                        </a>
                        <a href="/#">
                            <h1 className="footer__wrap-middle-item">Support/Help</h1>
                        </a>
                        <a href="/#">
                            <h1 className="footer__wrap-middle-item">Gift card</h1>
                        </a>
                        <a href="/#">
                            <h1 className="footer__wrap-middle-item">Contact</h1>
                        </a>
                        <a href="/#">
                            <h1 className="footer__wrap-middle-item">Bookshop for Authors</h1>
                        </a>
                        <a href="/#">
                            <h1 className="footer__wrap-middle-item">Bookshop for Bookstores</h1>
                        </a>
                    </div>
                    <div className="footer__wrap-right">
                        <h1 className="footer__wrap-right-header">Follow us</h1>
                        <a href="/#">
                            <BsFacebook className="footer__wrap-right-item" />
                            <BsInstagram className="footer__wrap-right-item" />
                            <BsYoutube className="footer__wrap-right-item" />
                        </a>
                    </div>
                </div>
                <div className="footer__copyright">
                    <h1 className="footer__copyright-item">Term of use</h1>
                    <h1 className="footer__copyright-item">@2022 SWP391</h1>
                    <h1 className="footer__copyright-item">Privacy Notice</h1>
                </div>
            </footer>
        );
    }
}
