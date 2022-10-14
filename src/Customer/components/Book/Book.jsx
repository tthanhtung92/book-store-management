import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Book.css";

function Book(props) {
    let { bookID, image, bookName, price } = props.data;
    let { authorName } = props.data.author;

    //add key "id" = "bookId"
    props.data.id = props.data.bookID;

    //cart logic
    const { addItem } = useCart();

    const addToCart = () => {
        addItem(props.data);
    };

    const addSuccess = () =>
        toast.success("🦄 Sao hay ra dẻ quá =)))", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            style: { fontSize: "16px" },
        });

    return (
        <>
            <div className="bookList__book">
                {/* Book cover */}
                <div className="bookList__book-wrapper">
                    <Link to={`/bookDetail/${bookID}`} className="bookList__book-cover">
                        <div className="bookList__book-image">
                            <img
                                alt="Good Inside: A Guide to Becoming the Parent You Want to Be"
                                src={image}
                            />
                        </div>
                    </Link>
                </div>

                <div className="bookList__book-titleAndAuthor">
                    {/* Book Title */}
                    <h2 className="bookList__book-title">
                        <a href="/books/stay-curious-and-keep-exploring-50-amazing-bubbly-and-creative-science-experiments-to-do-with-the-whole-family/9781797216225?listref=bookshop-org-best-sellers-of-the-week">
                            {bookName}
                        </a>
                    </h2>

                    {/* Book Author */}
                    <h3 className="bookList__book-author">{authorName}</h3>
                </div>

                {/* Book Price */}
                <div className="bookList__book-price">
                    {/* <div className="bookList__book-price-old">$22.95</div> */}
                    <div className="bookList__book-price-new">{price} VNĐ</div>
                </div>

                <button
                    className="btn-primary"
                    onClick={() => {
                        addToCart();
                        addSuccess();
                    }}
                >
                    THÊM VÀO GIỎ
                </button>
                <ToastContainer
                    position="top-right"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover={false}
                    theme="dark"
                />
            </div>
        </>
    );
}

export default Book;
