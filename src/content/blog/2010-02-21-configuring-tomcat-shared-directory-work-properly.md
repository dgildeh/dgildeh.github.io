---
title: "Configuring the Tomcat shared directory to work properly"
date: "2010-02-21T02:26:22+00:00"
updated: "2013-04-01T01:18:56+01:00"
permalink: "/2010/02/21/configuring-tomcat-shared-directory-work-properly/"
description: "I don’t usually write quick technical posts on my website, but this issue is so undocumented on the web that I wasted two days Googling only to find the issue comparing all the files on my old server to my new one. Basically, in Tomcat 6, if you want to put classes that are shared…"
image: "/imgs/blogs/configuring-tomcat-shared-directory-work-properly/tomcat-logo.jpg"
categories:
  - "blog"
tags:
  - "technical"
  - "tomcat"
wpId: 347
---

I don’t usually write quick technical posts on my website, but this issue is so undocumented on the web that I wasted two days Googling only to find the issue comparing all the files on my old server to my new one.

Basically, in Tomcat 6, if you want to put classes that are shared across all your webapps you place them in the tomcat/shared directory and edit your catalina.properties to point the shared.loader property to the correct directories.

What very few sites actually tell you is by default, Tomcat **DOES NOT** follow the J2EE spec, so it will look in a webapps classpath first to find property files and classes before looking in Tomcat’s shared/common classpath locations. The advantage of being able to override property files on the tomcat/shared directory is you can configure all your settings separately for each of your servers (like database settings) and when you deploy your war file, regardless of the settings in there (which may still contain your developers local settings) the application will always use the specific properties files in your tomcat/shared directory.

Basically to fix this problem you need only do one thing in the context.xml file located under tomcat/conf directory:

<Loader delegate=”true” />

Simply add that line and everything is solved! Hope this saves one of you the frustration I’ve had trying to get this working again when we moved to a new server!
