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
                        <h2>My saved card</h2>
                        <p>You have no saved cards.</p>
                    </div>

                    <div className="profile__content-item">
                        <h2>My Orders</h2>
                        <p>You have no saved cards.</p>
                    </div>

                    <div className="profile__content-item">
                        <h2>My Gift Cards</h2>
                        <p>You have no saved cards.</p>
                    </div>

                    <div className="profile__content-item">
                        <h2>My Wishlists and Registries</h2>
                        <p>My Wishlist</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
