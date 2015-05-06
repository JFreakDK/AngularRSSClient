/// <reference path="typings/angularjs/angular.d.ts"/>
(function () {
  var app = angular.module('rssReader', [])
    .value('url', 'https://home.vester.org/selfoss')
    .controller('LoginController', function ($scope, $http, url) {
    $http.get(url + '/login?username=')
      .then(function (response) {
      $scope.question = response.data;
    }, function (response) {
        $scope.notice = response.status + " " + response.data.error;
      });
  });
})();
