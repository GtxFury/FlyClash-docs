---
title: 高级设置
---
# 高级设置
FlyClash Android 提供了强大的功能以及设置选项，下面将介绍一些应用的高级设置项。

## 自动控制

自动控制功能可以实现连接到特定的WiFi，断开服务，或连接到移动数据的时候自动打开服务。
帮助软路由用户无感使用软件。

进入设置页面，点击应用设置

![](/tutorial/setting.png){style="max-width:50%;"}

打开特定WIFI自动断开服务开关

![](/tutorial/setting2.png){style="max-width:50%;"}

点击网络黑名单，按照提示输入网络的特征信息

![](/tutorial/setting3.png){style="max-width:50%;"}

`例如输入subnet:192.168.100.0/24 则意味连接到网段为192.168.100.0网段的WIFI时，FlyClash会自动断开服务`

点击确定保存黑名单规则。

您可根据需要自行决定是否打开连接到移动数据自动开启

![](/tutorial/setting4.png){style="max-width:50%;"}

## 轻量模式

![](/tutorial/setting5.png){style="max-width:50%;"}

开启轻量模式后，退出软件前台将自动释放掉软件UI等相关占用，最大限度减少软件内存占用。

::: warning
一般情况下不推荐打开轻量模式，开启后会导致软件部分统计功能异常或其他问题。
:::