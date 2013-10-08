//create a module

var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.gusto = "Fragola"
});

app.directive('drink', function() {
    return {
        scope: {
            flavor: '=' //evaluates the corresponding attribute
                        // from the directive (even if with {{}}) and assigns it to the flavor property of the scope
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

