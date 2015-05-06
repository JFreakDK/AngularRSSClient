/// <reference path="typings/angularjs/angular.d.ts"/>
(function () {
  angular.module('rssReader', [])
    .value('url', '/selfoss')
    .controller('LoginController', function ($scope, $http, url) {
    $scope.submit = function () {
      $http.get(url + '/login', { params: { username: $scope.username, password: $scope.password } })
        .then(function (response) {
        $scope.question = response.data;
      }, function (response) {
          $scope.notice = response.status + " " + response.data.error;
        });
    };
  });
})();
