import http from "./http";
import { loginType } from "../type/loginType";
export default {
	/** 后台登录
	 * @AName 账号
	 * @APaw 密码
	 */
	mangeLogin(name: string, paw: string) {
		return http<loginType>({
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
	/** 业务员登录
	 * @name 账号
	 * @paw 密码
	 */
	salesmanLogin(name: string, paw: string) {
		return http<loginType>({
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
	/** 用户登录
	 * @username 账号
	 * @password 密码
	 */
	userLogin(name: string, paw: string) {
		return http<loginType>({
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
