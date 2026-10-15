---
title: "How to Install Octave on Mountain Lion (10.8.X)"
date: "2013-05-27T18:54:16+01:00"
permalink: "/2013/05/27/how-to-install-octave-on-mountain-lion-10-8-x/"
description: "The past few weeks I’ve been learning about learning about Machine Learning from Stanford Professor Andrew Ng on Coursera. I love how anyone can learn advanced subjects online from the worlds top professors in their field for free, but this post isn’t about the course, its a quick solution for those of you, who like…"
image: "/imgs/blogs/how-to-install-octave-on-mountain-lion-10-8-x/octave-logo.jpeg"
categories:
  - "blog"
tags:
  - "macos"
  - "technical"
wpId: 860
---

The past few weeks I’ve been learning about learning about [Machine Learning from Stanford Professor Andrew Ng](https://class.coursera.org/ml-003/class/index "Machine Learning Course") on [Coursera](http://www.coursera.org "Coursera"). I love how anyone can learn advanced subjects online from the worlds top professors in their field for free, but this post isn’t about the course, its a quick solution for those of you, who like me, have struggled to get the open-source math programming language, [Octave](http://www.gnu.org/software/octave/ "Octave"), installed on their MacOS Mountain Lion (version 10.8.X) computer. Unfortunately I’ve now missed the first 5 weeks course deadlines (automatic deduction of 20% on all my coursework!) because of this issue, and I went through several different routes until I found this solution from a fellow student on the forum.

## The Issue

I installed Octave from the course wiki for Mac via a DMG file available [here](http://s3.amazonaws.com/mlclass-resources/software/octave-3.4.0-i386.dmg "Octave 3.4.0 DMG"). It needs X11 installed, which when I checked my system I had, but obviously was a non-working version. Hence every time I started Octave on my Mac, I would get a terminal window open with the message:

\[Process Completed\]

## The Solution

I tried installing it via MacPorts (useless) and Homebrew (also useless) until I tried another students suggestion. It turns out the version of X11 I had installed was out of date, so installing the latest version, and installing the software in the order below fixed the issue. So here’s how to install Octave on Mountain Lion (my version is 10.8.3):

1.  Install the latest version of X11 and restart your computer: [http://xquartz.macosforge.org/landing/](http://xquartz.macosforge.org/landing/ "X11 Download")
2.  Download the Octave DMG file from here: [http://s3.amazonaws.com/mlclass-resources/software/octave-3.4.0-i386.dmg](http://s3.amazonaws.com/mlclass-resources/software/octave-3.4.0-i386.dmg "Octave 3.4.0 DMG")
3.  Open and install the included DMG, Gnuplot first. I read this on a blog somewhere, that this sometimes needs to installed before the main Octave application or you get the same error I got
4.  Finally install the main Octave app.
5.  Run

Hopefully this will work for you too, if not, then please leave a comment (with a solution to your issue hopefully) below.
