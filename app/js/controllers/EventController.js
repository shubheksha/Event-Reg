'use strict';

eventsApp.controller('EventController', function($scope, eventData){

  $scope.event = eventData.event;
  $scope.upvoteSession = function(session){
    session.upvoteCount++;
  }
  $scope.downvoteSession = function(session){
    session.upvoteCount--;
  }

  $scope.sortOrder = 'name';
  $scope.levels = '';

});
