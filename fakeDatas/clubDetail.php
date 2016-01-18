<?php 
	include "./header.php"; 
	include "./Json.php";
?>

<?php
	$id = $_REQUEST['id'];

	$data = array(
		"c1" => array(
			"id" => 1,
			"isOwner" => false,//是否该俱乐部的管理员
			"isMember" => true,//是否已经加入了俱乐部(即成为俱乐部成员)
			"name" => "源深俱乐部",
			"area" => "大浦东",
			"time" => "每周日上午10点",
			"members" => 250,
			"intro" => "这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群",
		    "activity" => array(
				array(
					"id" => 1,
					"isApplied" => true,  //是否已报名
					"permission" => 1, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
					"showdetail" => false,
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
					"isApplied" => true,  //是否已报名
					"permission" => 2, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 3,
					"isApplied" => false,  //是否已报名
					"permission" => 0, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 4,
					"isApplied" => true,  //是否已报名
					"permission" => 3, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 5,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				)
			)
		),
		"c2" => array(
			"id" => 2,
			"isOwner" => false,//是否该俱乐部的管理员
			"isMember" => false,//是否已经加入了俱乐部(即成为俱乐部成员)，isOwner为true是该值为null
			"name" => "复旦俱乐部",
			"area" => "徐汇徐汇",
			"time" => "每周六全天",
			"members" => 150,
			"intro" => "这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群",
			"activity" => array(
				array(
					"id" => 1,
					"showdetail" => false,
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
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 3,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 4,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 5,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				)
	        )
	    ),
		"c3" => array(
			"id" => 3,
			"isOwner" => false,//是否该俱乐部的管理员
			"isMember" => true,//是否已经加入了俱乐部(即成为俱乐部成员)，isOwner为true是该值为null
			"isApplied" => true,
			"permission" => 1, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
			"name" => "复旦俱乐部",
			"area" => "徐汇徐汇",
			"time" => "每周六全天",
			"members" => 150,
			"intro" => "这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群",
			"activity" => array(
				array(
					"id" => 1,
					"showdetail" => false,
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
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 3,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 4,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 5,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				)
			)
    	),
		"c4" => array(
			"id" => 4,
			"isOwner" => true,//是否该俱乐部的管理员
			"isMember" => true,//是否已经加入了俱乐部(即成为俱乐部成员)，isOwner为true是该值为null
			"isApplied" => true,
			"permission" => 2, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
			"name" => "复旦俱乐部",
			"area" => "徐汇徐汇",
			"time" => "每周六全天",
			"members" => 150,
			"intro" => "这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群",
			"activity" => array(
				array(
					"id" => 1,
					"showdetail" => false,
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
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 3,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 4,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 5,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				)
			)
		),
		"c5" => array(
			"id" => 5,
			"isOwner" => false,//是否该俱乐部的管理员
			"isMember" => true,//是否已经加入了俱乐部(即成为俱乐部成员)，isOwner为true是该值为null
			"isApplied" => true,
			"permission" => 2, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
			"name" => "复旦俱乐部",
			"area" => "徐汇徐汇",
			"time" => "每周六全天",
			"members" => 150,
			"intro" => "这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群",
			"activity" => array(
				array(
					"id" => 1,
					"showdetail" => false,
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
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 3,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 4,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				),
				array(
					"id" => 5,
					"showdetail" => false,
					"desc" => "羽毛球是一种气质的",
					"cover" => "img/activity.jpg",
					"area" => "浦东南路上南路250号",
					"time" => "每周日上午10:00~12:00"
				)
			)
		)
	);
	
	echo Json::run($data[$id]);

?>