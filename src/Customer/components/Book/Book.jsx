import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import fieldApi from "../../api/fieldApi";
import "./Book.css";

function Book(props) {
    //----------------------------
    const { fieldId } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    //Get book by Id
    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await fieldApi.getById(fieldId);
                setBooks(res.data[0].books);
                // console.log(res.data[0].books[0].bookID);
            } catch (error) {
                console.log("Không lấy được dữ liệu từ API");
            }
            setLoading(false);
        };
        getBooks();
    }, [fieldId]);
    //-----------------------------

    return (
        <>
            {loading ? (
                <PuffLoader
                    color={"#de2454"}
                    loading={loading}
                    cssOverride={{ display: "block", margin: "150px auto 0" }}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            ) : (
                <>
                    {books.map((item, index) => (
                        <div className="bookList__book" key={index}>
                            {/* Book cover */}
                            <div className="bookList__book-wrapper">
                                <Link
                                    to={`/bookDetail/${item?.bookID}`}
                                    className="bookList__book-cover"
                                >
                                    <div className="bookList__book-image">
                                        <img
                                            alt="Good Inside: A Guide to Becoming the Parent You Want to Be"
                                            src={item?.image}
                                        />
                                    </div>
                                </Link>
                            </div>

                            <div className="bookList__book-titleAndAuthor">
                                {/* Book Title */}
                                <h2 className="bookList__book-title">
                                    <a href="/books/stay-curious-and-keep-exploring-50-amazing-bubbly-and-creative-science-experiments-to-do-with-the-whole-family/9781797216225?listref=bookshop-org-best-sellers-of-the-week">
                                        {item?.bookName}
                                    </a>
                                </h2>

                                {/* Book Author */}
                                <h3 className="bookList__book-author">Emily Calandrelli</h3>
                            </div>

                            {/* Book Price */}
                            <div className="bookList__book-price">
                                {/* <div className="bookList__book-price-old">$22.95</div> */}
                                <div className="bookList__book-price-new">{item?.price} VNĐ</div>
                            </div>

                            <button className="btn-primary">ADD TO CART</button>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default Book;
