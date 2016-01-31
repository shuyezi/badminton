angular.module('badminton.controllers.home', [])

.controller('HomeCtrl', function($scope, Home){
	$scope.home = {
		cover: {
			src: "img/homecover.jpg"
		},
		enters: [
			{
				name: "活动列表",
				text: "活动",
				href: "/activity",
				cover: ""
			},
			{
				name: "俱乐部列表",
				text: "俱乐部",
				href: "/club",
				cover: ""
			}
		]
	};
});