import { Link } from "react-router-dom";

function Cancel() {
    return (
        <>
            <h1>Đã hủy lượt thanh toán</h1>
            <Link to="/">
                <button className="cancel-container__back">Trở về trang chủ</button>
            </Link>
        </>
    );
}
export default Cancel;
