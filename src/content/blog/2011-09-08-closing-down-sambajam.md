---
title: "Closing Down SambaJAM"
date: "2011-09-08T13:20:55+00:00"
updated: "2013-04-01T00:58:27+01:00"
permalink: "/2011/09/08/closing-down-sambajam/"
description: "I finally got around to sending out the final email to all our users announcing we will be closing down SambaJAM on October 8th. It doesn’t feel as sad today, the saddest day was when our last paying customer did their final migration off SambaJAM to a new system a few days ago, which is…"
image: "/imgs/blogs/closing-down-sambajam/sjam_logo1.png"
categories:
  - "blog"
tags:
  - "alfresco"
  - "career"
  - "cloud"
  - "customer development"
  - "ECM"
  - "saas"
  - "sambajam"
  - "sambastream"
wpId: 369
---

I finally got around to sending out the final email to all our users announcing we will be closing down SambaJAM on **October 8th**. It doesn’t feel as sad today, the saddest day was when our last paying customer did their final migration off SambaJAM to a new system a few days ago, which is why we held off on making the announcement to all our users – so they had a chance to migrate and inform all their clients before hearing it from us directly.

When SambaStream was first acquired I did have the best of intentions, I honestly believed this would be better for us a company, better for Alfresco in launching their new cloud service and better for our customers who could become part of a larger more established company. However selling the company, while almost single handedly running the existing company towards the end, and starting a very demanding new role, all at once in a period of 2-3 months, made me realise I wasn’t doing anyone any favours by keeping the service running. It would have let me down in acheiving results in my new very demanding role, it would have let Alfresco down by distracting us from building a phenomenal new cloud service and not just SambaJAM V2, and it would have let our customers down because I couldn’t guarantee what level of support they would get or what the new service would be when it launched later this year (although we know that now but not back during the time of the deal)

Usually the right decision, is the hardest one, and the reason it was so hard was because I had built such great relationships with all our early customers, and was extremely grateful for the faith they put in our very new and unproven service over the past few years. I sincerely hope we haven’t turned them off ever working with another start-up again, but unfortunately this is the inherent risk of joining a brand new and unproven service.

However, out of destruction, comes creation, and by working on SambaJAM the past few years I’ve learned a lot about Cloud, collaboration tools and ECM that I never would have learnt anywhere else and are really going to help us launch a phenomenal new service at [Alfresco](http://www.alfresco.com/). Principally:

-   Coming from an Accenture Enterprise background, where you sell to CIOs/IT with checklists, I completely underestimated the importance of usability for end users at the beginning. As a result, the first version of SambaJAM had lots of features, but no clear use cases or real thought about how to make end users love our application, and in the Cloud, its the end user who decides whether or not to use your tool, not IT, and even more so in the SME space. This epiphany has driven me to be over-passionate about usability, UX and performance, and its completely refocused the way I think about our product design at Alfresco.
-   End users hate ECM and collaboration tools that force them to work outside their usual daily work-flow. When I sold SambaJAM, nothing humbled me more than seeing end users struggling to use something as ‘simple’ as checkin/checkout version control in our document library. For me it was intuitive, but even after 30 years of ECM most users still don’t understand what it is without someone telling them, and hence why services like [Dropbox](http://www.dropbox.com/) have been so phenominal, they don’t force the user to work differently or learn something new other than saving a file, and version control happens invisibly.
-   There’s never ever going to be an ’email killer’ anytime soon – just accept it and move on by thinking about how you can bring email into your application as opposed to trying to remove it completely.
-   We were fortunate enough to build on top of Alfresco’s fantastic WebScript Framework, so we built from day one all of our service as REST APIs with a [GWT](http://code.google.com/webtoolkit) client that sat on top of them. What that meant was our APIs weren’t treated as a second class citizen, whatever you could do in our client, could be done via the API, and I believe this is the architecture for any new cloud services, and [Podio](https://podio.com/) also took this approach for their new service. This opens up so many opportunities for other developers to build on top of your service, integration with other services and other clients, and the decision was vindicated when we sold to a great customer that needed APIs for their platform.
-   Bake in metrics across your entire application from day one. The tools are there now to really monitor and see how end users are really using your application and help you test and improve your application for end users dramatically faster!
-   DON’T UNDERESTIMATE AUTOMATED TESTING. We didn’t put it in until far later, so we amassed a huge technical debt, that slowed down releases, wasted a lot of our time manually testing everything, and because of that always meant the quality of the product never quite reached what we wanted or in some cases needed to sell the service online.

Aside from those, like I said in my last blog, there’s a lot of other things I learned from SambaStream, but these were the main takeaways from building SambaJAM.

I sincerely appreciate all our customers, and users, that supported us from the beginning and I truley hope to help some of the amazing businesses we worked with again one day with an even better and phenomenal service!
