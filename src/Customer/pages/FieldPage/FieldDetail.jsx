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
    const [field, setField] = useState([]);
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
                setField(res.data);
                console.log(res.data);
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

            {field.map((item, index) => (
                <div className="field-name" key={index}>
                    <div className="fieldName-container">
                        <h1>{item?.fieldName}</h1>
                        <div className="fieldName-container__desc">
                            <p>{item?.fieldDescription}</p>
                        </div>
                    </div>
                </div>
            ))}

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
