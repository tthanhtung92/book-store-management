import { React, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import fieldApi from "../../api/fieldApi";
import Sliders from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Field from "../../components/Field/Field";
import "./Home.css";
import HomeSkeleton from "../../components/LoadingSkeleton/HomeSkeleton";

function Home() {
    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const Data = async () => {
            try {
                const res = await fieldApi.getAllField();
                setFields(res.data);
                // console.log(res.data);
            } catch (err) {
                setError(err);
                console.log("Không lấy được dữ liệu từ API");
            }
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        // gọi hàm
        Data();
    }, []);

    return (
        <>
            {error && <Navigate to="/500" />}

            {!error && (
                <div id="main">
                    {/* Navbar */}
                    <Navbar />

                    {/* Slider */}
                    <Sliders />

                    {loading && <HomeSkeleton fields={5} />}

                    {/* Content */}
                    <Field data={fields} />

                    {/* Footer */}
                    <Footer />
                </div>
            )}
        </>
    );
}

export default Home;
