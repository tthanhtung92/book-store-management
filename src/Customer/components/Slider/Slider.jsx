import { Component } from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { linkImg } from "./sliderData";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default class Sliders extends Component {
    render() {
        return (
            <div className="slider">
                <Slider {...settings}>
                    {linkImg.map((item) => (
                        <div className="slider__item" key={item}>
                            <img src={item.link} alt="" className="slider__img" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
