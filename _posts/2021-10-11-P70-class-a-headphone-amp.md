---
layout: post
title: Death of Zen Class A Headphone Amplifier
logo: headphones.jpg
byline: Efficiency is for wimps
category: projects
comments: false
image: /assets/images/2021-10/p70-case-front.jpg
tags:
  - electronics
  - amplifiers
  - headphones
---

Having never listened to a [class A amplifier](https://sound-au.com/articles/amp-classes.htm#classa) before, and with nothing better to do during the long Covid shutdown, I thought it might be nice to build one. The circuit is another of [Rod Elliott](https://sound-au.com/index.html)'s designs: the low-power headphone variant of the "[Death of Zen](https://sound-au.com/project70.htm)" class A power amp. There's quite a bit of history to this circuit, which Rod explains in the [original project article](https://sound-au.com/project36.htm). It's well worth a read if you're at all curious about the design decisions or class A in general.

Class A amps are well-suited to headphone use (insofar as they can be said to be well-suited to any practical applications at all). The wasted power, which can become a serious problem for larger systems, is very modest at headphone levels and easy to deal with. Given how revealing a good pair of headphones can be, having an amplifier that is immune to at least one type of distortion is something worth thinking about.

As per usual, I bought the bare boards for the amp modules themselves from Rod's site (board sales help pay for hosting, and it certainly eases construction). The power supply and other smaller boards for mounting the volume control and final DC blocking filter were cobbled together on prototyping board.

To speed up constructoin a bit, I used a subtractive technique to lay the tracks down on the power supply board. Power supplies are simple and generally require thick tracks, so this works quite well for them. You stick a piece of copper foil to the underside of the board, mount the components, then use a sharp knife to remove unnecesary copper to create the tracks.

{% include image.html url="/assets/images/2021-10/p70-ps-foil-in-progress.jpg" caption="Foil side of the power supply under construction" %}

The down side is that soldering can be difficult with all the extra copper sucking the heat out of your iron, so you may find it easier to cut the tracks as you go.

{% include image.html url="/assets/images/2021-10/p70-ps-foil-complete.jpg" caption="Foil side of the completed power supply board." %}

Assembly of the rest of the amp was straight-forward, but testing turned out to be more difficult than I was expecting. The design specifies 100k multi-turn trimpots on the amp modules for setting offset voltage and bias current. Personally, I found that these needed to be lowered to ~50k to allow me fine enough adjustment to get the amps to stabilise.

{% include image.html url="/assets/images/2021-10/p70-test-setup.jpg" caption="Testing the amplifier modules. The multi-meters are reading the voltage across a pair of 10R resistors that feed the power rails to the amps. The goal was to set the bias current to ~200mA at idle with the heatsink warmed up. Thus I was looking for them to stabilise at ~2V" %}

Before then, I found they drifted around a lot (which is fine, a circuit like this is bound to drift around with temperature). The problem was getting them to drift _together_ and to keep it within an acceptable envelope. Once I lowered the value of the trimpots, I had no problem setting them and getting them to track close together.

{% include image.html url="/assets/images/2021-10/p70-rear-panel-complete.jpg" caption="The rear panel ready to go after mechanical assembly. The heatsink is 1.1 K/W and gets noticeably warm with use. If you look closely, you can see the output transistors are mounted directly to the heatsink through holes cut out in the back panel." %}

The cases for a lot of my projects over the years have been made of wood, mostly because I'm not very good at metal work. I purchased a pre-made steel case with aluminium front and rear panels for this project as I thought it might make the whole process a little quicker and easier. This turned out to be a bit of a mixed bag :)

{% include image.html url="/assets/images/2021-10/p70-case-layout-sans-wiring.jpg" caption="The internal layout of the boards in the case before wiring it all up. There was plenty of room in there (probably a little too much) to ensure there was no mutual interference." %}

Marking and drilling the front and rear panels of the case was a breeze, but painting it turned out to be a real pain in the backside. I had a lot of problems with runs and various other surface imperfections. After doing too many coats, I managed to make it look it look vaguely acceptable, but not really what I had envisaged in the first place.

{% include image.html url="/assets/images/2021-10/p70-case-layout-wiring-complete.jpg" caption="The internals once wiring was complete." %}

I underpainted in black gloss (a mistake, gloss shows up _every_ little imperfection, but I wanted the base layer to reflect as much light back through the top coat as possible) and over-painted with a highly metallic colloidal blue. The effect over black is (or rather should be) quite striking. But after too many coats trying to fix various problems, it doesn't look as good as I'd like it to. However, I'm far too lazy to strip it back and start again. It's good enough.

{% include image.html url="/assets/images/2021-10/p70-case-rear.jpg" caption="The rear of the unit, showing just how big that heatsink is compared with the rest of it :)" %}

In addition, it's _really_ difficult to get a half-decent photo of it because it's far too glossy and shiny. I've learned my lesson and I won't bother with gloss again. There is no way I can get a shot of it on my electronics work bench, as there are far too many pin-point directional light sources there, so I took it outside during moderately overcast conditions to see if I could get a few passable photos.

{% include image.html url="/assets/images/2021-10/p70-case-front.jpg" caption="The front. I haven't bothered to add any labels to the controls - I think they're pretty self-explanatory." %}

One aspect where it does excel is sound. It really does sound great; it's so clean. I have no measurements to back up any claims here, so I'll leave it at that. I think it was worth the effort, though. Even if I don't use it as often as my [P113]({% post_url 2014-01-27-ESP-P113-headphone-amp %}) (which is attached to my computer), I'm glad I made it.

{% include image.html url="/assets/images/2021-10/p70-case-sparkly.jpg" caption="A shot of the top in full sun where I try to capture some of the depth in the metallic paint job. Doesn't do it justice, I'm afraid." %}

It's nice to have a headphone option out in the main "listening room" so you can enjoy great sound without disturbing anyone.

