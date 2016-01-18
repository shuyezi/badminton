<?php 
	include "./header.php"; 
	include "./Json.php";
?>

<?php

	$data = array(
		"name" => "首页", 
		"cover" => array("src" => "img/homecover.jpg"),
		"enters" => array(
			array(
				"name" => "活动列表",
				"text" => "活动",
				"href" => "/activity",
				"cover" => ""
			),
			array(
				"name" => "俱乐部列表",
				"text" => "俱乐部",
				"href" => "/club",
				"cover" => ""
			)
		)
	);

	echo Json::run($data);

?>