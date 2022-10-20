import { React } from "react";
import { UserAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Profile.css";

const Profile = () => {
    const { user } = UserAuth();

    return (
        <div className="profile">
            <Navbar />
            <div className="profile__wrap">
                <div className="profile__content">
                    <h1>Welcome</h1>
                    <p>Email: {user?.email}</p>

                    <div className="profile__content-item">
                        <h2>Order của bạn</h2>
                        <p>Bạn chưa có order nào</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
