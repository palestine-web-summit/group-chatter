angular.module('groupChatterApp').
  controller('RoomCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){

    var generateActivity = function(num) {
      var data = [];
      for (var i = 0; i < num; i++) {
        data.push({
          user: {
            name: faker.name.findName(),
            avatar: faker.internet.avatar()
          },
          message: faker.lorem.sentences(),
          when: faker.date.recent()
        });
      }

      return data;
    };

    $scope.activities = generateActivity(150);


    $scope.toggleSidenav = function(nav) {
      $mdSidenav(nav).toggle();
    };
  }]);
