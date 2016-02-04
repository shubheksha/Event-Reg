'use strict';

eventsApp.controller('EventController', function($scope){

  $scope.event = {
    name: 'AngularJS Fundamentals',
    date: '2/10/2016',
    time: '6:00 PM',
    location: {
      address: 'Google Headquaters',
      city: 'Mountain View',
      province: 'CA'
    },
    imgUrl: 'img/angularjs-logo.png',
    sessions: [
      {
        name: 'Directives Masterclass',
        creatorName: 'Bob Smith',
        duration: 1,
        level: 'Advanced',
        upvoteCount: 0
      },
      {
        name: 'Scope for Fun and Profit',
        creatorName: 'John Doe',
        duration: 2,
        level: 'Introductory',
        upvoteCount: 0
      },
      {
        name: 'Well Behaved Controllers',
        creatorName: 'Jane Doe',
        duration: 4,
        level: 'Intermediate',
        upvoteCount: 0

      }
    ]
}
  $scope.upvoteSession = function(session){
    session.upvoteCount++;
  }
  $scope.downvoteSession = function(session){
    session.upvoteCount--;
  }

  $scope.sortOrder = 'name';
  $scope.levels = '';

});
