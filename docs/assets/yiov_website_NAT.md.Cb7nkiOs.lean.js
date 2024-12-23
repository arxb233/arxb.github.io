import{_ as e,c as r,j as t,a as p,G as o,a4 as l,B as i,o as c}from"./chunks/framework.iuAMY0aj.js";const n="/NAT/NAT-01.png",m="/NAT/NAT-02.png",h="/NAT/NAT-03.png",d="/NAT/NAT-04.png",g="/NAT/NAT-05.png",u="/NAT/NAT-06.png",_="/NAT/NAT-07.png",b="/NAT/NAT-08.png",k="/NAT/NAT-09.png",y="/NAT/NAT-10.png",f="/NAT/NAT-11.png",w="/NAT/NAT-12.png",N="/NAT/NAT-13.png",A="/NAT/NAT-14.png",T="/NAT/NAT-15.png",z="/NAT/NAT-16.png",v="/NAT/NAT-17.png",q="/NAT/NAT-18.png",P="/NAT/NAT-19.png",F=JSON.parse('{"title":"浅谈内网穿透","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/website/NAT.md","filePath":"yiov/website/NAT.md","lastUpdated":1734678955000}'),x={name:"yiov/website/NAT.md"};function I(G,a,S,B,M,V){const s=i("ArticleMetadata");return c(),r("div",null,[a[0]||(a[0]=t("h1",{id:"浅谈内网穿透",tabindex:"-1"},[p("浅谈内网穿透 "),t("a",{class:"header-anchor",href:"#浅谈内网穿透","aria-label":'Permalink to "浅谈内网穿透"'},"​")],-1)),o(s),a[1]||(a[1]=l('<div class="tip custom-block"><p class="custom-block-title">(当前界面文档全部来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>实话讲我个人是不太喜欢的，之前家里有闲置电脑，于是用内网穿透当做服务器使用，结果电费还挺高，几百块一年的服务器不香吗</p><h3 id="_1-为什么要内网穿透" tabindex="-1">1.为什么要内网穿透 <a class="header-anchor" href="#_1-为什么要内网穿透" aria-label="Permalink to &quot;1.为什么要内网穿透&quot;">​</a></h3><p>因为不知道公网IP，只能这样选择这样的方式</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>公网：所有人可访问</p><p>内网：仅限局域网内用户访问</p><p>内网穿透：所有人可访问内网</p></div><h3 id="_2-怎么获得公网ip" tabindex="-1">2.怎么获得公网IP <a class="header-anchor" href="#_2-怎么获得公网ip" aria-label="Permalink to &quot;2.怎么获得公网IP&quot;">​</a></h3><p>联通或者电信：直接打电话给运营商开通，就说要装摄像头</p><p>移动的：emm，有点难</p><p>当然也不排除，三大运营商都不给开</p><h3 id="_3-公网ip可以用来做什么" tabindex="-1">3.公网IP可以用来做什么 <a class="header-anchor" href="#_3-公网ip可以用来做什么" aria-label="Permalink to &quot;3.公网IP可以用来做什么&quot;">​</a></h3><p>搭建服务器、远程访问等等</p><h2 id="常用的穿透工具" tabindex="-1">常用的穿透工具 <a class="header-anchor" href="#常用的穿透工具" aria-label="Permalink to &quot;常用的穿透工具&quot;">​</a></h2><p>免费内网穿透工具还是挺多的，基本都罗列出来了</p><div class="tip custom-block"><p class="custom-block-title">关于网速</p><p>免费基本都是1M，网速在128K</p><p>日常用倒是没啥问题</p></div><details class="details custom-block"><summary>神卓互联</summary><p>官网：<a href="https://www.shenzhuohl.com/" target="_blank" rel="noreferrer">https://www.shenzhuohl.com/</a></p><p>官方教程：<a href="https://www.shenzhuohl.com/article/1/shenzhuo/show/6" target="_blank" rel="noreferrer">https://www.shenzhuohl.com/article/1/shenzhuo/show/6</a></p><p>优劣：两个映射，不限流量，稳定程度中等</p><p><img src="'+n+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>花生壳</summary><p>官网：<a href="https://hsk.oray.com/" target="_blank" rel="noreferrer">https://hsk.oray.com/</a></p><p>官方教程：<a href="http://service.oray.com/question/8146.html" target="_blank" rel="noreferrer">http://service.oray.com/question/8146.html</a></p><p>优劣：<strong>需6元</strong>开通使用，赠送一个域名，两个映射，每月1G流量</p><p><img src="'+m+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Sunny-Ngrok</summary><p>官网：<a href="https://www.ngrok.cc/" target="_blank" rel="noreferrer">https://www.ngrok.cc/</a></p><p>说明：下拉到底有免费服务器，注册账号，开通隧道即可</p><p>官方教程：<a href="https://www.ngrok.cc/_book/start/ngrok_windows.html" target="_blank" rel="noreferrer">https://www.ngrok.cc/_book/start/ngrok_windows.html</a></p><p><img src="'+h+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Natapp</summary><p>官网：<a href="https://natapp.cn/" target="_blank" rel="noreferrer">https://natapp.cn/</a></p><p>官方教程：<a href="https://natapp.cn/article/natapp_newbie" target="_blank" rel="noreferrer">https://natapp.cn/article/natapp_newbie</a></p><p>优劣：两条免费隧道，不定时强制更换域名</p><p><img src="'+d+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>大象(原WeNAT)</summary><p>官网：<a href="https://nat.72wo.com/" target="_blank" rel="noreferrer">https://nat.72wo.com/</a></p><p>说明：下载即可使用，现已改为付费</p><p><img src="'+g+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>闪库</summary><p>官网：<a href="http://www.ipyingshe.com/" target="_blank" rel="noreferrer">http://www.ipyingshe.com/</a></p><p>说明：开通免费隧道即可，据说是2M网速</p><p><img src="'+u+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>小蝴蝶</summary><p>官网：<a href="https://www.npsvip.com/" target="_blank" rel="noreferrer">https://www.npsvip.com/</a></p><p>说明：说有免费方案的，我没找到</p><p><img src="'+_+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>nat123</summary><p>官网：<a href="http://www.nat123.com/" target="_blank" rel="noreferrer">http://www.nat123.com/</a></p><p>说明：最右侧软件下载使用即可</p><p><img src="'+b+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Ngrok·搭建类</summary><p>官网：<a href="https://ngrok.com/" target="_blank" rel="noreferrer">https://ngrok.com/</a></p><p>搭建教程：<a href="https://yangqiang.im/?p=750" target="_blank" rel="noreferrer">https://yangqiang.im/?p=750</a></p><p><img src="'+k+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Ssh+autossh·搭建类</summary><p>官网：<a href="http://www.harding.motd.ca/autossh/" target="_blank" rel="noreferrer">http://www.harding.motd.ca/autossh/</a></p><p>搭建教程：<a href="https://yangqiang.im/?p=698" target="_blank" rel="noreferrer">https://yangqiang.im/?p=698</a></p><p><img src="'+y+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Frp·搭建类</summary><p>项目地址：<a href="https://github.com/fatedier/frp" target="_blank" rel="noreferrer">https://github.com/fatedier/frp</a></p><p><img src="'+f+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Spike·搭建类</summary><p>项目地址：<a href="https://github.com/slince/spike" target="_blank" rel="noreferrer">https://github.com/slince/spike</a></p><p><img src="'+w+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Lanproxy·搭建类</summary><p>项目地址：<a href="https://github.com/ffay/lanproxy" target="_blank" rel="noreferrer">https://github.com/ffay/lanproxy</a></p><p><img src="'+N+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>smarGate·搭建类</summary><p>项目地址：<a href="https://github.com/lazy-luo/smarGate" target="_blank" rel="noreferrer">https://github.com/lazy-luo/smarGate</a></p><p><img src="'+A+'" alt="" loading="lazy"></p></details><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">说明</p><p>本次演示<code>神卓互联</code>的使用，实际体验并不是很顺滑</p></div><p>适用于：服务器搭建在虚拟机中，也不知道公网IP，人不在电脑旁，但想远程访问</p><p>神卓互联官网：<a href="https://www.shenzhuohl.com/" target="_blank" rel="noreferrer">https://www.shenzhuohl.com/</a><img src="'+T+'" alt="" loading="lazy"></p><p>安装好后，注册一个账号并登录-左下 <code>添加映射</code></p><p><img src="'+z+'" alt="" loading="lazy"></p><p>填好后保存，返回点刷新，卡退了的重新打开软件</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>应用名称：随便写</p><p>内网主机：填内网IP，<code>win+R</code>键 - 输入 <code>cmd</code> - 输入 <code>ipconfig</code> 查询</p><p>内网端口：比如宝塔面板填8888</p></div><p><img src="'+v+'" alt="" loading="lazy"></p><p>复制地址就可以了，手机断开WIFI了，用数据也可以访问</p><p><img src="'+q+'" alt="" loading="lazy"></p><p>然后你不能退出软件，一整天都要挂着，否则会断开映射，最糟心的是这个</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>你可以考虑其他映射（都差不多），或者付费，或者买轻量服务器</p></div><p><img src="'+P+'" alt="" loading="lazy"></p>',43))])}const W=e(x,[["render",I]]);export{F as __pageData,W as default};
