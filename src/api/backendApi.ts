import axios from "axios";

const FAKE_TOKEN = localStorage.getItem("fake_access_token");

const baseURL = "http://172.17.0.1:8000/api/v1";

export const imagesURL = "http://172.17.0.1:8000";

export const backendApi = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${FAKE_TOKEN}`,
  },
});
