//create a module
var app = angular.module('superhero',[]);

//create a directive
app.directive('superman', function(){
	return {
		restrict: 'A', //restrict to attribute, add feature to an existing element
		link: function() { //linking function, called when the attribute is encountered
			alert('I am working!'); 
		}
	}
})