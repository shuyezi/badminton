<?php 
	include "./header.php"; 
	include "./Json.php";
?>

<?php
	$id = $_REQUEST['id'];
	$data = array(
		"a1" => array(
			"name" => "羽毛器羽毛球",
			"id" => 1,
			"isApplied" => true,  //是否已报名
			"permission" => 1, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
			"showdetail" => false,
			"desc" => "羽毛球是一种气质的",
			"area" => "浦东南路上南路250号",
			"time" => "每周日上午10:00~12:00",
			"fee" => 35,
			"cover" => "img/activity.jpg",
			"extra" => "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息",
			"joinersLimit" => 20,
			"joinersCnt" => 7,
			"joiners" => array(
				array(
					"id" => 1,
					"name" => "小小",
					"cover" => "img/homecover.jpg"
				),
				array(
					"id" => 2,
					"name" => "小金小金小金小金小金",
					"cover" => "img/homecover.jpg"
				),
				array(
					"id" => 3,
					"name" => "小小3",
					"cover" => "img/homecover.jpg"
				),
				array(
					"id" => 4,
					"name" => "小小4",
					"cover" => "img/homecover.jpg"
				),
				array(
					"id" => 5,
					"name" => "小小5",
					"cover" => "img/homecover.jpg"
				),
				array(
					"id" => 6,
					"name" => "小小6",
					"cover" => "img/homecover.jpg"
				),
				array(
					"id" => 7,
					"name" => "小小7",
					"cover" => "img/homecover.jpg"
				)
			)
		),
		"a2" => array(
			"name" => "羽毛器羽毛球2",
			"id" => 2,
			"isApplied" => false,  //是否已报名
			"permission" => 0, //0未报名；1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
			"showdetail" => false,
			"desc" => "羽毛球是一种气质的",
			"cover" => "img/activity.jpg",
			"area" => "浦东南路上南路250号",
			"time" => "每周日上午10:00~12:00",
			"fee" => 315,
			"joinersLimit" => 20,
			"joinersCnt" => 5,
			"joiners" => array(
				array(
					"id" => 1,
					"name" => "树叶子",
					"cover" => "img/homecover.jpg"
				),
				array(
					"id" => 2,
					"name" => "树叶子",
					"cover" => "img/homecover.jpg"
				),
				array(
					"id" => 3,
					"name" => "树叶子",
					"cover" => "img/homecover.jpg"
				),
				array(
					"id" => 4,
					"name" => "树叶子",
					"cover" => "img/homecover.jpg"
				),
				array(
					"id" => 5,
					"name" => "树叶子",
					"cover" => "img/homecover.jpg"
				)
			)
		),
		"a3" => array(
			"name" => "羽毛器羽毛球3",
			"id" => 3,
			"isApplied" => true,  //是否已报名
			"permission" => 2, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
			"showdetail" => false,
			"desc" => "羽毛球是一种气质的",
			"cover" => "img/activity.jpg",
			"area" => "浦东南路上南路250号",
			"time" => "每周日上午10:00~12:00",
			"fee" => 45,
			"joinersLimit" => 20,
			"joinersCnt" => 0
		),
		"a4" => array(
			"name" => "羽毛器羽毛球4",
			"id" => 4,
			"isApplied" => true,  //是否已报名
			"permission" => 3, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
			"showdetail" => false,
			"desc" => "羽毛球是一种气质的",
			"cover" => "img/activity.jpg",
			"area" => "浦东南路上南路250号",
			"time" => "每周日上午10:00~12:00",
			"fee" => 25,
			"joinersLimit" => 20,
			"joinersCnt" => 0
		),
		"a5" => array(
			"name" => "羽毛器羽毛球5",
			"id" => 5,
			"showdetail" => false,
			"desc" => "羽毛球是一种气质的",
			"cover" => "img/activity.jpg",
			"area" => "浦东南路上南路250号",
			"time" => "每周日上午10:00~12:00",
			"fee" => 15,
			"joinersLimit" => 20,
			"joinersCnt" => 0
		)
	);

	echo Json::run($data[$id]);

?>