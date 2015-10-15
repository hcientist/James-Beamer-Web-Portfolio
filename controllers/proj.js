'use strict';
angular.module('portfolio')
  .controller('ProjCtrl', function($scope, $routeParams, ProjectsService) {

    $scope.projects = ProjectsService.projects;

    if ($routeParams.hasOwnProperty('pid')) {
      $scope.selectedProject = $scope.projects[$routeParams.pid];
    }

  });