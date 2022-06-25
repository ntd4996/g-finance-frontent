import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_BACKEND,
    headers: {},
});

instance.interceptors.request.use((config) => {
    return config;
});

export default instance;
