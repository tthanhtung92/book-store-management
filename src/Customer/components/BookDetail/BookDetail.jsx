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
    const [newPrices, setNewPrices] = useState("");

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await bookApi.getById(bookId);

                const price = JSON.stringify(res.data[0].price);
                const sub = ".";

                if (price.length === 6) {
                    const newPrice6 = price.slice(0, 3) + sub + price.slice(3);
                    setNewPrices(newPrice6);
                } else if (price.length === 5) {
                    const newPrice5 = price.slice(0, 2) + sub + price.slice(2);
                    setNewPrices(newPrice5);
                } else {
                    const newPrice7 =
                        price.slice(0, 1) + sub + price.slice(1, 4) + sub + price.slice(4, 7);
                    setNewPrices(newPrice7);
                }

                setBooks(res.data);
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
                                            <a href="/#">{item?.author?.authorName}</a> (Tác giả)
                                        </span>
                                    </div>

                                    {/* price */}
                                    {/* <h1 className="bookDetail__detail-oldPrice">$27.95</h1> */}
                                    <h1 className="bookDetail__detail-newPrice">{newPrices} VNĐ</h1>

                                    {/* status */}
                                    <div className="bookDetail__detail-status">
                                        <AiFillCheckCircle className="bookDetail__detail-statusIcon" />
                                        AVAILABLE
                                    </div>

                                    {/* action button */}
                                    <button className="btn-primary mt-20">THÊM VÀO GIỎ</button>

                                    {/* description */}
                                    <div className="bookDetail__detail-description">
                                        <h1>Mô tả</h1>
                                        <p style={{ whiteSpace: "break-spaces" }}>
                                            {item?.description}
                                        </p>
                                    </div>

                                    {/* Detail */}
                                    <div className="bookDetail__detail-detail mt-20">
                                        <h1>Chi tiết sản phẩm</h1>
                                        <span>
                                            Giá:{" "}
                                            <p className="bookDetail__detail-detail-price">
                                                {newPrices} VNĐ
                                            </p>
                                        </span>
                                        <br />

                                        <span>
                                            Nhà xuất bản: <p>{item?.publisher.publisherName}</p>
                                        </span>
                                        <br />

                                        <span>
                                            Ngày xuất bản:{" "}
                                            <p>{item?.dateOfPublished.slice(0, 10)}</p>
                                        </span>
                                        <br />
                                        <span>
                                            Ngôn ngữ: <p>Tiếng việt</p>
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
