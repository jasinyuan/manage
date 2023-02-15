import http from "./http";

export default {
	/** 后台登录 */
	mangeLogin(name: string, paw: string) {
		return http({
			url: `/ALogins`,
			method: "post",
			data: {
				AName: name,
				APaw: paw,
			},
		});
	},
	/** 后台退出 */
	quitMage() {
		return http({
			url: `/ALogout`,
			method: "post",
		});
	},
	/** 业务员登录 */
	salesmanLogin(name: string, paw: string) {
		return http({
			url: `/Logins`,
			method: "post",
			data: {
				name: name,
				paw: paw,
			},
		});
	},
	/** 业务员退出 */
	quitSalesman() {
		return http({
			url: `/Logout`,
			method: "post",
		});
	},
	/** 用户登录 */
	userLogin(name: string, paw: string) {
		return http({
			url: `/login`,
			method: "post",
			data: {
				username: name,
				password: paw,
			},
		});
	},
	/** 用户退出 */
	quitUser() {
		return http({
			url: `/logout`,
			method: "post",
		});
	},
};
