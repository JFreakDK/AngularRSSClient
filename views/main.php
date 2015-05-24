<div ng-controller="FeedController" ng-init="load()">
  <span>
    <ul class="nav nav-pills nav-stacked">
      <li role="presentation" ng-class="{ 'active' : (fType === '') }">
        <a href="" ng-click="setType('')" >Newest</a>
      </li>
      <li role="presentation" ng-class="{ 'active' : (fType === 'unread') }">
        <a href="" ng-click="setType('unread')">Unread</a>
      </li>
      <li role="presentation" ng-class="{ 'active' : (fType === 'starred') }">
        <a href="" ng-click="setType('starred')">Starred</a>
      </li>
    </ul>
  </span>
  <span>
      <div class="panel-group" id="accordion">
        <div ng-repeat="item in items">
          <div class="panel panel-default" id="{{ 'panel' + $index }}">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href="" ng-click="open($index)" ng-bind-html="item.title" ng-class="{ 'unread' : (item.unread === '1') }"></a> - <span ng-bind-html="item.sourcetitle"></span>
              </h4>
            </div>
            <div collapse="!item.isCollapsed">
              <div class="panel-body" ng-bind-html="item.content"></div>
              <div class="panel-footer" ><a ng-href="{{item.link}}">Open link</a></div>
            </div>
          </div>
        </div>
  </span>
</div>