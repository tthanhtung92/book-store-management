import { React, useEffect, useState } from "react";
import axios from "axios";
import Sliders from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Field from "../../components/Field/Field";
import "./Home.css";

function Home() {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const Data = async () => {
            try {
                const res = await axios.get("https://localhost:7091/Field/GetAll");
                setFields(res.data);
            } catch (err) {
                console.log("Không lấy được dữ liệu từ API");
            }
        };
        // gọi hàm
        Data();
    }, []);

    return (
        <div id="main">
            {/* Navbar */}
            <Navbar />

            {/* Slider */}
            <Sliders />

            {/* Content */}
            <Field data={fields} />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
