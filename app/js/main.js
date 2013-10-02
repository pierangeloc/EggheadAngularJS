//create a module
var app = angular.module('behaviorApp',[]);

//app.directive('enter', function() {
//   return {
//     restrict: "A",
//     link: function() {
//
//     }
//   } ;
//});

//if the only thing to do is adding  a linking function on an attribute directive, we can just return that function instead of the whole object
app.directive('enter', function() {
   return function(scope, element, attrs) {
       element.bind("mouseenter", function() {
           console.log('inside of elmement with Enter attribute!');
           element.addClass(attrs.enter);
       })
   }
});

app.directive('leave', function() {
    return function(scope, element, attrs) {
        element.bind("mouseleave", function() {
            console.log('I\'m leaving on a jet plane!');
            element.removeClass(attrs.enter);
        })
    }
});


var myApp = angular.module("twitterApp", []);

myapp.controller("AppCtrl", function($scope){
    $scope.loadMoreTweets = function() {
        alert('Loading Tweets!');
    }
});

myApp.directive('enter', function() {

})