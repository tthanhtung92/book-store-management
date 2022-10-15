import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { RiSubtractFill, RiAddCircleLine } from "react-icons/ri";
import { useCart } from "react-use-cart";
import "./Cart.css";

const Cart = () => {
    const { isEmpty, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
    // console.log(items[0].author);
    return (
        <>
            <Navbar />
            <div className="cart-container">
                <h1 className="cart-title">{isEmpty ? "Còn cái nịt =)))" : "Bookly Cart"}</h1>
                {isEmpty ? (
                    <></>
                ) : (
                    <div className="cart-table__container">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th className="thead-price">Giá tiền</th>
                                    <th>Số lượng</th>
                                    <th></th>
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
                                                {item.price * item.quantity} VND
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
                        <h1 className="cart-footer__total">Tổng giá tiền: {cartTotal} VND</h1>
                        <button className="pay-btn">Thanh toán</button>
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
