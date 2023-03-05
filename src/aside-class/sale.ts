const salelist = [
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
				name: "发货地址",
				index: 2 - 2,
			},
			{
				name: "车辆管理",
				index: 2 - 3,
			},
		],
	},
	{
		name: "业务管理",
		index: 3,
		children: [
			{
				name: "货物管理",
				index: 3 - 1,
			},
			{
				name: "业务查询",
				index: 3 - 2,
			},
		],
	},
];

export default salelist;
