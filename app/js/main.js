//create a module

var app = angular.module("superApp", []);

app.directive("superhero", function() {
   return {
       restrict: 'E',
       link: function(scope, element, attrs) {
           element.addClass('button');
           element.bind('mouseenter', function() {
               console.log(scope.abilities)
           });
       },
       scope: {}, //without this {}, the scope would be shared between the instances of the directive

       //here we build an api for other directives to talk with this one
       //other directives can call the addStrength()/addSpeed()/addFlight() through this shared controller that is passed to the linking function

       controller: function($scope) {
           $scope.abilities = [];
           this.addStrength = function() {
               $scope.abilities.push('strength')
           }

           this.addSpeed = function() {
               $scope.abilities.push('speed')
           }

           this.addFlight = function () {
               $scope.abilities.push('flight')
           }
       }
   }
});

app.directive("strength", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) { //controller is the one inherited from the required directive
            superheroCtrl.addStrength();
        }
    }
})

app.directive("speed", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) { //controller is the one inherited from the required directive
            superheroCtrl.addSpeed();
        }
    }
})

app.directive("flight", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) { //controller is the one inherited from the required directive
            superheroCtrl.addFlight();
        }
    }
})