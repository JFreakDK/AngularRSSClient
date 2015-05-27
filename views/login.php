    <form ng-controller="LoginController">
      <div class="alert alert-danger" role="alert">
      {{notice}}    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="form-group">
        <label>{{question}}</label>
        <input type="text" class="form-control" ng-model="username" required>
        </input>
        <input type="password" class="form-control" ng-model="password" required>
        </input>
      </div>
      <button type="submit" class="btn btn-default btn-sm" ng-click="submit()">
        Submit
      </button>
    </form>
