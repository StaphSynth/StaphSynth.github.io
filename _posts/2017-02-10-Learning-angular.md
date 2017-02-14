---
layout: post
title: Learning AngularJS
imageSource: /img/angularjs-logo.jpg
byline: Includes single-page calculator app! :0
category: coding
modified 2017-02-14
tags:
  - javascript
  - development
  - portfolio
---

Most of my time with JavaScript has been spent with vanilla JS or jQuery. There are, of course, any number of other bandwagons to ride, so I've decided to have a look at some of them.

I've been learning AngularJS, and decided to write some simple single-page apps to quickly get to grips with the new paradigm. Presented here is my first one: a simple calculator.

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.32/angular.min.js"></script>
<script type="text/javascript" src="{{site.url}}/js/calc.js"></script>
<link type="text/css" rel="stylesheet" href="{{site.url}}/css/calc.css">
{% raw %}
<div class="calc" ng-app="calc-app">
  <div ng-controller="calc-controller">
    <table class="calcTable">
      <tbody>
        <tr><td colspan="4" align="right" class="display" ng-bind="display()"></td></tr>
        <tr ng-repeat="row in buttons"><td ng-repeat="digit in row"><button class="calcButton" ng-click="push(digit)">{{digit}}</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
{% endraw %}

The calculator acts mostly like your standard primary school issue [four-banger](http://www.urbandictionary.com/define.php?term=Four+Banger&defid=1918795), except that it supports a wider range of values and will dip into scientific notation if its screen size is exceeded by the length of the answer.

It handles input and output as strings to simplify formatting for the "screen". The strings are parsed into Floats for the actual mathematical operations, then the result is turned back into a string and formatted for display.

I was thinking about how I might go about implementing it in hardware as I was writing it, so it uses global variables as flags and registers and is written procedurally, rather than object oriented. In hindsight, I think doing it OO would have been a much better idea and would certainly simplify the code base. Oh well.

It was really only meant to be an AngularJS learning exercise, but turned into a lesson in the pitfalls of formatting pure numbers in JavaScript, as well as the limitations of using precedural programming techniques to build something that would be far easier to implement using OO practices.

{% include gitLink.html url="https://github.com/StaphSynth/calc" %}
