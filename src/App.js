import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Customer/context/AuthContext";
import FieldDetail from "./Customer/pages/FieldPage/FieldDetail";
import Home from "./Customer/pages/HomePage/Home";
import SignIn from "./Customer/pages/SignInPage/SignIn";
import Profile from "./Customer/pages/ProfilePage/Profile";
import Protected from "./Customer/components/Protected/Protected";

export default function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/field" element={<FieldDetail />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route
                        path="/profile"
                        element={
                            <Protected>
                                <Profile />
                            </Protected>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
}
