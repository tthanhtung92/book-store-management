import { React, useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import orderApi from "../../api/orderApi";
import "./Profile.css";

const Profile = () => {
    const { user } = UserAuth();
    const [orders, setOrders] = useState([]);

    const formatCash = (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    useEffect(() => {
        const Data = async () => {
            const accId = localStorage.getItem("accountId");
            try {
                const res = await orderApi.getByCustomerId(accId);
                console.log(res.data);
                setOrders(res.data);
            } catch (err) {
                console.log("Không lấy được dữ liệu từ API");
            }
        };
        // gọi hàm
        Data();
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
                        <h2>Order của bạn</h2>
                        {orders.map((item, index) => (
                            <div className="order-details" key={index}>
                                <p>
                                    Order: {item?.orderID}{" "}
                                    <Link
                                        to={`/orderDetail/${item.orderID}`}
                                        className="clickViewOrder"
                                    >
                                        (Nhấn để xem)
                                    </Link>{" "}
                                    , Ngày đặt hàng: {item?.dateOfOrder.slice(0, 10)}, Tổng cộng:{" "}
                                    {formatCash(item?.totalAmount) + " VNĐ"}
                                </p>
                            </div>
                        ))}
                    </div>
                    ;
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
