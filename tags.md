---
layout: common
title: Tags
---

{% comment %} Get the tag name for every tag on the site and set them to the 'site_tags' variable. {% endcomment %}
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

{% comment %} 'tag_words' is a sorted array of the tag names. {% endcomment %}
{% assign tag_words = site_tags | split:',' | sort %}

<h2><i class="fa fa-tags" aria-hidden="true"></i> Tags</h2>

<div class="tags">
{% comment %} List all the tags at the top of the page {% endcomment %}
<ul id="tags">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
    <li>
      <a href="#{{ this_word | cgi_escape }}" class="tag">{{ this_word }}
        <span>({{ site.tags[this_word].size }})</span>
      </a>
    </li>
  {% endunless %}{% endfor %}
</ul>

<hr>

{% comment %} List all the posts under each tag {% endcomment %}
{% for item in (0..site.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
  <h3 id="{{ this_word | cgi_escape }}">{{ this_word }}</h3>
  <ul class="posts">
    {% for post in site.tags[this_word] %}{% if post.title != null %}
    <li itemscope><span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date_to_long_string }}</time></span> &bull; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}{% endfor %}
  </ul>
  {% endunless %}{% endfor %}
</div> <!-- /tags -->
