angular.module('tripTourApp')
    .controller('HeaderCtrl', function ($scope, $location) {
        $scope.query = "";

        $scope.searchAction = function(){
            $location.path("/recherche/" + $scope.query);
        };
    });
