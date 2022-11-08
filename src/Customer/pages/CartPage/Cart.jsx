import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { RiAddCircleLine, RiSubtractFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { UserAuth } from "../../context/AuthContext";
import "./Cart.css";

const Cart = () => {
    const { user } = UserAuth();
    const { isEmpty, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    //Format VNĐ
    const formatCash = (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    //Checkout
    const checkout = async () => {
        await fetch("http://localhost:4000/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ items: items }),
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                if (response.url) {
                    window.location.assign(response.url);
                }
            });
    };

    return (
        <>
            <Navbar />
            <div className="cart-container">
                <h1 className="cart-title">
                    {isEmpty
                        ? "Giỏ hàng trống, hãy thử chọn vài cuốn sách từ Bookly đi nào ^^"
                        : "Giỏ hàng Bookly"}
                </h1>
                {isEmpty ? (
                    <></>
                ) : (
                    <div className="cart-table__container">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th className="thead-item">Sản phẩm</th>
                                    <th className="thead-price">Giá tiền</th>
                                    <th className="thead-quantity">Số lượng</th>
                                    <th className="thead-action"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="cart-table__book-detail">
                                                <Link to={`/bookDetail/${item?.bookID}`}>
                                                    <div className="cart-table__book-img-container">
                                                        <img
                                                            className="cart-table__book-img"
                                                            src={item?.image}
                                                            alt=""
                                                        />
                                                    </div>
                                                </Link>
                                                <div className="cart-table__book-detail-right">
                                                    <h1 className="cart-table__book-name">
                                                        {item?.bookName}
                                                    </h1>
                                                    <h2 className="cart-table__book-author">
                                                        {item?.author?.authorName}
                                                    </h2>
                                                    <div className="cart-table__book-status">
                                                        <AiFillCheckCircle className="cart-table__book-statusIcon" />
                                                        AVAILABLE
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart-table__book-price">
                                                {formatCash(item.price * item.quantity) + " VNĐ"}
                                            </td>
                                            <td className="cart-table__book-quantity">
                                                {item.quantity}
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <button
                                                        onClick={() =>
                                                            updateItemQuantity(
                                                                item.id,
                                                                item.quantity - 1
                                                            )
                                                        }
                                                        className="sub-btn"
                                                    >
                                                        <RiSubtractFill
                                                            style={{ color: "white" }}
                                                        />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            updateItemQuantity(
                                                                item.id,
                                                                item.quantity + 1
                                                            )
                                                        }
                                                        className="add-btn"
                                                    >
                                                        <RiAddCircleLine />
                                                    </button>
                                                    <button
                                                        variant="danger"
                                                        onClick={() => removeItem(item.id)}
                                                        className="remove-btn"
                                                    >
                                                        <BsFillTrashFill />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
                {!isEmpty && (
                    <div className="cart-footer">
                        <h1 className="cart-footer__total">
                            Tổng giá tiền: {formatCash(cartTotal) + " VNĐ"}
                        </h1>

                        {/* Kiểm tra user có đăng nhập hay chưa */}
                        {user ? (
                            <button
                                className="pay-btn"
                                onClick={() => {
                                    checkout();
                                }}
                            >
                                Thanh toán
                            </button>
                        ) : (
                            <Link to="/signIn">
                                <button className="pay-btn">Đăng nhập</button>
                            </Link>
                        )}

                        <button className="clear-btn" onClick={() => emptyCart()}>
                            Clear giỏ hàng
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
