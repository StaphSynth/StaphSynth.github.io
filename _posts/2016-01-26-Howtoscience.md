---
layout: common
title: howtoscience.net
year: 2016
imageSource: /img/hts-logo.png
byline: Designed and built howtoscience.net, a free resource for science students.
markdown: kramdown
---

{% include posts.html %}

[Howtoscience.net](http://www.howtoscience.net){: target="\_blank"} was my first major project and taught me a lot about web design. It's actually gone through several different iterations as I've learned new things and applied them to the site. To begin with, it was just a collection of HTML files linked together by a fairly straight-forward nav section at the top of the page. It wasn't really mobile-friendly, but it worked well enough so I left that area aside while I focussed on writing the actual content. The content took much longer to write than I anticipated, (in fact, it's still on-going!) and so by the time I got back to the structural-side of the project, it was in dire need of stream-lining.

![Screen-shot of the desktop layout of howtoscience.net](/img/hts-scrn01.jpg){: .illustration}

It had become somewhat bloated and difficult to maintain as the number of pages had expanded. The first task was to remove all the redundant code. I learnt enough PHP to allow me to strip out the common HTML from each page and put it in a single separate file. The nav section was an interesting challenge, but eventually PHP was pressed into service to generate the menu structures on the fly, restoring my use of 'selected' class markers to tell the user what page they were on.

To be honest, I'm not entirely sure that my approach with PHP is what you would consider 'best practice'. Mostly I'm throwing HTML around as long strings. I think this is okay, becuause I don't need the additional functionality of the DOM here, so it's better not to get the parser involved. Why waste time parsing HTML when I'm just going to throw it at the client machine anyway? When I asked a dev friend about this, his response was 'web dev is really just an elaborate exercise in string concatination anyway' Heh :)

The next task was to truly make the site mobile-friendly. This was an important lesson in the mobile-first design paradigm, insofar as it hammered home the fact that I should have done it properly to start with. Still, much re-factoring of CSS code and it now works quite well.

![Screen-shot of the mobile layout of howtoscience.net](/img/hts-scrn02.jpg){: .illustration}

Finally, I set about making the user experience as seemless and easy as possible. I minified the code, added some JavaScript that stops loading of scripts and assets irrelevant to the critical render path until after the page has been rendered. I fixed issues with my server configuration so it actually allowed compression and caching to reduce loading times. Extensive use of the ```<noscript>``` tag means that the site falls back gracefully if the user doesn't have JavaScript enabled. There isn't much JS in the site, but it's nice to know that special characters loaded through [fontawesome](http://fontawesome.io) don't just disappear without being replaced with some kind of place-holder. Too many modern sites just sit there and do nothing, without telling the user what's wrong if JS is turned off. As a user of the excellent JS-blote-nuking Firefox plug-in, [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/), I find their lack of attention irritating.

I'm pretty happy with the end result. The site is fast; it looks good on phones, tablets and desktops; it's easy to navigate; and it gets the message across without being distracting. There are things I'd do differently, of course, but you can say that about any project. If I do ever re-write it again, I think I'll probably use [Jekyll](http://www.jekyllrb.com) and throw away the PHP.
