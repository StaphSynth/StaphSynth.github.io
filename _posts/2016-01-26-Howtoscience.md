---
layout: post
title: howtoscience.net
logo: hts.png
byline: Designed and built howtoscience.net, a free resource for science students.
category: coding
modified: 2016-09-19
tags:
  - portfolio
  - web
  - development
  - science
---

[Howtoscience.net](http://www.howtoscience.net){: target="\_blank"} was my first major project and taught me a lot about web design. It's actually gone through several different iterations as I've learned new things and applied them to the site. To begin with, it was just a collection of HTML files linked together by a fairly straight-forward nav section at the top of the page.

It wasn't really mobile-friendly, but it worked well enough so I left that area aside while I focussed on writing the actual content. The content took much longer to write than I anticipated, (in fact, it's still on-going!) and so by the time I got back to the structural-side of the project, it was in dire need of stream-lining.

{% include image.html caption="The desktop layout of howtoscience.net" url="/assets/images/hts-scrn01.jpg" %}

It had become somewhat bloated and difficult to maintain as the number of pages had expanded. The first task was to remove all the redundant code. I learnt enough PHP to allow me to strip out the common HTML from each page and put it in a single separate file. The nav section was an interesting challenge, but eventually PHP was pressed into service to generate the menu structures on the fly, restoring my use of 'selected' class markers to tell the user what page they were on.

To be honest, I'm not entirely sure that my approach with PHP is what you would consider 'best practice'. Mostly I'm throwing HTML around as long strings. I think this is okay, becuause I don't need the additional functionality of the DOM here, so it's better not to get the parser involved. Why waste time parsing HTML when I'm just going to throw it at the client machine anyway? When I asked a dev friend about this, his response was 'web dev is really just an elaborate exercise in string concatination anyway' Heh :)

The next task was to truly make the site mobile-friendly. This was an important lesson in the mobile-first design paradigm, insofar as it hammered home the fact that I should have done it properly to start with. Still, much re-factoring of CSS code and it now works quite well.

{% include image.html caption="The mobile layout of howtoscience.net" url="/assets/images/hts-scrn02.jpg" %}

Finally, I set about making the user experience as seemless and easy as possible. I minified the code, added some JavaScript that stops loading of scripts and assets irrelevant to the critical render path until after the page has been rendered. I fixed issues with my server configuration so it actually allowed compression and caching to reduce loading times.

Extensive use of the `<noscript>` tag means that the site falls back gracefully if the user doesn't have JavaScript enabled. There isn't much JS in the site, but it's nice to know that special characters loaded through [fontawesome](https://fontawesome.com/){: target="\_blank"} don't just disappear without being replaced with some kind of place-holder. Too many modern sites just sit there and do nothing, without telling the user what's wrong if JS is turned off. As a user of the excellent JS-blote-nuking Firefox plug-in, [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/){: target="\_blank"}, I find their lack of attention irritating.

I'm pretty happy with the end result. The site is fast; it looks good on phones, tablets and desktops; it's easy to navigate; and it gets the message across without being distracting. There are things I'd do differently, of course, but you can say that about any project. If I do ever re-write it again, I think I'll probably use [Jekyll](http://www.jekyllrb.com){: target="\_blank"} and throw away the PHP.

<hr>

<u>19th September 2016 update:</u> I have now removed the offending PHP from this project and re-written it to use Jekyll. This was done for several reasons. Firstly, I plan on expanding the site to cover more than just how to write scientific papers. The ease with which you can manipulate the site structure in Jekyll will 'future proof' the site and simplify that process. Secondly, it will be easier to maintain than the previous version. Thirdly, and most importantly, it takes advantage of a number of useful features found in Jekyll and its ecosystem of plug-ins.

It now has an SEO tag generator, using [Jekyll SEO tag](https://github.com/jekyll/jekyll-seo-tag) to fill each page with meta data which should help more people find the site. It uses [Jekyll sitemap](https://github.com/jekyll/jekyll-sitemap) to automate site-map generation. I used the 'permalink' property to generate nicer URLs, so instead of howtoscience.net/getStart.php, the same link now appears as howtoscience.net/getting-started/. To solve possible 404 errors from existing readers using bookmarks pointing to the old URLs, I employed [Jekyll redirect from](https://github.com/jekyll/jekyll-redirect-from) to redirect from the old *.html and *.php addresses to the new canonical URLs.

I also fixed a couple of other niggling issues with the underlying structure of the site. It still needs work (the code for the main nav section is a bit of a mess, and I haven't yet solved the problem of getting Jekyll to minify production code), but I'm reasonably happy with where it stands at the moment.

{% include git-link.html url="https://github.com/StaphSynth/howtoscience.net" %}
