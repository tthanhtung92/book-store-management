import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./Success.css";

function Success() {
    const { emptyCart } = useCart();

    return (
        <div className="success-container">
            <div className="check-container">
                <div className="check-background">
                    <svg viewBox="-16 0 100 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 25L27.3077 44L58.5 7"
                            stroke="white"
                            strokeWidth="13"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="check-shadow"></div>
                <div className="check-notification">
                    <h1>Thanh toán thành công</h1>
                </div>
                <Link to="/profile">
                    <button className="success-container__back" onClick={() => emptyCart()}>
                        Xem order của bạn
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Success;
