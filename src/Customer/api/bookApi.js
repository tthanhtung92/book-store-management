import axiosClient from "./axiosClient";

const bookApi = {
    async getAllBook(params) {
        var qs = require("qs");
        const res = await axiosClient.get("Book/Get", {
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

    async getById(id) {
        const url = `Book/GetById/${id}`;
        return axiosClient.get(url);
    },
};

export default bookApi;
