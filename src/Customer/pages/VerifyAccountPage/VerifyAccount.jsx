import React from "react";
import "./VerifyAccount.css";
import { UserAuth } from "../../context/AuthContext";

const VerifyAccount = () => {
    const { user } = UserAuth();

    return (
        <div className="verify-container">
            <div className="verify-body">
                <img
                    className="verify-img"
                    src={require("../../assets/images/confirm-email.jpg")}
                    alt=""
                />
                <h1>Đã gửi liên kết xác minh!</h1>
                <p>Chúng tôi đã gửi email liên kết xác nhận đến {user?.email}</p>
                <p>Kiểm tra email của bạn để có được liên kết đến trang chủ</p>
            </div>
        </div>
    );
};

export default VerifyAccount;
