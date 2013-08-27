var myApp = angular.module('myApp', []); //myApp has no dependencies

//myApp is a service, that can be injected in any model
//'Data' is the name of the instance, the function is the getter function of the factory. The object Data  is the one returned
// by the function
myApp.factory('Data', function(){
	return {message: "I'm being created by the service"};
});


function FirstCtrl($scope, Data) {
//	$scope.data = {message:"alert-box"}; //data is a json object
	$scope.data = Data;
}

function SecondCtrl($scope, Data) {
	$scope.data = Data;
}