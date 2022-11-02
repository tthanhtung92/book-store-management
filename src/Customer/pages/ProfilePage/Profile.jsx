import { React, useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import orderApi from "../../api/orderApi";
import fieldApi from "../../api/fieldApi";
import Bonus from "../../components/Bonus/Bonus";
import "./Profile.css";

const Profile = () => {
    const { user } = UserAuth();
    const [orders, setOrders] = useState([]);
    const [twoFields, setTwoFields] = useState([]);

    const formatCash = (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const Data = async () => {
            const accId = localStorage.getItem("accountId");
            try {
                const res = await orderApi.getByCustomerId(accId);
                // console.log(res.data);
                setOrders(res.data);
            } catch (err) {
                console.log("Không lấy được dữ liệu từ API");
            }
        };
        // gọi hàm
        Data();
    }, []);

    useEffect(() => {
        const twoRowData = async () => {
            try {
                const res = await fieldApi.get2Row();
                setTwoFields(res.data);
                console.log(res.data);
            } catch (err) {
                console.log("Không lấy được dữ liệu 2 row từ API");
            }
        };
        // gọi hàm
        twoRowData();
    }, []);

    //xu li lay orderDetail by OrderId

    return (
        <div className="profile">
            <Navbar />
            <div className="profile__wrap">
                <div className="profile__content">
                    <h1>Welcome</h1>
                    <p>Email: {user?.email}</p>
                    <div className="profile__content-item">
                        <h1>Đơn hàng của bạn</h1>
                        {orders.map((item, index) => (
                            <Link
                                to={`/orderDetail/${item.orderID}`}
                                className="clickViewOrder"
                                key={index}
                            >
                                <div className="order-details__items">
                                    <div className="order-details__item-name">
                                        <h2>Đơn hàng {item?.orderID}</h2>
                                        <div className="order-details__item-order-date">
                                            <p className="order-details__item-order-date-p">
                                                Ngày đặt hàng: {item?.dateOfOrder.slice(0, 10)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="order-details__item-order-total-price">
                                        <p className="order-details__item-total-price-p">
                                            Tổng số tiền: {formatCash(item?.totalAmount) + " VNĐ"}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Bonus data2={twoFields} />

            <Footer />
        </div>
    );
};

export default Profile;
