var app = angular.module("tripTourApp", ['ngRoute']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/destination', {
        templateUrl: 'partials/destination-list.html', 
        controller: 'DestinationListCtrl'  
      }).
      when('/destination/:id', {
        templateUrl: 'partials/destination-detail.html',
        controller: 'DestinationDetailCtrl'
      }).
      when('/infos', {
        templateUrl: 'partials/info.html',
        controller: 'InfoCtrl'
      }).
      when('/recherche/:query', {
        templateUrl: 'partials/recherche.html',
        controller: 'SearchCtrl'
      }).
      otherwise({
        redirectTo: '/destination'
      });
  }]);