---
layout: post
title: 'OpenSSL and Ruby build failures'
logo: ruby.jpg
byline: Make it go!
category: coding
#modified:
tags:
  - ruby
---

I came across the following error while trying to install an old version of Ruby recently:

```
BUILD FAILED (LinuxMint 19.2 using ruby-build 20191004)

Inspect or clean up the working tree at /tmp/ruby-build.20191026120032.31339
Results logged to /tmp/ruby-build.20191026120032.31339.log

Last 10 log lines:
installing default psych libraries
linking shared-object date_core.so
make[2]: Leaving directory '/tmp/ruby-build.20191026120032.31339/ruby-2.3.1/ext/date'
linking shared-object nkf.so
make[2]: Leaving directory '/tmp/ruby-build.20191026120032.31339/ruby-2.3.1/ext/nkf'
linking shared-object psych.so
make[2]: Leaving directory '/tmp/ruby-build.20191026120032.31339/ruby-2.3.1/ext/psych'
make[1]: Leaving directory '/tmp/ruby-build.20191026120032.31339/ruby-2.3.1'
uncommon.mk:203: recipe for target 'build-ext' failed
make: *** [build-ext] Error 2
```

After doing a [bit](https://github.com/rbenv/ruby-build/issues/1199) of [research](https://github.com/rbenv/ruby-build/wiki#openssl-usrincludeopensslasn1_mach102-error-error-this-file-is-obsolete-please-update-your-software), it turns out that older Ruby versions are incompatible with the current version of `libssl` and it needs to be downgraded. The opposite occurs for anyone trying to install a recent version of Ruby with an older version of libssl.

### The Solution

If you're trying to install Ruby <= 2.3, you need to install version one of the library. For Debian/Ubuntu-based machines:

```
$ sudo apt install libssl1.0-dev
```

If you're trying to install Ruby >= 2.4, update the library to the latest version:

```
$ sudo apt update
$ sudo apt install libssl-dev
```
