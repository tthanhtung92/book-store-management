import React from "react";
import "./Turnover.css";

export default function Turnover() {
    return (
        <div className="Turnover-container">
            <div className="Turnover-detail">
                <span>
                    Hơn <h2 className="Turnover-detail__numOf">259 quyển sách</h2> được bán ra mỗi
                    tuần và doanh thu lên đến{" "}
                    <h2 className="Turnover-detail__numOf">22.894.001 VNĐ</h2>
                </span>
            </div>
        </div>
    );
}
