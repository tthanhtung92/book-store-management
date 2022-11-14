import { React, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bookApi from "../../api/bookApi";
import fieldApi from "../../api/fieldApi";
import BestSeller from "../../components/BestSeller/BestSeller";
import Bonus from "../../components/Bonus/Bonus";
import Field from "../../components/Field/Field";
import Footer from "../../components/Footer/Footer";
import HomeSkeleton from "../../components/LoadingSkeleton/HomeSkeleton";
import Navbar from "../../components/Navbar/Navbar";
import Sliders from "../../components/Slider/Slider";
import "./Home.css";

function Home() {
    const [fields, setFields] = useState([]);
    const [twoFields, setTwoFields] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const Data = async () => {
            try {
                const res = await fieldApi.getAllField();
                setFields(res.data);
                // console.log(res.data);
            } catch (err) {
                toast("Không lấy được dữ liệu field!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });
            }
            setLoading(false);
        };
        // gọi hàm
        Data();
    }, []);

    useEffect(() => {
        const twoRowData = async () => {
            try {
                const res = await fieldApi.get2Row();
                setTwoFields(res.data);
                // console.log(res.data);
            } catch (err) {
                toast("Không lấy được dữ liệu 2 row!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });
            }
            setLoading(false);
        };
        // gọi hàm
        twoRowData();
    }, []);

    useEffect(() => {
        const bestSeller = async () => {
            try {
                const res = await bookApi.getBestSeller();
                setBestSellers(res.data);
                // console.log(res.data);
            } catch (err) {
                toast("Không lấy được dữ liệu best seller!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });
            }
            setLoading(false);
        };
        // gọi hàm
        bestSeller();
    }, []);

    return (
        <>
            <div id="main">
                {/* Navbar */}
                <Navbar />

                {/* Slider */}
                <Sliders />

                <Field data={fields} />

                <BestSeller data3={bestSellers} />

                {loading && <HomeSkeleton fields={5} />}

                {/* Content */}

                <div className="also-like">
                    <h1 className="also-like-text">Có thể bạn cũng sẽ thích</h1>
                </div>

                <Bonus data2={twoFields} />

                {/* Footer */}
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover={false}
                    theme="light"
                />
            </div>
        </>
    );
}

export default Home;
