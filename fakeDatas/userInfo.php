<?php 
	include "./header.php"; 
	include "./Json.php";
?>

<?php

	$data = array(
		"name" => "树叶子"
	);

	echo Json::run($data);

?>