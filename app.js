/// <reference path="typings/angularjs/angular.d.ts"/>
(function () {
  var app = angular.module('rssReader', ['ngAnimate', 'ngRoute', 'ngSanitize', 'ui.bootstrap']);
  app.value('feedType', 'unread');
  app.value('url', '/selfoss');
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
      controller: 'LoginController',
      templateUrl: '/AngularRSSClient/views/login.php'
    })
      .when('/main', {
      controller: 'FeedController',
      templateUrl: '/AngularRSSClient/views/main.php'
    })
      .when('/404', {
      templateUrl: '/AngularRSSClient/views/404.html'
    })
      .otherwise({
      redirectTo: '/404'
    });
  });
  app.config(function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  });
  app.controller('LoginController', function ($scope, $http, $location, url, credentials) {
    $scope.submit = function () {
      $http.get(url + '/login', { params: { username: $scope.username, password: $scope.password } })
        .then(function (response) {
        if (response.data.success) {
          credentials.username = $scope.username;
          credentials.password = $scope.password;
          $location.path('/main');
        } else {
          $scope.question = 'Wrong';
        };
      }, function (response) {
          $scope.notice = response.status + " " + response.data.error;
        });
    };
  });
  app.controller('FeedController', function ($scope, $http, $log, url, feedType, credentials) {
    $scope.items = {};
    $scope.load = function () {
      var parameters = { params: { username: credentials.username, password: credentials.password } };
      if (feedType !== '') {
        parameters.params.type = feedType;
      }
      $scope.fType = feedType;
      $http.get(url + '/items', parameters)
        .then(function (response) {
        $scope.items = response.data;
      }, function (response) {
          $scope.notice = response.status + " " + response.data.error;
        });
    };
    $scope.open = function (index) {
      var item = $scope.items[index];
      item.isCollapsed = !item.isCollapsed;
      if (item.unread === '1') {
        $http.post(url + '/mark/' + item.id, { params: { username: credentials.username, password: credentials.password } })
          .then(function (response) {
          item.unread = '0';
        }, function (response) {
            $scope.notice = response.status + " " + response.data.error;
          });
      };
    };
    $scope.setType = function (selectedType) {
      feedType = selectedType;
      $scope.load();
    };
  });
  app.service('credentials', function () {
    this.username = null;
    this.password = null;
  });

})();
