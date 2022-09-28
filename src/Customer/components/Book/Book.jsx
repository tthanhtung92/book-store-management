import { Component } from "react";
import "./Book.css";

export default class Book extends Component {
    render() {
        return (
            <div className="bookList__book">
                {/* Book cover */}
                <div className="cover-wrapper">
                    <a
                        className="cover"
                        href="/p/books/stay-curious-and-keep-exploring-50-amazing-bubbly-and-creative-science-experiments-to-do-with-the-whole-family-emily-calandrelli/18273279?ean=9781797216225&amp;listref=bookshop-org-best-sellers-of-the-week"
                    >
                        <div className="product-image">
                            <img
                                className="w-full"
                                srcSet="https://images-us.bookshop.org/ingram/9781638930143.jpg?height=250&v=v2-b20fe08bc8957a5033ff9d92d62e6ba0, https://images-us.bookshop.org/ingram/9781638930143.jpg?height=500&v=v2-b20fe08bc8957a5033ff9d92d62e6ba0 1.5x, https://images-us.bookshop.org/ingram/9781638930143.jpg?height=500&v=v2-b20fe08bc8957a5033ff9d92d62e6ba0 2x"
                                alt="Good Inside: A Guide to Becoming the Parent You Want to Be"
                                src="https://images-us.bookshop.org/ingram/9781638930143.jpg?height=500&v=v2-b20fe08bc8957a5033ff9d92d62e6ba0"
                            />
                        </div>
                    </a>
                </div>

                {/* Book Title */}
                <h2 className="font-serif-bold leading-tight">
                    <a href="/books/stay-curious-and-keep-exploring-50-amazing-bubbly-and-creative-science-experiments-to-do-with-the-whole-family/9781797216225?listref=bookshop-org-best-sellers-of-the-week">
                        Stay Curious and Keep Exploring: 50 Amazing, Bubbly, and...
                    </a>
                </h2>

                {/* Book Author */}
                <h3 className="text-s">Emily Calandrelli</h3>

                {/* Book Price */}
                <div className="pb-4 self-start text-s">
                    <div className="line-through mr-2 lg:mr-0 text-primary">$22.95</div>
                    <div className="font-sans-bold">$21.34</div>
                </div>

                <button className="bookList__add-btn">ADD TO CART</button>
            </div>
        );
    }
}
