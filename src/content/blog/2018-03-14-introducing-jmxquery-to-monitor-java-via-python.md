---
title: "Introducing JMXQuery to Monitor Java via Python"
date: "2018-03-14T21:06:09+00:00"
updated: "2019-05-25T21:18:45+01:00"
permalink: "/2018/03/14/introducing-jmxquery-to-monitor-java-via-python/"
description: "Back in December 2014, we had a team Christmas hackathon and I decided I wanted to make Java Monitoring really simple via our agent and integration plugins. At that time we were recommending new users monitor Java services using solutions like Jolokia, listed in this blog we wrote back then. It was frustrating that our…"
image: "/imgs/blogs/introducing-jmxquery-to-monitor-java-via-python/java-header.png"
categories:
  - "blog"
wpId: 953
---

Back in December 2014, we had a team Christmas hackathon and I decided I wanted to make Java Monitoring really simple via our agent and integration plugins. At that time we were recommending new users monitor Java services using solutions like Jolokia, listed in [this blog](https://outlyer.com/blog/monitoring-java-apps-with-nagios-graphite-and-statsd/) we wrote back then. It was frustrating that our users could monitor non-Java services in a few clicks but the moment they wanted to monitor Java we had to get them to install 3rd party agents, and there were so many ways of doing it there was no consistent way we could rely on to make it a one click setup like our non-Java integrations. It broke the whole setup experience.

I wanted something that would work out of the box, and allows user to easily create plugins with our built in plugin editor just as easily as any other non-Java service. I looked around for ways to interface our Python plugins to Java via JMX, such as [JPype](http://jpype.sourceforge.net/), but they weren’t very portable and would have required embedding a JVM with our agent install to ensure it worked anywhere, which would have exploded the package size. I also looked at [JMXTrans](https://github.com/jmxtrans/jmxtrans) but the fact it required configuration files and couldn’t be run from the command line dynamically didn’t fit into the plugin editor experience I wanted. So in the end I decided to write an integration myself.

The result is [JMXQuery](https://github.com/dgildeh/JMXQuery) which I am open sourcing after 3.5 years today!, It’s a very small, lightweight Jar (17kb) that provides a command line interface to a JMX port on any JVM greater than version 1.5. To make it even simpler to include in our Python plugins I have also created a new Python module to access the Jar, also called jmxquery, which installs with the Jar bundled inside the module.

The Jar has been included in our agent since 2015 and has been running at scale successfully in large production environments we monitor with 1000’s of servers. However it was a little rigid in the way it queried the JMX so before I open sourced it I did a rewrite to make it easier to use and wrote the Python module to make it easier to include in plugins. Going forwards all our Java integrations will use the new JMXQuery module and Jar as you can see we are doing with our latest Kafka integration [here](https://github.com/outlyerapp/integrations/blob/master/kafka/plugins/kafka.py).

## How it works

The Jar provides a command line interface which allows you to pass in the JMX connection URL and a list of semicolon separated MBean queries to fetch. To see the full command line options the Jar provides a useful help option:

```
java -jar jmxquery.jar -help
```

You’ll see you can pass in a connection URL with optional authentication options with a list of MBean queries. For example if you wanted to list all the Mbeans, with all their attributes and values you can get everything using the following query:

```
java -jar jmxquery.jar -url service:jmx:rmi:///jndi/rmi://localhost:1616/jmxrmi -q "*:*"
```

The intent of this design is that without having to use a 3rd party tool like JConsole you can get a full list of all the MBean attributes available in the JVM from the command line, making plugin development in our built in plugin editor easier as you can use the RPC to query what’s available on a remote JVM running on a server with our agent and can list the output easily like below:

```
java.lang:type=MemoryPool,name=Compressed Class Space/Valid (Boolean) = true  java.lang:type=MemoryPool,name=Compressed Class Space/Usage/committed (Long) = 4636672
java.lang:type=MemoryPool,name=Compressed Class Space/Usage/init (Long) = 0
java.lang:type=MemoryPool,name=Compressed Class Space/Usage/max (Long) = 1073741824
java.lang:type=MemoryPool,name=Compressed Class Space/Usage/used (Long) = 4231480
java.lang:type=MemoryPool,name=Compressed Class Space/PeakUsage/committed (Long) = 4636672
java.lang:type=MemoryPool,name=Compressed Class Space/PeakUsage/init (Long) = 0
java.lang:type=MemoryPool,name=Compressed Class Space/PeakUsage/max (Long) = 1073741824
…
```

However once you know what MBean attributes you want, you will probably want to get a specific list of MBean attributes and values, which is why the query option allows you to send a large list of semicolon separated queries like this:

```
java -jar jmxquery.jar -url service:jmx:rmi:///jndi/rmi://localhost:1616/jmxrmi -q "*:*/HeapMemoryUsage;java.lang:type=ClassLoading/LoadedClassCount;java.lang:type=ClassLoading/UnloadedClassCount"
```

Outputs:

```
java.lang:type=Memory/HeapMemoryUsage/committed (Long) = 1073741824  java.lang:type=Memory/HeapMemoryUsage/init (Long) = 1073741824
java.lang:type=Memory/HeapMemoryUsage/max (Long) = 1073741824
java.lang:type=Memory/HeapMemoryUsage/used (Long) = 175592448
java.lang:type=ClassLoading/LoadedClassCount (Integer) = 4803
java.lang:type=ClassLoading/UnloadedClassCount (Long) = 0
=====================
Total Metrics Found: 6
```

The first query will get any MBean values with the attribute HeapMemoryUsage, the others select specific MBean attributes to query. As you can see, you have full access to the JMX Query language to pull out multiple values in one query.

Like any monitoring system we also need a way to assign easily understood metric names, and metric labels for dimensions, to the values we pull out via the query. Because a single query can return multiple values I provided a way to assign names with template variables that could be dynamically replaced by the Jar to return a full list of MBean attribute values with names and labels:

```
java -jar jmxquery.jar -url service:jmx:rmi:///jndi/rmi://localhost:1616/jmxrmi -q "java_lang_{attribute}_{attributeKey}<type={type}>==*:*/HeapMemoryUsage"
```

Outputs:

```
java_lang_HeapMemoryUsage_committed<type=Memory> (Long) = 1073741824
java_lang_HeapMemoryUsage_init<type=Memory> (Long) = 1073741824
java_lang_HeapMemoryUsage_max<type=Memory> (Long) = 1073741824
java_lang_HeapMemoryUsage_used<type=Memory> (Long) = 149273600
=====================
Total Metrics Found: 4
```

As you can see the attribute name replaces {attribute} and the attribute key name replaces {attributeKey}, you can also use the MBean object’s properties as replacements too, in this case {type}. Metric labels are passed in the <> brackets and a double == is used to separate the name from the query. Pretty simple.

And finally, in order to make it really simple for the Python module, or any script, to read the output from the Jar I provided a -json flag to return all the results as JSON so it could be easily parsed.

While writing the Jar I noticed that it was very similar to the Prometheus Java Exporter in the way you configure queries, metric names and labels, and may in future make it compatible so it’s easily to copy Prometheus JMX exporter configuration files when building integration

## Making it Accessible in Python

Finally I wrote a lightweight Python 3 module, also called JMXQuery, and published it so it could easily be installed using pip:

```
pip install jmxquery
```

The module provides a connection class, JMXConnection, that uses subprocess behind the scenes to run the Jar which is bundled inside the module when it’s installed, and a JMXQuery class that makes it really easy to specify queries that can be run using the JMXConnection:

```python
jmxConnection = JMXConnection("service:jmx:rmi:///jndi/rmi://localhost:9999/jmxrmi")
jmxQuery = [JMXQuery("kafka.cluster:type=*,name=*,topic=*,partition=*",
                         metric_name="kafka_cluster_{type}_{name}",
                         metric_labels={"topic" : "{topic}", "partition" : "{partition}"})]

metrics = jmxConnection.query(jmxQuery)

for metric in metrics:
    print(f"{metric.metric_name}<{metric.metric_labels}> == {metric.value}")
```

Outputs:

```
kafka_cluster_Partition_UnderReplicated<{'partition': '0', 'topic': 'test'}> == 0
kafka_cluster_Partition_UnderMinIsr<{'partition': '0', 'topic': 'test'}> == 0
kafka_cluster_Partition_InSyncReplicasCount<{'partition': '0', 'topic': 'test'}> == 1
kafka_cluster_Partition_ReplicasCount<{'partition': '0', 'topic': 'test'}> == 1
kafka_cluster_Partition_LastStableOffsetLag<{'partition': '0', 'topic': 'test'}> == 0
```

## Summary

Although this was originally written for Outlyer, the module is a generic JMX/Python interface which can be used by any monitoring tool. Other wrappers can easily be written for other languages like Ruby, PHP or Go if needed too.

You can find all the source code on Github [here](https://github.com/outlyerapp/JMXQuery) under the MIT open-source license, and contributions for improvements are welcome!

For Outlyer users, all our new integrations will use this module going forwards and it is part of the agent package so you can also use it for any custom integrations you write too without any other setup required. It really does achieve the goal I set out to solve, and make writing and installing Integrations for Java services as easy as non-Java services on Outlyer!
