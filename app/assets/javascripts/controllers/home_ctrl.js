angular.module('app.controllers.home', [])

.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.message = "Hello, world!"
}])