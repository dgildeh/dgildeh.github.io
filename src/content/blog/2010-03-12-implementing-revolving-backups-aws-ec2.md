---
title: "Implementing revolving backups on AWS EC2"
date: "2010-03-12T18:27:30+00:00"
updated: "2013-05-10T19:57:52+01:00"
permalink: "/2010/03/12/implementing-revolving-backups-aws-ec2/"
description: "A few weeks ago we decided to switch on hourly backups on SambaJAM and I went in search of some good automation scripts to do this&#8230;I was very disappointed. Like a lot of new start-ups, we’ve been taking advantage of Amazon Web Services to host our servers and data, and if you’re building stuff in…"
image: "/imgs/blogs/implementing-revolving-backups-aws-ec2/aws_logo_rgb.png"
categories:
  - "blog"
tags:
  - "aws"
  - "ec2"
  - "technical"
wpId: 349
---

A few weeks ago we decided to switch on hourly backups on [SambaJAM](http://www.sambajam.com/) and I went in search of some good automation scripts to do this…I was very disappointed.

Like a lot of new start-ups, we’ve been taking advantage of [Amazon Web Services](http://aws.amazon.com/) to host our servers and data, and if you’re building stuff in the cloud it is a great service to use. The problem is they still haven’t implemented an easy way to do revolving backups if you’re storing data on Elastic Block Storage (EBS) volumes. By revolving backups I basically mean I keep a certain period of backups (say 2 weeks) and any backups older than that get deleted/overwritten to ensure I stay within AWS’s 500 snapshot limit and only keep what I need to recover data in a disaster recovery scenario. Right now AWS provide EC2 command line tools to create snapshots of your volumes but it doesn’t have any way of deleting snapshots automatically so I can only keep the last 400 snapshots, and delete any that are older.

So when I didn’t find good enough tools, I did it myself and have put the final scripts on this page for anyone to use. For the first timers out there (like I was a few weeks back) I’ve put all the information you need to get started and use the scripts properly. They should work on any Linux distro, but for our purposes they’ve only been tested on Ubuntu 9.04. Also the scripts were originally written in for the EU region, but have been tested successfully with minor changes in the US region – so hopefully you shouldn’t have any problems using them regardless of your location!

To begin with, you need to follow the tutorial [here](http://developer.amazonwebservices.com/connect/entry.jspa?externalID=1663) by Eric Hammond, and make sure your volume is formatted using **XFS**. This allows you to use ec2-consistent-snapshot program and lock both the MySQL database AND the filesystem temporarily while making snapshots for consistent backups. For your convenience I’ve attached a simple installation script (install\_ec2\_const\_snapshot.sh) so you can quickly install the required program for the next part.

Next the other two files are the ones that execute ec2-consistent-snapshot and run a PHP script to delete snapshots automatically:

-   **backup\_ebs.sh** – This is the main script called by a cron job that will execute both ec2-consistent-snapshot and the PHP script to start revolving backups. You call it using the following command:

./backup\_ebs.sh vol-XXXXXXX 60  
This will take a snapshot of vol-XXXXXX (the volume Id) and only keep the last 60 snapshots for that volume. You need to also edit the file to change the following parameters:

-   **Environment Variables:** As Cron will not load all the necessary environment variables, we export them at the top of the file to ensure they are set correctly for the ec2-tools to execute properly. To set them to your values just type “echo $JAVA\_HOME” to see the value on your system.
-   **AWS\_ACCESS\_KEY\_HERE:** Replace this with your AWS Access Key you can get from your account security settings page.
-   **AWS\_SECRET\_KEY\_HERE:** Replace this with your AWS Secret Key you can get from your account security settings page.
-   **MYSQL\_USERNAME\_HERE:** Your MySQL root user username.
-   **MYSQL\_PASSWORD\_HERE:** Your MySQL root user password.
-   **AWS\_REGION\_HERE:** For EU servers this will currently be eu-west-1, for US ue-east-1, us-west-1.

-   **remove\_old\_snapshots.php** – This is a PHP script that takes the number part of the argument you passed into backup\_ebs.sh and uses the local EC2 command line tools to fetch a list of all the snapshots for the volume you declared, and if its greater than N, will delete the oldest ones. You need to edit the file to change the following parameters at the top:

-   **AWS\_ACCESS\_KEY:** Replace this with the file path location to your AWS private key certificate on the server. This is the file you can get from your AWS security page starting with pk-…
-   **AWS\_SECRET\_ACCESS\_CERT:** Replace this with the file path location to your AWS secret key certificate on the server. This is the file you can get from your AWS account security page starting with cert-…
-   **AWS\_REGION\_HERE:** For EU servers this will currently be eu-west-1, for US ue-east-1, us-west-1.

The PHP script is based on Alvin Kreitman’s PHP script [here](http://www.techkismet.com/systems-admin/automating-ec2-ebs-snapshot-cleanup.html) which I liked because it works by keeping the last N snapshots (as opposed to time period like the next one) but didn’t like because you have to code the array of volumes and parameters in the PHP file. The other script I looked at was [ec2-deleted-snapshots](http://code.google.com/p/ec2-delete-old-snapshots) PHP script, but I really didn’t like the fact I had to download all the AWS PHP libraries (lots of files) and the fact it works with time periods as opposed to N number of snapshots. So I’ve taken the best of both which is the final result. There are also some perl/Ruby scripts out there that claim to do the same thing but I’m not a perl/Ruby guy, so stuck to simple PHP.

Unlike other solutions you only need these 3 files and a cron job to get up and running with revolving backups on Amazon EC2. In order to run the cron job its as simple as editing the cron tab (you can read full information [here](https://help.ubuntu.com/community/CronHowto) for Ubuntu):

(as root) crontab -e  
**Add the following two lines to the crontab file for hourly backups:**  
\# Hourly backup script, runs half past the hour every day  
30 \* \* \* \* /bin/sh /pathToScript/backup\_ebs.sh vol-XXXXXXXX 400

I hope this saves some time for people, please post any questions below, and if you’re interested in seeing the final result of these scripts why not checkout our excellent collaboration platform [SambaJAM](http://www.sambajam.com/)! (Shameless plug)

You can find the full script files on Github here: [https://github.com/dgildeh/ebs-revolving-backups](https://github.com/dgildeh/ebs-revolving-backups "Github")
