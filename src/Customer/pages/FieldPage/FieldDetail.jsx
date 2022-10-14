import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Book from "../../components/Book/Book";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fieldApi from "../../api/fieldApi";

import "./FieldDetail.css";

const FieldDetail = () => {
    //----------------------------
    const { fieldId } = useParams();
    const [books, setBooks] = useState([]);

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
