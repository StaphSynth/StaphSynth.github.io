---
layout: post
title: Learning to use Jekyll
imageSource: /img/jekyll-logo.jpg
byline: Making static sites with this interesting tool.
category: coding
tags:
  - jekyll
  - development
  - web
---

I was introduced to the [Jekyll](http://www.jekyllrb.com){: target="\_blank"} static site generator by some dev friends a little while ago. I was telling them about some of the interesting challenges I'd had to overcome while I was writing my first proper web dev project, [howtoscience.net](http://www.howtoscience.net/){: target="\_blank"}. They'd both been using Jekyll for a while and explained its advantages over what I'd been doing previously, as well as other, more complex systems like Wordpress and the like. I'd dabbled with Wordpress at this point and found it annoying. I liked the idea of a stripped-down site generator that eschewed unnecessary complexity for simple tasks like making the blog you're reading now.

So I went to their website and did a bit of reading. It looked interesting, so I installed the gem and got to work. Right away, I have to say that their official documentation, while a _lot_ better than other docs I've seen, is not the easiest for the novice user to grasp. The major issue I have with the docs is that they do an excellent job of describing how all the components of Jekyll work, but they don't give a very coherent overview of how they work together as a system. Unfortunately, this means that a lot of their examples are missing context. It's a bit of a shame because they've clearly made an effort to lower the bar to entry, which is great. Exacerbating the problem is the continued use of 'foo' and 'bar' to describe throw-away variables.

Foo and bar have been used by generations of programmers to label meaningless variables for the purposes of examples. And this is exactly the issue: they are meaningless! Just because people have been using foo and bar to perform these functions for decades doesn't mean that we should continue for the sake of it.

If you're going to go to all the trouble to give an example, why not make it useful? Something a developer new to your technology or system could see themselves wanting to do? Maybe an example that tells you something practical you can do with the function under discussion? Just sticking 'foo: bar' in there tells me absolutely nothing about what it is that I'm doing or why I'm doing it.

This isn't to say that all use of foo/bar is wrong; just that if you're using an example to provide context, they aren't helping you do that. They are devoid of context pretty much by definition. It's annoying.

Case in point:

{% include image.html url="/img/jekylldocscn01.jpg" %}

You can specify meta data. Okay, what exactly does that mean? Meta data can encompass a wide range of things, and a decent example here would help me think about what sorts of things you had in mind when you... oh 'foo: bar'. Yeah, thanks for that. As a reader, I'm just as in the dark after your example as I was before I saw it. So you could have saved yourself some time and bandwidth and not bothered.

The lack of big-picture context in the docs left me feeling like a kid sitting in a pool of lego blocks, but without knowing how each part was supposed to fit with the others.

Thankfully, I found a site that talks about these things: [Jekyll Tips](http://jekyll.tips/){: target="\_blank"}. This site walks the new user through Jekyll using a couple of simple examples to explain _why_ we use certain features and the essentials of _how_ the system works from a top-down perspective. It's quite excellent, actually. After reading it, going back over the official docs makes a lot more sense and I find myself understanding and applying the system properly.

Once I see how a system works, I can find new uses for it on my own. I just need to get over that first hurdle and it's fine. For me, '_why_' is the most important thing. Why are we performing this action on that object? Giving a concrete example of how the overall structure of Jekyll fits together on a simple site answered that question and gave me contextual understanding. Now I can branch that out and modify it 'till my heart's content.

My experience writing the site you're reading now using Jekyll has been quite good. I expect to use it for several other projects in the future, as it fills that niche for relatively simple static sites that don't need the additional complexity of other CMSs.
