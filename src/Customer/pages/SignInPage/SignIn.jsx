import React, { useEffect, useState } from "react";
import "./SignIn.css";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [isActive, setPanelActive] = useState("");

    const handleClickSignUp = () => {
        setPanelActive("right-panel-active");
    };

    const handleClickSignIn = () => {
        setPanelActive("");
    };

    // Login with google
    const navigate = useNavigate();

    const { googleSignIn, user } = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="formMain">
            <div className={"container " + isActive} id="container">
                <div className="form-container sign-up-container">
                    <form action="/#">
                        <h1>Sign up</h1>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone Number" />
                        <input type="password" placeholder="Password" />
                        <button className="btn-SignUp">Sign Up</button>
                        <span>or continue with</span>
                        <div className="social-container">
                            <FcGoogle onClick={handleGoogleSignIn} />
                        </div>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="/#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <FcGoogle onClick={handleGoogleSignIn} />
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="/#">Forgot your password?</a>
                        <button className="btn-SignIn">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleClickSignIn}>
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Class!</h1>
                            <p>
                                Don't have an account yet? Enter your personal details and start
                                journey with us
                            </p>
                            <button className="ghost" id="signUp" onClick={handleClickSignUp}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
