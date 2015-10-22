'use strict';
  angular.module('portfolio')
      .service('ProjectsService', ProjectsService);

  ProjectsService.$inject = ['$http'];
  function ProjectsService($http) {
    this.projects = [];
    this.loading = false;

    this.loadProjects = function () {
      return $http.get('/projects')
        .then(function (allProjects) {
          this.projects = this.projects.concat(allProjects.data);
          this.loading = false;
          // console.log(this.projects);
        }.bind(this));
    }

    this.getProjects = function () {
      if (this.projects.length === 0 && !this.loading) {
        this.loading = true;
        this.loadProjects();
      } else {
        // console.log('gopt else');
      }
      return this.projects;
    };
  }
