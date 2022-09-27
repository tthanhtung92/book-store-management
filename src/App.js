import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FieldDetail from "./Customer/pages/FieldPage/FieldDetail";
import Home from "./Customer/pages/HomePage/Home";
import SignIn from "./Customer/pages/SignInPage/SignIn";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/field" element={<FieldDetail />} />
                <Route path="/signIn" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}
