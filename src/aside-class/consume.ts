const consumelist = [
	{
		name: "公司信息",
		index: 1,
		children: [
			{
				name: "公司资料",
				index: 1 - 1,
			},
			{
				name: "账号管理",
				index: 1 - 2,
			},
			{
				name: "修改密码",
				index: 1 - 3,
			},
		],
	},
	{
		name: "资料管理",
		index: 2,
		children: [
			{
				name: "司机管理",
				index: 2 - 1,
			},
			{
				name: "车辆管理",
				index: 2 - 2,
			},
			{
				name: "发货地址",
				index: 2 - 3,
			},
			{
				name: "收货地址",
				index: 2 - 4,
			},
		],
	},

	{
		name: "业务管理",
		index: 3,
		children: [
			{
				name: "货源大厅",
				index: 3 - 1,
			},
			{
				name: "业务管理",
				index: 3 - 2,
			},
			{
				name: "业务查询",
				index: 3 - 3,
			},
			{
				name: "业务退回",
				index: 3 - 4,
			},
		],
	},
	{
		name: "结算管理",
		index: 4,
		children: [
			{
				name: "费用支付",
				index: 4 - 1,
			},
			{
				name: "发票申请",
				index: 4 - 2,
			},
			{
				name: "结算查询",
				index: 4 - 3,
			},
			{
				name: "发票查询",
				index: 4 - 4,
			},
		],
	},
];

export default consumelist;
