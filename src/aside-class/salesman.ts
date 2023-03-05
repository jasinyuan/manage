const salesmanlist = [
	{
		name: "资料管理",
		index: 1,
		children: [
			{
				name: "客户管理",
				index: 1 - 1,
			},
			{
				name: "个人信息",
				index: 1 - 2,
			},
			{
				name: "修改密码",
				index: 1 - 3,
			},
		],
	},

	{
		name: "业务管理",
		index: 2,
		children: [
			{
				name: "业务提成",
				index: 2 - 1,
			},
			{
				name: "业务管理",
				index: 2 - 2,
			},
			{
				name: "业务统计",
				index: 2 - 3,
			},
			{
				name: "业务排名",
				index: 2 - 4,
			},
		],
	},
	{
		name: "审核管理",
		index: 3,
		children: [
			{
				name: "未审核业务",
				index: 3 - 1,
			},
			{
				name: "已审核业务",
				index: 3 - 2,
			},
		],
	},
	{
		name: "结算管理",
		index: 4,
		children: [
			{
				name: "待审核发票",
				index: 4 - 1,
			},
			{
				name: "结算查询",
				index: 4 - 2,
			},
			{
				name: "发票查询",
				index: 4 - 3,
			},
		],
	},
];

export default salesmanlist;
