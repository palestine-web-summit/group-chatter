angular.module('groupChatterApp').
  controller('RoomCtrl', ['$scope', '$mdSidenav', '$firebaseArray', 'FIREBASE_URL', function($scope, $mdSidenav, $firebaseArray, FIREBASE_URL){
    var ref = new Firebase(FIREBASE_URL + 'activities');

    $scope.activities = $firebaseArray(ref);

    var currentUser = {
      name: faker.name.findName(),
      avatar: faker.internet.avatar()
    };

    $scope.send = function(event, message, optActivity) {
      if (event.keyCode === 13) {
        if(optActivity) {
          ref.child(optActivity.$id).child('replies').push({
            user: currentUser,
            message: message,
            when: Firebase.ServerValue.TIMESTAMP
          });
        } else {
          $scope.activities.$add({
            user: currentUser,
            message: message,
            when: Firebase.ServerValue.TIMESTAMP
          });
        }
      }
    }

    $scope.toggleSidenav = function(nav) {
      $mdSidenav(nav).toggle();
    };
  }]);
