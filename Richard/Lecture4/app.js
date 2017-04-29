(function() {
'use strict';

angular.module('myFirstApp', [])
.controller('MyFirstController', function($scope) {
      $scope.name = "Rolston";
      $scope.sayHello = function() {
        return "Hello Coursera!";
      };
});
})();
