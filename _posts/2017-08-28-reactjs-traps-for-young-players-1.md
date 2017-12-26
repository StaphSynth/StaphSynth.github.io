---
layout: post
title: "ReactJS: Traps for Young Players"
imageSource: /img/logos/react.svg
byline: Help! I'm trapped, like a moth in a bath!
category: coding
# modified:
published: false
tags:
  - react
  - javascript
  - development
---

So you want to use a modern JS framework to build your app? The 800 pound gorilla in the ring at the moment is, of course, ReactJS. If it can solve the madness of Facebook, it should be able to solve your problems, too...

That's true up to a point, but there are a few traps for the unwary that can totally ruin your day if you don't watch out for them. In this series of posts I'm going to document a couple I've personally fallen into, in the hope that you will be able to avoid them.

## Passing Objects as Props

Rule number one when dealing with React component state is <strike>don't talk about component state</strike> don't modify the state without using `setState()`. This is so important, I think it's worth mentioning twice. So, _don't modify component state without using `setState()`!_ Doing so will mean React loses track of when the state changes, meaning components won't update when you think they should or vice versa. This can lead to performance issues and hard-to-track-down bugs.

Great, so what's this got to do with passing objects as props? Well, since JS objects are passed by reference, rather than being copied, it's very easy to accidentally modify a parent's state via the props passed to a child component. Let's check out an example:

```js
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: 64,
      favFood: 'Bananas',
      occupation: 'Burger Flipper',

      employer: {
        businessNunber: 123456789,
        solvent: true,
        tradingAs: "Heart Disease Emporium Pty Ltd",

        ratings: {
          heartFoundation: 'failure',
          nationalHealthCouncil: 'failure',
          foodCriticsMag: 'five stars!'
        },

        healthViolations: [
          {year: 2013, offence: ...}, //you get the idea
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <ChildComponent employer={ this.state.employer } />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.employer;
  }
}

```
In this case, we have the parent component passing the child component the `employer` object from its state as a property. The businessNumber, solvent and tradingAs key-value pairs will all be copied faithfully, but the ratings and healthViolations will not. Since they are objects and not primitives, the ChildComponent will recive a _reference_ to the original objects, rather than the objects themselves.
