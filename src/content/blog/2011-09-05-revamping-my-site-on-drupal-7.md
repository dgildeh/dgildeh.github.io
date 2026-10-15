---
title: "Revamping my site on Drupal 7"
date: "2011-09-05T22:49:47+00:00"
updated: "2013-04-01T01:03:20+01:00"
permalink: "/2011/09/05/revamping-my-site-on-drupal-7/"
description: "I finally sat down this weekend to do a full revamp of my website in preparation for some serious blogging! It only took a couple of days and it was my first chance to really get to know Drupal 7. The issue with Drupal is that is that it is quite technical, and out of…"
image: "/imgs/blogs/revamping-my-site-on-drupal-7/drupal_branding_2012.jpg"
categories:
  - "blog"
tags:
  - "blogs"
  - "design"
  - "drupal"
  - "web"
wpId: 364
---

<img src="/imgs/blogs/revamping-my-site-on-drupal-7/druplicon.png" alt="druplicon" class="alignleft" width="88" />I finally sat down this weekend to do a full revamp of my website in preparation for some serious blogging! It only took a couple of days and it was my first chance to really get to know [Drupal 7](http://www.drupal.org/). The issue with Drupal is that is that it is quite technical, and out of the box it does need a lot of configuration just to setup something as simple as this site, a blog with a few ‘about’ pages. I did play with [WordPress](http://wordpress.org/) for a few hours, too many people have been telling me for a while its ‘so much better’, and it is when you compare its usability and setting up a simple blog with social integration. Drupal unfortunately still has some way to go before it has WYSIWYG editors out of the box and core modules that allow you to automatically integrate your commenting and posts with [Twitter](http://www.twitter.com/) and [Facebook](http://www.facebook.com/).

However, Drupal 7 is a massive leap from Drupal 6 in terms of usability and core functionality. While more technical than WordPress, you do get more flexibility to configure it deeper. As usual, most modules are still catching up with the recent Drupal 7 release even after several months, and so many of the modules I’ve had to install to do what I want are still only Release Candidates, and others like the [Twitter integration module](http://drupal.org/project/twitter) I used to publish my posts automatically to Twitter still don’t have a stable 7.X version. The great new feature I love though that will make my life so much easier maintaining the site is automatic updates of modules, so now I don’t have to keep downloading modules to keep them up to date! Unfortunately the core modules still need a manual upgrade and hopefully Drupal 8 will fix this once and for all so running a Drupal site doesn’t become laborious.

I was fortunate that [Learn By The Drop](http://learnbythedrop.com/) has written this [free PDF ebook](http://learnbythedrop.com/buildingyourblog) to get started. It is really well written and I pretty much used it as the basis to get started and add new features like Tagging I hadn’t put on my blog previously, and get the WYSIWYG editor up and running properly without all the formatting issues I usually have (and spell checking too!). However I did deviate from not using the core blog module, he advocates creating your own blog content type for more control, all my current blogs are created using the blog module so I had to stick to it, but to be honest I didn’t see any disadvantage using it so I would encourage you to use it instead of creating your own ‘blog’ content type like he suggests.

So all in all here is a summary of the new features on this site:

-   New sub-theme based on the [Danland Theme](http://drupal.org/project/danland). I have modified a few things and eventually will get around to adding a nice banner again with all my photos from around the world like I had previously.
-   [WYSIWYG editor](http://drupal.org/project/wysiwyg) with [TinyMCE](http://www.tinymce.com/) and spell checking, so I don’t have to use MS Word anymore to write my blogs then hand write HTML like before.
-   Tagging using the core Taxonomy module and [Tagadelic](http://drupal.org/project/tagadelic) to show the Tag Cloud on the side.
-   The [Media Module](http://drupal.org/project/media) so I can upload and manage all my files, images, videos etc. and easily embed them in pages.
-   [Comment Notifications](http://drupal.org/project/comment_notify) so people can get notified of replies to their comments on the blog.
-   [Mollum](http://drupal.org/project/mollom) to get rid of the tons of spam comments I get on the site. If its successful I will finally allow comments to be posted immediately without approval.
-   [ShareThis](http://drupal.org/project/sharethis) links at the bottom of each blog so people can easily share my blogs if they want to.
-   Views module to create a list of my project pages
-   All the usual [Google Analytics](http://drupal.org/project/google_analytics), [Google Analytics Reports](http://drupal.org/project/google_analytics_reports) and [SiteMap](http://drupal.org/project/site_map) modules so I can be sure at least 1 person is reading my blogs…

However, after ‘tasting’ WordPress, I would love to see the following modules developed and maintained for Drupal 7 if its really going to be effective for social content like blogs:

-   A way for users to login using Twitter and Facebook to post comments and also have related Tweets for the blog shown at the bottom of the comments
-   The Twitter module ported to Drupal 7 so I can automatically post my blog to Twitter. A syndication module would be best so I can post to Twitter, Facebook, Digg and all the other social services as soon as I post my blog
-   WYSIWYG with a default Drupal editor that all the themes play nice with built into the core like WordPress

I’m pretty happy with the end result, I think anything more would be ‘masturbation’ like I used to keep reminding my business partners everytime they went off for several days getting off on building the ‘perfect’ feature or website. However when I have time I’ll probably finish the theme to add a bit more colour, add Google translate to my pages so the rest of the world can ‘enjoy’ my blogs, and I want to add a ‘Bookshelf’ with a list of all the books I’ve read or am reading and may be useful for other start-up/business people. Also I will have some fun putting all my other sites onto this install and running Drupal multi-tenanted and try some affiliate marketing on the other ones (which are paying quite well without me doing anything so I’m tempted to find out how much I can make with a bit of SEO!)

Anyway, now that I’ve got everything up to date, I plan to start blogging more regularly like I said in my last post, so after this, less geek, more chic 😉
