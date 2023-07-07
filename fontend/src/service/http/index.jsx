import axios from "axios";

const API_URL = import.meta.env.VITE_API_KEY;

// const config = {
//     headers: {
//         token: "",
//     },
// };

export const Post = async (url, data) => {
    console.log("Data befor send",data)
    return await axios
        .post(`${API_URL}${url}`, data)
        .then((res) => res)
        .catch((error) => {
            return error.response;
        });
}

export const Get = async (url, data) => {
    return await axios
        .get(`${API_URL}${url}`)
        .then((res) => res)
        .catch((error) => {
            return error.response;
        });
}

export const Update = async (url, data) => {
    return await axios
        .put(`${API_URL}${url}`, data)
        .then((res) => res)
        .catch((error) => {
            return error.response;
        });
}

export const Delete = async (url, data) => {
    return await axios
        .delete(`${API_URL}${url}`)
        .then((res) => res)
        .catch((error) => {
            return error.response;
        });
}
