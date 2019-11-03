---
layout: post
title: has_protected_token
logo: ruby.jpg
byline: My first Ruby gem
category: coding
#modified:
tags:
  - ruby
  - development
  - portfolio
---

I recently released [has_protected_token](https://rubygems.org/gems/has_protected_token) to the world. It's my first ever Ruby gem and I'm pretty happy with it.

Its purpose is to abstract away generating, storing and authenticating against randomly-generated user tokens in Ruby applications using ActiveRecord. I envisage it being used for things like shared secrets and API keys, etc.

These sorts of tokens often have access power similar to that of a common user password, so the gem salts and hashes them before storage in the database using [BCrypt](https://github.com/codahale/bcrypt-ruby).

If you don't want this feature or don't think hashing the token is worthwhile, there is an alternative gem called [has_secure_token](https://github.com/robertomiranda/has_secure_token) which stores the token as plain text.

Usage instructions and contribution guidelines are in the [github repo](https://github.com/StaphSynth/has_protected_token) if you'd like to check it out.

Pull requests, feature suggestions, bug reports, etc are all very welcome.

{% include git-link.html url='https://github.com/StaphSynth/has_protected_token' %}
