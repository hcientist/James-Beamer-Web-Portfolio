'use strict';
angular.module('portfolio')
  .controller('ProjCtrl', function($scope, $routeParams) {

    $scope.projects = [
      {
        name: 'Excess-Three Gray Code Counter',
        id: 0,
        image: 'images/project-idea.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit similique eius et, eveniet maxime culpa possimus, quasi asperiores. Maxime non earum eligendi. Culpa, totam reprehenderit iste, obcaecati magnam aspernatur!',
      },
      {
        name: 'IP Address Filter using Algorithms',
        id: 1,
        image: 'images/project-idea.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum neque quod itaque quisquam, nulla odio soluta aliquam repellendus pariatur velit eius, atque at reiciendis maxime impedit maiores, voluptatibus, voluptatem rem.',
      },
      {
        name: 'Image Processing Package w/ Stacks and Linked Lists',
        id: 2,
        image: 'images/project-idea.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas alias maiores quam voluptatum molestiae, fuga, vel, repudiandae expedita eaque accusamus minus repellat laboriosam, velit deserunt illo non a? Aperiam, quam!',
      },
      {
        name: 'Some Project',
        id: 3,
        image: 'images/project-idea.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate animi non, sunt dolorum aperiam ex eaque esse. Quia tempora sequi minus, aperiam deserunt illum. Exercitationem optio ullam fugit cum magnam.',
      },
      {
        name: 'News Article',
        id: 4,
        image: 'images/project-idea.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, doloribus, assumenda! Magni provident sunt maxime iste molestias nostrum dignissimos commodi quam eveniet voluptates pariatur fugit nisi enim, sint, natus blanditiis.',
      },
      {
        name: 'New Article',
        id: 5,
        image: 'images/project-idea.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis iusto quae saepe voluptas quas reiciendis, mollitia quos laboriosam. Sequi veritatis hic magnam recusandae corporis pariatur blanditiis cum distinctio dolorem autem.',
      },
    ];

    if ($routeParams.hasOwnProperty('pid')) {
      $scope.selectedProject = $scope.projects[$routeParams.pid];
    }

  });