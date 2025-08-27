import axios from "axios";


export const api = axios.create({
    baseURL: process.env.NUXT_PUBLIC_API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
