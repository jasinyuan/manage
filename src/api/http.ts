import axios from "axios";

const request = axios.create({
	baseURL: "http://175.178.186.179:8088",
	timeout: 6000,
	headers: { "content-type": "application/x-www-form-urlencoded" },
});

request.interceptors.request.use(
	(condig) => {
		return condig;
	},
	(error) => {
		return Promise.reject(error);
	}
);
request.interceptors.response.use(
	(res) => {
		if (res.code == 0 || res.code == 200) {
			return Promise.resolve(res);
		}
		return res;
	},
	(error) => {
		alert("当前网络匆忙，请稍后再试");
		return Promise.reject(error);
	}
);
export default request;
