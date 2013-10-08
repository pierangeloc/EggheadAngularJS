//create a module

var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.gusto = "Fragola"
});

app.directive('drink', function() {
    return {
        scope: {
            flavor: '=' //flavor gets the value from the $scope attribute whose name is specified in
                        //corresponding 'flavor' attribute value
        },
//        controller: function($scope) {
//            $scope.flavor = 'bananka'
//        },
        template: '<div>{{flavor}}</div>'

        //Equivalent effect having it done through the linking function
//        ,
//        link: function(scope, element, attrs, controller) {
//            scope.flavor = attrs.flavor;
//        }
    }
})

