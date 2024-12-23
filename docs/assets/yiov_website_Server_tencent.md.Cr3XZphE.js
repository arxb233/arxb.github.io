import{_ as o,c,j as t,a as r,G as n,a4 as l,B as s,o as p}from"./chunks/framework.iuAMY0aj.js";const i="/server/tencent/tencent-01.png",d="/server/tencent/tencent-02.png",m="/server/tencent/tencent-03.png",h="/server/tencent/tencent-04.png",u="/server/tencent/tencent-05.png",b="/server/tencent/tencent-06.png",g="/server/tencent/tencent-07.png",v="/server/tencent/tencent-08.png",_="/server/tencent/tencent-09.png",k="/server/tencent/tencent-10.png",f="/server/tencent/tencent-11.png",y="/server/tencent/tencent-12.png",V=JSON.parse('{"title":"腾讯云服务器的购买及使用","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/website/Server/tencent.md","filePath":"yiov/website/Server/tencent.md","lastUpdated":1734678955000}'),q={name:"yiov/website/Server/tencent.md"};function z(x,e,P,w,S,N){const a=s("ArticleMetadata");return p(),c("div",null,[e[0]||(e[0]=t("h1",{id:"腾讯云服务器的购买及使用",tabindex:"-1"},[r("腾讯云服务器的购买及使用 "),t("a",{class:"header-anchor",href:"#腾讯云服务器的购买及使用","aria-label":'Permalink to "腾讯云服务器的购买及使用"'},"​")],-1)),n(a),e[1]||(e[1]=l('<div class="tip custom-block"><p class="custom-block-title">(当前界面文档全部来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><blockquote><p>2022-7-24</p></blockquote><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>腾讯公司旗下的产品，提供云服务器、云存储、云数据库、域名注册等基础云服务</p><p>官网：<a href="https://cloud.tencent.com/" target="_blank" rel="noreferrer">https://cloud.tencent.com/</a></p><h2 id="购买" tabindex="-1">购买 <a class="header-anchor" href="#购买" aria-label="Permalink to &quot;购买&quot;">​</a></h2><p>我这里腾讯云演示，进入 <a href="https://cloud.tencent.com/" target="_blank" rel="noreferrer">腾讯云官网</a></p><details class="details custom-block"><summary>关于腾讯的轻量云服务器轻量无忧计划</summary><p>很可惜，这个活动已经结束了，可以 <a href="https://cloud.tencent.com/act/lighthouse?fromSource=gwzcw.1293314.1293314.1293314" target="_blank" rel="noreferrer">终身180/年续费</a></p></details><p><img src="'+i+'" alt="" loading="lazy"></p><p>在产品里，可以选择 <code>云服务器</code> 或者 <code>轻量服务器</code> ，个人使用建议轻量，价格便宜</p><p><img src="'+d+'" alt="" loading="lazy"></p><p>首次购买，活动场新人的折扣力度比较大</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>价格在100~200左右一年，可以闭眼入</p></div><p><img src="'+m+'" alt="" loading="lazy"></p><p>这里地域选离自己近的，镜像我使用 <code>CentOS 7.6</code> ，选好后，支付订单即可！</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>懒人可以选集成好的镜像，或者 <a href="https://www.debian.org/" target="_blank" rel="noreferrer">debian</a>、<a href="https://cn.ubuntu.com/" target="_blank" rel="noreferrer">Ubuntu</a></p></div><p><img src="'+h+'" alt="" loading="lazy"></p><h2 id="控制台" tabindex="-1">控制台 <a class="header-anchor" href="#控制台" aria-label="Permalink to &quot;控制台&quot;">​</a></h2><h3 id="公网ip" tabindex="-1">公网ip <a class="header-anchor" href="#公网ip" aria-label="Permalink to &quot;公网ip&quot;">​</a></h3><p>右上角 <code>控制台</code> 进入，看我们刚买的服务器</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>一般会提示实名，国内服务器是这样的</p></div><p><img src="'+u+'" alt="" loading="lazy"></p><p>云产品 - 轻量应用服务器</p><p><img src="'+b+'" alt="" loading="lazy"></p><p>这个就是你的服务器 <code>公网IP</code> ，别随意暴露给别人哦，以免被打</p><p><img src="'+g+'" alt="" loading="lazy"></p><h3 id="重置密码" tabindex="-1">重置密码 <a class="header-anchor" href="#重置密码" aria-label="Permalink to &quot;重置密码&quot;">​</a></h3><p>更多 - 管理，可以进行重启 或 重置密码(服务器)</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>这里的登录，是指腾讯自带的 <code>WebShell</code> 工具登录，也可以使用 <a href="./../shell/">其他shell工具</a></p></div><p><img src="'+v+'" alt="" loading="lazy"></p><h3 id="防火墙" tabindex="-1">防火墙 <a class="header-anchor" href="#防火墙" aria-label="Permalink to &quot;防火墙&quot;">​</a></h3><p>平时用的最多的就是 <code>防火墙</code> ，用来开放端口</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>端口根据你需求开放，不要全开，不安全</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>比如：需要开放5700端口，添加规则 - 端口填 <code>5700</code> 即可</p><p>来源默认都是：<code>0.0.0.0/0</code></p></div><p><img src="'+k+'" alt="" loading="lazy"></p><h2 id="备案" tabindex="-1">备案 <a class="header-anchor" href="#备案" aria-label="Permalink to &quot;备案&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>根据你购买的服务器而定</p><ul><li><p>国内服务器：必须备案</p></li><li><p>国外服务器：无需备案</p></li></ul></div><p>控制台-云产品 - 网站备案，这个就没技巧而言了，按步骤实名即可</p><p><img src="'+f+'" alt="" loading="lazy"></p><p>注意国内一般不允许个人做导航，网站名称一般 <code>写个人生活日志之类</code> 的，比较容易通过</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>腾讯客服会电话给你，不用慌，按你想的说就行了，客服也会给你些建议，最后等待备案通过</p><p>通过后会邮件通知你，并要求你在页脚添加备案信息，注意 <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">工信部备案</a> 要能跳转哦</p></div><p><img src="'+y+'" alt="" loading="lazy"></p>',43))])}const $=o(q,[["render",z]]);export{V as __pageData,$ as default};
