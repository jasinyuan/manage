export type loginType = {
	/**
	 * 状态登录信息（状态信息登录失败才有
	 * */
	mag?: string;
	/**
	 * 状态码
	 * 后台：（0登录失败  1为管理员  2为操作员）
	 * 业务员：（0登录失败  1登录成功）
	 * 用户： （0登录失败  1销售端  2销售端认证失败重新认证
	 * 3销售端账号未认证前往认证 4购买端  5购买端认证失败重新认证
	 * 6 购买端未认证前往认证）
	 * */
	state?: number;
	/**
	 * 姓名（姓名登录成功才有）
	 * */
	name?: string;
	/**
	 * 业务员邀请码
	 * */
	yqm?: number;
};
