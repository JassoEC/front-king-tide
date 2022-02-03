import axios from "axios";

const FAKE_TOKEN = localStorage.getItem("fake_access_token");

const baseURL = "http://tide.ecjasso.com/api/v1";

export const backendApi = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${FAKE_TOKEN}`,
  },
});
