import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import "./OrderDetail.css";
import orderApi from "../../api/orderApi";
import { useEffect, useState } from "react";

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
                                    <p>Giá tiền: {formatCash(item?.price) + " VNĐ"}</p>
                                    <p>Số lượng: {item?.quantity}</p>
                                </div>
                            </div>

                            <p>Tổng: {formatCash(item?.totalPrice) + " VNĐ"}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OrderDetail;
