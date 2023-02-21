const routes = [
	/** 登录页面 */
	{
		path: "/",
		component: () => import("../login/login.vue"),
	},
	/** 业务员页面 */
	{
		path: "/salesman",
		name: "salesman",
		component: () => import("../salesman/saleman.vue"),
	},
	/** 后台页面 */
	{
		path: "/background",
		name: "background",
		component: () => import("../background/background.vue"),
	},
	/** 销售页面 */
	{
		path: "/sale",
		name: "sale",
		component: () => import("../client/sale/sale.vue"),
	},
	/** 消费页面 */
	{
		path: "/consume",
		name: "consume",
		component: () => import("../client/consume/comsume.vue"),
	},
];

export default routes;
