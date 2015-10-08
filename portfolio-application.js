angular
  .module('portfolio', [
    'ngRoute',
    'ui.bootstrap',
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
      }).
      when('/bio', {
        templateUrl: 'Bio.html',
      }).
      when('/projects', {
        templateUrl: 'Projects.html',
        controller: 'ProjCtrl',
      }).
      when('/projects/:pid', {
        templateUrl: 'Projects.html',
        controller: 'ProjCtrl',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);