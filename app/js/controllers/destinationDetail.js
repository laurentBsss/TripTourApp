app.controller('DestinationDetailCtrl', function($scope, $routeParams, $http, $location) {

		$http.get('json/destinations.json').success(function(data) {

	    $scope.destinations = data;
        $scope.destination = $scope.destinations[$routeParams.id-1];
        $scope.$location = $location;

	   });

});
