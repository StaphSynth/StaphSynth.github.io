---
layout: post
title: Small Business Website
logo: jekyll.jpg
byline: A simple static site template for small businesses.
category: coding
modified: 2017-01-11
tags:
  - portfolio
  - web
  - development
---

My friend's brother is an electrician and left his previous employer to go into business for himself. He was doing some electrical work for me, we got talking, and he said he needed a simple website so customers could find him on the 'net.

Thinking this sounded like an excellent opportunity to earn a little cash, I offered to write one for him. However, by this point I was flagging at the amount of bespoke coding I've had to do on all the sites I've written over the past year. So I decided to have a go at writing a Jekyll-based site template at the same time. That way, if he likes it and throws more business my way, it'll be far easier for me to knock out another similar site based on the same code.

I've had templating on my mind for a while now, and I decided to approach it in Jekyll by moving as many variables (such as the colour scheme, fonts, background image names, and other site-specific details) as I could out of the hard-coded CSS and HTML layouts and into the YAML config file. Then, use Liquid to insert the values from the config file into the HTML and CSS code as the site is built. To make Liquid process the .css file, all you have to do is add an empty front matter marker to the beginning.

For example:

### CSS

{% raw %}

```liquid
---
---

body {
  background-color: {{ site.backgroundColor }};
}
```

{% endraw %}

### _config.yml

{% raw %}
```yml
backgroundColor: #122456
```
{% endraw %}

Now, all I have to do is change the config file values and SHAZAM! brand new site. No more crawling through the CSS looking for that elusive variable. I really should have done this sooner. The only real annoyance I've had with this so far is that my text editor does weird things with the syntax highlighting when you mix Liquid and CSS. Oh well, you can't have everything.

For the template, I've gone with a look similar to the [church for life]({% post_url 2016-09-01-church-for-life %}) site I made a while ago. I like the style of semi-transparent content area over static background image.

{% include image.html url="pcelec-desktop.jpg" caption="The desktop layout of the site. The mobile one is much the same, only it shifts the header into a single column and replaces the navigation menu with a drop-down one almost exactly the same as the site you're reading now. What's really important is that the phone number is almost the first thing seen by the user." %}

The site is now [live](http://www.pcelectricalandsolar.com.au), but I think it looks a bit bare and needs some more content. My electrician friend is putting together some photos and other material so we can jazz it up a bit.

{% include gitLink.html url="https://github.com/StaphSynth/pcelectricandsolar.com.au" %}
