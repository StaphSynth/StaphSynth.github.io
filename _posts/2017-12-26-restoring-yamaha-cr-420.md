---
layout: post
title: Restoring a Yamaha CR-420
logo: speaker.jpg
byline: Bringing new life to an old friend.
category: projects
comments: true
image: /img/2017-12/yamaha-cr-420.jpg
tags:
  - electronics
  - amplifiers
---

This beautiful amplifier belongs to my uncle, who purchased it brand new in 1979. Over the years, it had become a little careworn and didn't perform as well as it once did. He asked me if I'd give it a once-over and restore it to its former glory. They don't make 'em like this anymore, so of course I would!

{% include image.html url="/img/2017-12/yamaha-cr-420.jpg" caption="Spoiler alert: the amplifier after I finished restoring it." alt="yamaha cr-420 amplifier" %}

This amplifier isn't a monster by any stretch of the imagination, it uses only one pair of TO-220s per channel in its output stage with very moderate heatsinking. However, it's well-suited to use with a pair of good bookshelf speakers.

{% include image.html url="/img/2017-12/cr-420-output-stage.jpg" caption="Just look at those tiny transistors, they're so cute!" alt="yamaha cr-420 output stage" %}

The PCBs are made of cheap phenolic, which is standard fare for consumer gear, but they're well laid out and the amount of time spent in design readily evident.

{% include image.html url="/img/2017-12/cr-420-tape-layout.jpg" caption="One of the things I love about working on old gear is seeing the beautiful hand-taped board layouts." alt="yamaha cr-420 board layout" %}

Top of the restoration list was replacing all the electrolytic capacitors which will have aged and dried up over the years. It's amazing how far this technology has come in the last forty years: I found it very hard to get caps that would fit into the footprints on this board as modern electrolytics are considerably smaller with higher voltage and capacity ratings than their ancient bretheren. The power supply benefited from this, with an increase to 10,000 uF per rail from the 6,800 uF in the original design - it was the only way to get something that would fit into that footprint.

{% include image.html url="/img/2017-12/weird-three-pin-cap.jpg" caption="One of the original power supply reservoir caps. This was a surprise - I have never seen a three-pin capacitor before and it lead to some confusion when I was desoldering it. The third pin appears to be purely for mechanical stability." alt="three pin electrolytic capacitor" %}

{% include image.html url="/img/2017-12/old-caps.jpg" caption="The spent electrolytics after pulling them all from the boards. I can't believe that's all of them, there must be more, I feel like it took an age to get them all out of there." %}

After the capacitors were done, the old incandescent backlights needed fixing as they had failed long ago. I replaced them with warm white LEDs running at ~2 mA to give a nice soft glow.

{% include image.html url="/img/2017-12/led-backlights.jpg" caption="A small daughter-board for the LED supply meant that there were no permanent modifications to the originals to accomodate the new backlights" %}

My uncle also asked me to replace the old tin-plated input sockets with gold-plated ones. The originals were badly oxidized and a pain to use. As with the LEDs, I did not want to make any permanent modifications to the amplifier to accomodate the new sockets, so I fabricated a mount from aluminium sheet and attached them to that, bolting it to the mounting points of the original sockets.

{% include image.html url="/img/2017-12/input-mount.jpg" caption="All in and ready to go into the case." %}

Actually connecting the new sockets to the original mounting points on the board proved to be an extremely fiddly job that required a great deal of patience on my part to complete. There was very little room to manouvre, and the mounting holes themselves barely fit the new sockets into them. I had to make numerous tiny adjustments to get them to slide in.

{% include image.html url="/img/2017-12/inputs-mounted.jpg" caption="Note the single wire that connects all the socket grounds to the ground plane on the board. No ground loops here :)" %}

Still, once they were in, I felt it was worth the effort. They work a lot better than the originals (in that they actually work) and you could always pull them out and put the old ones back in if you _really_ wanted.

{% include image.html url="/img/2017-12/cr-420-rear.jpg" caption="The rear panel came up quite well." %}

After all that, a few squirts of contact cleaner were all that was needed to remove the scratchy sounds coming from the volume and tone pots and it was complete!

All in all, this project took about 17 hours to finish - including time spent sourcing components. It was nice to save an oldy from landfill and give it another forty years' service. Also, it looks great. Love that '70s styling! :)
