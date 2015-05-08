/// <reference path="typings/angularjs/angular.d.ts"/>
(function () {
  var app = angular.module('rssReader', ['ngRoute']);
  app.value('url', '/selfoss');
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
      controller: 'LoginController',
      templateUrl: '/AngularRSSClient/views/login.html'
    })
      .when('/main', {
      controller: 'LoginController',
      templateUrl: '/AngularRSSClient/views/main.html'
    })
      .when('/404', {
      templateUrl: '/AngularRSSClient/views/404.html'
    })
      .otherwise({
      redirectTo: '/404'
    });
  });
  app.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
  app.controller('LoginController', function ($scope, $http,  $location, url) {
    $scope.submit = function () {
      $http.get(url + '/login', { params: { username: $scope.username, password: $scope.password } })
        .then(function (response) {
        if (response.data.success) {
          $scope.question = 'Flot';
           $location.path('/main');
        } else {
          $scope.question = 'Wrong';
        };
      }, function (response) {
          $scope.notice = response.status + " " + response.data.error;
        });
    };
  });
})();
