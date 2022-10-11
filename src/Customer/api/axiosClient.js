import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://localhost:7091/",
    headers: {
        "content-type": "application/json",
    },
});

export default axiosClient;
