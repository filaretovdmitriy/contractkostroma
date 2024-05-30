import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.kontrakt-kostroma.ru",
  headers: { "Content-Type": "application/json" },
});

export default apiClient;