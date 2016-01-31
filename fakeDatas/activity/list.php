<?php 
	include "../header.php"; 
	include "../Json.php";
?>

<?php
	// ======================
	// 请求结果数据
	// ======================
	$res = array(
		"obj" => array(
			"list" => array(
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

	// ======================
	// 请求结果状态
	// ======================
	$success = 1;
	$status = array( "success" => $success );
	$errmsg = array( "msg" => "报错了" );

	$outArr = $success == 1 ? array_merge($status, $res) : array_merge($status, $errmsg);
	
	echo Json::run($outArr);
?>