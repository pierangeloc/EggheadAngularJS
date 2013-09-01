//create a module
var app = angular.module('superhero',[]);

//create a directive
app.directive('superman', function(){
	return {
		restrict: 'E', //restrict to ELEMENT
		template:"<div>Here I am to save the day</div>"
	}
})