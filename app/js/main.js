var myApp = angular.module('myApp', []); //myApp has no dependencies

//myApp is a service, that can be injected in any model
//'Data' is the name of the instance, the function is the getter function of the factory. The object Data  is the one returned
// by the function
myApp.factory('Data', function(){
	return {message: "I'm being created by the service"};
});


//create a filter, name it 'reverse'. In the first function you just inject any stuff that might be needed in the filter
myApp.filter('reverse', function(Data) {
	return function(text) {
		return text.split("").reverse().join("***") + Data.message;
	};
});

function FirstCtrl($scope, Data) {
//	$scope.data = {message:"alert-box"}; //data is a json object
	$scope.data = Data;
	
	$scope.reversedMessage = function(message) {
		return message.split("").reverse().join("***");
	};
}

function SecondCtrl($scope, Data) {
	$scope.data = Data;
	//expose a reversedMessage function
	
}