
angular.module('groupChatterApp').
  directive('gcUsersList', ['$rootScope', function($rootScope){
    return {
      controller: 'UsersListCtrl',
      restrict: 'AE',
      replace: true,
      templateUrl: 'scripts/components/users-list/users-list.html'
    };
  }]);
