<?php
	include "./header.php"; 
	include "./Json.php";
?>

<?php
	
	$data1 = array(
		"pageName" => "即将开始",
		"type" => 1,
		"list" => array(
			array(
				"id" => 1,
				"isPrivate" => true,
				"desc" => "羽毛球是一种气质的",
				"area" => "浦东南路上南路250号",
				"time" => "每周日上午10:00~12:00",
				"counter" => "18/20",
				"fee" => "35元/人",
				"cover" => "img/activity.jpg",
				"extra" => "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
			),
			array(
				"id" => 2,
				"isPrivate" => false,
				"isCanceled" => false,
				"desc" => "羽毛球是一种气质的",
				"area" => "浦东南路上南路250号",
				"time" => "每周日上午10:00~12:00",
				"counter" => "18/20",
				"fee" => "35元/人",
				"cover" => "img/activity.jpg",
				"extra" => "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
			)
		)
	);

	$data2 = array(
		"pageName" => "已结束",
		"type" => 2,
		"list" => array(
			array(
				"id" => 1,
				"isPrivate" => true,
				"isOver" => true,
				"desc" => "羽毛球是一种气质的222",
				"area" => "浦东南路上南路250号",
				"time" => "每周日上午10:00~12:00",
				"counter" => "18/20",
				"fee" => "35元/人",
				"cover" => "img/activity.jpg",
				"extra" => "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
			),
			array(
				"id" => 1,
				"isPrivate" => false,
				"isOver" => true,
				"desc" => "羽毛球是一种气质的222",
				"area" => "浦东南路上南路250号",
				"time" => "每周日上午10:00~12:00",
				"counter" => "18/20",
				"fee" => "35元/人",
				"cover" => "img/activity.jpg",
				"extra" => "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
			)
		)
	);

	echo Json::run(array($data1, $data2));
?>