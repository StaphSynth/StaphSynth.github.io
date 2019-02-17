---
layout: post
title: Remove-Rails
logo: angularjs.jpg
byline: A front-end data display coding exercise
category: coding
# modified:
tags:
  - angular
  - javascript
  - development
  - portfolio
---

To be honest, I didn't pick the title :) I was applying for work with a company that does a lot of survey data analytics. The person who was interviewing me asked whether I'd prefer to take their front-end or back-end code challenge. I chose the front-end one, and 'remove-rails' landed in my inbox. I can only suppose that the company used to do a lot of this data-crunching on the back-end using Rails, before switching to a font-end framework to take some load off their servers.

Anyway, the project brief was to produce a web front-end to display survey data served up by an API in the form of JSON files. The survey data in the JSON files was raw, and required some processing before being displayed in the UI. It was an interesting challenge as I'd never written anything dealing with an API on a server before.

### Writing the App

I chose to do the project in AngularJS, mostly because I've been learning it recently, but also because testing was part of the requirements. I'd never done any testing in Angular before, but I knew about the testing eco-system built around the framework and thought it was about time I played with that as well.

{% include image.html url="/assets/images/2017-03/rr-index.jpg" caption="The index page of the app after index.json has been loaded and parsed." %}

The first thing the app does after bootstrapping is attempt to load `index.json` from the server (which can theoretically be anywhere, but in reality was at `localhost:8000` being served by python's trusty simple HTTP server). `index.json` contains high-level data about all the survey results that can be accessed by the user, including the url of the raw JSON files, the survey names, number of participants, etc.

The buttons on the UI are generated based on the number of surveys listed by `index.json`, and when clicked, direct the app to load the raw data for the selected survey, process it, and display it on screen.

{% include image.html url="/assets/images/2017-03/rr-loading.jpg" caption="While the JSON data is loading and being parsed, the user is shown a spinner to indicate that things are happening in the background." %}

To handle all the data loading and processing, I wrote an Angular factory service called DataOp. I'd never done this before, so it was a good learning exercise. The service does all the heavy lifting and the controller is simply the glue logic that wires it to the view. All my previous projects using Angular had relied entirely on the controller, but I much prefer this approach. Finally, I was using the controller simply to _control_ the flow of data between the services and the view based on a set of pre-defined rules. It's much better :)

{% include image.html url="/assets/images/2017-03/rr-loaded.jpg" caption="After loading, parsing and processing, the collated survey data is presented to the user." %}

Doing the data crunching was interesting. The surveys each have a number of 'themes', each theme has multiple questions, and each question has a type associated with it. For example, you might have a question in the form of a statement requiring you to reply with one of 'strongly agree, agree, neutral, disagree, strongly disagree', or perhaps there might be a binary yes or no, or there could be some free-form answer. You don't know until you actually get to the question and check it.

I wrote a data crunching function which steps through the questions in each theme, checks what type they are, then calls the appropriate function to deal with it. That function then does all the data processing and collation, storing the results in a new `collated_data` object within the original data structure. In addition to the collated data, it also stores the URL of the mark-up template required to actually display the data structure to the user.

The view then steps through each theme and renders the collated data for each question, calling the appropriate template as it goes. This set-up makes the app very modular and it's easy to add new quesiton types to the surveys - all you have to do is write a new function to deal with the new data structure required, and a bit of mark-up to display it - and the app does the rest.

### Testing the App

To test the app, I wrote both end-to-end tests and unit tests using the [Jasmine](https://jasmine.github.io/) JavaScript testing framework. The end-to-end tests are run using [Protractor](http://www.protractortest.org/#/), and the unit tests are run using the [Karma](https://karma-runner.github.io/1.0/index.html) test runner.

Thankfully, this wasn't my first time writing automation tests (I've [encountered Selenium-Webdriver]({% post_url 2016-10-10-using-selenium-webdriver-and-javascript %}) before), so I found writing the end-to-end tests reasonably straight-forward. In fact, I had a fairly easy time of it, because Protractor wraps the Selenium JavaScript bindings in a much better and easier-to-use API.

{% include image.html url="/assets/images/2017-03/rr-e2e-testrun.jpg" caption="The console log of Protractor after running the end-to-end tests. I'm using the <a href='https://github.com/bcaudan/jasmine-spec-reporter' target='_blank'>Jasmine-spec-reporter</a> plug-in to provide a more verbose output, as Protractor's native reporter just puts a green dot for a pass, or a red F for a fail." %}

The unit tests, however, were much more difficult and I didn't write as many as I'd have liked. The documentation for dependancy injection in Angular leaves a lot to be desired and it took me a long time to figure out how to get it up and running. Thankfully, I did at least manage to get something working, even if the test coverage isn't very good.

Writing good tests seems to be something of an artform in itself, and I'm looking forward to having a bit more experience there.

### Learnings

I learned heaps doing this project. I'm making good progress on getting my head around promises in JavaScript (my only real hang-ups here are determining when something is async or not). I learned how to write an Angular service and use templates. I learned how to get Protractor and Karma working, as well as how to write tests using the Jasmine framework. This project was a lot of fun and I'm already applying my knew knowledge to older problems. Stay tuned for more posts on automation testing!

{% include git-link.html url="https://github.com/StaphSynth/remove-rails" %}
