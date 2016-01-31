<?php 
	include "./header.php"; 
	include "./Json.php";
?>

<?php
	$username = isset($_REQUEST['username']) ? $_REQUEST["username"] : "";
	$password = isset($_REQUEST['password']) ? $_REQUEST["password"] : "";
	// ======================
	// 请求结果数据
	// ======================
	$res = array(
		"obj" => array(
			"username" => $username,
			"password" => $password
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