angular.module('tripTourApp')
.controller('SearchCtrl', function ($scope, $routeParams,$http) {
  $scope.query = $routeParams.query;

  $http.get('json/destinations.json').success(function(data) {

  $scope.destinations = data;

 });

});