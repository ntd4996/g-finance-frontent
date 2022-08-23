import axios from "axios";

const instance = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
            "Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
    },
    withCredentials: true,
});

export default instance;
