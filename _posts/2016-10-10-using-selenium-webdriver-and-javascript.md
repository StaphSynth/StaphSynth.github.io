---
layout: post
title: Getting Started Using Selenium-Webdriver JavaScript Bindings in Linux
logo: selenium.jpg
byline: Down the rabbit-hole of web automation testing.
description: A 'Getting Started' tutorial on Selenium-Webdriver JavaScript bindings in Linux. Installation, set-up, and running your first test.
category: coding
comments: true
modified: 2019-06-02
tags:
  - testing
  - selenium
  - web
  - linux
  - javascript
---

In this post, I intend to walk you through the process of getting Selenium-Webdriver up and running on a *nix system (Linux and macOS, not Windows, sorry); setting up a project with a test framework and writing tests. This post is quite long and broken up into different sections

#### Installation[]
#### Setup[]
#### Writing your first test[]

First, some definitions:

**<u>Selenium:</u>** Software that automates browsers. Selenium is actually a suite of tools for browser automation. There's more information on [their website](http://www.seleniumhq.org/).

**<u>Webdriver:</u>** Is the official [W3C](https://www.w3.org/TR/webdriver/) specification for interfacing with web browsers. So you tell Selenium what to do to execute your tests, and it controls the browser via webdriver.

**<u>Bindings:</u>** Where the rubber meets the road. This is _how_ you tell Selenium what to do. You write code and your instructions are executed by Selenium. There are a different set of bindings for each of the supported languages used to control Selenium-Webdriver: [Java](http://docs.seleniumhq.org/docs/03_webdriver.jsp#java), [C#](http://docs.seleniumhq.org/docs/03_webdriver.jsp#c), [Python](http://docs.seleniumhq.org/docs/03_webdriver.jsp#python), [Ruby](http://docs.seleniumhq.org/docs/03_webdriver.jsp#ruby), [Perl](http://docs.seleniumhq.org/docs/03_webdriver.jsp#perl), [PHP](http://docs.seleniumhq.org/docs/03_webdriver.jsp#php), and [JavaScript](http://docs.seleniumhq.org/docs/03_webdriver.jsp#javascript). So, naturally, you'll need to download and install the package with the bindings you want to use.

Right, that's enough of that. Let's move on to actually doing stuff.

### Node.js

The Selenium-Webdriver JavaScript binding comes as a package for [Node.js](https://nodejs.org/en/), a stand-alone JS runtime engine. The code you write in JS to control Selenium-Webdriver is executed by the Node.js runtime engine, _not_ the browser itself. I know this seems obvious, but I have noticed some confusion about this on the net, so I thought it was worth mentioning.

Before we install Node.js, we will install a Node.js _version manager_. There are many different versions of Node.js and at some point you will need to be able to switch between them. Adding this step now will reduce pain and frustration later.

There are several Node version managers available, here we will use [nvm](https://github.com/nvm-sh/nvm). Nvm has a comprehensive set of instructions on installation covering the principle *nix operating systems [here](https://github.com/nvm-sh/nvm#installation-and-update). Breifly, open a terminal and run

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

First off, install Node.js. There are [many](http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/) [pages](http://ask.xmodulo.com/install-node-js-linux.html) with [instructions](http://www.2daygeek.com/install-nodejs-on-ubuntu-centos-debian-fedora-mint-rhel-opensuse/) covering installation on various Linux distros, including the [official](https://nodejs.org/en/download/package-manager/) Node.js package installation page. When you're done, check that Node.js is correctly installed and working using the console. If it is, it will report the version number.

```
$ node --version
v4.6.0
```

It's important to note here that Selenium-Webdriver has limited support for different Node.js versions, so the latest and greatest might not work. Make sure the version you install is listed in the [Node Support Policy](https://www.npmjs.com/package/selenium-webdriver#node-support-policy) table on the package doc page.

### Install Selenium-Webdriver

Once you've got Node.js installed, use the node package manager (NPM) to install the Selenium-Webdriver NPM package.

```
$ npm install selenium-webdriver
```

Since Selenium-Webdriver is a node module and not an executable, if you want to check it's all present and correct, you can browse to your `node_modules` folder. On my machine, it is one level above the `bin` folder containing the node executable:

```
$ cd /usr/local/node_modules
$ ls
selenium-webdriver
```

### Install the Browser(s) and Driver(s)

Before we can make Selenium do anything interesting, we need to install browsers (duh ;) and the browser drivers for each browser we want to automate. The bowser driver is an executable written by the browser authors that allows Selenium to control the behaviour of the browser.

Back in the day, before drivers, Selenium used to control the browser by injecting JS commands directly into the page. This is obviously not ideal as it's implementation-dependant. With the driver abstraction, Selenium can use a single common 'driver' interface to talk to each browser driver, which in turn, commands the browser. But I digress.

What's important is that the browser and its driver are installed and available in your system [PATH](http://www.linfo.org/path_env_var.html).

In my case, just to get something up and running, I decided to start from scratch with Chrome for the time being (for ordinary browsing, I use Firefox).

Chrome installation (Ubuntu):

```
$ sudo apt-get install libxss1 libappindicator1 libindicator7
$ wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

$ sudo dpkg -i google-chrome*.deb
$ sudo apt-get install -f
```

Chromedriver installation (Ubuntu):

```
$ sudo apt-get install unzip

$ wget -N http://chromedriver.storage.googleapis.com/2.20/chromedriver_linux64.zip
$ unzip chromedriver_linux64.zip
$ chmod +x chromedriver

$ sudo mv -f chromedriver /usr/local/share/chromedriver
$ sudo ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver
$ sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedriver
```

### Executing Your First Test

Finally, we can actually write some code. Create a new file `yourFileName.js` and save it anywhere convenient. Fire up your favourite text editor and add the following code:

```js
var webdriver = require('/usr/local/node_modules/selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
```

This code sets up the `webdriver` and `driver` objects and allows you to begin controlling the browser. Note that the first line is telling node.js that you need the selenium-webdriver module. I just put the path to the module on my machine to get it up and running. I don't like this method as it's brittle, but it's good enough for now.

Once we've set up the environmet, we can start telling the browser what to do:

```js
driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//driver.quit();
```

This code snippet is from the Selenium-Webdriver [node package](https://www.npmjs.com/package/selenium-webdriver) doc and instructs the browser to perform a google search for the term "webdriver". If you uncomment out the last line, it will also kill the browser when it's finished running.

You can see that controlling the browser is done by calling methods on the `driver` object. For a list of commands and operations you can perform, see this [documentation page](http://docs.seleniumhq.org/docs/03_webdriver.jsp#selenium-webdriver-api-commands-and-operations) on the Selenium site. The JavaScript example is always the last of the code snippet examples listed.

To execute the test script, use node from the command line:

```
$ cd /path/to/your/testScript
$ node testScript.js
```

That's it for this post. As you can tell, we've barely scratched the surface and there's plenty more to cover. Stay tuned for the next post in the series dealing with testing environments and JavaScript promises.

As I said at the start, I'm still learning this myself, so comments, suggestions and corrections are welcome :)
