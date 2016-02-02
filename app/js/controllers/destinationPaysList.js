app.controller('DestinationPaysListCtrl',function($scope,$http ) {
	

	$http.get('json/destinations.json').success(function(data) {

	       $scope.destinations = data;

	   });


 });

