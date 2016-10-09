---
layout: post
title: Implementing Tags in Jekyll
imageSource: /img/jekyll-logo.jpg
byline: A work-around to solve this niggling issue.
description: How to implement tags in Jekyll/Github pages without plugins.
category: coding
modified: 2016-10-09
comments: true
tags:
  - jekyll
  - web
  - development
---

As [others](http://charliepark.org/tags-in-jekyll/) [have](https://blog.brandonparsons.me/2015-using-tags-in-a-jekyll-blog-on-github-pages) [pointed](http://www.minddust.com/post/tags-and-categories-on-github-pages/) [out](https://christianspecht.de/2014/10/25/separate-pages-per-tag-category-with-jekyll-without-plugins/), Jekyll doesn't really support blog tags right out of the box. There are plugins that will do it for you - or you can write your own - but if you're like me and serving your site from github pages, then you have a problem. Github pages only supports bare-bones Jekyll and "native" plugins listed under the [project repo](https://github.com/jekyll).

So what to do? Well, you'll have to write some moderately complex liquid to get around this problem. Or, you could do what I did and find someone else who's already solved it and modify their code to suit your needs.

Firstly, it's easy to give your posts tags by simply adding them as a YAML [collection](http://symfony.com/doc/current/components/yaml/yaml_format.html#collections) in your front matter like so:

```
---
layout: post
tags:
  - cakes
  - biscuits
  - diabetes
---
```

The problem comes when you need to access them globally so you can sort them into a list and associate them with your posts. I modified code I found in [these](http://pavdmyt.com/how-to-implement-tags-at-jekyll-website/) [two](http://blog.lanyonm.org/articles/2013/11/21/alphabetize-jekyll-page-tags-pure-liquid.html) blog posts to make that happen here. Before we get into that, though, you need to display the tags in the post itself in the form of links to the "tag" page we will create to display all the tags on the site. To do that, simply modifiy your post.html (or whatever layout you're using to display your posts). Here's what does that on this site:

{% raw %}
```
{% for tag in page.tags %}
  <a href="/tags#{{ tag }}">{{ tag }}</a>{% if forloop.last %}.{% else %},{% endif %}
{% endfor %}
```
{% endraw %}

Now we can create the new `tags.md` file and get to the interesting stuff. First off, we need to grab all the tag values in the site and store them in a variable, separated by a marker of your choice (I'm using a comma here). Then split it using the marker to form an array of tags.

{% raw %}
```
{% comment %}
  Get the tag name for every tag on the site and set them to the 'site_tags' variable.
{% endcomment %}

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

{% comment %}
  'tag_words' is a sorted array of the tag names.
{% endcomment %}

{% assign tag_words = site_tags | split:',' | sort %}
```
{% endraw %}

Then simply loop through the array to print out the tags. Interestingly, we can also print out the number of posts using each tag as well.

{% raw %}
```
{% comment %} List all the tags at the top of the page {% endcomment %}

<ul id="tags">
  {% for item in (0..site.tags.size) %}
    {% unless forloop.last %}
      {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
      <li>
        <a href="#{{ this_word | cgi_escape }}" class="tag">{{ this_word }}
          <span>({{ site.tags[this_word].size }})</span>
        </a>
      </li>
    {% endunless %}
  {% endfor %}
</ul>
```
{% endraw %}

Finally, loop through all the tags, printing out a list of all the posts that use them with links to the original post URLs.

{% raw %}
```
{% comment %} List all the posts under each tag {% endcomment %}

{% for item in (0..site.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
  <h3 id="{{ this_word | cgi_escape }}">{{ this_word }}</h3>
  <ul class="posts">
    {% for post in site.tags[this_word] %}
      {% if post.title != null %}
        <li itemscope><span class="entry-date">
          <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date_to_long_string }}</time></span> &bull; <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
  {% endunless %}
{% endfor %}
```
{% endraw %}

And that's it. All that remains is for you to style up your tags however you like. There are some [nice](http://cssglobe.com/pure-css3-post-tags/) [tricks](http://codepen.io/wbeeftink/pen/dIaDH) out there for doing that as well, but I went for a more traditional plain text look here.
