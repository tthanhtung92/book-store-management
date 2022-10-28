import axios from "axios";

const jwt = JSON.parse(localStorage.getItem("jwt"));

const axiosClient = axios.create({
    baseURL: "https://localhost:7091/",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: `bearer ${jwt}`,
    },
});

export default axiosClient;
