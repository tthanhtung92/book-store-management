import { React } from "react";
import Sliders from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
    return (
        <div id="main">
            {/* Navbar */}
            <Navbar />

            {/* Slider */}
            <Sliders />

            {/* Content */}
            <div className="content">
                <div className="content__header">
                    <div className="content__header-left">
                        <img
                            src={require("../../assets/images/Social_media_Icon_alternative.webp")}
                            alt=""
                            className="content__header-logo"
                        />
                        <h1 className="content__header-name">Bookly Best Seller Of The Week</h1>
                    </div>
                    <button className="content__header-viewAll-btn">VIEW LIST</button>
                </div>

                <div className="content__body">
                    <div className="row">
                        <div className="column">
                            <img
                                src={require("../../assets/images/book6.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book7.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book8.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book9.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book10.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="content__header">
                    <div className="content__header-left">
                        <img
                            src={require("../../assets/images/Social_media_Icon_alternative.webp")}
                            alt=""
                            className="content__header-logo"
                        />
                        <h1 className="content__header-name">Bookly Best Seller Of The Week</h1>
                    </div>
                    <button className="content__header-viewAll-btn">VIEW LIST</button>
                </div>

                <div className="content__body">
                    <div className="row">
                        <div className="column">
                            <img
                                src={require("../../assets/images/book6.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book7.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book8.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book9.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book10.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="content__header">
                    <div className="content__header-left">
                        <img
                            src={require("../../assets/images/Social_media_Icon_alternative.webp")}
                            alt=""
                            className="content__header-logo"
                        />
                        <h1 className="content__header-name">Bookly Best Seller Of The Week</h1>
                    </div>
                    <button className="content__header-viewAll-btn">VIEW LIST</button>
                </div>

                <div className="content__body">
                    <div className="row">
                        <div className="column">
                            <img
                                src={require("../../assets/images/book6.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book7.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book8.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book9.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                        <div className="column">
                            <img
                                src={require("../../assets/images/book10.jpg")}
                                alt=""
                                className="book"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
