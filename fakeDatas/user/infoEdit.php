<?php 
	include "../header.php"; 
	include "../Json.php";
?>

<?php
	$cover = isset($_REQUEST['cover']) ? $_REQUEST["cover"] : "";
	$nickname = isset($_REQUEST['nickname']) ? $_REQUEST["nickname"] : "";
	// ======================
	// 请求结果数据
	// ======================
	$res = array(
		"obj" => array(
			"cover" => $cover,
			"nickname" => $nickname
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