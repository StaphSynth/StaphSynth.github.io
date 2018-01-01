---
layout: common
title: Portfolio
permalink: /coding/portfolio/
---

## Portfolio

Below is a list of posts from the coding section of the site detailing the projects that make up my front-end development portfolio. The code for each of them (including the site you're reading now) is available on [github](https://github.com/StaphSynth){:target="\_blank"}.

In each project, my attention was directed toward developing a certain feature, or learning to do something in a particular way. This method has helped me to quickly broaden my development skills. As I learn new things, I apply them to on-going projects like this blog and [howtoscience.net](http://www.howtoscience.net/){:target="\_blank"}.

<hr>

<ul class="postList">
  {% for post in site.tags['portfolio'] %}
    {% if post.title %}
      {% include articleListItem.html url=post.url img=post.logo title=post.title byline=post.byline %}
    {% endif %}
  {% endfor %}
</ul>
