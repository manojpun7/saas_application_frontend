import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "applicaiton/json",
  },
});

export default API