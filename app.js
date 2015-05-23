/// <reference path="typings/angularjs/angular.d.ts"/>
(function () {
  var app = angular.module('rssReader', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);
  app.value('usersname', null);
  app.value('password', null)
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
  app.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  });
  app.controller('LoginController', function ($scope, $http, $location, url, credentials) {
    $scope.submit = function () {
      $http.get(url + '/login', { params: { username: $scope.username, password: $scope.password } })
        .then(function (response) {
        if (response.data.success) {
          credentials.username = $scope.username;
          credentials.password = $scope.password;

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
  app.controller('FeedController', function ($scope, $http, $log, url, credentials) {
    $scope.items = {};
    $scope.load = function () {
      $http.get(url + '/items', { params: { /*type: 'unread', */ username: credentials.username, password: credentials.password } })
        .then(function (response) {
        $scope.items = response.data;
      }, function (response) {
          $scope.notice = response.status + " " + response.data.error;
        });
    };
    $scope.open = function (index) {
      var item = $scope.items[index];
      item.isCollapsed = !item.isCollapsed;
      $log.info('item.unread: ' + item.unread);
      if (item.unread === '1') {
        item.unread = '0';
        $log.info('item.unread after: ' + item.unread);
      }
    }
  });
  app.service('credentials', function () {
    this.username = null;
    this.password = null;
  });

})();
