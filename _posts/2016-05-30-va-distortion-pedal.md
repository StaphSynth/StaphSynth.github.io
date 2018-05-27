---
layout: post
title: Valve Approximator Distortion Pedal
logo: guitar.jpg
byline: Re-live the hey days of heavy metal.
category: projects
comments: true
modified: 2016-09-15
image: /img/va-running.jpg
tags:
  - guitar
  - electronics
---

My [P27 amplifier]({% post_url 2016-04-10-ESP-P27-Guitar-Amp %}) has a nice sound but its distortion tone is pretty useless for various flavours of heavy rock/metal. I've made a few overdrive distortion circuits on my bread board and this is the first one I liked enough to decide to commit to a pedal. The circuit is modelled on the (in?)famous Ibanez [Tube Screamer](http://www.electrosmash.com/tube-screamer-analysis), but with modifications to suit my taste. I also ditched their [JFET effects bypass](http://www.electrosmash.com/tube-screamer-analysis#jfet) scheme in favour of a triple pole double throw foot switch which also illuminates an LED to tell me when the circuit is engaged (it's common for pedal manufacturers to use these BOM-heavy schemes because parts are cheap, but labour to wire up 3PDT switches is not). It runs from a 9V battery, but can also be run from a plug-pack. When the plug-pack is inserted, the battery is bypassed. To stop the quiescent current of the circuit draining the battery when not in use, a switching jack socket is used on the input. When the plug is absent, power is disconnected.

Step 1. Throw out the bread board version and re-build the circuit on prototyping board and verify that it actually works:

{% include image.html url="/img/va-testing.jpg" caption="It's useful to tape the jacks down so the weight of the cables doesn't drag the board off the bench." %}

Step2. Buy a cheap die-cast aluminium case, drill some holes in it and paint it:

{% include image.html url="/img/va-case.jpg" caption="This was the most expensive part of the whole build at around ten dollars." %}

Step 3. Assemble the components in the box:

{% include image.html url="/img/va-assembly.jpg" caption="Wiring the pots to the board was a bit fiddly. The rear of the board was then insulated from the case by hot-gluing a piece of cardboard to it." %}

Step4: Profit!

{% include image.html url="/img/va-complete.jpg" caption="I won't use stick-on labels for a pedal again as they don't stick down well to the orange-peel texture of several coats of spray paint." %}

{% include image.html url="/img/va-running.jpg" caption="The top needed a bit of jazzing up. I quite like the lo-fi effect of simply drawing on it with a paint marker." %}

And there it is, a proper effects pedal for around $30. The most expensive components were the case and the foot switch, which made up the bulk of the cost. The rest of it was jelly-bean parts I already had lying around. It also uses an NE5532 opamp instead of the noisy 4558.

As I said above, it's basically a knock-off of the Tube Screamer, but with a modified tone circuit and a slightly different feed-back path. I use it to play things like Judas Priest, Black Sabbath and The Offspring. If you turn the distortion right down, you can get a pretty cool 'dirty blues' kind of sound out of it as well. Well worth the effort :)
