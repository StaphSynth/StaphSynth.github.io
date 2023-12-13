---
layout: post
title: Much To-Do About Nothing
logo: angularjs.jpg
byline: Making a list and checking it twice...
category: coding
modified: 2017-02-23
tags:
  - angular
  - javascript
  - development
  - portfolio
---

Inspired by playing with the [TodoMVC example](http://todomvc.com/examples/angularjs/#/), I decided my next AngularJS app would be a simple to-do list.

I've added a couple of extra features, including a task priority property, and the ability to sort the list by priority level or state of completion. The app is mostly finished, but one thing I'm still reading up on is how to get it to continually save the task list object to a browser cookie as changes are being made. This is important for usability - there's no point in a to-do list app that loses all your tasks the second you navigate away from the page.

The above TodoMVC example uses an angular service to accomplish this task, but I'm still not entirely sure how that works, so it's my next area of study. Other than that missing feature, however, the app is largely complete.

<link rel="stylesheet" type="text/css" href="/assets/stylesheets/todolist.css">
<link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
<script type="text/javascript" src="/assets/javascript/todolist.js"></script>
{% raw %}
<div id="todoAppRoot" ng-app="todolistApp">
  <h2><center>To-Do List</center></h2>
  <div id="appContainer" ng-controller="todolistController as ctrl">
    Order by:
    <select ng-model="ctrl.order">
      <option value="priority,complete">Priority</option>
      <option value="complete,priority">Completion</option>
    </select>
    <div id="masterContainer">
      <div id="inputContainer">
        <div class="priorityDiv">
          <button ng-hide="item.editing" class="priorityButton masterCompleted" ng-class="{ 'mComplete': ctrl.masterCompleted == true }" title="Mark all complete" ng-click="ctrl.complete('all')">✔</button>
        </div> <!-- priorityDiv -->
        <div class="taskDiv">
          <span>
            Priority:
            <select ng-options="priority.id as priority.level for priority in ctrl.priorities" class="prioritySelect" ng-model="ctrl.userPriority">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </span>
          <span>
            <form ng-submit="ctrl.add()">
              <input class="taskInput" type="text" ng-model="ctrl.userTask" placeholder="Enter a task">
              <input type="submit" value="Done!" class="submitButton">
            </form>
          </span>
        </div> <!-- /taskDiv -->
        <div class="deleteDiv">
          <button class="deleteButton" ng-click="ctrl.delete('all')" title="Remove all tasks">✗</button>
        </div>
      </div> <!-- /inputContainer -->
      <div class="reportingContainer" ng-show="ctrl.list.length">
        <span class="reports" ng-bind="ctrl.getReport()"></span>
      </div> <!-- /reportingContainer -->
    </div> <!-- /masterContainer -->
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
              <input type="submit" value="Done!" class="submitButton">
            </form>
            <button ng-hide="item.editing" class="priorityButton" title="Item complete" ng-click="ctrl.complete(item)" ng-class="{ 'high': item.priority === 0, 'med': item.priority === 1, 'low': item.priority === 2 }" >{{item.complete ? '✔' : ''}}</button>
          </div> <!-- priorityDiv -->
          <div class="taskDiv">
            <span class="task" title="Double click to edit task" ng-class="{ 'done': item.complete }" ng-hide="item.editing" ng-dblclick="ctrl.editItem(item)">{{ item.task }}</span>
          </div> <!-- /taskDiv -->
          <div class="deleteDiv">
            <button class="deleteButton" ng-click="ctrl.delete(item)" title="Remove task">✗</button>
          </div> <!-- /deleteDiv -->
        </div> <!-- /itemContainer -->
      </li>
    </ul> <!-- /todoList -->
  </div> <!-- /controller -->
</div> <!-- /appRoot -->
{% endraw %}

{% include git-link.html url="https://github.com/StaphSynth/todolist" %}
