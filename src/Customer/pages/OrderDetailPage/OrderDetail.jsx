import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import "./OrderDetail.css";
import orderApi from "../../api/orderApi";
import { useEffect, useState } from "react";

const OrderDetail = () => {
    const { orderId } = useParams();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const Data = async () => {
            try {
                const res = await orderApi.getOrderDetailByOrderId(orderId);
                setOrders(res.data[0].orderDetails);
                console.log(res.data[0].orderDetails);
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
                <div className="order-detail-table">
                    {orders.map((item, index) => (
                        <div key={index}>
                            <p>Tên sách: {item?.book?.bookName}</p>
                            <p>
                                Số lượng: {item?.quantity}, Giá tiền: {item?.price}, Tổng giá tiền:{" "}
                                {item?.totalPrice}
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
