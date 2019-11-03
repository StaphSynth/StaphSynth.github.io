---
layout: post
title: Getting Started With Ruby
logo: ruby.jpg
byline: Getting it right the first time
category: coding
modified: 2019-11-03
tags:
  - ruby
---

I love Ruby, it's very satisfying and developer-friendly to use. Ironically, despite its focus on developer friendliness, it can be a real pain to set up properly, which leaves a sour taste in the mouth for new users. In this post, we'll walk through setting up Ruby on your Mac or Linux computer. This post is aimed primarily at inexperienced users, so feel free to ignore the explanations if you're at home editing Bash profiles.

### First Things First

One of the reasons that setting up Ruby can be annoying is that there are so _many_ different versions of Ruby. Which do you choose? What if you picked the wrong one? What if you want to run software that was written in a different version to the one you have? Before we answer these questions, let's look at why there are so many different versions of Ruby.

Ruby, like everything, is imperfect. The language has evolved over the last twenty-something years into what it is today. As bug-fixes, improvements and features have been added to the language, they have been released into the wild in new Ruby versions. This keeps a sane, chronological order in place and allows software that was written in older versions to keep working becuase _those_ versions haven't changed, they've just been superseded.

Okay, so how do you deal with this mess? The short answer is you don't. You use a _Ruby version manager_ to deal with it for you. There are several popular version managers to choose from: [rvm](https://rvm.io/), [rbenv](http://rbenv.org/) and [chruby](https://github.com/postmodern/chruby) (I'm sure there are several others I'm unaware of as well).

I've used all of them, but I prefer rbenv, so that's what we'll use here. (As a quick aside, if you've installed any other Ruby version manager previously but you want to follow along now, you should make sure to uninstall it completely from your system before you continue. Rbenv is likely to be incompatible with it and you may get unexpected behaviour.)

### Installing Rbenv

#### macOS X

On macOS it's a doddle, you can do it via [homebrew](https://brew.sh/).

```sh
$ brew install rbenv
```
This one command installs both rbenv and a plugin called ruby-build which allows you to easily install Ruby. Once the installation is complete, you then initialise it like so:

```sh
$ rbenv init
```

This makes sure rbenv is set up and running in your terminal environment. Now you're ready to install Ruby!

#### Linux

Setup on Linux requires a few more manual steps than macOS, but it's still fairly straight forward.

First, you'll need to use git to clone rbenv to your system.

```
$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv
```

Once rbenv has been cloned, you need to tell the system that it exists. You do this by adding it to the system [PATH](http://www.linfo.org/path_env_var.html). Every time you type a command at the terminal, the shell searches the system PATH to find the executable you're invoking. We will add rbenv to the PATH so you can use it on the command line.

```
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"\neval "$(rbenv init -)"' >> ~/<YOUR_SHELL_PROFILE_NAME>
```

The above command will add two lines to the bottom of your shell profile: `export PATH="$HOME/.rbenv/bin:$PATH"`, which adds rbenv to the system PATH; and `eval "$(rbenv init -)"` which will make sure rbenv is initialised every time you start your terminal.

You'll need to replace `<YOUR_SHELL_PROFILE_NAME>` with the name of your profile file. If you're using Bash, it's likely to be either `.bash_profile` or `.bashrc`. If you're using Zsh, it's `.zshrc`.

Once this is done, restart the terminal for it to take effect. To check it has, run

```
$ command -v rbenv
```

If rbenv is available, this command will output the string `rbenv`, otherwise, it'll do nothing.

The last thing you need to do is install an rbenv plugin called [ruby-build](https://github.com/rbenv/ruby-build) that will make installing new Ruby versions trivial.

```
$ mkdir -p "$(rbenv root)"/plugins
$ git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
```

Now you're (finally!) ready to install Ruby!

### Installing Ruby

Now that you have rbenv installed and working, you can install as many versions of Ruby you like using the `rbenv install` command.

To see a list of Ruby versions available for installation, run `rbenv install -l`. The list this prints out is quite long and comprehensive. For our purposes, we're really only interested in the plain Rubies up the top (the ones that only have numbers in their version names). The others (like JRuby, etc) are different implementations of Ruby written by the wider Ruby community.

Let's install Ruby 2.5.1

```sh
$ rbenv install 2.5.1
```
<hr />
**Note to Linux users:** The above command downloads Ruby source code and compiles it on your system. You _may_ experience errors here if you do not have a C compiler and the appropriate libraries installed. Due to the sheer number of different Linux distributions and setups, it's impossible to give accurate guidance here. If you experience compilation errors, I suggest googling the error messages or checking help forums for your distribution.
<hr />

<p></p>
### Selecting a Ruby Version

It's all well and good to have multiple Ruby versions installed, but how do you switch between them, and how does rbenv know when to use the right one for your project?

Rbenv acheives this through the use of three variables: `rbenv global`, `rbenv local` and `rbenv shell`.

#### Rbenv Global

As its name suggests, this sets the 'global' version of Ruby to use in the command line when no other version is specified. Let's set the global Ruby version to the one we just installed like so:

```sh
$ rbenv global 2.5.1
```

Now all calls to Ruby from anywhere on the command line will be directed by rbenv to version 2.5.1. The global version setting is stored in the `~/.rbenv/version` file.


#### Rbenv Local

This sets the Ruby version to be used in the current local folder where the command is run, and overrides the global setting. For example, let's say you're in `~/cool_ruby_project`. If you run the following:

```
$ rbenv local 2.3.1
```

Then rbenv will create a file in this folder called `.ruby-version` which contains nothing but the text `2.3.1`.

When you try to run a Ruby command in this folder, rbenv will first read this file to determine that Ruby 2.3.1 should be used instead of the global 2.5.1. If you haven't installed version 2.3.1, rbenv will print an error stating that it's not installed.

#### Rbenv Shell

This command sets the version for the current terminal session only, and overrides both the global and local settings. To set it:

```
$ rbenv shell 2.4.2
```

This sets the local terminal environment variable `RBENV_VERSION` to `2.4.2`. To unset it (and return to the local or global setting):

```
$ rbenv shell --unset
```

<p></p>
### After Selection

Okay, so we've installed rbenv and Ruby 2.5.1, but there's one more thing we need to do to make it really useful: install bundler:

```
$ gem install bundler
```

Bundler is Ruby's library package management system and indispensable to working with projects in Ruby. You'll need it to install Ruby libraries called `gems`.

Most Ruby projects have a file called `Gemfile`. This file lists all the gems that the project needs in order to work. Bundler's job is to read the contents of this file, resolve all the dependencies, and fetch and install the gems required by the project.

Each version of Ruby on your system will need its own installation of the bundler gem, so don't forget to run `gem install bundler` after installing a new one!

### Conclusions

This does seem like a lot of stuffing around just to use a programming language, but doing it this way will avoid a lot of headaches in the future. Rbenv allows you to have as many versions of Ruby installed as you need, and keeps them and their gems isolated from each other so your projects don't step on each others toes. It's well worth a little extra effort now, for the sanity you get to keep later.

### More Helpful Things
<p></p>
```sh
$ rbenv versions # Lists every version of Ruby known to Rbenv installed on your system.
$ rbenv version # Prints the current active version of Ruby (useful for sanity checking).
```

For more useful commands and more advanced features, the rbenv documentation can be found [here](https://github.com/rbenv/rbenv/blob/master/README.md).



