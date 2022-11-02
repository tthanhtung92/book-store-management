import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Customer/context/AuthContext";
import FieldDetail from "./Customer/pages/FieldPage/FieldDetail";
import BookDetail from "./Customer/pages/BookDetailPage/BookDetails";
import Home from "./Customer/pages/HomePage/Home";
import SignIn from "./Customer/pages/SignInPage/SignIn";
import Profile from "./Customer/pages/ProfilePage/Profile";
import OrderDetail from "./Customer/pages/OrderDetailPage/OrderDetail";
import Cart from "./Customer/pages/CartPage/Cart";
import Protected from "./Customer/components/Protected/Protected";

//special
import Error from "./Customer/pages/500/Error";
import VerifyAccount from "./Customer/pages/VerifyAccountPage/VerifyAccount";

//For cart
import Success from "./Customer/pages/SuccessPage/Success";
import Cancel from "./Customer/pages/CancelPage/Cancel";

export default function App() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/field/:fieldId" element={<FieldDetail />} />
                    <Route path="/bookDetail/:bookId" element={<BookDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route
                        path="/profile"
                        element={
                            <Protected>
                                <Profile />
                            </Protected>
                        }
                    />
                    <Route path="/orderDetail/:orderId" element={<OrderDetail />} />

                    {/* For cart payment */}
                    <Route
                        path="success"
                        element={
                            <Protected>
                                <Success />
                            </Protected>
                        }
                    />
                    <Route
                        path="cancel"
                        element={
                            <Protected>
                                <Cancel />
                            </Protected>
                        }
                    />

                    {/* Special */}
                    <Route path="/500" element={<Error />} />
                    <Route path="/verify" element={<VerifyAccount />} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
}
