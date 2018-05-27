---
layout: post
title: "Selenium-Webdriver JavaScript Bindings in Linux 2: Tests and Promises"
logo: selenium.jpg
byline: Further down the rabbit-hole of web automation testing.
description: A 'Getting Started' tutorial on Selenium-Webdriver JavaScript bindings in Linux. Test frameworks and promise handling.
category: coding
comments: true
# modified: 2016-10-18
published: false
tags:
  - testing
  - selenium
  - web
  - linux
---

### A series of posts on web automation testing using the JavaScript bindings for Selenium-Webdriver in Linux. Part 1 [here]({% post_url 2016-10-10-using-selenium-webdriver-and-javascript %}).

So far, we've installed all the basic software to get bare-bones automation off the ground. We can write code to launch the browser and command it to perform tasks. However, this is not testing, it's just telling the browser what to do.

In order to generate useful information, we need a test framework that allows us to run and record the outcomes of tests and report them in a consistent way. This formalises the testing process allowing us to easily collate, analyse, and use the information the tests generate to target bugs, direct developer resources, etc.

A popular node.js package for doing just this is [mocha](https://mochajs.org/). To install mocha globally, use:

```
$ npm install -g mocha
```
