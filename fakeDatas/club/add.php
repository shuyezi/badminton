<?php 
	include "../header.php"; 
	include "../Json.php";
?>

<?php
	$name = isset($_REQUEST['name']) ? $_REQUEST["name"] : "";
	$time = isset($_REQUEST['time']) ? $_REQUEST["time"] : "";
	$area = isset($_REQUEST['area']) ? $_REQUEST["area"] : "";
	$members = isset($_REQUEST['members']) ? $_REQUEST["members"] : "";
	$intro = isset($_REQUEST['intro']) ? $_REQUEST["intro"] : "";
	// ======================
	// 请求结果数据
	// ======================
	$res = array(
		"obj" => array(
			"name" => $name,
			"time" => $time,
			"area" => $area,
			"members" => $members,
			"intro" => $intro
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