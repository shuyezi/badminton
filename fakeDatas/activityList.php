<?php 
	include "./header.php"; 
	include "./Json.php";
?>

<?php

	$activitys = array(
		"name" => "活动列表",
		"list" => array(
			array(
				"id" => 1,
		        "isApplied" => true,  //是否已报名
		        "permission" => 1, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
		        "showdetail" => false,
		        "desc" => "羽毛球是一种气质的",
		        "area" => "浦东南路上南路250号",
		        "time" => "每周日上午10:00~12:00",
		        "counter" => "18/20",
		        "fee" => "35元/人",
		        "cover" => "img/activity.jpg",
		        "joinersLimit" => 20,
		        "joinersCnt" => 7,
		        "extra" => "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
			),
			array(
				"id" => 2,
		        "isApplied" => false,  //是否已报名
		        "permission" => 0, //0未报名；1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
		        "showdetail" => false,
		        "desc" => "羽毛球是一种气质的",
		        "cover" => "img/activity.jpg",
		        "area" => "浦东南路上南路250号",
		        "joinersLimit" => 20,
		        "joinersCnt" => 5,
		        "time" => "每周日上午10:00~12:00"
			),
			array(
				"id" => 3,
		        "isApplied" => true,  //是否已报名
		        "permission" => 2, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
		        "showdetail" => false,
		        "desc" => "羽毛球是一种气质的",
		        "cover" => "img/activity.jpg",
		        "area" => "浦东南路上南路250号",
		        "joinersLimit" => 20,
		        "joinersCnt" => 0,
		        "time" => "每周日上午10:00~12:00"
			),
			array(
				"id" => 4,
		        "isApplied" => true,  //是否已报名
		        "permission" => 3, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
		        "showdetail" => false,
		        "desc" => "羽毛球是一种气质的",
		        "cover" => "img/activity.jpg",
		        "area" => "浦东南路上南路250号",
		        "joinersLimit" => 20,
		        "joinersCnt" => 0,
		        "time" => "每周日上午10:00~12:00"
			),
			array(
				"id" => 5,
		        "showdetail" => false,
		        "desc" => "羽毛球是一种气质的",
		        "cover" => "img/activity.jpg",
		        "area" => "浦东南路上南路250号",
		        "joinersLimit" => 20,
		        "joinersCnt" => 0,
		        "time" => "每周日上午10:00~12:00"
			)
		)
	);

	$clubNames = array("源深俱乐部", "天山俱乐部", "动一动俱乐部", "傻逼俱乐部");

	$data = array("activitys" => $activitys, "clubNames" => $clubNames);

	echo Json::run($data);

?>