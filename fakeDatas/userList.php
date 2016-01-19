<?php 
	include "./header.php"; 
	include "./Json.php";
?>

<?php

	$data = array(
		"a1" => array(
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
		),
		"a2" => array(
			array(
				"avatar" => "img/activity.jpg",
				"name" => "小黄小黄2",
				"permission" => 2
			),
			array(
				"avatar" => "img/activity.jpg",
				"name" => "小红小红2",
				"permission" => 1
			),
			array(
				"avatar" => "img/activity.jpg",
				"name" => "小吴小吴2",
				"permission" => 3
			)
		),
		"c1" => array(
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
		),
		"c2" => array(
			array(
				"avatar" => "img/activity.jpg",
				"name" => "小黄小黄2",
				"permission" => 2
			),
			array(
				"avatar" => "img/activity.jpg",
				"name" => "小红小红2",
				"permission" => 1
			),
			array(
				"avatar" => "img/activity.jpg",
				"name" => "小吴小吴2",
				"permission" => 3
			)
		)
	);

	echo Json::run($data);

?>