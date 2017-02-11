---
layout: post
title: Learning AngularJS
imageSource: /img/angularjs-logo.jpg
byline: Includes single-page calculator app! :0
category: coding
tags:
  - javascript
  - development
---

Most of my time with JavaScript has been spent with vanilla JS or jQuery. Everyone seems to be jumping onto a variety of other JS bandwagons, though, so I thought I'd start playing with some of them as well.

I've been learning AngularJS, and decided to write some simple single-page apps to quickly get to grips with the new paradigm. Presented here is my first one: a (very) simple calculator.

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.32/angular.min.js"></script>
<script type="text/javascript" src="http://127.0.0.1:4000/js/calc.js"></script>
<link type="text/css" rel="stylesheet" href="http://127.0.0.1:4000/css/calc.css">
{% raw %}
<div class="calc" ng-app="calc-app">
  <div ng-controller="calc-controller">
    <table class="calcTable">
      <tbody>
        <tr><td colspan="4" align="right" class="display">{{display}}</td></tr>
        <tr ng-repeat="row in buttons"><td ng-repeat="digit in row"><button class="calcButton" ng-click="push(digit)">{{digit}}</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
{% endraw %}
