import React from "react";
import Sliders from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AiFillCheckCircle } from "react-icons/ai";
import "./BookDetail.css";

const BookDetail = () => {
    return (
        <div className="main">
            {/* Navbar */}
            <Navbar />

            {/* Slider */}
            <Sliders />

            <div className="bookDetail">
                <div className="bookDetail__wrapper">
                    {/* book Cover */}
                    <div className="bookDetail__bookImg">
                        <div className="bookDetail__bookImg-cover">
                            <a href="/#" className="bookDetail__bookImg-link">
                                <img
                                    src="https://images-us.bookshop.org/ingram/9781668000014.jpg?height=500&v=v2"
                                    alt="book"
                                    className="bookDetail__bookImg-img"
                                />
                            </a>
                        </div>
                    </div>

                    {/* book detail */}
                    <div className="bookDetail__detail">
                        {/* title */}
                        <div className="bookDetail__detail-title">
                            <h1>
                                Sex Talks: The 5 Conversations That Will Transform Your Love Life
                            </h1>
                            <span>
                                <a href="/#">Vanessa Marin</a> (Author)
                            </span>
                        </div>

                        {/* price */}
                        <h1 className="bookDetail__detail-oldPrice">$27.95</h1>
                        <h1 className="bookDetail__detail-newPrice">$25.95</h1>

                        {/* status */}
                        <div className="bookDetail__detail-status">
                            <AiFillCheckCircle className="bookDetail__detail-statusIcon" />
                            AVAILABLE
                        </div>

                        {/* action button */}
                        <button className="btn-primary mt-20">ADD TO CART</button>

                        {/* description */}
                        <div className="bookDetail__detail-description">
                            <h1>Description</h1>
                            <p>
                                Back by popular demand, the classic JPS holiday anthologies remain
                                essential and relevant in our digital age. Unequaled in-depth
                                compilations of classic and contemporary writings, they have long
                                guided rabbis, cantors, educators, and other readers seeking the
                                origins, meanings, and varied celebrations of the Jewish festivals.
                                Drawing on Jewish creativity from hundreds of sources--the Bible,
                                postbiblical literature, Talmud, midrashim, prayers with
                                commentaries, Hasidic tales, short stories, poems, liturgical
                                music--and describing Yom Kippur observances in various lands and
                                eras, The Yom Kippur Anthology vividly evokes the vitality of this
                                holiday throughout history and its significance for the modern Jew.
                                Literary works by prominent authors S. Y. Agnon, Martin Buber, Meyer
                                Levin, I. L. Peretz, Franz Rosenzweig, Sholom Aleichem, Elie Wiesel,
                                and Herman Wouk also illuminate the spiritual grandeur of the
                                holiday.
                            </p>
                        </div>

                        {/* Detail */}
                        <div className="bookDetail__detail-detail mt-20">
                            <h1>Product Details</h1>
                            <span>
                                Price: <p className="bookDetail__detail-detail-price">$25.95</p>
                            </span>
                            <br />

                            <span>
                                Publisher: <p>University of Nebraska Press</p>
                            </span>
                            <br />

                            <span>
                                Publish Date: <p>July 01, 2018</p>
                            </span>
                            <br />

                            <span>
                                Pages : <p>438</p>
                            </span>
                            <br />

                            <span>
                                Language: <p>English</p>
                            </span>
                            <br />
                        </div>

                        {/* about author */}
                        <div className="bookDetail__detail-description">
                            <h1>About the Author</h1>
                            <p>
                                Philip Goodman (1911-2006) was a rabbi and served as director of the
                                Jewish education and Jewish center division for the Jewish Welfare
                                Board, executive secretary of the Jewish Book Council, and executive
                                secretary of the American Jewish Historical Society. Goodman is the
                                author or editor of many books, including seven volumes in the JPS
                                Holiday Anthologies series.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default BookDetail;
