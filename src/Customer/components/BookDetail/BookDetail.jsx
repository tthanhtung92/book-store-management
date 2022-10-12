import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./BookDetail.css";
import PuffLoader from "react-spinners/PuffLoader";
import bookApi from "../../api/bookApi";
import { AiFillCheckCircle } from "react-icons/ai";

function BookDetail() {
    const { bookId } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await bookApi.getById(bookId);
                setBooks(res.data);
                //console.log(res.data);
            } catch (error) {
                console.log("Không lấy được dữ liệu từ API");
            }
            setLoading(false);
        };
        getBooks();
    }, [bookId]);

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
                        <div className="bookDetail" key={index}>
                            <div className="bookDetail__wrapper">
                                {/* book Cover */}
                                <div className="bookDetail__bookImg">
                                    <div className="bookDetail__bookImg-cover">
                                        <Link
                                            to={`/bookDetail/${item?.bookID}`}
                                            className="bookDetail__bookImg-link"
                                        >
                                            <img
                                                className="bookDetail__bookImg-img"
                                                src={item?.image}
                                                alt="book"
                                            />
                                        </Link>
                                    </div>
                                </div>

                                {/* book detail */}
                                <div className="bookDetail__detail">
                                    {/* title */}
                                    <div className="bookDetail__detail-title">
                                        <h1>{item?.bookName}</h1>
                                        <span>
                                            <a href="/#">Vanessa Marin</a> (Author)
                                        </span>
                                    </div>

                                    {/* price */}
                                    {/* <h1 className="bookDetail__detail-oldPrice">$27.95</h1> */}
                                    <h1 className="bookDetail__detail-newPrice">
                                        {item?.price} VNĐ
                                    </h1>

                                    {/* status */}
                                    <div className="bookDetail__detail-status">
                                        <AiFillCheckCircle className="bookDetail__detail-statusIcon" />
                                        AVAILABLE
                                    </div>

                                    {/* action button */}
                                    <button className="btn-primary mt-20">THÊM VÀO GIỎ</button>

                                    {/* description */}
                                    <div className="bookDetail__detail-description">
                                        <h1>Description</h1>
                                        <p>{item?.description}</p>
                                    </div>

                                    {/* Detail */}
                                    <div className="bookDetail__detail-detail mt-20">
                                        <h1>Product Details</h1>
                                        <span>
                                            Price:{" "}
                                            <p className="bookDetail__detail-detail-price">
                                                {item?.price} VNĐ
                                            </p>
                                        </span>
                                        <br />

                                        <span>
                                            Publisher: <p>{item?.publisher}</p>
                                        </span>
                                        <br />

                                        <span>
                                            Publish Date: <p>{item?.dateOfPublished}</p>
                                        </span>
                                        <br />
                                        <span>
                                            Language: <p>Tiếng việt</p>
                                        </span>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default BookDetail;
