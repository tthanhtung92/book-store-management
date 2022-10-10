import axiosClient from "./axiosClient";

const fieldApi = {
    async getAll(params) {
        var qs = require("qs");
        const response = await axiosClient.get("fields/", {
            params: {
                ...params,
            },
            paramsSerializer: (params) => {
                //ví dụ với trường hợp size=[1,2] => &size=1&size=2
                return qs.stringify(params, { arrayFormat: "repeat" });
            },
        });
        return response;
    },

    
};

export default fieldApi;
