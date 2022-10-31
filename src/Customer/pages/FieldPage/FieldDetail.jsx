import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Book from "../../components/Book/Book";
import fieldApi from "../../api/fieldApi";
import FieldDetailSkeleton from "../../components/LoadingSkeleton/FieldDetailSkeleton";
import "./FieldDetail.css";

const FieldDetail = () => {
    //----------------------------
    const { fieldId } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    //Get book by Id
    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await fieldApi.getById(fieldId);
                setBooks(res.data[0].books);
                // console.log(res.data[0].books);
            } catch (error) {
                console.log("Không lấy được dữ liệu từ API");
            }
            setLoading(false);
        };
        getBooks();
    }, [fieldId]);
    //-----------------------------

    return (
        <div className="main">
            {/* Navbar */}
            <Navbar />

            <div className="bookListContainer">
                <div className="bookList">
                    {loading && <FieldDetailSkeleton books={10} />}
                    {books.map((item, index) => (
                        <Book data={item} key={index} />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default FieldDetail;
