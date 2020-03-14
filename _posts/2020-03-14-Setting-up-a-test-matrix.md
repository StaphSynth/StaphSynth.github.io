---
layout: post
title: Setting up a Test Matrix
logo: ruby.jpg
byline: Enter the matrix...
category: coding
#modified:
tags:
  - ruby
  - development
---

This post is the text version of a talk I gave at the Melbourne Ruby meet-up earlier this year. I thought some people would prefer the information presented in plain text over the video. For anyone interested, I've embedded the video below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JAaSsZf7iuE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you don't want to watch the video, or you found the text on screen hard to see, read on...

### Background

If you're writing a gem, you want to give people the confidence that it works as described - otherwise they might not want to pull it into their project. Part of doing this involves writing good tests.

Most gems have dependencies and most also support multiple versions of Ruby. This presents something of an issue because we need to test our gem against all its dependencies and run these tests using all the different versions of Ruby we support. Only then can we have confidence that it works as expected.

### The Matrix

This article is going to focus on using [Travis CI](https://travis-ci.org/) to implement and execute our test matrix. If you use a different CI platform, I'm sure the ideas will be broadly applicable, but the specifics will probably be different.

I'll assume you have a `Rakefile` in your project with a `test` task set as the default. Unless asked otherwise, Travis simply executes `rake` on each Ruby job run, so this is a simple way of getting it to run your test suite.

#### What Would Travis Do?

Before we get into the nitty-gritty I thought it might be helpful to share a gem that will improve your experience getting all this working.

Setting up this stuff for the first time in Travis can be a bit tedious. You make your changes, commit them, push them, wait for Travis to enqueue the job, wait for the jobs to build and run, figure out why they failed, rinse, repeat.

Enter, [What Would Travis Do?](https://github.com/grosser/wwtd) a gem that (as its name suggests) simulates the Travis job runner on your local machine.

Setup is a doozy, just install the gem and run

```
$ wwtd
```

and it takes care of the rest. This does, of course, mean you need to have all the different versions of Ruby you're testing against installed on your local machine (see [here](https://syntheta.se/coding/2018/12/09/getting-started-with-ruby.html) for a quick guide), but it's worth the hassle just for the improvement in the development experience.

#### Multi-Ruby Testing

When you pull Travis CI into your project, you create a `travis.yml` file that tells Travis how to build and run your jobs. Part of doing this in a Ruby project is providing it with a Ruby version number under the `rvm` header. If you specify multiple Ruby version numbers under `rvm`, Travis will automatically execute your jobs in each Ruby environment. So, basically, we get multi-Ruby testing out of the box for free.

```yml
# travis.yml

language: ruby
rvm:
  - 2.3
  - 2.4
  - 2.5
  - 2.6
```

This doesn't completely solve the problem, though, becuase we're still testing our gem against only the dependencies defined in the project `gemspec`.

However, Travis also supports running jobs with multiple `Gemfile`s, so if we define a separate `Gemfile` for each version of our dependencies, we'll get our test matrix: one job for each `Gemfile` and each version of Ruby.

#### Appraisal

Rather than manually writing out each `Gemfile`, we can use the [Appraisal](https://github.com/thoughtbot/appraisal) gem to simplify the process. Appraisal creates multiple gemfiles by using your project Gemfile or gemspec as a base and then selectively overriding the versions of certain gems you define in its config.

In brief, you need to create a file called `Appraisals` in the root of your project directory. Within this file, call the `appraise` method and pass it a string identifier and a block containing the gems you want to override. In the example below you can see we're testing against different versions of ActiveRecord.


```ruby
# Appraisals

appraise 'AR_4.2' do
  gem 'activerecord', '~> 4.2.11'
  gem 'sqlite3', '~> 1.3.6'
end

appraise 'AR_5.0' do
  gem 'activerecord', '~> 5.0.7'
  gem 'sqlite3', '~> 1.3.6'
end

appraise 'AR_5.1' do
  gem 'activerecord', '~> 5.1.7'
  gem 'sqlite3'
end

# and so on, and so forth...
```

Once you're done, run

```
$ bundle exec appraisal install
```

Appraisal will generate the gemfiles and place them under a `gemfiles/` folder in your project. Then, you need to add them to your `travis.yml` file like so:

```yml
# travis.yml

gemfile:
  - gemfiles/dependancy-v1.gemfile
  - gemfiles/dependancy-v2.gemfile
  - gemfiles/dependancy-v2.gemfile
```

Now when you kick off a Travis build, it will create a job for each gemfile and each version of Ruby you specified.

### Improving the Test Matrix

Now that we've created a basic test matrix, it's time to trim it down to something more useful. You'll probably find that some of the tests are failing or pointless because you're now running up-to-date libraries or dependencies against old versions of Ruby, or testing the latest version of Ruby against old libraries like ActiveRecord v4.2.

We can improve the matrix by removing redundant and pointless tests by telling Travis to ignore certain combinations using the `exclude` header like so:

```yml
# travis.yml

matrix:
  exclude:
    - rvm: 2.3
      gemfile: gemfiles/AR_6.0.gemfile
    - rvm: 2.4
      gemfile: gemfiles/AR_6.0.gemfile
    - rvm: 2.7
      gemfile: gemfiles/AR_4.2.gemfile
```

In the above example, I've excluded testing the ActiveRecord 6.0 Gemfile against Ruby 2.3 and 2.4 because ActiveRecord 6 requires Ruby >= 2.5. I've also excluded testing AR 4.2 against Ruby 2.6 becuase it seems a bit pointless (let's be honest, if anyone is using AR 4.2 in their project when they pull your gem in, they're extremely unlikely to be using such an up-to-date version of Ruby).

### All Together Now

After all this, you should have a `travis.yml` file that contains something like the following, plus any additional instructions required to get your jobs running.

```yml
# travis.yml

language: ruby
cache: bundler
rvm:
  - 2.3
  - 2.4
  - 2.5
  - 2.6

gemfile:
  - gemfiles/AR_4.2.gemfile
  - gemfiles/AR_5.0.gemfile
  - gemfiles/AR_5.1.gemfile
  - gemfiles/AR_5.2.gemfile
  - gemfiles/AR_6.0.gemfile

matrix:
  exclude:
    - rvm: 2.3
      gemfile: gemfiles/AR_6.0.gemfile
    - rvm: 2.4
      gemfile: gemfiles/AR_6.0.gemfile
    - rvm: 2.6
      gemfile: gemfiles/AR_4.2.gemfile
```

Keep in mind that I don't think running these jobs are worth it during normal development, once I have a test matrix like this set up, I only use it in "pre-merge" test jobs to make sure pull requests are able to be merged into master. This ensures changes don't cause any inintended regressions, but allows development to proceed with a minimum of friction.

### Further Reading and Examples

See [here](https://github.com/StaphSynth/has_protected_token) for a gem I wrote that implements this pattern.
For test matrices in a Rails environment, check out [combustion](https://github.com/pat/combustion).
