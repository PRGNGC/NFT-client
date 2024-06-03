import axios from "axios";
import store from "@/app/store/store";

const axiosInstance = axios.create({
	baseURL: "http://localhost:4000/api",
	withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
	const accessToken = store.getState().login.accessToken;

	if (accessToken) {
		config.headers["Authorization"] = `Bearer ${accessToken}`;
	}

	return config;
});

export { axiosInstance };
