---
layout: common
title: Tags
permalink: /tags/
---

{% comment %}
  Get the tag name for every tag on the site and set them to the 'site_tags' variable.
{% endcomment %}

{% capture site_tags %}
  {% for tag in site.tags %}
    {{ tag.first }}{% unless forloop.last %},{% endunless %}
  {% endfor %}
{% endcapture %}

{% assign tags = site_tags | split:',' | sort %}

<h2><i class="fa fa-tags" aria-hidden="true"></i> Tags</h2>

<div class="tags">
{% comment %} List all the tags at the top of the page {% endcomment %}
<ul id="tags" class="tags">
  {% for raw_tag in tags %}
    {% assign tag = raw_tag | strip %}
    <li class="tag">
      <a href="#{{ tag | cgi_escape }}" class="tag">
        {{ tag | capitalize }}
        ({{ site.tags[tag].size }})
      </a>
    </li>
  {% endfor %}
</ul>

<hr>

{% comment %} List all the posts under each tag {% endcomment %}
{% for raw_tag in tags %}
  {% assign tag = raw_tag | strip %}
  <h3 id="{{ tag | cgi_escape }}">{{ tag | capitalize }}</h3>
  <ul class="tags posts">
    {% for post in site.tags[tag] %}
      {% if post.title == null %}{% break %}{% endif %}
      <li class="tag">
        <span class="entry-date">
          <time
            datetime="{{ post.date | date_to_xmlschema }}"
            itemprop="date-published"
          >
            {{ post.date | date_to_long_string }}
          </time>
        </span>
        &bull;
        <a href="{{ post.url }}">
          {{ post.title }}
        </a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
</div>
