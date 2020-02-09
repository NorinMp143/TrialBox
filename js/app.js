myApp = angular.module("ngapp",['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:"./home.html",
		controller:"home"
	});
});
myApp.controller("home",['$scope',function(s){
	s.name="hello";
}]);