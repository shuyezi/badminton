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
			"id" => 1234,            //用户id
	        "cover" => "img/homecover.jpg",      //用户封面图
	        "nickname" => "小敏"    //用户昵称
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