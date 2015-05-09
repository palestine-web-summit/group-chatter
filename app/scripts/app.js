/**
* groupChatterApp Module
*
* Main Module for the group chatter app.
*/
angular.module('groupChatterApp', [
    'ngMaterial',
    'ngRoute',
    'ngAnimate',
    'ngAria',
    'ngMdIcons',
    'firebase'
  ]).constant('FIREBASE_URL', 'https://group-chatter.firebaseio.com/');
