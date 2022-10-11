import React from "react";
import Sliders from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Book from "../../components/Book/Book";
import "./FieldDetail.css";

const FieldDetail = () => {    
    return (
        <div className="main">
            {/* Navbar */}
            <Navbar />

            {/* Slider */}
            <Sliders />

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
