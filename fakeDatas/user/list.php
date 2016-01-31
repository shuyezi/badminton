<?php 
	include "../header.php"; 
	include "../Json.php";
?>

<?php
	// $id = $_REQUEST['id'] ? ('user_' . $_REQUEST['id']) : 'user_1';
	$id = 'user';
	// ======================
	// 请求结果数据
	// ======================
	$oriData = array(
		"user" => array(
			array(
				"avatar" => "img/activity.jpg",
				"name" => "小黄小黄",
				"permission" => 1
			),
			array(
				"avatar" => "img/activity.jpg",
				"name" => "小红小红",
				"permission" => 2
			),
			array(
				"avatar" => "img/activity.jpg",
				"name" => "小吴小吴",
				"permission" => 3
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