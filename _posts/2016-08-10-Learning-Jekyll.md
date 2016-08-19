---
layout: common
title: Learning to use Jekyll
year: 2016
imageSource: /img/jekyll-logo.png
byline: Making static sites with this interesting tool.
category: coding
markdown: kramdown
---

{% include posts.html %}

I was introduced to the [Jekyll](http://www.jekyllrb.com){: target="\_blank"} static site generator by some dev [friends](http://www.heath.cc){: target="\_blank"} a little while ago. I was telling them about some of the interesting challenges I'd had to overcome while I was writing my first proper web dev project, [howtoscience.net](http://www.howtoscience.net/){: target="\_blank"}. They'd both been using Jekyll for a while and explained its advantages over what I'd been doing previously, as well as other, more complex systems like Wordpress and the like. I'd dabbled with Wordpress at this point and found it annoying. I liked the idea of a stripped-down site generator that eschewed unnecessary complexity for simple tasks like making the blog you're reading now.

So I went to their website and did a bit of reading. It looked interesting, so I installed the gem and got to work. Right away, I have to say that their official documentation, while a _lot_ better than other docs I've seen, is not the easiest for the novice user to grasp. Especially, if that novice is also still quite new to web technologies in general. If your aim is to lower the bar to entry, you should really consider making your docs as friendly as possible. Now, they aren't an impenetrable wall of technical jargon, but they do suffer from an issue that I'm thoroughly sick of seeing: the continued use of 'foo' and 'bar' to describe throw-away variables.

Foo and bar have been used by generations of programmers to label meaningless variables for the purposes of examples. And this is exactly the issue: they are meaningless! Just because people have been using foo and bar to perform these functions for decades doesn't mean that we should continue for the sake of it.

If you're going to go to all the trouble to give an example, why not make it useful? Something a new developer could see themselves doing? Maybe an example that actually tells you something about what you can do with the system under discussion? Just sticking 'foo: bar' in there tells me absolutely nothing about what it is that I'm doing or why I'm doing it.

This isn't to say that all use of foo/bar is wrong; just that if you're using an example to provide context, they aren't helping you to provide context. They are devoid of context by definition. It's annoying.

Case in point:

![Screen-cap of a jekyll docs example using foo and bar](/img/jekylldocscn01.jpg){: .illustration}

You can specify meta data. Okay, what exactly does that mean? Meta data can encompass a range of things, and a decent example here would help me think about what sorts of things you had in mind when you... oh 'foo: bar'. Yeah, thanks for that. As a reader, I'm just as in the dark after your example as I was before I saw it. So you could have saved yourself some time and bandwidth and not bothered.

This isn't to say that the docs are completely useless. They do describe the powerful features of Jekyll. It's just that they do it witout the benefit of any context, so the novice is still in the dark as to how this is all supposed to fit together. I felt like a kid sitting in a pool of lego blocks, but without knowing how to stick them to each other.

Thankfully, I found a site that talks about these things: [Jekyll Tips](http://jekyll.tips/){: target="\_blank"}. This site walks the new user through Jekyll using a couple of simple examples to explain _why_ we use certain features and the essentials of _how_ the system works from a top-down perspective. It's quite excellent, actually. After reading it, going back over the official docs makes a lot more sense and I find myself understanding and applying the system properly.

Once I see how a system works, I can find new uses for it on my own. I just need to get over that first hurdle and it's fine. For me, '_why_' is the most important thing. Why do we do this with that thing? Giving a concrete example of how the overall structure of Jekyll fits together on a simple site answered that question and gave me context. Now I can branch that out and modify it 'till my heart's content.

My experience writing the site you're reading now using Jekyll has been quite good. I expect to use it for several other projects in the future, as it fills that niche for relatively simple static sites that don't need the additional complexity of other CMSs.
