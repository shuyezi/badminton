<?php 
	include "../header.php"; 
	include "../Json.php";
?>

<?php
	$type = isset($_REQUEST['type'])&&!empty($_REQUEST['type']) ? ('type_' . $_REQUEST['type']) : 'type_1';
	// ======================
	// 请求结果数据
	// ======================
	$oriData = array(
		"type_1" => array(
			array(
				"id" => 1,
				"isOwner" => true,				//是否是活动的创建者，是为true；否为false
				"isCanCancelled" => true,		//是否可以取消活动，是为true；否为false（tyep为1且isOwner为true时该字段有意义；距离活动开始时间大于24小时为true）
                "cover" => "img/activity.jpg",   //活动封面图
                "theme" => "源深体育中心周日常规活动",   //活动主题
                "area" => "上海市浦东源深体育馆",    //活动地点
                "time" => "每周日上午10点-12点",    //活动时间
                "joinersLimit" => 25,    //活动参与总人数
                "joinersCurrent" => 12,   //目前活动报名人数
                "intro" => "为交友为羽毛球的交流，也为歇息的周末",            //活动简介
                "joiners" => array()
			),
			array(
				"id" => 2,
				"isOwner" => false,				//是否是活动的创建者，是为true；否为false
				"permission" => 1,     //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核（isOwner==true时不返回）
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
				"isOwner" => false,				//是否是活动的创建者，是为true；否为false
				"permission" => 2,     //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核（isOwner==true时不返回）
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
				"isOwner" => false,				//是否是活动的创建者，是为true；否为false
				"permission" => 3,     //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核（isOwner==true时不返回）
                "cover" => "img/activity.jpg",   //活动封面图
                "theme" => "复旦中学羽毛球活动",   //活动主题
                "area" => "上海市徐汇区复旦中学",    //活动地点
                "time" => "每周六上午10点-12点",    //活动时间
                "joinersLimit" => 15,    //活动参与总人数
                "joinersCurrent" => 10,   //目前活动报名人数
                "intro" => "交大人的群"            //活动简介
			)
		),
		"type_2" => array(
			array(
				"id" => 1,
				"isOver" => true,				//是否活动结束，是为true；否为false
                "cover" => "img/activity.jpg",   //活动封面图
                "theme" => "源深体育中心周日常规活动22222222222222",   //活动主题
                "area" => "上海市浦东源深体育馆",    //活动地点
                "time" => "每周日上午10点-12点",    //活动时间
                "joinersLimit" => 25,    //活动参与总人数
                "joinersCurrent" => 12,   //目前活动报名人数
                "intro" => "为交友为羽毛球的交流，也为歇息的周末",            //活动简介
                "joiners" => array()
			),
			array(
				"id" => 2,
				"isOver" => true,				//是否活动结束，是为true；否为false
                "cover" => "img/activity.jpg",   //活动封面图
                "theme" => "天山羽毛球群周六活动22222222222222",   //活动主题
                "area" => "上海市仙霞路古北路上海外经贸大学",    //活动地点
                "time" => "每周六上午10点-12点",    //活动时间
                "joinersLimit" => 18,    //活动参与总人数
                "joinersCurrent" => 10,   //目前活动报名人数
                "intro" => "土豪群，进群前需要审核审核审核"            //活动简介
			),
			array(
				"id" => 3,
				"isOver" => true,				//是否活动结束，是为true；否为false
                "cover" => "img/activity.jpg",   //活动封面图
                "theme" => "虹桥航华中学周日羽毛球活动22222222222222",   //活动主题
                "area" => "上海市闵行区航华中学",    //活动地点
                "time" => "每周日下午6点-8点",    //活动时间
                "joinersLimit" => 30,    //活动参与总人数
                "joinersCurrent" => 20,   //目前活动报名人数
                "intro" => "群里面都是高手哦"            //活动简介
			),
			array(
				"id" => 4,
				"isOver" => true,				//是否活动结束，是为true；否为false
                "cover" => "img/activity.jpg",   //活动封面图
                "theme" => "复旦中学羽毛球活动22222222",   //活动主题
                "area" => "上海市徐汇区复旦中学",    //活动地点
                "time" => "每周六上午10点-12点",    //活动时间
                "joinersLimit" => 15,    //活动参与总人数
                "joinersCurrent" => 10,   //目前活动报名人数
                "intro" => "交大人的群"            //活动简介
			)
		)
	);
	$res = array(
		"obj" => array(
			"list" => $oriData[$type]
		)
	);

	// ======================
	// 请求结果状态
	// ======================
	$success = 1;
	$status = array( "success" => $success );
	$errmsg = array( "msg" => "报错了" );

	$outArr = $success == 1 ? array_merge($status, $res) : array_merge($status, $errmsg);
	
	echo Json::run($outArr);
?>