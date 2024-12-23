import{_ as s,c as e,j as r,a as i,G as n,a4 as p,B as l,o as d}from"./chunks/framework.iuAMY0aj.js";const c="/v2ray/v2ray.png",m="/v2ray/android/android-01.png",g="/v2ray/windows/windows-01.png",y="/v2ray/windows/windows-02.png",w="/v2ray/windows/windows-03.png",h="/v2ray/windows/windows-04.png",_="/v2ray/windows/windows-05.png",v="/v2ray/windows/windows-06.png",u="/v2ray/android/android-02.png",b="/v2ray/android/android-03.png",f="/v2ray/android/android-04.png",k="/v2ray/android/android-05.png",z="/v2ray/android/android-06.png",P="/v2ray/android/android-07.png",V="/v2ray/windows/windows-07.png",x="/v2ray/windows/windows-08.png",N="/v2ray/windows/windows-09.png",q="/v2ray/windows/windows-10.png",I="/v2ray/windows/windows-11.png",R="/v2ray/windows/windows-12.png",S="/v2ray/windows/windows-13.png",o="/v2ray/windows/windows-14.png",A="/v2ray/android/android-08.png",M="/v2ray/android/android-09.png",W="/v2ray/android/android-10.png",C="/v2ray/windows/windows-15.png",G="/v2ray/windows/windows-16.png",T="/v2ray/windows/windows-17.png",B="/v2ray/windows/windows-18.png",E="/v2ray/windows/windows-19.png",$="/v2ray/windows/windows-20.png",j="/v2ray/windows/windows-21.png",D="/v2ray/windows/windows-22.png",F="/v2ray/windows/windows-23.png",X=JSON.parse('{"title":"V2Ray的安装及使用","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/gfw/v2ray.md","filePath":"yiov/gfw/v2ray.md","lastUpdated":1734678955000}'),H={name:"yiov/gfw/v2ray.md"};function U(Y,a,J,L,O,K){const t=l("ArticleMetadata");return d(),e("div",null,[a[0]||(a[0]=r("h1",{id:"v2ray的安装及使用",tabindex:"-1"},[i("V2Ray的安装及使用 "),r("a",{class:"header-anchor",href:"#v2ray的安装及使用","aria-label":'Permalink to "V2Ray的安装及使用"'},"​")],-1)),n(t),a[1]||(a[1]=p('<div class="tip custom-block"><p class="custom-block-title">(当前界面文档来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>在 Shadowsocks 被封杀后，V2Ray成立，VMess协议是其专属的加密通讯协议</p><p>现在所说的V2Ray其实是Project V（一个工具集合），其核心工具称为V2Ray</p><p>官网：<a href="https://www.v2ray.com/" target="_blank" rel="noreferrer">https://www.v2ray.com/</a></p><p>仓库：<a href="https://github.com/v2ray/v2ray-core" target="_blank" rel="noreferrer">https://github.com/v2ray/v2ray-core</a></p><p><img src="'+c+'" alt="" loading="lazy"></p><h2 id="客户端" tabindex="-1">客户端 <a class="header-anchor" href="#客户端" aria-label="Permalink to &quot;客户端&quot;">​</a></h2><ul><li><p><a href="https://github.com/2dust/v2rayNG/releases" target="_blank" rel="noreferrer">Android端</a></p></li><li><p><a href="https://github.com/2dust/v2rayN/releases" target="_blank" rel="noreferrer">Windows端</a></p></li><li><p><a href="https://github.com/yanue/V2rayU/releases" target="_blank" rel="noreferrer">Mac端</a></p></li></ul><h2 id="协议" tabindex="-1">协议 <a class="header-anchor" href="#协议" aria-label="Permalink to &quot;协议&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">支持协议</th></tr></thead><tbody><tr><td style="text-align:center;">节点</td><td style="text-align:center;">Socks、HTTP、Shadowsocks、WebSocket、Trojan、VMess、VLESS、Hysteria 2</td></tr></tbody></table><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><details class="details custom-block"><summary>Android端 安装</summary><p>下载并安装 <a href="https://github.com/2dust/v2rayNG/releases" target="_blank" rel="noreferrer">v2rayNG</a></p><details class="details custom-block"><summary>下载哪个？</summary><ul><li><p>第一个：v8和v7通用</p></li><li><p>arm64-v8a：64位处理器，常见于市面主流手机</p></li><li><p>armeabi-v7a：32位处理器，常见于老旧款手机</p></li><li><p>x86：32位处理器，常见于平板和模拟器</p></li><li><p>x86_64：64位处理器，常见于平板</p></li></ul></details><p><img src="'+m+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Windows端 安装</summary><p>下载 <a href="https://github.com/2dust/v2rayN/releases" target="_blank" rel="noreferrer">V2RayN</a>，首次安装选 <code>v2rayN-With-Core.zip</code></p><p><img src="'+g+'" alt="" loading="lazy"></p><p>解压并打开</p><p><img src="'+y+'" alt="" loading="lazy"></p><p>根据提示下载 <a href="https://dotnet.microsoft.com/zh-cn/download" target="_blank" rel="noreferrer">Microsoft .NET 8.0 Desktop Runtime</a></p><p><img src="'+w+'" alt="" loading="lazy"></p><p>Edge浏览器，在右上方下载处点击 <code>保留</code></p><p><img src="'+h+'" alt="" loading="lazy"></p><p>安装成功即可</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>再次打开 V2RayN</p><p><img src="'+v+'" alt="" loading="lazy"></p></details><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><details class="details custom-block"><summary>Android端 使用</summary><p>点击左上角三横 <code>≡</code> - 订阅分组设置</p><p><img src="'+u+'" alt="" loading="lazy"></p><p>找一个 <a href="./channel.html">免费送流量的机场注册</a>，一键订阅 - 复制订阅地址</p><p><img src="'+b+'" alt="" loading="lazy"></p><p>点击 <code>+</code> 号，填写机场名，粘贴订阅链接</p><p><img src="'+f+'" alt="" loading="lazy"></p><p>回到主界面 右上角 <code>更新订阅</code>，然后测一下速</p><p><img src="'+k+'" alt="" loading="lazy"></p><p>为了避免后续导入节点使用问题，在设置中打开 <code>启用虚拟DNS</code> 开关</p><p><img src="'+z+'" alt="" loading="lazy"></p><p>选择延迟低的连接，访问 <a href="https://www.google.com" target="_blank" rel="noreferrer">谷歌</a> 看看</p><p><img src="'+P+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Windows端 使用</summary><p>找一个 <a href="./channel.html">免费送流量的机场注册</a>，一键订阅 - 复制订阅地址</p><p><img src="'+V+'" alt="" loading="lazy"></p><p>点击 <code>+</code> 号，添加订阅，名字随便，粘贴订阅地址</p><p><img src="'+x+'" alt="" loading="lazy"></p><p>点击刚添加的订阅 - 订阅分组 - 更新当前订阅（不通过代理）</p><p><img src="'+N+'" alt="" loading="lazy"></p><p>这样节点就都加载进来了</p><p><img src="'+q+'" alt="" loading="lazy"></p><p><code>Ctrl+A</code> 全选，测试服务器直接延迟</p><p><img src="'+I+'" alt="" loading="lazy"></p><p>选择一个延迟低的，右键 <code>设为活动服务器</code></p><p><img src="'+R+'" alt="" loading="lazy"></p><p>对桌面右下角图标，右键 <code>自动配置系统代理</code>，图标变红即为工作状态</p><p><img src="'+S+'" alt="" loading="lazy"></p><p>访问 <a href="https://www.google.com" target="_blank" rel="noreferrer">谷歌</a> 看看</p><p><img src="'+o+'" alt="" loading="lazy"></p></details><h2 id="优选ip" tabindex="-1">优选IP <a class="header-anchor" href="#优选ip" aria-label="Permalink to &quot;优选IP&quot;">​</a></h2><p>对于分享的延迟较高的节点，我们可以通过优选IP来降低延迟</p><details class="details custom-block"><summary>Android端 优选IP</summary><p>我这里准备了一个 <a href="https://t.me/binghequanzi" target="_blank" rel="noreferrer">@冰河圈子</a> 分享的Vmess节点，复制粘贴进来后，点编辑</p><p><img src="'+A+'" alt="" loading="lazy"></p><p>不要挂任何代理，打开 <a href="https://stock.hostmonit.com/CloudFlareYes" target="_blank" rel="noreferrer">在线优选IP（默认443端口）</a> ，从自动筛选的结果里，挑选自己运营商的IP，复制</p><p>然后打开V2RayNG，地址这里删掉之前的，粘贴复制的IP，保存</p><p><img src="'+M+'" alt="" loading="lazy"></p><p>我们点击运行，访问 <a href="https://www.google.com" target="_blank" rel="noreferrer">谷歌</a> 看看</p><p><img src="'+W+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Windows端 优选IP</summary><p>我这里准备了一个 <a href="https://t.me/binghequanzi" target="_blank" rel="noreferrer">@冰河圈子</a> 分享的Vmess节点</p><p><img src="'+C+'" alt="" loading="lazy"></p><p>复制后，点 服务器 - 从剪切板导入</p><p><img src="'+G+'" alt="" loading="lazy"></p><p>这样就添加成功了</p><p><img src="'+T+'" alt="" loading="lazy"></p><p>对着节点右键，编辑服务器</p><p><img src="'+B+'" alt="" loading="lazy"></p><p>不要挂任何代理，打开 <a href="https://stock.hostmonit.com/CloudFlareYes" target="_blank" rel="noreferrer">在线优选IP（默认443端口）</a> ，从自动筛选的结果里，挑选自己运营商的IP，复制</p><p><img src="'+E+'" alt="" loading="lazy"></p><p>地址这里删掉之前的，粘贴复制的IP，确定</p><p><img src="'+$+'" alt="" loading="lazy"></p><p>地址就变成了我们修改的</p><p><img src="'+j+'" alt="" loading="lazy"></p><p>然后设为活动服务器</p><p><img src="'+D+'" alt="" loading="lazy"></p><p>对桌面右下角图标，右键 <code>自动配置系统代理</code>，图标变红即为工作状态</p><p><img src="'+F+'" alt="" loading="lazy"></p><p>访问 <a href="https://www.google.com" target="_blank" rel="noreferrer">谷歌</a> 看看</p><p><img src="'+o+'" alt="" loading="lazy"></p></details>',21))])}const Z=s(H,[["render",U]]);export{X as __pageData,Z as default};
