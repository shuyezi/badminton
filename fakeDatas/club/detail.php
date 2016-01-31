<?php 
	include "../header.php"; 
	include "../Json.php";
?>

<?php
	$id = $_REQUEST['id'] ? ('club_' . $_REQUEST['id']) : 'club_1';
	// ======================
	// 请求结果数据
	// ======================
	$oriData = array(
		"club_1" => array(
			"id" => 1,
			"isOwner" => true,      //是否该活动创建者，是为true；当前用户有编辑修改的功能权限；不是为false
			"isMember" => true,    //是否为俱乐部成员，是为true；否为false，可以申请加入该俱乐部（isOwner==true时也为true：管理员也是成员之一）
            "cover" => "img/activity.jpg",   //俱乐部封面图
            "name" => "源深俱乐部",   		//俱乐部主题
            "area" => "上海市浦东源深体育馆",    //俱乐部地点
            "time" => "每周日上午10点-12点",    //俱乐部时间
            "members" => 10,					//俱乐部成员人数
            "intro" => "这个俱乐部啊，为交友为羽毛球的交流，也为歇息的周末",            //俱乐部简介
            "activity" => array(
            	array(
					"id" => 1,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "源深体育中心周日常规活动",   //活动主题
	                "area" => "上海市浦东源深体育馆",    //活动地点
	                "time" => "每周日上午10点-12点",    //活动时间
	                "joinersLimit" => 25,    //活动参与总人数
	                "joinersCurrent" => 12,   //目前活动报名人数
	                "intro" => "为交友为羽毛球的交流，也为歇息的周末"            //活动简介
				),
				array(
					"id" => 2,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "天山羽毛球群周六活动",   //活动主题
	                "area" => "上海市仙霞路古北路上海外经贸大学",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 18,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "土豪群，进群前需要审核审核审核"            //活动简介
				),
				array(
					"id" => 3,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "虹桥航华中学周日羽毛球活动",   //活动主题
	                "area" => "上海市闵行区航华中学",    //活动地点
	                "time" => "每周日下午6点-8点",    //活动时间
	                "joinersLimit" => 30,    //活动参与总人数
	                "joinersCurrent" => 20,   //目前活动报名人数
	                "intro" => "群里面都是高手哦"            //活动简介
				),
				array(
					"id" => 4,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "复旦中学羽毛球活动",   //活动主题
	                "area" => "上海市徐汇区复旦中学",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 15,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "交大人的群"            //活动简介
				),
				array(
					"id" => 5,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "动一动羽毛球馆活动",   //活动主题
	                "area" => "上海市浦东动一动羽毛球馆",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 25,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "也是高手也是高手"            //活动简介
				)
            )
		),
		"club_2" => array(
			"id" => 2,
			"isOwner" => false,      //是否该活动创建者，是为true；当前用户有编辑修改的功能权限；不是为false
			"isMember" => true,    //是否为俱乐部成员，是为true；否为false，可以申请加入该俱乐部（isOwner==true时也为true：管理员也是成员之一）
            "cover" => "img/activity.jpg",   //俱乐部封面图
            "name" => "天山俱乐部",   		//俱乐部主题
            "area" => "上海市仙霞路古北路",    //俱乐部地点
            "time" => "每周六上午10点-12点",    //俱乐部时间
            "members" => 80,					//俱乐部成员人数
            "intro" => "天山这个俱乐部啊，为交友为羽毛球的交流，也为歇息的周末",            //俱乐部简介
            "activity" => array(
            	array(
					"id" => 1,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "源深体育中心周日常规活动",   //活动主题
	                "area" => "上海市浦东源深体育馆",    //活动地点
	                "time" => "每周日上午10点-12点",    //活动时间
	                "joinersLimit" => 25,    //活动参与总人数
	                "joinersCurrent" => 12,   //目前活动报名人数
	                "intro" => "为交友为羽毛球的交流，也为歇息的周末"            //活动简介
				),
				array(
					"id" => 2,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "天山羽毛球群周六活动",   //活动主题
	                "area" => "上海市仙霞路古北路上海外经贸大学",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 18,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "土豪群，进群前需要审核审核审核"            //活动简介
				),
				array(
					"id" => 3,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "虹桥航华中学周日羽毛球活动",   //活动主题
	                "area" => "上海市闵行区航华中学",    //活动地点
	                "time" => "每周日下午6点-8点",    //活动时间
	                "joinersLimit" => 30,    //活动参与总人数
	                "joinersCurrent" => 20,   //目前活动报名人数
	                "intro" => "群里面都是高手哦"            //活动简介
				),
				array(
					"id" => 4,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "复旦中学羽毛球活动",   //活动主题
	                "area" => "上海市徐汇区复旦中学",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 15,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "交大人的群"            //活动简介
				),
				array(
					"id" => 5,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "动一动羽毛球馆活动",   //活动主题
	                "area" => "上海市浦东动一动羽毛球馆",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 25,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "也是高手也是高手"            //活动简介
				)
            )
		),
		"club_3" => array(
			"id" => 3,
			"isOwner" => false,      //是否该活动创建者，是为true；当前用户有编辑修改的功能权限；不是为false
			"isMember" => false,    //是否为俱乐部成员，是为true；否为false，可以申请加入该俱乐部（isOwner==true时也为true：管理员也是成员之一）
            "isApplied" => true,   //是否申请加入俱乐部，是为true；否为false（isOwner和isMember同时为false的时候才出现）
            "permission" => 1,       //1已申请，未审核；2已申请，通过审核（此时isMember为true）；3已申请，未通过审核（isOwner和isMember同时为false的时候才出现）
            "cover" => "img/activity.jpg",   //俱乐部封面图
            "name" => "复旦中学俱乐部",   		//俱乐部主题
            "area" => "上海市徐汇区复旦中学",    //俱乐部地点
            "time" => "每周六上午10点-12点",    //俱乐部时间
            "members" => 40,					//俱乐部成员人数
            "intro" => "复旦中学这个羽毛球群，为交友为羽毛球的交流，也为歇息的周末",            //俱乐部简介
            "activity" => array(
            	array(
					"id" => 1,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "源深体育中心周日常规活动",   //活动主题
	                "area" => "上海市浦东源深体育馆",    //活动地点
	                "time" => "每周日上午10点-12点",    //活动时间
	                "joinersLimit" => 25,    //活动参与总人数
	                "joinersCurrent" => 12,   //目前活动报名人数
	                "intro" => "为交友为羽毛球的交流，也为歇息的周末"            //活动简介
				),
				array(
					"id" => 2,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "天山羽毛球群周六活动",   //活动主题
	                "area" => "上海市仙霞路古北路上海外经贸大学",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 18,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "土豪群，进群前需要审核审核审核"            //活动简介
				),
				array(
					"id" => 3,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "虹桥航华中学周日羽毛球活动",   //活动主题
	                "area" => "上海市闵行区航华中学",    //活动地点
	                "time" => "每周日下午6点-8点",    //活动时间
	                "joinersLimit" => 30,    //活动参与总人数
	                "joinersCurrent" => 20,   //目前活动报名人数
	                "intro" => "群里面都是高手哦"            //活动简介
				),
				array(
					"id" => 4,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "复旦中学羽毛球活动",   //活动主题
	                "area" => "上海市徐汇区复旦中学",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 15,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "交大人的群"            //活动简介
				),
				array(
					"id" => 5,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "动一动羽毛球馆活动",   //活动主题
	                "area" => "上海市浦东动一动羽毛球馆",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 25,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "也是高手也是高手"            //活动简介
				)
            )
		),
		"club_4" => array(
			"id" => 4,
			"isOwner" => false,      //是否该活动创建者，是为true；当前用户有编辑修改的功能权限；不是为false
			"isMember" => false,    //是否为俱乐部成员，是为true；否为false，可以申请加入该俱乐部（isOwner==true时也为true：管理员也是成员之一）
            "isApplied" => true,   //是否申请加入俱乐部，是为true；否为false（isOwner和isMember同时为false的时候才出现）
            "permission" => 3,       //1已申请，未审核；2已申请，通过审核（此时isMember为true）；3已申请，未通过审核（isOwner和isMember同时为false的时候才出现）
            "cover" => "img/activity.jpg",   //俱乐部封面图
            "name" => "动一动羽毛球俱乐部",   		//俱乐部主题
            "area" => "上海市浦东动一动羽毛球馆",    //俱乐部地点
            "time" => "每周六上午10点-12点",    //俱乐部时间
            "members" => 40,					//俱乐部成员人数
            "intro" => "复旦中学这个羽毛球群，为交友为羽毛球的交流，也为歇息的周末",            //俱乐部简介
            "activity" => array(
            	array(
					"id" => 1,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "源深体育中心周日常规活动",   //活动主题
	                "area" => "上海市浦东源深体育馆",    //活动地点
	                "time" => "每周日上午10点-12点",    //活动时间
	                "joinersLimit" => 25,    //活动参与总人数
	                "joinersCurrent" => 12,   //目前活动报名人数
	                "intro" => "为交友为羽毛球的交流，也为歇息的周末"            //活动简介
				),
				array(
					"id" => 2,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "天山羽毛球群周六活动",   //活动主题
	                "area" => "上海市仙霞路古北路上海外经贸大学",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 18,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "土豪群，进群前需要审核审核审核"            //活动简介
				),
				array(
					"id" => 3,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "虹桥航华中学周日羽毛球活动",   //活动主题
	                "area" => "上海市闵行区航华中学",    //活动地点
	                "time" => "每周日下午6点-8点",    //活动时间
	                "joinersLimit" => 30,    //活动参与总人数
	                "joinersCurrent" => 20,   //目前活动报名人数
	                "intro" => "群里面都是高手哦"            //活动简介
				),
				array(
					"id" => 4,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "复旦中学羽毛球活动",   //活动主题
	                "area" => "上海市徐汇区复旦中学",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 15,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "交大人的群"            //活动简介
				),
				array(
					"id" => 5,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "动一动羽毛球馆活动",   //活动主题
	                "area" => "上海市浦东动一动羽毛球馆",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 25,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "也是高手也是高手"            //活动简介
				)
            )
		),
		"club_5" => array(
			"id" => 5,
			"isOwner" => false,      //是否该活动创建者，是为true；当前用户有编辑修改的功能权限；不是为false
			"isMember" => false,    //是否为俱乐部成员，是为true；否为false，可以申请加入该俱乐部（isOwner==true时也为true：管理员也是成员之一）
            "isApplied" => false,   //是否申请加入俱乐部，是为true；否为false（isOwner和isMember同时为false的时候才出现）
            "permission" => 1,       //1已申请，未审核；2已申请，通过审核（此时isMember为true）；3已申请，未通过审核（isOwner和isMember同时为false的时候才出现）
            "cover" => "img/activity.jpg",   //俱乐部封面图
            "name" => "虹桥航华中学俱乐部",   		//俱乐部主题
            "area" => "上海市闵行区航华中学",    //俱乐部地点
            "time" => "每周日下午6点-8点",    //俱乐部时间
            "members" => 80,					//俱乐部成员人数
            "intro" => "虹桥航华中学这个羽毛球群，为交友为羽毛球的交流，也为歇息的周末",            //俱乐部简介
            "activity" => array(
            	array(
					"id" => 1,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "源深体育中心周日常规活动",   //活动主题
	                "area" => "上海市浦东源深体育馆",    //活动地点
	                "time" => "每周日上午10点-12点",    //活动时间
	                "joinersLimit" => 25,    //活动参与总人数
	                "joinersCurrent" => 12,   //目前活动报名人数
	                "intro" => "为交友为羽毛球的交流，也为歇息的周末"            //活动简介
				),
				array(
					"id" => 2,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "天山羽毛球群周六活动",   //活动主题
	                "area" => "上海市仙霞路古北路上海外经贸大学",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 18,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "土豪群，进群前需要审核审核审核"            //活动简介
				),
				array(
					"id" => 3,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "虹桥航华中学周日羽毛球活动",   //活动主题
	                "area" => "上海市闵行区航华中学",    //活动地点
	                "time" => "每周日下午6点-8点",    //活动时间
	                "joinersLimit" => 30,    //活动参与总人数
	                "joinersCurrent" => 20,   //目前活动报名人数
	                "intro" => "群里面都是高手哦"            //活动简介
				),
				array(
					"id" => 4,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "复旦中学羽毛球活动",   //活动主题
	                "area" => "上海市徐汇区复旦中学",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 15,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "交大人的群"            //活动简介
				),
				array(
					"id" => 5,
	                "cover" => "img/activity.jpg",   //活动封面图
	                "theme" => "动一动羽毛球馆活动",   //活动主题
	                "area" => "上海市浦东动一动羽毛球馆",    //活动地点
	                "time" => "每周六上午10点-12点",    //活动时间
	                "joinersLimit" => 25,    //活动参与总人数
	                "joinersCurrent" => 10,   //目前活动报名人数
	                "intro" => "也是高手也是高手"            //活动简介
				)
            )
		)
	);

	$res = array( "obj" => $oriData[$id] );

	// ======================
	// 请求结果状态
	// ======================
	$success = 1;
	$status = array( "success" => $success );
	$errmsg = array( "msg" => "报错了" );

	$outArr = $success == 1 ? array_merge($status, $res) : array_merge($status, $errmsg);
	
	echo Json::run($outArr);
?>