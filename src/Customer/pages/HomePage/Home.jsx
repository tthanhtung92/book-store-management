import { React, useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import fieldApi from "../../api/fieldApi";
import Sliders from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Field from "../../components/Field/Field";
import "./Home.css";
import { Navigate } from "react-router-dom";

function Home() {
    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const Data = async () => {
            try {
                //const res = await axios.get("https://localhost:7091/Field/GetAll");
                const res = await fieldApi.getAllField();
                setFields(res.data);
                // console.log(res.data);
            } catch (err) {
                setError(err);
                console.log("Không lấy được dữ liệu từ API");
            }
            setLoading(false);
        };
        // gọi hàm
        Data();
    }, []);

    return (
        <>
            {loading && (
                <PuffLoader
                    color={"#de2454"}
                    loading={loading}
                    cssOverride={{ display: "block", margin: "400px auto 0" }}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}

            {error && <Navigate to="/404" />}

            {!loading && !error && (
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
            )}
        </>
    );
}

export default Home;
