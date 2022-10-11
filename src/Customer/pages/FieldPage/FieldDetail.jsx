import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Book from "../../components/Book/Book";
import "./FieldDetail.css";

const FieldDetail = () => {
    return (
        <div className="main">
            {/* Navbar */}
            <Navbar />

            <div className="bookListContainer">
                <div className="bookList">
                    <Book />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default FieldDetail;
