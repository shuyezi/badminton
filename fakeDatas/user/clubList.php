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
					"isOwner" => true,				 //是否为该俱乐部创建者，是为true；否为false
	                "cover" => "img/activity.jpg",   //俱乐部封面图
	                "name" => "源深俱乐部",   		//俱乐部主题
	                "area" => "上海市浦东源深体育馆",    //俱乐部地点
	                "time" => "每周日上午10点-12点",    //俱乐部时间
	                "members" => 100,					//俱乐部成员人数
	                "intro" => "这个俱乐部啊，为交友为羽毛球的交流，也为歇息的周末"            //俱乐部简介
				),
				array(
					"id" => 2,
	                "cover" => "img/activity.jpg",   //俱乐部封面图
	                "name" => "天山俱乐部",   		//俱乐部主题
	                "area" => "上海市仙霞路古北路",    //俱乐部地点
	                "time" => "每周六上午10点-12点",    //俱乐部时间
	                "members" => 80,					//俱乐部成员人数
	                "intro" => "天山这个俱乐部啊，为交友为羽毛球的交流，也为歇息的周末"            //俱乐部简介
				),
				array(
					"id" => 3,
	                "cover" => "img/activity.jpg",   //俱乐部封面图
	                "name" => "复旦中学俱乐部",   		//俱乐部主题
	                "area" => "上海市徐汇区复旦中学",    //俱乐部地点
	                "time" => "每周六上午10点-12点",    //俱乐部时间
	                "members" => 40,					//俱乐部成员人数
	                "intro" => "复旦中学这个羽毛球群，为交友为羽毛球的交流，也为歇息的周末"            //俱乐部简介
				),
				array(
					"id" => 4,
	                "cover" => "img/activity.jpg",   //俱乐部封面图
	                "name" => "动一动羽毛球俱乐部",   		//俱乐部主题
	                "area" => "上海市浦东动一动羽毛球馆",    //俱乐部地点
	                "time" => "每周六上午10点-12点",    //俱乐部时间
	                "members" => 40,					//俱乐部成员人数
	                "intro" => "复旦中学这个羽毛球群，为交友为羽毛球的交流，也为歇息的周末"            //俱乐部简介
				),
				array(
					"id" => 4,
	                "cover" => "img/activity.jpg",   //俱乐部封面图
	                "name" => "虹桥航华中学俱乐部",   		//俱乐部主题
	                "area" => "上海市闵行区航华中学",    //俱乐部地点
	                "time" => "每周日下午6点-8点",    //俱乐部时间
	                "members" => 80,					//俱乐部成员人数
	                "intro" => "虹桥航华中学这个羽毛球群，为交友为羽毛球的交流，也为歇息的周末"            //俱乐部简介
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