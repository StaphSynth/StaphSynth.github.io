---
layout: post
title: LED Strip Room Lighting
imageSource: /img/LED-logo.png
byline: Construction, repair and lessons learned.
category: projects
#comments: true
tags:
  - electronics
  - lighting
  - power supplies
---

In January of 2015, I built an LED lighting controller and power supply to run about 25 metres of 12V 5050 LED strip lighting. The strip forms a ring around our back back rumpus/listening/hobby room. The lights are mounted high up the walls only a few centimetres down from the cornices on L-shaped pine moulding, with the LEDs facing the ceiling so as not to dazzle the eye. It's meant to light the room with a soft warm-white glow around the perimeter to provide a mellow mood for hanging out listening to the stereo, or during parties, etc.

### Initial Build

The plan was fairly straight-forward: buy the LED strip lights, a beefy 12V supply to run them, and use an [Elliott Sound Products](http://sound.whsites.net/index2.html) [P126 PWM dimmer](http://sound.whsites.net/project126.htm) to allow control of the light level. Then, string them together and enjoy. Needless to say, the project became a little more complex as time went on, and I learned some valuable lessons along the way.

The first mistake I made was to buy a crappy 360W 12V supply from ebay. These supplies do not have a very good reputation for longevity, and I opted to go with one that provided more power than I actually needed in the hopes that the added headroom would make it last a little longer.

{% include image.html url="/img/12v-crapsupply.jpg" caption="blah" %}

After the supply arrived, I pulled it apart to find several very good reasons why these supplies are not well regarded. Completely inadequate thermal management of the switching MOSFETs and high-current rectifier diodes (bolted straight to the case, very poor thermal contact), low quality electrolytic capacitors, and a whiny 60mm fan completed the picture. This project being done on the cheap, however, I decided to press on and see if I could make it work regardless.

I decided to attack the thermal problems first. I moved the main switching transistors from the rear of the board to the side and mounted them, along with the secondary side rectifier diodes, to half an 80mm tunnel-style heatsink. This heatsink is quite large and has a thermal resistance of ~0.8 °C/W without fan assistance.

Given that this supply was to be mounted in the same room as the stereo, I wanted it to run without a fan unless absolutely necessary. A piece of PVC pipe was used to complete the tunnel on the other side of the sink and a quiet 80mm fan was mounted at the bottom end to blow air up through the heatsink tunnel assembly should the temerature rise too far.

{% include image.html url="/img/P126-lightbox1.jpg" caption="blah" %}

The fan is controlled by a [P42](http://sound.whsites.net/project42.htm) thermal fan switching circuit I made quite some time before. The circuit works by sensing the voltage across a couple of ordinary silicon diodes. As the temperature of the P-N junction in a diode rises, the the voltage across it falls. A 741 opamp wired as a comparitor monitors this voltage and compares it with a fixed reference.

Once it hits a certain level (which you set when you calibrate the circuit), the output of the opamp switches and goes low, turning on a PNP transistor that then switches on the fan. In this case, I used a glass of warm water to help me set the circuit to turn the fan on when the heatsink reaches ~45 °C. It almost never turns on except for hot days.

{% include image.html url="/img/P126-lightbox2.jpg" caption="blah" %}

The P126 PWM dimmer circuit follows the supply and allows adjustment of the brightness of the LEDs via a single 10k potentiometer. The circuit is designed to switch a MOSFET on and off rapidly to provide the pulse-width modulation. However, the only MOSFETs I had to hand were IRF540 N-channel devices with a current limit of 27-33A (depending on who's datasheet you're reading). This was going to push a single device towards the edge of its safe operating area, so I decided to split the room circuit into two halves and use a seperate MOSFET to power each half.

This turned out to be a good idea because it halves the current through each MOSFET, doubles the thermal transfer area of the MOSFETs to the heatsink, halves the total current flowing through the power cables to the LEDs, reducing the voltage drop across the cabling as well as cable width requirements. This lunch is not free, but for the small cost of an additional MOSFET, connector, and 2.5m of cable, it comes heavily discounted :)

{% include image.html url="/img/P126-lightbox3.jpg" caption="blah" %}

The PWM MOSFETs are mounted off the P126 board directly on the heatsink, with a small daughter-board made of prototyping board used to provide a mounting point for the heavy power cables and gate resistors to damp ringing of the control signal from P126.

{% include image.html url="/img/P126-lightbox4.jpg" caption="blah" %}

The unit is built into a wooden box made of pieces of pine and tasmanian oak off-cuts. The inside is lined with Earthed aluminium foil to help sink EMI. Connections to the outside world are via holes drilled in the wooden panels with a hole-saw. The connectors were then mounted onto a thinner piece of material (such as aluminium sheet) and then screwed to the panels behind the holes.

{% include image.html url="/img/P126-lightbox5.jpg" caption="blah" %}

The vent holes in the top and bottom of the case were covered in flywire to stop insects and inquisitive fingers from making their way into the box. It wasn't strictly necessary because the heatsink blocks off the high-voltage side of the box from the vents, but it seemed like a good idea nonetheless.

{% include image.html url="/img/P126-lightbox6.jpg" caption="blah" %}

### Repair

The project worked well over a year, but failed one night without much fanfare. The lights gave a flicker, the supply made a funny noise, and then it all went dark. I pulled it apart the next day to discover that the main filter capacitors on the primary side of the supply, ("Rubycong" knock-offs of Rubycon) had failed. These caps were rated at 250V 680uF. One measured 420uF, the other 16.7nF. I decided to replace all the electrolytics in the supply with high quality ones - which is something I should have done when I first built it.

The primary filter caps were replaced with legit Rubycon 250V 560uF, the closest value I could get with the same footprint. The output filter caps on the secondary were replaced with Panasonic high performance, low ESR caps specifically designed for high-current switching supply filtering. I also replaced all the small electrolytics in the control circuitry, although this probably wasn't really necessary, so they just got cheaper Lelon low ESR parts.

After putting it back together, the supply refused to start. I found this puzzling as there was no other obvious signs of damaged or failed parts. Thus the great trouble-shooting saga began. This was hampered by the fact that I couldn't connect most of my test gear to the supply becuase most of it runs at mains potential and I don't have any isolated probes for my oscilloscope. I wasn't going to risk killing the 'scope on a cheap supply, so I was stuck with a multi-meter and my brain.

I probed around with the multi-meter set to DC volts and did some reverse-engineering on the primary side of the supply. It turns out that this supply is a very old [half-bridge](http://sound.whsites.net/articles/smps-primer.html#s54) design. After a bit more reverse-engineering and probing, I discovered that the main control IC was not getting any power. Its supply comes from an auxillary winding on the main transformer. Thus, the main transformer was not doing anything, and lo and behold, one of the switching transistors measured ~300 Ohms from collector to emitter, rather than the many mega-Ohms it should have read.

This was surprising for a couple of reasons: firstly, I expected to find MOSFETs as the primary switching transistors, not high-voltage NPN devices. Secondly, I would have thought that if a transistor was going to fail in this application, it would fail properly should circuit and read almost zero Ohms from one side to the other. Weird.

Anyway, I ordered a couple of new D209 transistors and replaced the old ones
