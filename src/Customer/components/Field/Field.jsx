import { Component } from "react";
import "./Field.css";
import { Link } from "react-router-dom";

export default class Field extends Component {
    render() {
        return (
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
                    <Link to="/field">
                        <button className="content__header-viewAll-btn">VIEW LIST</button>
                    </Link>
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
        );
    }
}
