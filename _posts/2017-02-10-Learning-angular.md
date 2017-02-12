---
layout: post
title: Learning AngularJS
imageSource: /img/angularjs-logo.jpg
byline: Includes single-page calculator app! :0
category: coding
draft: true
tags:
  - javascript
  - development
---

Most of my time with JavaScript has been spent with vanilla JS or jQuery. There are, of course, any number of other bandwagons to ride, so I've decided to have a look at some of them.

I've been learning AngularJS, and decided to write some simple single-page apps to quickly get to grips with the new paradigm. Presented here is my first one: a (very) simple calculator.

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.32/angular.min.js"></script>
<script type="text/javascript" src="{{site.url}}/js/calc.js"></script>
<link type="text/css" rel="stylesheet" href="{{site.url}}/css/calc.css">
{% raw %}
<div class="calc" ng-app="calc-app">
  <div ng-controller="calc-controller">
    <table class="calcTable">
      <tbody>
        <tr><td colspan="4" align="right" class="display" ng-bind="theDisplay()"></td></tr>
        <tr ng-repeat="row in buttons"><td ng-repeat="digit in row"><button class="calcButton" ng-click="push(digit)">{{digit}}</button></td></tr>
      </tbody>
    </table>
  </div>
</div>
{% endraw %}

As I'm sure you've figured out, this calculator doesn't behave exactly like your traditional primary school issue Casio [four-banger](http://www.urbandictionary.com/define.php?term=Four+Banger&defid=1918795), but it works well enough and was really only an AngularJS learning exercise, rather than an attempt to faithfully re-create the hardware in software.

For example, it doesn't support negative numbers very well. You can input one as the first operand, but due to the limitations in the way it handles the expression operators, you can't enter one as the second operand. Well, you can try, but the result will be incorrect.

There are plenty of other ways it could be improved, but I'm just happy I got the basic functionality up and running. I think my time would be better spent learning more AngularJS than re-engineering this as a useful tool - especially since there is already no shortage of calculator apps out there.

{% include gitLink.html url="https://github.com/StaphSynth/calc" %}
