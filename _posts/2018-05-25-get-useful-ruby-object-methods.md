---
layout: post
title: Getting Useful Object Methods in Ruby
logo: /img/ruby-logo.jpg
byline: Make sense from chaos
category: coding
modified: 2018-05-26
tags:
  - ruby
  - development
  - quick tips
---

When investigating objects in Ruby, you can use the `#methods` method to list all the methods you can call on the object in question. This seems more useful than it is, because if you do this, you'll get hundreds of results, mostly from the object's ancestors, that you don't care about.

A useful tip, then, is to subtract the methods of the base `Object` or other ancestor from the object of interest so you mostly see methods that are specific and worth looking at.

Doing this on a `String` object removes 63 methods that aren't specific to the class.

```ruby
'string'.methods.count
=> 171

('string'.methods - Object.methods).count
=> 108
```

Another option (and it's quicker to type) you can use is `1.methods` to remove those contained in `Fixnum`. This could cause the removal of some methods you might be interested in, though, so keep that in mind.
