import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BookDetail from "../../components/BookDetail/BookDetail";
import bookApi from "../../api/bookApi";

function BookDetails() {
    const { bookId } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await bookApi.getById(bookId);

                setBooks(res.data);
                // console.log(res.data);
            } catch (error) {
                console.log("Không lấy được dữ liệu từ API");
            }
            setLoading(false);
        };
        getBooks();
    }, [bookId]);

    return (
        <div className="main">
            {/* Navbar */}
            <Navbar />

            {loading && <></>}
            {books.map((item, index) => (
                <BookDetail data={item} key={index} />
            ))}
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default BookDetails;
