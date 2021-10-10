---
layout: post
title: Yamaha CDX-397 Repair
logo: cd.jpg
byline: Put the magic smoke back in
category: projects
# comments: true
image: /assets/images/2021-10/yamaha-cdx-397.jpg
tags:
  - electronics
  - repairs
---

Recently, one of the channels in my Yamaha CDX-397 CD player died. After disconnecting the working channel from the amplifier and turning up the volume, I could still hear faint music, so clearly something was still working. Time to investigate!

{% include image.html url="/assets/images/2021-10/yamaha-cdx-397.jpg" caption="The Yamaha CDX-397 in all its glory." alt="yamaha CDX-397 CD player" %}

After opening the cover, the problem became quite obvious - there was a nice little scorch mark on the main PCB where a transistor had failed.

{% include image.html url="/assets/images/2021-10/yamaha-cdx-397-dead-transistor.jpg" caption="You can clearly see the dead transistor in this shot of the main board, just before the output jacks." %}

The failure of the component had been so violent that it was missing a good chunk of the plastic package and most of the the part number had been destroyed. However, one of the advantages of working on stereo gear is that you've always got another identical channel to look at.

If you look carefully at the image above, you can see the circuit for the other channel is layed out identically just to the right of the failed component. All I had to do was have a look there, and lo and behold, I got a part number.

{% include image.html url="/assets/images/2021-10/yamaha-cdx-397-good-transistor.jpg" caption="SOT-23 devices usually have two or three character code-based markings. The numbers on the edge aren't meaningful as they are only a batch code." %}

Because of the lack of space, the value printed on a part like this isn't its actual part number. It's usually a short reference code that you have to look up either in a book or online database that indexes the true part numbers. There are a number of these references maintained by various people (searching for "SMD part code" will turn up a few), and depending on what you're looking for, you may have some trouble finding your part. Thankfully, I found what I was looking for fairly quickly [here](http://caxapa.ru/codebook/?search=max).

If you follow that link, you'll see that "MAX" could refer to several different devices. But, since we know this is analog audio, we can easily narrow it down to a KTD1304 NPN transistor. A quick look at the [datasheet](https://datasheet.lcsc.com/szlcsc/KTD1304-RTK-P_C69774.pdf) confirms this, as one of the suggested applications is for audio muting. The dead channel on the CD player is still passing signal, just at a very low level, which suggests this transistor being used in a similar way - although I never did trace out the circuit to confirm this.

The CDX-397 doesn't actually have a user-accessible mute function, but perhaps the outputs are muted at start-up and shut-down to stop weird pops and whistles from opamps or even the DAC from appearing on the output?

Anyway, this seemed like good enough evidence to me, so I went to Aliexpress and ordered a hundred of them (the smallest quantity I could find).

In the meantime, I de-soldered the dead component and cleaned up the pads by first flooding them with tin/lead solder and then mopping it all up with plenty of flux and solder braid.

{% include image.html url="/assets/images/2021-10/clean-pads.jpg" caption="Photo of the board with the pads cleaned up, ready for the new part. This kind of work is fiddly and really needs the right tools as it's very easy to lift the pads from the board while de-soldering and cleaning them." %}

Before soldering in the new part, I carefully tinned the pads with fresh tin/lead solder, held the replacement part against them with a pair of tweezers and used the heat of the iron to lightly tack one of the pins to its pad. Once one pin was stuck, I made solid connections to the other two, before returning to the first one to solder it down properly.

{% include image.html url="/assets/images/2021-10/replacement-soldered-in.jpg" caption="Yeah, this is not a good soldering job." %}

As you can see from the picture above, I managed to waaaay over-do the soldering here. I haven't got a lot of experience soldering SMD components like this and I don't have a hot air gun to do it properly. I didn't want to risk damaging the board by trying to "fix" it, so I left it as-is. It doesn't have to be perfect, it just has to work.

After putting the CD player back together, it worked first try! And if it ever fails like this again, I have another 99 replacement parts in a drawer :)
