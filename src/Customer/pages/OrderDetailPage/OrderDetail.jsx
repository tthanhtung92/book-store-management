import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import orderApi from "../../api/orderApi";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./OrderDetail.css";

const OrderDetail = () => {
    const { orderId } = useParams();
    const [orders, setOrders] = useState([]);

    const formatCash = (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const Data = async () => {
            try {
                const res = await orderApi.getOrderDetailByOrderId(orderId);
                setOrders(res.data[0].orderDetails);
                // console.log(res.data);
                // console.log(res.data[0].orderDetails);
            } catch (err) {
                console.log("Không lấy được dữ liệu từ API");
            }
        };
        // gọi hàm
        Data();
    }, [orderId]);

    return (
        <>
            <Navbar />
            <div className="order-detail-container">
                <div className="order-detail__title">
                    <h1>Đơn hàng của bạn sẽ được giao đến sau vài ngày!</h1>
                </div>
                <div className="order-detail-wrap">
                    {orders.map((item, index) => (
                        <div className="order-detail-wrap__item" key={index}>
                            <div className="order-detail-wrap__item-details">
                                <img
                                    className="order-detail-wrap__item-img"
                                    src={item?.book?.image}
                                    alt=""
                                />
                                <div className="order-detail-wrap__item-detail">
                                    <p className="order-detail-wrap__item-detail-header">
                                        {item?.book?.bookName}
                                    </p>
                                    <p>Ngày xuất bản: {item?.book?.dateOfPublished.slice(0, 10)}</p>
                                    <p>
                                        Giá tiền:{" "}
                                        <span className="order-detail__price-each">
                                            {formatCash(item?.price) + " VNĐ"}
                                        </span>
                                    </p>
                                    <p>
                                        Số lượng:{" "}
                                        <span className="order-detail__price-each">
                                            {item?.quantity}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <p>
                                Tổng:{" "}
                                <span className="order-detail__price-each">
                                    {formatCash(item?.totalPrice) + " VNĐ"}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OrderDetail;
