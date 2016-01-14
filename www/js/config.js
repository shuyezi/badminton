window.config = {
	activityModelData: {
		theme: {
			name: "活动主题",
			type: "text",
			info: ""
		},
		time: {
			name: "活动时间",
			type: "text",
			info: ""
		},
		address: {
			name: "活动地点",
			type: "text",
			info: ""
		},
		number: {
			name: "活动人数",
			type: "select",
			info: "",
			list: (function(){ var arr=[]; for(var i=0; i<98; i++){ arr[i] = i+2; }; return arr; })(),
			tip: "请选择参与活动人数"
		},
		fee: {
			name: "活动费用",
			type: "text",
			info: ""
		},
		club: {
			name: "俱乐部",
			type: "select",
			info: "",
			tip: "请选择俱乐部",
			list: ['源深俱乐部', '天山俱乐部', '虹桥俱乐部']
		},
		type: {
			name: "类型",
			type: "select",
			info: "",
			tip: "请选择活动类型",
			list: ['常规', '联赛']
		},
		extra: {
			name: "备注",
			type: "textarea",
			info: ""
		},
		open: {
			type: 'switch',
			info: false
		}
	},
	clubsModelData: {
		name: {
			name: "俱乐部名称",
			info: ""
		},
		time: {
			name: "成立时间",
			info: ""
		},
		area: {
			name: "活动范围",
			info: ""
		},
		number: {
			name: "成员人数",
			info: "",
			list: (function(){ var arr=[]; for(var i=0; i<998; i++){ arr[i] = i+2; }; return arr; })(),
			tip: "请选择成员人数"
		},
		extra: {
			name: "简介",
			info: "简介简介简介"
		}
	},
	accountModelData: {
		username: {
			name: "用户名",
			type: "text",
			info: ""
		},
		password: {
			name: "密码",
			type: "password",
			info: ""
		}
	},
	clubDetailModelData: {
		applicant: {
			name: "申请人姓名",
			info: ""
		},
		sex: {
			name: "申请人性别",
			info: false//默认男
		},
		experience: {
			name: "球龄",
			info: ""
		},
		reason: {
			name: "写点儿理由",
			info: ""
		}
	},
	joinersListModelData: {
		"a1": [
			{
				avatar: "img/activity.jpg",
				name: "小黄小黄",
				permission: 1
			},
			{
				avatar: "img/activity.jpg",
				name: "小红小红",
				permission: 2
			},
			{
				avatar: "img/activity.jpg",
				name: "小吴小吴",
				permission: 3
			}
		],
		"a2": [
			{
				avatar: "img/activity.jpg",
				name: "小黄小黄2",
				permission: 2
			},
			{
				avatar: "img/activity.jpg",
				name: "小红小红2",
				permission: 1
			},
			{
				avatar: "img/activity.jpg",
				name: "小吴小吴2",
				permission: 3
			}
		]
	},
	clubMembersListModelData: {
		"c1": [
			{
				avatar: "img/activity.jpg",
				name: "小黄小黄",
				permission: 1
			},
			{
				avatar: "img/activity.jpg",
				name: "小红小红",
				permission: 2
			},
			{
				avatar: "img/activity.jpg",
				name: "小吴小吴",
				permission: 3
			}
		],
		"c2": [
			{
				avatar: "img/activity.jpg",
				name: "小黄小黄2",
				permission: 2
			},
			{
				avatar: "img/activity.jpg",
				name: "小红小红2",
				permission: 1
			},
			{
				avatar: "img/activity.jpg",
				name: "小吴小吴2",
				permission: 3
			}
		]
	},
	loginModelData: {
		username: {
			name: "用户名",
			info: ""
		},
		password: {
			name: "密码",
			info: ""
		}
	},
	registerModelData: {
		username: {
			name: "用户名",
			info: ""
		},
		password: {
			name: "密码",
			info: ""
		}
	}
}