angular.module('groupChatterApp').
  controller('RoomCtrl', ['$scope', function($scope){

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

  }]);
