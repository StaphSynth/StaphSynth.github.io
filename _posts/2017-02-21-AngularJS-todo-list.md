---
layout: post
title: Much To-Do About Nothing
imageSource: /img/angularjs-logo.jpg
byline: Making a list and checking it twice...
category: coding
tags:
  - angular
  - javascript
  - development
  - portfolio
---

Inspired by playing with the [TodoMVC example](http://todomvc.com/examples/angularjs/#/), I decided my next AngularJS app would be a simple to-do list.

I've added a couple of extra features, including a task priority property and the ability to sort the list by priority level or state of completion. The app is mostly finished, but one thing I'm still reading up on is how to get it to continually save the task list object to a browser cookie as changes are being made so all additions are retained for when the user returns to the page.

The above TodoMVC example uses an angular service to accoumplish this task, but I'm still not entirely sure how that works, so it's my next area of study.

{% raw %}
<link rel="stylesheet" type="text/css" href="http://127.0.0.1:4000/css/todolist.css">
<link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
<script type="text/javascript" src="http://127.0.0.1:4000/js/todolist.js"></script>
<div class="angApp">
  <h2><center>To Do List</center></h2>
  <div id="todoAppRoot" ng-app="todolistApp">
    <div ng-controller="todolistController as ctrl">
      Order by:
      <select ng-model="ctrl.order">
        <option value="priority,complete">Priority</option>
        <option value="complete,priority">Completion</option>
      </select>
      <div id="inputContainer">
        <div class="priorityDiv">
          Priority:
          <select ng-options="priority.id as priority.level for priority in ctrl.priorities" class="prioritySelect" ng-model="ctrl.userPriority">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div> <!-- priorityDiv -->
        <div class="taskDiv">
          <form ng-submit="ctrl.add()">
            <input class="taskInput" type="text" ng-model="ctrl.userTask" placeholder="Enter a task">
          </form>
        </div> <!-- /taskDiv -->
        <div class="deleteDiv">
          <button class="deleteButton" ng-click="ctrl.delete('all')" title="Remove all tasks">✗</button>
        </div>
      </div> <!-- /itemContainer -->
      <ul id="todolist">
        <li class="tolistItem" ng-class="{ 'complete': item.complete }" ng-repeat="item in ctrl.list | orderBy:ctrl.order.split(',')">
          <div class="itemContainer">
            <div class="priorityDiv">
              <form ng-submit="item.editing = false" ng-show="item.editing">
                <select ng-options="priority.id as priority.level for priority in ctrl.priorities" ng-show="item.editing" class="prioritySelect" ng-model="item.priority" ng-model-options="{ updateOn: 'submit' }">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
                <input class="edit" type="text" ng-model="item.task" ng-model-options="{ updateOn: 'submit' }">
                <input type="submit" value="Done!" />
              </form>
              <button ng-hide="item.editing" class="priorityButton" title="Item complete" ng-click="ctrl.complete(item)" ng-class="{ 'high': item.priority === 0, 'med': item.priority === 1, 'low': item.priority === 2 }" >{{item.complete ? '✔' : ''}}</button>
            </div> <!-- priorityDiv -->
            <div class="taskDiv">
              <p style="padding: 0; font-family: 'Shadows Into Light', cursive; color: black;" class="task" title="Double click to edit task" ng-class="{ 'done': item.complete }" ng-hide="item.editing" ng-dblclick="ctrl.editItem(item)">{{ item.task }}</p>
            </div> <!-- /taskDiv -->
            <div class="deleteDiv">
              <button class="deleteButton" ng-click="ctrl.delete(item)" title="Remove task">✗</button>
            </div> <!-- /deleteDiv -->
          </div> <!-- /itemContainer -->
        </li>
      </ul> <!-- /todoList -->
      <p ng-model="ctrl.jsonlist"></p>
    </div> <!-- /controller -->
  </div> <!-- /appRoot -->
</div> <!-- /angApp -->
{% endraw %}


{% include gitLink.html url="https://github.com/StaphSynth/todolist" %}
