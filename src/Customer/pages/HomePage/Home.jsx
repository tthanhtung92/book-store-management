import { React } from "react";
import Sliders from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Field from "../../components/Field/Field";
import "./Home.css";

const Home = () => {
    return (
        <div id="main">
            {/* Navbar */}
            <Navbar />

            {/* Slider */}
            <Sliders />

            {/* Content */}
            <Field />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
