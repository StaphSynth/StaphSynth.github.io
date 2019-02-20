---
layout: post
title: Conway's Game of Life in React
logo: react.svg
byline: Bonus state management without boilerplate frameworks!
category: coding
# modified:
tags:
  - react
  - javascript
  - development
  - portfolio
---

Implementing [Conway's game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) can be a fun way of diving into a new language and/or framework, as it requires quite a bit more than your average 'hello world' program. It gives you a chance to have a good play in your new sandpit and learn about your new tools.

### The Game

Click on the game board to add some starting cells. Clicking and dragging adds lots of cells. Once you have some cells, you can use the buttons below to start and stop the game.

<div id="root"></div>
<script type="text/javascript" src="/assets/javascript/game-of-life.js"></script>
<link type="text/css" rel="stylesheet" href="/assets/css/game-of-life.css" />

### The Why

In this case, I was trying out some ideas for state management in React that didn't use `setState` or any third party state management libraries. What I wanted was to severely limit the number of stateful React components and use pure components wherever possible. I also didn't want to get bogged down in tedious boilerplate for state management.

What I ended up doing, in essence, was re-creating MVC in React, but keeping it nice and simple and making it as functional as possible.

### Basic MVC in React

Interestingly, this was not the goal, but ended up as the solution. I wanted to decouple the state management from the view and the game logic, so I wrote a `Repository` class that held the state, along with a couple of getter and setter functions. To avoid side-effects, the repository functions are pure and do not modify the state, instead they always return a new copy of it. This served as the 'M' of MVC.

Next, I wrote the React components, keeping them all completely pure (with the exception of the root, which apparently _must_ be a class-based stateful component). The game state is passed into the root component of the game and divided up amoungst the child components as required. This constituted the 'V'.

Lastly, I put the game logic into a seperate controller file, satisfying the 'C'. The view doesn't know anything about the game state model, so for every action the game wants to perform, it calls out to a function in the controller. These functions deal with basic game logic (starting and pausing, rendering the next frame, etc) and, in turn, hit the repository to update the state with the new values.

### Conclusions

I really like the way this has turned out becuase it's so easy to modify. The decoupling between the components makes it really simple to add new functionality. All I have to do is write a new controller 'action' function and pass it into the relevant view component. The action function will take care of talking to the state repository and the repository itself takes care of updating and maintaining the state.

The implementation details of any given part of the system can be ripped out (and, in fact, have been) and replaced without affecting the rest of it. It's also fairly light weight. There's no magic here, just basic JS functions being, well, functional.

{% include git-link.html url="https://github.com/StaphSynth/game_of_life" %}
