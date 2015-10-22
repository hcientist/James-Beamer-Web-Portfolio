'use strict';
angular.module('portfolio')
  .controller('HomeCtrl', function($scope, ProjectsService) {
  	$scope.projectsService = ProjectsService;
  });