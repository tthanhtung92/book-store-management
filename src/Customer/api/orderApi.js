import axiosClient from "./axiosClient";

const orderApi = {
    async create(data) {
        const url = `Order/Create`;
        return axiosClient.post(url, data);
    },
};
