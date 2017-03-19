---
layout: post
title: Down Footer!
imageSource: /img/foot-logo.jpg
byline: A simple solution to an annoying problem.
description: A short tutorial on how to make your web page footer stay down, even when there's not much content on screen
category: coding
tags:
  - development
  - css
---

Ah, footers. The little space at the bottom of the page for copyright legalese, contact info - and in a slightly weird turn of events in recent years, search and navigation options. Although they're useful for displaying all the boiler-plate info in a non-distracting way, to be honest I always thought they just made the page look nice.

However, when there isn't enough content on the main part of the page to push the footer down to the bottom of the display area, it just looks ugly.

I had this problem working on the 404 page for [howtoscience.net]({% post_url 2016-01-26-Howtoscience %}). I looked around the net and found a few solutions that involved giving the footer an absolute position at the bottom of the page, then padding the main content area so it wouldn't accidentally hide any content down the bottom.

I've used this method and it works, but I don't like it because it involves hard-coding dimensions. You have to give the footer a defined height so you can pad the bottom of the main content area by the same value, plus a little extra so elements don't sit right on top of each other. Doing this in a responsive design is even worse, because now you'll have lots of different padding values for each media query as the screen gets wider and the footer doesn't need to be as deep.

So I decided to do it with a [flex-box](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties). It's fairly straight forward, really. You split the body of the page into three domains: header, main content area, and footer. Then you tell the body element that it's a flex-box with vertical flex-flow, and assign the main content area a flex-grow value of anything above zero. This ensures that it will expand ahead of the other elements to fill the available space.

### HTML

```html
<html>
  <body>
    <header>
      <!-- heading stuff... -->
    </header>
    <div id="mainContent">
      <!-- interesting stuff... -->
    </div>
    <footer>
      <!-- boring legal stuff... -->
    </footer>
  </body>
</html>
```

### CSS

```css
html, body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

#mainContent {
  flex-grow: 1;
}
```

There are some problems with this solution - namely browser compatability issues. Older browsers that don't support flex box/HTML5 won't display the page properly (you can remove the HTML5 by replacing the header and footer tags with `<div id="header">`, etc). To be honest, at this point, I don't really care. The site I'm using the solution on is targeted at new users with modern devices, so it's a non-issue for me. However, if you're writing something that _must_ work with IE 6, then you'll have to do it the old way.
