<!DOCTYPE html>
<html ng-app="rssReader">
  
  <head>
    <base href="/AngularRSSClient/">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="app.css" />
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-sanitize.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.js"></script>
    <script src="ui-bootstrap-tpls-0.13.0.min.js"></script>
    <script src="app.js"></script>
  </head>
  
  <body>
    <div>
      <h3>
        <em>RSS Reader</em>
      </h3>
    </div>
    <div ng-view></div>
  </body>

</html>