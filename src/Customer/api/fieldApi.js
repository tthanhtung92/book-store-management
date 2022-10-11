import axiosClient from "./axiosClient";

const fieldApi = {
    async getAllField(params) {
        var qs = require("qs");
        const res = await axiosClient.get("Field/GetAll", {
            params: {
                ...params,
            },
            paramsSerializer: (params) => {
                //ví dụ với trường hợp size=[1,2] => &size=1&size=2
                return qs.stringify(params, { arrayFormat: "repeat" });
            },
        });
        return res;
    },

    async get5Row() {
        const url = `Field/Get5Row`;
        return axiosClient.get(url);
    },

    async getById(id) {
        const url = `Field/GetById/${id}`;
        return axiosClient.get(url);
    },
};

export default fieldApi;
