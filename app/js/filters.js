'use strict';

eventsApp.filter('durations', function(){
  return function(duration){
    switch (duration) {
      case 1:
        return 'Half Hour';
      case 2:
        return 'One Hour';
      case 3:
        return 'Half Day';
      case 4:
        return 'Full Day';
    }

  }
});
