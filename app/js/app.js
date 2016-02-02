var app = angular.module("tripTourApp", ['ngRoute','720kb.socialshare']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/destination-list.html', 
        controller: 'DestinationListCtrl'  
      }).
      when('/destination', {
        templateUrl: 'partials/destination-pays-list.html', 
        controller: 'DestinationPaysListCtrl'  
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
        redirectTo: '/home'
      });
  }]);
