//create a module

var app = angular.module("twitterApp", []);

app.controller("AppCtrl", function($scope){
    $scope.loadMoreTweets = function() {
        alert('Loading Tweets!');
    }

    $scope.deleteTweets = function() {
        alert('deleting tweets!');
    }
});

app.directive('enter', function() {
    return function(scope, element, attrs) {
        element.bind('mouseenter', function () {
           //scope.$apply("loadMoreTweets()"); //$apply parses the string, and applies it on the scope. we can use also substitutions with {{}}
            scope.$apply(attrs.enter);
        });
    }
})

app.directive('leave', function() {
    return function(scope, element, attrs) {
        element.bind('mouseleave', function () {
            //scope.$apply("loadMoreTweets()"); //$apply parses the string, and applies it on the scope. we can use also substitutions with {{}}
            scope.$apply(attrs.leave);
        });
    }
})