angular.module('groupChatterApp').
  controller('UsersListCtrl', ['$scope', function($scope){

    var generateUsers = function(num) {
      var data = [];
      for (var i = 0; i < num; i++) {
        data.push({
          name: faker.name.findName(),
          avatar: faker.internet.avatar()
        });
      }

      return data;
    };

    $scope.users = generateUsers(150);
  }]);
