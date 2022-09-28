import { React } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Profile.css";

const Profile = () => {
    const navigate = useNavigate();
    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="profile">
            <h1>Welcome</h1>
            <p>{user?.displayName}</p>
            <button onClick={handleSignOut}>logout</button>
        </div>
    );
};

export default Profile;
