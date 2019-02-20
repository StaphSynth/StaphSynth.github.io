
var listApp = angular.module('todolistApp', []);

listApp.controller('todolistController', function(){
  var ctrl = this;
  ctrl.list = [];
  ctrl.priorities = [
    {
      id: 0,
      level: 'high'
    },
    {
      id: 1,
      level: 'med'
    },
    {
      id: 2,
      level: 'low'
    }
  ];
  ctrl.order ='priority,complete';
  ctrl.userTask = null;
  ctrl.userPriority = 0;
  ctrl.masterCompleted = false;

  //adds an item to the list
  ctrl.add = function() {
    if(ctrl.userTask == null)
      return false;

    priorityVal = parseInt(ctrl.userPriority);
    var item = {
      task: ctrl.userTask,
      priority: priorityVal,
      complete: false
    };
    ctrl.userTask = null;
    ctrl.list.unshift(item);
  };

  //deletes a selected list item.
  //pass it an item object to delete,
  //or pass "all" string to clear list
  ctrl.delete = function(item) {
    if(item === "all") { //obviosly for all items
      ctrl.list = [];
      return true;
    } else { //for specific items. search list for correct item and remove
      for(var i = 0; i < ctrl.list.length; i++) {
        if(ctrl.list[i].task === item.task) {
          ctrl.list.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  };

  //mark list item as complete
  //pass a list item object to mark
  //or pass string 'all' to mark whole list either complete or incomplete
  ctrl.complete = function(item) {
    if(item === 'all' && ctrl.masterCompleted == false) {
      for(var i = 0; i < ctrl.list.length; i++) {
        ctrl.list[i].complete = true;
      }
      ctrl.masterCompleted = true;
    } else if(item === 'all' && ctrl.masterCompleted == true) {
      for(var i = 0; i < ctrl.list.length; i++) {
        ctrl.list[i].complete = false;
      }
      ctrl.masterCompleted = false;
    } else {
    item.complete ? item.complete = false : item.complete = true;
    }
  };

  ctrl.getCompletedItems = function(type) {
    var complete = 0;
    var incomplete = 0;

    for(var i = 0; i < ctrl.list.length; i++) {
      if(ctrl.list[i].complete)
        complete++;
      else
        incomplete++;
    }

    if(type === 'complete')
      return complete;
    else if(type === 'incomplete')
      return incomplete;
  };

  //returns a string explaining number of items in list,
  //items complete, items incomplete, etc.
  ctrl.getReport = function() {
    var report = ctrl.list.length.toString();

    if(ctrl.list.length > 1)
      report += ' Tasks: ';
    else
      report += ' Task: ';

    report += ctrl.getCompletedItems('complete').toString();
    report += ' complete, ';
    report += ctrl.getCompletedItems('incomplete').toString();
    report += ' incomplete.';

    return report;
  };

  //flips the boolean item.editing flag on an item.
  //also sets all other item.editing to false, to prevent
  //editing multiple list items at once
  ctrl.editItem = function(item) {
    //if editing false, then set it true and all other editing flags to false
    //first set all item.editing to false to cancel any other open edits
    if(!item.editing) {
      for(var i = 0; i < ctrl.list.length; i++) {
        ctrl.list[i].editing = false;
      }
      //then set only this item.editing to true
      item.editing = true;
    } else { //if item.editing already true, set it to false
      item.editing = false;
    }
  };

}); //controller
