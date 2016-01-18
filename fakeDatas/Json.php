<?php
	class Json {
		function __construct(){}

		static function run($array){
			return json_encode($array);
		}
	}

?>