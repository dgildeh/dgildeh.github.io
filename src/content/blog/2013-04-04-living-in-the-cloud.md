---
title: "Living in the Cloud"
date: "2013-04-04T09:00:15+01:00"
updated: "2013-04-03T15:54:19+01:00"
permalink: "/2013/04/04/living-in-the-cloud/"
description: "Now that I’ve moved my blog to WordPress.com I’ve pretty much moved all my digital life to Software as a Service (SaaS) services. I’m living up to my title of Director of Cloud Services at Alfresco by living what I preach. It took a while to get there as some of the services are still…"
image: "/imgs/blogs/living-in-the-cloud/cloudhouse.jpg"
categories:
  - "blog"
tags:
  - "cloud"
wpId: 572
---

Now that I’ve moved my blog to [WordPress.com](http://www.wordpress.com "Wordpress.com") I’ve pretty much moved all my digital life to Software as a Service (SaaS) services. I’m living up to my title of Director of Cloud Services at [Alfresco](http://www.alfresco.com "Alfresco") by living what I preach. It took a while to get there as some of the services are still maturing, and like the Enterprises I sell to I also have concerns around security and privacy of my data. But here’s a summary of what I use today.

### **Music & Films**

These a the easiest to move into the Cloud because the content is replaceable, I.e. I can get songs and films from multiple places, it’s not my personal data if it gets lost or stolen. In addition the Cloud services provide way more than I could possible store, leading to me discovering more content than I would have on my own personal DVD or MP3 collection. I’m a big believer in subscription services for this type of content, since they’ve arrived my piracy levels have dropped to 0, proving that piracy really is a case of not delivering the content the way their users want – online and on demand any time.

The two services I use are:

-   **[Spotify](http://www.spotify.com "Spotify"):** for £10/month I get an unlimited Jukebox that I can save offline to my phone for my daily commute. No longer am I forced to buy Albums full of songs I don’t like, and I’m free to discover millions of other songs at my leisure.
-   [**LoveFilm**](http://www.lovefilm.com "LoveFilm.com"): Although not as rich and up to date as Spotify, this service (also £10/month) delivers all the films I want when I want on my XBox, iPad or computer. As I only watch films once or twice I never was a fan of spending £10 on a DVD and would usually get films from “other sources”. Since LoveFilm these “sources” have pretty much disappeared from my life, and I would love to see even new releases from the cinema on it one day too as paying £15 for a ticket at Vue is frankly ridiculous unless the film is really really good and needs the big screen experience to enjoy it.

### **Books**

I love books, but I hate the space they take (especially when moving house or traveling) and also the lack of instant gratification between hearing about a book and finally getting it. With Kindle on my iPad I now download all my books, and I DON’T buy any of the books if they’re not available in Kindle format (still waiting for Four Steps to the Epiphany Steve…). I’m also selling all my physical books on [Amazon Marketplace](http://www.amazon.co.uk/shops/A2TWMKHT1U9DJK "My Amazon Store Front") (albeit slowly) and one day will not carry any physical books.

Ideally I would also get this as a subscription service like the ones above but I haven’t seen anything along those lines yet (apart from [Books24x7](http://www.books24x7.com "Books24x7") which is hugely expensive as its aimed at corporates), probably fighting huge resistance from the publishers.

I guess the only question I do have is for one day when I have kids, how will they discover the books I care about like I did? I learnt to hypnotise people from an old book my dad had on his bookshelf years ago, in the future how will kids discover the books and interests we have without a bookshelf to raid by themselves. I’m sure there’ll be a solution but that’s the only long term concern I have about all my books being digital right now – that and the fact my books are locked into a proprietary format and I don’t want to have to repurchase them all if formats change…

### **Magazines**

Apart from [The IET](http://www.theiet.org/ "The IET") magazine subscription I get as part of my membership (which sends me E&T magazine every month) I’ve been getting all my magazine subscriptions (mainly Bloomberg Businessweek) digitally for years now. I had to do this as there was a 2 year period I was traveling and working abroad during my Accenture days and this was the only way to get them delivered where I was. On top of that digital magazines have a much better experience as I discussed in a previous blog [here](/2012/02/26/choosing-digital-magazine-subscription/ "Choosing a Digital Magazine Subscription").

### **Website**

Although my website was hosted in the Cloud via [Dreamhost](http://www.dreamhost.com "Dreamhost"), it was still a self managed service. Now I’ve moved to [WordPress.com](/2013/04/01/moving-blog-to-wordpress-com/ "Moving my Blog to WordPress.com") I can concentrate on blogging and less on keeping my website up. For me this is the biggest driver towards Cloud in the Enterprise, and so it is for me!

### **Files & Documents**

This is the most contentious one because unlike the content above, I don’t want these to ever get lost. I have photos for the past 20 years, along with documents and files, videos, my entire personal digital life, that I would hate to ever see lost or stolen. This one took the longest for me to move, especially as this is my area of expertise, and I’m very aware of the issues with choosing a dodgy service like MegaUpload where all my files could be lost if they were sanctioned or the company went under. There were however two drivers that made me take the leap:

-   My friend was burgled a while back and they stole his external hard drive with all his photos for the past 10 years. This has always been a concern, having them stored on an external hard drive is pretty risky, the drive could fail, it could get stolen or worse lost in a fire. I didn’t feel comfortable keeping all that data ‘on-premise’ in case the worst ever happened.
-   My external hard drive (100GB) ran out of space so I either had to buy a bigger one or pay for a Cloud service, I went for the latter.

With those in mind I had a pretty demanding list of requirements. I originally wanted to use [Amazon S3](http://aws.amazon.com/s3 "AWS S3"), as I’m pretty confident Amazon would not be taken down or go under in the next few years, especially as we use them for Alfresco’s Cloud Service! However apart from some out of date open-source projects or some subscription services like JungleDisk, I couldn’t find anything that wouldn’t require me either paying two subscriptions (one for Amazon’s storage and the other for JungleDisk) or worked really well. My requirements were:

-   Had to be mountable as a drive on Windows & MacOS so I could just store files off my computer (not using local disk space apart from local caching) and access them on both my computers. I wasn’t interested in DropBox like syncing of files, as these were files I wanted to store, not sync. but maybe for a ‘working’ folder, where my current work was being edited, it may be a nice to have.
-   I should be able to access and edit the files locally on my PC the same way as accessing a local folder
-   It should be fast, I didn’t want to spend several weeks uploading my files from my external hard drive or waiting a long time to view a video or photo.
-   It had to be cost effective compared to Amazon S3.
-   I wanted the ability to access my files securely on my mobile devices (iPhone/iPad), really great as now I could have 20 years of photos I could bring out at any time when with my friends!
-   I wanted to be able to encrypt all the files with my own password locally (not on their sever) so the only person who could ever view the files was myself

So after looking around for ages I finally settled on an established UK service, [LiveDrive](http://www.livedrive.com "LiveDrive") Briefcase, that supports both Mac, PC and my iPad. Its pretty reasonable (£99/yr for 2TB, although I’m only using around 120GB) but to be honest the product sucks a bit and I would love to move to a better service before this subscription finishes. I also compromised on my requirement for encrypting all my files with a personal key. LiveDrive works, and is fast, and seems to come from a credible company, but the UX of their desktop and iPad clients is pretty shit, and I don’t agree with their reasoning about not allowing me to locally encrypt everything before putting it on their servers.

A product that did get my attention and I trialled during the Beta was [Bitcasa](http://bitcasa.com "Bitcasa"). From playing around with it, this is exactly what I was looking for, really well designed product, even cheaper than LiveDrive, and infinite storage isn’t that bad either! The only hesitation I had was the risk, they’re a new start-up, and being in the start-up world myself I didn’t want to have my digital life disrupted if they failed or did a massive pivot (from consumer to business perhaps) that would leave me having to look for another service. If they prove themselves over time, I will happily move to them. Ideally I’d also buy this service from [DropBox](http://www.dropbox.com "DropBox"), who are very established and credible, but they only provide file syncing, not online storage. There’s a big opportunity for them there I’m sure!

### **Keeping It All Secure**

Finally with all these different services, I needed a way to keep them all secure from hackers and other forms of corruption. After interviewing for an article on [DropBox’s security breach](http://www.commsbusiness.co.uk/News_Article_JS1.cfm?NewsID=17195&YearViewed=2012&Newsmonth=8&EndDay=15&StartDay=1&NoNews=0 "Comms Business Article") last year, I realized I needed to live my advice, as I was also one of those people using the same passwords across all my services. So I purchased [1Password](https://agilebits.com/onepassword "1Password") for Mac and iOS (about £50 total) and have generated very strong, unique passwords for all the different sites and services I use. This way if a hacker gets the password from one, they can’t get to another one of my sites/services with the same password. Also the passwords are randomly generated with a lot of characters and numbers to prevent a brute force attack on my account. Now I can never say never (and I hope this blog isn’t a massive advert for hackers to follow and try and get in all my accounts!) but this should cover 99% of the security issues people have with passwords.

### **Conclusion**

Probably 12 months ago, I wouldn’t have been able to write this blog, which is a testament on how far Cloud services have come in the past 12 months. I now feel confident I can put my entire digital life in the Cloud securely, and I do believe that with a properly managed service, my content will actually be more secure than on an external hard drive in my draw, or on my own managed server. I’d love any other ideas for other consumer services that can put more in the Cloud than I’ve listed above, especially in the File storage space, so please feel free to post any other services you use in the comments below!
