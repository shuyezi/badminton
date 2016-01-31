<?php 
	include "../header.php"; 
	include "../Json.php";
?>

<?php
	$id = $_REQUEST['id'] ? ('activity_' . $_REQUEST['id']) : 'activity_1';
	// ======================
	// 请求结果数据
	// ======================
	$oriData = array(
		"activity_1" => array(
			"id" => 1,
	        "isOwner" => true,      //是否该活动创建者，是为true；当前用户有编辑修改的功能权限；不是为false
	        "fee" => 35,
            "cover" => "img/activity.jpg",   //活动封面图
            "theme" => "源深体育中心周日常规活动",   //活动主题
            "club" => "源深俱乐部",					//俱乐部名称
            "area" => "上海市浦东源深体育馆",    //活动地点
            "time" => "每周日上午10点-12点",    //活动时间
            "joinersLimit" => 25,    //活动参与总人数
            "joinersCurrent" => 12,   //目前活动报名人数
            "intro" => "为交友为羽毛球的交流，也为歇息的周末",            //活动简介
            "open" => true,												  //是否公开
            "type" => "联赛",											  //活动类型
            "joiners" => array(
				array( "id" => 1, "name" => "小小", "cover" => "img/homecover.jpg" ),
				array( "id" => 2, "name" => "小百", "cover" => "img/homecover.jpg" ),
				array( "id" => 3, "name" => "小白", "cover" => "img/homecover.jpg" ),
				array( "id" => 4, "name" => "小黑", "cover" => "img/homecover.jpg" ),
				array( "id" => 5, "name" => "小红", "cover" => "img/homecover.jpg" ),
				array( "id" => 6, "name" => "小花", "cover" => "img/homecover.jpg" ),
				array( "id" => 7, "name" => "小蓝", "cover" => "img/homecover.jpg" ),
				array( "id" => 8, "name" => "小率", "cover" => "img/homecover.jpg" ),
				array( "id" => 9, "name" => "小绿", "cover" => "img/homecover.jpg" ),
				array( "id" => 10, "name" => "小紫", "cover" => "img/homecover.jpg" ),
				array( "id" => 11, "name" => "小傻逼", "cover" => "img/homecover.jpg" ),
				array( "id" => 12, "name" => "小大", "cover" => "img/homecover.jpg" )
			)
		),
		"activity_2" => array(
			"id" => 2,
	        "isOwner" => false,      //是否该活动创建者，是为true；当前用户有编辑修改的功能权限；不是为false
	        "isApplied" => true,    //是否已经报名活动，是为true；否为false（isOwner==true时不返回）
	        "permission" => 1,    	//1已报名，未审核；2已报名，通过审核；3已报名，未通过审核（isOwner==true时不返回）
	        "fee" => 25,
            "cover" => "img/activity.jpg",   //活动封面图
            "theme" => "天山羽毛球群周六活动",   //活动主题
            "club" => "天山俱乐部",					//俱乐部名称
            "area" => "上海市仙霞路古北路上海外经贸大学",    //活动地点
            "time" => "每周六上午10点-12点",    //活动时间
            "joinersLimit" => 18,    //活动参与总人数
            "joinersCurrent" => 10,   //目前活动报名人数
            "intro" => "土豪群，进群前需要审核审核审核",            //活动简介
            "open" => true,												  //是否公开
            "type" => "常规",											  //活动类型
            "joiners" => array(
				array( "id" => 1, "name" => "小小", "cover" => "img/homecover.jpg" ),
				array( "id" => 2, "name" => "小百", "cover" => "img/homecover.jpg" ),
				array( "id" => 3, "name" => "小白", "cover" => "img/homecover.jpg" ),
				array( "id" => 4, "name" => "小黑", "cover" => "img/homecover.jpg" ),
				array( "id" => 5, "name" => "小红", "cover" => "img/homecover.jpg" ),
				array( "id" => 6, "name" => "小花", "cover" => "img/homecover.jpg" ),
				array( "id" => 7, "name" => "小蓝", "cover" => "img/homecover.jpg" ),
				array( "id" => 8, "name" => "小率", "cover" => "img/homecover.jpg" ),
				array( "id" => 9, "name" => "小绿", "cover" => "img/homecover.jpg" ),
				array( "id" => 10, "name" => "小紫", "cover" => "img/homecover.jpg" )
			)
		),
		"activity_3" => array(
			"id" => 3,
	        "isOwner" => false,      //是否该活动创建者，是为true；当前用户有编辑修改的功能权限；不是为false
	        "isApplied" => true,    //是否已经报名活动，是为true；否为false（isOwner==true时不返回）
	        "permission" => 2,    	//1已报名，未审核；2已报名，通过审核；3已报名，未通过审核（isOwner==true时不返回）
	        "fee" => 20,
			"cover" => "img/activity.jpg",   //活动封面图
			"theme" => "虹桥航华中学周日羽毛球活动",   //活动主题
            "club" => "虹桥航华中学俱乐部",					//俱乐部名称
			"area" => "上海市闵行区航华中学",    //活动地点
			"time" => "每周日下午6点-8点",    //活动时间
			"joinersLimit" => 30,    //活动参与总人数
			"joinersCurrent" => 20,   //目前活动报名人数
			"intro" => "群里面都是高手哦",            //活动简介
            "open" => true,												  //是否公开
            "type" => "常规",											  //活动类型
			"joiners" => array(
				array( "id" => 1, "name" => "小小", "cover" => "img/homecover.jpg" ),
				array( "id" => 2, "name" => "小百", "cover" => "img/homecover.jpg" ),
				array( "id" => 3, "name" => "小白", "cover" => "img/homecover.jpg" ),
				array( "id" => 4, "name" => "小黑", "cover" => "img/homecover.jpg" ),
				array( "id" => 5, "name" => "小红", "cover" => "img/homecover.jpg" ),
				array( "id" => 6, "name" => "小花", "cover" => "img/homecover.jpg" ),
				array( "id" => 7, "name" => "小蓝", "cover" => "img/homecover.jpg" ),
				array( "id" => 8, "name" => "小率", "cover" => "img/homecover.jpg" ),
				array( "id" => 9, "name" => "小绿", "cover" => "img/homecover.jpg" ),
				array( "id" => 10, "name" => "小紫", "cover" => "img/homecover.jpg" ),
				array( "id" => 11, "name" => "小小", "cover" => "img/homecover.jpg" ),
				array( "id" => 12, "name" => "小百", "cover" => "img/homecover.jpg" ),
				array( "id" => 13, "name" => "小白", "cover" => "img/homecover.jpg" ),
				array( "id" => 14, "name" => "小黑", "cover" => "img/homecover.jpg" ),
				array( "id" => 15, "name" => "小红", "cover" => "img/homecover.jpg" ),
				array( "id" => 16, "name" => "小花", "cover" => "img/homecover.jpg" ),
				array( "id" => 17, "name" => "小蓝", "cover" => "img/homecover.jpg" ),
				array( "id" => 18, "name" => "小率", "cover" => "img/homecover.jpg" ),
				array( "id" => 19, "name" => "小绿", "cover" => "img/homecover.jpg" ),
				array( "id" => 20, "name" => "小紫", "cover" => "img/homecover.jpg" )
			)
		),
		"activity_4" => array(
			"id" => 4,
	        "isOwner" => false,      //是否该活动创建者，是为true；当前用户有编辑修改的功能权限；不是为false
	        "isApplied" => true,    //是否已经报名活动，是为true；否为false（isOwner==true时不返回）
	        "permission" => 3,    	//1已报名，未审核；2已报名，通过审核；3已报名，未通过审核（isOwner==true时不返回）
	        "fee" => 10,
			"cover" => "img/activity.jpg",   //活动封面图
            "theme" => "复旦中学羽毛球活动",   //活动主题
            "club" => "虹桥航华中学俱乐部",					//俱乐部名称
            "area" => "上海市徐汇区复旦中学",    //活动地点
            "time" => "每周六上午10点-12点",    //活动时间
            "joinersLimit" => 15,    //活动参与总人数
            "joinersCurrent" => 10,   //目前活动报名人数
            "intro" => "交大人的群",            //活动简介
            "open" => true,												  //是否公开
            "type" => "常规",											  //活动类型
            "joiners" => array(
				array( "id" => 1, "name" => "小小", "cover" => "img/homecover.jpg" ),
				array( "id" => 2, "name" => "小百", "cover" => "img/homecover.jpg" ),
				array( "id" => 3, "name" => "小白", "cover" => "img/homecover.jpg" ),
				array( "id" => 4, "name" => "小黑", "cover" => "img/homecover.jpg" ),
				array( "id" => 5, "name" => "小红", "cover" => "img/homecover.jpg" ),
				array( "id" => 6, "name" => "小花", "cover" => "img/homecover.jpg" ),
				array( "id" => 7, "name" => "小蓝", "cover" => "img/homecover.jpg" ),
				array( "id" => 8, "name" => "小率", "cover" => "img/homecover.jpg" ),
				array( "id" => 9, "name" => "小绿", "cover" => "img/homecover.jpg" ),
				array( "id" => 10, "name" => "小紫", "cover" => "img/homecover.jpg" )
			)
		),
		"activity_5" => array(
			"id" => 5,
	        "isOwner" => false,      //是否该活动创建者，是为true；当前用户有编辑修改的功能权限；不是为false
	        "isApplied" => false,    //是否已经报名活动，是为true；否为false（isOwner==true时不返回）
	        "permission" => 1,    	//1已报名，未审核；2已报名，通过审核；3已报名，未通过审核（isOwner==true时不返回）
	        "fee" => 30,
			"cover" => "img/activity.jpg",   //活动封面图
            "theme" => "动一动羽毛球馆活动",   //活动主题
            "club" => "动一动羽毛球俱乐部",					//俱乐部名称
            "area" => "上海市浦东动一动羽毛球馆",    //活动地点
            "time" => "每周六上午10点-12点",    //活动时间
            "joinersLimit" => 25,    //活动参与总人数
            "joinersCurrent" => 10,   //目前活动报名人数
            "intro" => "也是高手也是高手",            //活动简介
            "open" => true,												  //是否公开
            "type" => "联赛",											  //活动类型
            "joiners" => array(
				array( "id" => 1, "name" => "小小", "cover" => "img/homecover.jpg" ),
				array( "id" => 2, "name" => "小百", "cover" => "img/homecover.jpg" ),
				array( "id" => 3, "name" => "小白", "cover" => "img/homecover.jpg" ),
				array( "id" => 4, "name" => "小黑", "cover" => "img/homecover.jpg" ),
				array( "id" => 5, "name" => "小红", "cover" => "img/homecover.jpg" ),
				array( "id" => 6, "name" => "小花", "cover" => "img/homecover.jpg" ),
				array( "id" => 7, "name" => "小蓝", "cover" => "img/homecover.jpg" ),
				array( "id" => 8, "name" => "小率", "cover" => "img/homecover.jpg" ),
				array( "id" => 9, "name" => "小绿", "cover" => "img/homecover.jpg" ),
				array( "id" => 10, "name" => "小紫", "cover" => "img/homecover.jpg" )
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