window.badminton.config = {
	debug: false,
	domain: "http://www.badminton.com.cn",
	status: {
		create: "create",
		edit: "edit"
	},
	activityType: ['常规', '联赛'],
	tempComponents: {
		activityItemBig: "templates/components/activityItem-big.html",
		activityItemSmall: "templates/components/activityItem-small.html",
		clubItemTempSmall: "templates/components/clubItem-small.html",
		activityForm: "templates/components/activityform.html"
	},
	reqApi: {
		index: "/",
		activityList: "/activity/list",
		activityDetail: "/activity/detail",
		clubList: "/club/list",
		clubDetail: "/club/detail",
		userInfo: "/user/info",
		userInfoEdit: "/user/info/edit",
		accountActivity: "/user/activity/list",
		accountClub: "/user/club/list",
		userList: "/user/list",
		activityAdd: "/activity/add",
		activityEdit: "/activity/edit",
		clubAdd: "/club/add",
		clubEdit: "/club/edit",
		login: "/login",
		register: "/register"
	}
};

//for debug
window.badminton.config.debug = true;
window.badminton.config.domain = "http://dev.wushujin.com/badminton/fakeDatas";
window.badminton.config.reqApi = {
	index: "/",
	activityList: "/activity/list.php",
	activityDetail: "/activity/detail.php",
	clubList: "/club/list.php",
	clubDetail: "/club/detail.php",
	userInfo: "/user/info.php",
	userInfoEdit: "/user/infoEdit.php",
	accountActivity: "/user/activityList.php",
	accountClub: "/user/clubList.php",
	userList: "/user/list.php",
	activityAdd: "/activity/add.php",
	activityEdit: "/activity/edit.php",
	clubAdd: "/club/add.php",
	clubEdit: "/club/edit.php",
	login: "/login.php",
	register: "/register.php"
}