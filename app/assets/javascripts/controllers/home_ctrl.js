angular.module('app.controllers.home', [
  'app.services.home'
])

.controller('HomeCtrl', ['$scope', '$state', 'HomeService', function($scope, $state, HomeService) {
  HomeService.welcome({}, function(response) {
    $scope.message = response.message;
  })
}])