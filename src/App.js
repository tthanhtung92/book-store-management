import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Customer/context/AuthContext";
import FieldDetail from "./Customer/pages/FieldPage/FieldDetail";
import BookDetail from "./Customer/pages/BookDetailPage/BookDetails";
import Home from "./Customer/pages/HomePage/Home";
import SignIn from "./Customer/pages/SignInPage/SignIn";
import Profile from "./Customer/pages/ProfilePage/Profile";
import Protected from "./Customer/components/Protected/Protected";
import ScrollToTop from "./Customer/components/ScrollToTop/ScrollToTop";
import Error from "./Customer/pages/404/Error";

export default function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/404" element={<Error />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/field/:fieldId" element={<FieldDetail />} />
                    <Route path="/bookDetail/:bookId" element={<BookDetail />} />
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
