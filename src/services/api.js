import axios from "axios";

const api = axios.create({
  baseURL: "https://b-omnistack-mvsf.herokuapp.com"
});

export default api;
