---
layout: common
title: Coding Blog | Syntheta.se
markdown: kramdown
---

## Blogging the Learning Process
I quit my job in academia at the end of the year in 2015 to focus full time on learning new development skills.
I thought it would be helpful to blog about my progress to use as both a reference and a source of perspective. There's always something new to learn.

<hr>

<ul class="postList">
  {% for post in site.posts %}
    <li class="articleListItem">
      <a href="{{ post.url }}"><img class="postThumb" src="{{ post.imageSource }}" alt="{{ post.title }}"><div class="postTitle"><h3>{{ post.title }}</h3><p class="byline">{{ post.byline }}</p></div></a>
    </li>
  {% endfor %}
</ul>
