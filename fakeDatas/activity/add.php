<?php 
	include "../header.php"; 
	include "../Json.php";
?>

<?php
	$theme = isset($_REQUEST['theme']) ? $_REQUEST["theme"] : "";
	$time = isset($_REQUEST['time']) ? $_REQUEST["time"] : "";
	$area = isset($_REQUEST['area']) ? $_REQUEST["area"] : "";
	$joinersLimit = isset($_REQUEST['joinersLimit']) ? $_REQUEST["joinersLimit"] : "";
	$fee = isset($_REQUEST['fee']) ? $_REQUEST["fee"] : "";
	$club = isset($_REQUEST['club']) ? $_REQUEST["club"] : "";
	$type = isset($_REQUEST['type']) ? $_REQUEST["type"] : "";
	$open = isset($_REQUEST['open']) ? $_REQUEST["open"] : "";
	$intro = isset($_REQUEST['intro']) ? $_REQUEST["intro"] : "";
	// ======================
	// 请求结果数据
	// ======================
	$res = array(
		"obj" => array(
			"theme" => $theme,
			"time" => $time,
			"area" => $area,
			"joinersLimit" => $joinersLimit,
			"fee" => $fee,
			"club" => $club,
			"type" => $type,
			"open" => $open,
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