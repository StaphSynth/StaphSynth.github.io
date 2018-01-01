---
layout: post
title: Fun With Web Scraping
logo: /img/ruby-logo.jpg
byline: Automate the things!
category: coding
tags:
  - ruby
  - development
---

{% include image.html url="/img/youtube-not-available.jpg" caption="We'll just see about that..." alt="Screen-shot of the Youtube 'this video is not available in your country' notice." %}

Like many people, I've run into the "video not available in your country" thing on Youtube from time to time. Sometimes I just can't be bothered, so I go watch something else. Other times, I've gone and found a proxy service, fiddled with the network settings on my machine and watched it that way.

Recently, it happened again when I really wanted to see a couple of videos that I'd already watched (by default settings in my own country) a few years ago. This is the first time since I started using Linux as my every-day OS, that I was confronted with having to learn to alter the proxy settings on an unfamiliar platform, as well as perform the drudgery of finding a list of proxy servers, searching through them until I found one that looked realiable and fast enough, fiddling with the settings, and then seeing if it would work. It was mildly annoying. I thought there must be an easier way.

Thanks to the Ruby community, I was right. I'd come across some [articles](http://ruby.bastardsbook.com/chapters/web-scraping/) on [web scraping](https://en.wikipedia.org/wiki/Web_scraping) with Ruby recently, and I felt this was a great opportunity to put that knowledge to work. I wrote a little script to test the waters, pulling data on available proxy servers from a free website that publishes updated proxy lists and printing it to the console. I kept toying with the script, playing with features of [Nokogiri](http://www.nokogiri.org/) and using it to strip important information from the page.

I then wrote a crude algorithm to compare the proxies in my list. Were they up? Were they fast or slow? Were they reliable? The algorithm evaluates these paramenters and returns the "best" proxy from the list. So far, so good. Now to put it together with system calls to get the OS to actually change the proxy settings on my PC. I looked it up (for Ubuntu-based distros at least), and got that working. I also got a warning from Google while testing it by googling my IP address. They sent me a captcha to make sure I'm not a robot. Awww, it's nice that they (don't really) care :)

Then I wrapped a bare-bones UI around the thing using [HighLine](https://github.com/JEG2/highline), and now I have a script that hits up the web for a list of proxy servers found within the last 24 hours and the countries in which they reside. I select the country I want, and the script does the rest: automatically changing my proxy settings to the fastest, most reliable server presently available.

It's not a permanent or global solution, so if you need to access the net via a proxy all the time from every user account, then this script won't cut the mustard. It also needs an active internet connection to start with, but to easily and painlessly pretend you're in America or the UK for a couple of hours, it works quite well.

```
$ ruby chproxy.rb
1. Argentina (137)
2. Bangladesh (51)
3. Brazil (485)
4. Chile (31)
5. China (832)
6. Colombia (63)
7. France (28)
8. Germany (68)
9. Hong Kong (45)
10. India (149)
11. Indonesia (393)
12. Japan (27)
13. Kenya (37)
14. Netherlands (26)
15. Poland (28)
16. Russia (151)
17. Serbia (24)
18. South Korea (24)
19. Taiwan (212)
20. Thailand (162)
21. Ukraine (56)
22. United Kingdom (25)
23. United States (302)
24. Venezuela (544)
25. No Proxy
Pick your proxy location: 23
United States it is...
Proxy set to 208.75.95.148:80
```

The program still needs work. As I mentioned, the comparison algorithm is very simple, and some of my other programming is pretty ham-fisted (and in a couple of places wildly inefficient). But I think to go from not knowing anything about web scraping to having a useful utility in a few hours is pretty cool :)

I'm going to refine it a bit by adding a few options and storing user settings in a file. It would be cool to have a default proxy location or maybe a favourite three so you don't see a really long list whenever you start it up. I'd also like to see it support a wider selection of Linux operating systems and perhaps even make it installable. There are heaps of things you could do to improve it.

I'm sure there are plenty of other utilities on the 'net that could have done this all for me, but where's the fun in that? I never even went looking for them :)

{% include gitLink.html url="https://github.com/StaphSynth/chproxy" %}
