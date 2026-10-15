---
title: "Moving my Blog to WordPress.com"
date: "2013-04-01T17:06:19+01:00"
updated: "2013-04-01T18:23:52+01:00"
permalink: "/2013/04/01/moving-blog-to-wordpress-com/"
description: "After almost a year, I came back to add a new post on some talks I’ve been doing recently (will post next!) only to find my Drupal website, hosted at Dreamhost had been hacked for the 2nd time, and my blog was just showing a blank white page. The reason it keeps getting hacked is…"
image: "/imgs/blogs/moving-blog-to-wordpress-com/wordpress-blogging-software-logo.png"
categories:
  - "blog"
tags:
  - "drupal"
  - "web"
  - "wordpress"
wpId: 560
---

After almost a year, I came back to add a new post on some talks I’ve been doing recently (will post next!) only to find my [Drupal](http://www.drupal.org "Drupal") website, hosted at [Dreamhost](http://dreamhost.com "Dreamhost") had been hacked for the 2nd time, and my blog was just showing a blank white page. The reason it keeps getting hacked is because I don’t keep my Drupal site up to date, and there’s bots that go around looking for old security holes in Drupal sites so they can link-hijack the site and add loads of Viagra links to the pages to improve the SEO of those sites…

So as with a lot of stuff recently, because I don’t want to waste my time updating servers and backing up data all the time, I’ve decided to go down the Software-as-a-Service (SaaS) route and move my blog to wordpress.com. With this move, I’ve also purchased a sexy new theme for my blog, and removed a lot of old pages. All-in-all it was pretty cheap but there were some limitations:

-   There’s no automated tool to migrate Drupal websites to wordpress.com so I posted a job on [ODesk](http://www.odesk.com "ODesk") and found a great guy in Bangladesh to do the whole job for me in 20hrs (about $70 total), saving me a lot of time moving all the blogs, comments, images and setting all the URLs/dates correctly. Another great use of ODesk! (more on ODesk in a future post)
-   Because my site is hosted on a shared service I found a few restrictions that I didn’t have on my own personal site which are a little inconvenient at times:
    -   I can’t embed flash objects/videos or iFrames/JavaScript. I think they really need to expand their list of trusted providers, but I understand why they need to do it. (Full details [here](http://en.support.wordpress.com/code))
    -   There’s no support for [Google Analytics](http://www.google.com/analytics "Google Analytics") (WTF??!) however you can get around this by using [CloudFlare](http://www.cloudflare.com/ "CloudFlare"), which also accelerates your site speed too! I found the solution on this blog [here](http://jonathonbalogh.com/2012/05/07/how-to-use-google-analytics-on-a-wordpress-com-blog/).
    -   There media upload only supports certain files, which seems to be missing .txt, .zip and the obvious .pdf formats, probably the most likely ones to use versus the ones they’ve listed…
    -   I’m not sure why wordpress.com insists on showing its link at the bottom of my blog and says on the forums I can’t hide it (I have), I paid for the site without any advertising, so don’t see why I should have it visible on my site
    -   There’s obviously less control over the themes in general, other than the settings provided by the theme itself
-   The free themes are OK, but the theme I ended up using is called [Avid](http://theme.wordpress.com/themes/avid "Avid WordPress Theme"), and cost $68. It was designed for photographers but I think it works beautifully for a blog too!
-   I then upgraded my site for the $99 pro package to remove ads and get my own domain, davidgildeh.com, on the site

So with those restrictions aside, just not having to keep my servers updated to avoid getting hacked is probably the primary reason of going through all the hassle of migrating my blog to a new service. I could have gone with [Drupal Gardens](http://www.drupalgardens.com "Drupal Gardens") as a more obvious choice as my site was already a Drupal 7 site and I’m very familiar with the platform, but there is a wider issue with Drupal which is why WordPress has grown larger in terms of deployed sites in the past few years:

-   While I love Drupal as a developer, I’m not a big fan as a user. There’s so much to learn for a first time user that you don’t need to learn on WordPress – modules, content types, permissions & roles, views, you are just overwhelmed with options and concepts to learn, which if you just want to put together a simple site or blog is a huge turn off. Even Drupal Gardens seems to expose most of these options. For more flexibility and control over my site, I’m having to put a lot more up front work and learning to get started, but for a simple blog like mine its not worth the effort.
-   You still can’t let people add comments by logging in with their social service. On WordPress, users can easily add new comments by logging in with their Twitter or Facebook account, which also shows their picture next to the comment with a link to their profile, but on Drupal you have to create an actual user on the site to post a comment with your profile picture next to it…a few steps too many for most users.
-   The mobile theme support in WordPress seems much better and more mature than Drupal’s. I love the fact my site is now easy to read on an iPhone with the responsive theme!
-   There’s no option to publish a blog at a future date (without using 3rd party modules) On WordPress I can write all my blogs when I feel like it and schedule them to be posted at regular intervals instead of all at once

I think Dries hit the note in his DrupalCon presentation back in 2010 on Drupal 8, its facing an innovators dilemma, getting too complicated for the average user, so hopefully they will fix it all in the next version and I can use the WordPress Import module to move it back to Drupal one day. Until then, I’m sticking to WordPress!

<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/IXIfNwX9ufY" title="YouTube video" loading="lazy" allowfullscreen></iframe></div>
