import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://192.168.137.71:7132/",
    headers: {
        "content-type": "application/json",
    },
});

export default axiosClient;
