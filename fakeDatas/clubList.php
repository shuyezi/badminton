<?php 
	include "./header.php"; 
	include "./Json.php";
?>

<?php

	$data = array(
		"name" => "俱乐部列表", 
		"list" => array(
			array(
				"id" => 1,
		        "name" => "源深俱乐部",
		        "time" => "每周日上午10点",
		        "area" => "浦东浦东",
		        "members" => 150,
		        "cover" => "img/activity.jpg",
		        "intro" => "这是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群"
			),
			array(
				"id" => 2,
		        "name" => "复旦俱乐部",
		        "time" => "每周六全天",
		        "area" => "徐汇徐汇",
		        "cover" => "img/activity.jpg",
		        "members" => 250,
		        "intro" => "这也是一个羽毛球群"
			),
			array(
				"id" => 3,
		        "name" => "傻逼俱乐部",
		        "time" => "整个礼拜",
		        "area" => "徐汇徐汇",
		        "cover" => "img/activity.jpg",
		        "members" => 50,
		        "intro" => "这也是一个羽毛球群"
			),
			array(
				"id" => 4,
		        "name" => "傻逼俱乐部",
		        "time" => "整个礼拜aaaaaaaaaaaaaaaaaaaa",
		        "area" => "徐汇徐汇",
		        "cover" => "img/activity.jpg",
		        "members" => 50,
		        "intro" => "这也是一个羽毛球群"
			)
		)
	);

	echo Json::run($data);

?>