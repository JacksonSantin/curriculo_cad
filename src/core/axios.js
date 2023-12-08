import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jackdhanyels.jsreportonline.net",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export { axiosInstance };
