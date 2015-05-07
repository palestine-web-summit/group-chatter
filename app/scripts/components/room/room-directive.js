
angular.module('groupChatterApp').
  directive('gcRoom', ['$rootScope', function($rootScope){
    return {
      controller: 'RoomCtrl',
      restrict: 'AE',
      replace: true,
      templateUrl: 'scripts/components/room/room.html'
    };
  }]);
