//create a module

var app = angular.module("choreApp", []);

/**
 * without a scope declared, the scope is shared between all the instances of this directive
 */
app.directive('messykid', function() {
    return {
        restrict: 'E',
        template: '<input type="text" ng-model="chore"/>{{chore}}'
    }
});

app.controller("ChoreCtrl", function($scope) {
   $scope.logChore = function(chore) {
       alert(chore + "is done!!");
   }
});

app.directive('kid', function() {
    return {
        restrict: 'E',
        scope: {
            done: '&'
        },
        template: '<input type="text" ng-model="chorez"/> ' +
            '{{chorez}}' +
            '<div class="button" ng-click="done({chore:chorez})"> I\'m done</div>'
    }
})