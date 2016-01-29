var app = angular.module("tripTourApp");

app.controller('DestinationDetailCtrl', function($scope, $routeParams, $http) {

		$http.get('json/destinations.json').success(function(data) {

	       $scope.destinations = data;
    $scope.destination = $scope.destinations[$routeParams.id-1];

	   });



});
