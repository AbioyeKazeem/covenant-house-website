import axios from "axios";

const api = axios.create({
  baseURL: "https://api.covenanthouserccg.org",
  withCredentials: true,
});

export default api;
