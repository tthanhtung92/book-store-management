import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookDetail from "../../components/BookDetail/BookDetail";

import "./BookDetails.css";

function BookDetails() {
    return (
        <div className="main">
            {/* Navbar */}
            <Navbar />

            <BookDetail />
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default BookDetails;
