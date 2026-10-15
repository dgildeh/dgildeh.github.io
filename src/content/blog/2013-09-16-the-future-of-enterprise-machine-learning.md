---
title: "The Future of Enterprise: Machine Learning"
date: "2013-09-16T10:00:12+01:00"
updated: "2013-09-13T01:52:32+01:00"
permalink: "/2013/09/16/the-future-of-enterprise-machine-learning/"
description: "My last blog talked about the effect of Big Data on the future of Enterprise. When it comes to generating insights and correlations on data, a branch of Artificial Intelligence (AI), Machine Learning (ML), is a key tool in the Data Scientist’s arsenal. Machine Learning is a set of algorithms that can apply statistics on…"
image: "/imgs/blogs/the-future-of-enterprise-machine-learning/large-icon.png"
categories:
  - "blog"
tags:
  - "business"
  - "enterprise"
  - "Future of Enterprise"
  - "machine learning"
  - "opinion"
  - "start-up"
  - "tech"
wpId: 875
---

My [last blog](/2013/09/09/the-future-of-enterprise-big-data/ "The Future of Enterprise: Big Data") talked about the effect of Big Data on the future of Enterprise. When it comes to generating insights and correlations on data, a branch of [Artificial Intelligence](http://en.wikipedia.org/wiki/Artificial_intelligence "Artificial Intelligence on Wikipedia") (AI), [Machine Learning](http://en.wikipedia.org/wiki/Machine_learning "Machine Learning on Wikipedia") (ML), is a key tool in the Data Scientist’s arsenal. Machine Learning is a set of algorithms that can apply statistics on data sets to generate correlations and predictions on the data, which ultimately can be used to drive decisions and actions.

## How Machine Learning Works

Imagine we wanted to predict house prices based on the size of the house. We could get all the historic sale price data and correlate them to the size in square meters of the houses like below. Using mathematical algorithms, we can find the regression line that best fits the data to predict the house price based on house size as an input to a certain degree of accuracy.

![ML House Prices Example](/imgs/blogs/the-future-of-enterprise-machine-learning/ml-house-prices-example.png)

However house prices aren’t just related to house size, so we need to add other data points to make our algorithms more accurate, such as location, condition, number of bedrooms, age etc. These are called “features”, and as long as these feature’s can be turned into a number, they can all be fed into the algorithms to make the predictions more accurate.

In fact, the more relevant features, and historic data we have, the more accurate our prediction algorithms will become, which is why ML is becoming so popular as Big Data technologies allow engineers and Data Scientists to analyze even larger, complex data sets than before. In fact there are lots of different ML algorithms we can use to ‘best-fit’ our data set, so we can even test lots of them quickly using Big Data tools to find the most accurate algorithm to generate a prediction.

These algorithms are used online all the time: every time you run a search on Google it uses ML to return the best results and ads for your keywords, your spam filter on email uses classification algorithms to classify email into spam or ham, and automatically put spam into your spam folder, and Amazon and [Netflix](http://www.netflix.com/ "Netflix Website") use recommendation algorithms to predict what products or movies you’d like next based on your purchase/viewing history.

For a great (albeit maths heavy) introduction into the mathematics and algorithms behind ML, I would highly recommend this [Coursera course on Machine Learning](https://class.coursera.org/ml-003/class "Coursera - Machine Learning Class") by [Andrew Ng](http://cs.stanford.edu/people/ang/ "Andrew Ng"), Director of Standford University’s AI lab, which I took earlier this year and gave me all the knowledge I needed to get started with using ML practically. (I love the fact anyone can now do a Standford University course for free online – this is going to change education forever!)

## Early Adopters Today Are the Winners Tomorrow

The thing about Machine Learning, is [the algorithms never stop learning](http://gigaom.com/2012/03/21/machine-learning-structure-data-2012/ "Gigaom: ML Never Stops Learning"), and they get better as more data is fed into them. This means, whether your a vendor or an Enterprise, you need to start thinking about ML today and how it can enhance your business and products. Its like Search, Google originally built the best search algorithm back when they started which lead to its dominance today. However now they have the lead there, they also have the largest data set of web pages, clicks and user analytics of any search engine out there, giving them a huge advantage over other search engines like Microsoft’s Bing. This data set allows them to build and test better, more accurate algorithms than the competitors, ensuring they can continue delivering the best results and remain the dominant search engine on the internet.

If you applied this example to other businesses, you can see the early adopters soon gain an unfair advantage over their competitors if they started collecting and using the data earlier. A retailer can try and compete with Amazon, but Amazon has the purchase history and catalog metrics for over 13 years now, giving them significant insight into what customers want, which they can use to service them better using ML.

The good news is data storage has been hugely commodised over the past 5 years with Cloud services like Amazon Web Services, and the cost is dropping all the time. In this time of abundant storage, its now possible to store huge amounts of data indefinitely. Gone are the days when I was working at Accenture, where the design of the data warehouse was limited by the cost of storage, now any Enterprise can afford to be less choosy about what data they want to capture (in theory they could choose to capture everything) and how long they keep it.

So if your Enterprise is not ready to employ a Data Scientist and determine what data you need, and what algorithms to use to gain insight on the data, at the very least you should be looking to capture and store as much as you can (subject to data privacy regulations!) so the Data Scientist has a large pool of data to find correlations that may prove invaluable to your business later on.

## Making Enterprise Software Intelligent

ML’s key impact on the Enterprise, will be making Enterprise Software more intelligent. Today we have a range of what are essentially ‘dumb’ applications. They’re good at recording data, making repeatable processes more efficient through automation, and reporting on the data for human analysis, but very few of the applications can actually learn and adapt based on the data they hold.

For example CRM and Marketing Automation software are ideal candidates for this type of technology. Both of them record data on your customers and leads, and hold a lot of data (when the sales guys use them properly!) on who your customers are and how leads travel through the funnel. The problem today is most of this reporting is manual, at most some graphs and tables on a dashboard, that needs humans to consume and analyse. ML has the potential to accurately predict the likelihood of closing a new lead when it arrives in the system, based on the characteristics of the lead such as company industry, size etc. It could even go further and identify the close rates for each of the sales people individually based on the type of lead they receive, giving you a very accurate forecast of your sales pipeline and giving you the opportunity to drop leads that are unlikely to close and just waste time.

Most Marketing organizations in the B2B space aren’t very good at automatically up-selling their customers, and tend to put their customers into wide buckets, that humans then try to up-sell. With recommendation algorithms, a marketing automation tool could automatically decide which additional services and products a customer is most likely to buy, and create a personalized and highly targeted marketing campaign to help the account management team up-sell them.

Enterprise Content Management (ECM), the field I work in at Alfresco, will be hugely impacted by ML. An area of ML called [Semantics](http://en.wikipedia.org/wiki/Semantics "Semantics definition on Wikipedia") and [Natural Language Processing](http://en.wikipedia.org/wiki/Natual_Language_Processing "Natural Language Processing on Wikipedia") (NLP) will allow computers to finally understand the content stored in the billions of documents and emails Enterprises create and store everyday. This will dramatically improve the search-ability and discovery of content in an organization, allow the unstructured data (which represents about 80-90% of the data organizations hold) to be used in new ways, and ultimately make ECM a brain for the Enterprise, that sucks in knowledge and can provide the knowledge someone needs to do their job on demand.

Finally another area ripe for a revolution with ML is System Monitoring software, software that monitors servers and software applications running in the Enterprise. Today monitoring software can collect metrics and send alerts when pre-defined thresholds are crossed, usually resulting in spammy alerts that operations teams start ignoring. ML has the potential to not only intelligently set thresholds and define alerting based on the historic metrics being sent back (as some tools already do today) but also predict a failure before it happens, meaning operations teams can take actions before there’s an outage on their service.

## The Impact of Machine Learning on the Enterprise

ML will be a key part of the next generation of Enterprise applications, making applications smarter. The key question is what happens when our applications become smart? When our CRM can run our sales process and team better and more efficiently than a human can, will we still need Sales Operations Managers? When our Marketing Automation is able to redesign our campaigns, website and content to maximize conversion better and faster than a human can, how will a marketing team look in the future?

Ultimately, ML and AI have the potential to completely automate many of the processes and functions Enterprises run today, able to do it better and faster than humans. The real impact on the Enterprise will be less people, and less jobs. This will be forced by competition, it will only take one company in an industry to adopt these tools before all the rest are forced to adopt them or face going out of business so they can keep up with or match the costs of their competitors who are.

As ML and AI become commodised in the long term (> 30-40 years) it will only increase the pace of innovation. Today, if I start a new business, I will need a team of developers to build the product, and eventually need to build a marketing team, sales team and finance team. What if computers could write the software based on my designs? And I could use a cheap marketing automation program to market it online, or automate the majority of my finance processes using this technology? How much faster could I innovate? How much easier would it be for anyone to launch a new business and act as big as the larger, more established businesses?

For the C-Level executives, shareholders, and Entrepreneurs out there, this technology has the potential to make it easier to launch and test new ideas, and reduce the biggest cost in many organizations, people, making Enterprises extremely profitable. This trend is already starting to happen, but for the workers in organizations, outside a few creative and sales/support roles, many people will find their jobs increasingly automated until they’re ultimately replaced by intelligent software.

This will have a huge impact on society and the way type of economic model we will need to adopt in future to ensure huge numbers of the population aren’t left unable to maintain a decent standard of living.

In my blog next week, I will talk about the impact of Machine Learning’s parent field, Artificial Intelligence, on the Enterprise. Please follow this blog or me on [Twitter](https://twitter.com/dgildeh "My Twitter Profile") to get notified when its ready.
