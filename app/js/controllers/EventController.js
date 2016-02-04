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
        duration: '1hr',
        level: 'Advanced',
        upvoteCount: 0
      },
      {
        name: 'Scope for Fun and Profit',
        creatorName: 'John Doe',
        duration: '30min',
        level: 'Introductory',
        upvoteCount: 0
      },
      {
        name: 'Well Behaved Controllers',
        creatorName: 'Jane Doe',
        duration: '2hr',
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

});
