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
		clubItemTempSmall: "templates/components/clubItem-small.html"
	},
	reqApi: {
		index: "/",
		clubList: "",
		clubDetail: "",
		activityList: "",
		activityDetail: "",
		accountActivity: "",
		accountClub: "",
		userInfo: ""
	}
};

//for debug
window.badminton.config.debug = true;
window.badminton.config.domain = "http://dev.wushujin.com/badminton/fakeDatas";
window.badminton.config.reqApi = {
	index: "/",
	clubList: "/clubList.php",
	clubDetail: "/clubDetail.php",
	activityList: "/activityList.php",
	activityDetail: "/activityDetail.php",
	accountActivity: "/accountActivity.php",
	accountClub: "/accountClub.php",
	userInfo: "/userInfo.php",
	userList: "/userList.php"
}