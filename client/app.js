var app = angular.module('app', ['ngRoute']); 

app.config(function ($routeProvider) { 
    $routeProvider.
      when('/', { controller: travelListController, templateUrl: 'views/travelList/travelList.html' }).
      when('/travel/:id', { controller: travelController, templateUrl: 'views/travel/travel.html' }).
      otherwise({ redirectTo: '/' });
});

