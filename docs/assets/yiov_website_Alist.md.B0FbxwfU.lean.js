import{_ as t,c as l,j as a,a as p,G as n,a4 as e,B as h,o}from"./chunks/framework.iuAMY0aj.js";const r="/Alist/Alist-01.png",d="/Alist/Alist-02.png",c="/Alist/Alist-03.png",k="/Alist/Alist-04.png",g="/Alist/Alist-05.png",F="/Alist/Alist-06.png",m="/Alist/Alist-07.png",y="/Alist/Alist-08.png",u="/Alist/Alist-09.png",b="/Alist/Alist-10.png",C="/Alist/Alist-11.png",A="/Alist/Alist-12.png",_="/Alist/Alist-13.png",v="/Alist/Alist-14.png",B="/Alist/Alist-15.png",f="/Alist/Alist-16.png",E="/Alist/Alist-17.png",z="/Alist/Alist-18.png",x="/Alist/Alist-19.png",q="/Alist/Alist-20.png",D="/Alist/Alist-21.png",P="/Alist/Alist-22.png",w="/Alist/Alist-23.png",S="/Alist/Alist-24.png",I="/Alist/Alist-25.png",N="/Alist/Alist-26.png",U="/Alist/Alist-27.png",L="/Alist/Alist-28.png",j="/Alist/Alist-29.png",M="/Alist/Alist-30.png",V="/Alist/Alist-31.png",W="/Alist/Alist-32.png",$="/Alist/Alist-33.png",O="/Alist/Alist-34.png",G="/Alist/Alist-35.png",R="/Alist/Alist-36.png",K="/Alist/Alist-37.png",T="/Alist/Alist-38.png",J="/Alist/Alist-39.png",ts=JSON.parse('{"title":"Alist网盘搭建","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/website/Alist.md","filePath":"yiov/website/Alist.md","lastUpdated":1734678955000}'),Q={name:"yiov/website/Alist.md"};function X(H,s,Y,Z,ss,as){const i=h("ArticleMetadata");return o(),l("div",null,[s[0]||(s[0]=a("h1",{id:"alist网盘搭建",tabindex:"-1"},[p("Alist网盘搭建 "),a("a",{class:"header-anchor",href:"#alist网盘搭建","aria-label":'Permalink to "Alist网盘搭建"'},"​")],-1)),n(i),s[1]||(s[1]=e('<div class="tip custom-block"><p class="custom-block-title">(当前界面文档全部来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>Alist是一个网盘文件列表程序，支持的网盘谷歌、pikpak、阿里、百度、夸克、蓝奏、123等等</p><ul><li><p>演示：<a href="https://al.nn.ci/" target="_blank" rel="noreferrer">https://al.nn.ci/</a></p></li><li><p><a href="https://alist.nn.ci/zh/" target="_blank" rel="noreferrer">官网</a> 丨 <a href="https://github.com/alist-org/alist/" target="_blank" rel="noreferrer">仓库</a> 丨 <a href="https://hub.docker.com/r/xhofe/alist" target="_blank" rel="noreferrer">镜像</a> 丨 <a href="https://space.bilibili.com/36411485/channel/collectiondetail?sid=686340" target="_blank" rel="noreferrer">美化教程</a></p></li></ul><p><img src="'+r+'" alt="" loading="lazy"></p><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><ul><li><p><a href="./Server/">服务器1台</a></p></li><li><p><a href="./BT.html">搭建好宝塔面板</a></p></li><li><p><a href="./domain/">域名 或 二级域名</a> (可选)</p></li><li><p><a href="./shell/">shell工具</a> (或服务器自带)</p></li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="docker安装" tabindex="-1">docker安装 <a class="header-anchor" href="#docker安装" aria-label="Permalink to &quot;docker安装&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">说明</p><p>本次仅演示使用Docker安装，其他请参照官方说明</p></div><p>官方安装文档：<a href="https://alist.nn.ci/zh/guide/install/docker.html" target="_blank" rel="noreferrer">https://alist.nn.ci/zh/guide/install/docker.html</a></p><p>点击复制 <code>发行版</code> 的安装命令</p><p><img src="'+d+'" alt="" loading="lazy"></p><p>用shell登录服务器，粘贴，回车</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>第一个 <code>5244</code> 监听端口可以自己改，第二个5244不要动</p><p>怕出错的什么别改，默认就行</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=unless-stopped</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/alist:/opt/alist/data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5244:5244</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PUID=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PGID=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> UMASK=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">022</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alist&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xhofe/alist:latest</span></span></code></pre></div><p><img src="'+c+'" alt="" loading="lazy"></p><p>安装完成，我们还需要放行 <code>5244</code> 端口</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-port=5244/tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span></span></code></pre></div><p><img src="'+k+'" alt="" loading="lazy"></p><p>服务器的端口也是需要放行的，以腾讯为例，防火墙 - 添加规则 - 端口：5244 - 确定</p><p><img src="'+g+'" alt="" loading="lazy"></p><p><img src="'+F+'" alt="" loading="lazy"></p><p><img src="'+m+'" alt="" loading="lazy"></p><h3 id="登录alist" tabindex="-1">登录Alist <a class="header-anchor" href="#登录alist" aria-label="Permalink to &quot;登录Alist&quot;">​</a></h3><p>现在就可以用 <code>IP+端口</code> 访问了，比如：<a href="http://198.124.1.1:5244" target="_blank" rel="noreferrer">http://198.124.1.1:5244</a></p><p><img src="'+y+`" alt="" loading="lazy"></p><p>初始默认账号是 <code>admin</code> ，密码我们按文档的命令查看</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看首次自动生成的密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 随机生成一个密码</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alist</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./alist</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> random</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 手动设置一个密码,\`NEW_PASSWORD\`是指你需要设置的密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alist</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./alist</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NEW_PASSWORD</span></span></code></pre></div><p><img src="`+u+'" alt="" loading="lazy"></p><p>这样我们就登录进来了，点击底部 <code>管理</code></p><p><img src="'+b+'" alt="" loading="lazy"></p><p>登录成功后，改一下账号和密码，保存了重新登一次</p><p><img src="'+C+'" alt="" loading="lazy"></p><h3 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h3><p>开反代的目的就是 <code>隐藏端口和IP</code> ，不然公网IP暴露，服务器就等着被捶打吧</p><p>登录宝塔，<code>网站 - 添加站点 - 域名输入你的域名 或者 二级域名</code> ，其他不用改，提交</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>我这里用的是二级域名，如：pan.baidu.com</p></div><p><img src="'+A+`" alt="" loading="lazy"></p><p>点击 <code>配置文件</code> , 删除这一段，或者选中后 <code>Ctrl+/</code> 注释掉</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#禁止访问的文件或目录</span></span>
<span class="line"><span>location ~ ^/(\\.user.ini|\\.htaccess|\\.git|\\.env|\\.svn|\\.project|LICENSE|README.md)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return 404;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+_+`" alt="" loading="lazy"></p><p>还有另一段也删除，或者选中后 <code>Ctrl+/</code> 注释掉</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    expires      30d;</span></span>
<span class="line"><span>    error_log /dev/null;</span></span>
<span class="line"><span>    access_log /dev/null;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>location ~ .*\\.(js|css)?$</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    expires      12h;</span></span>
<span class="line"><span>    error_log /dev/null;</span></span>
<span class="line"><span>    access_log /dev/null;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+v+'" alt="" loading="lazy"></p><p>在点击 <code>SSL - Let&#39;s Encrypt</code> - 勾选域名 申请</p><div class="warning custom-block"><p class="custom-block-title">申请是免费的</p><p>建议还是在自己服务器的域名下去申请，本次只是演示</p></div><p><img src="'+B+'" alt="" loading="lazy"></p><p>等待一下就成功了，保存，再打开 <code>强制https开关</code>，再次保存</p><p><img src="'+f+'" alt="" loading="lazy"></p><p>点反向代理 - 目标URL <code>127.0.0.1:5244</code> - 启用反向代理，其他不用填</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://127.0.0.1:5244</span></span></code></pre></div><p><img src="'+E+'" alt="" loading="lazy"></p><p>现在用域名访问网站，就有了绿色的小锁</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>域名网页仅供预览，后台登录还是需要公网IP+端口登录！</p></div><p><img src="'+z+'" alt="" loading="lazy"></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>网盘太多就不一一展示了，我就以阿里云盘为例吧</p><h3 id="阿里云盘" tabindex="-1">阿里云盘 <a class="header-anchor" href="#阿里云盘" aria-label="Permalink to &quot;阿里云盘&quot;">​</a></h3><p>先去获取令牌：<a href="https://alist.nn.ci/tool/aliyundrive/request" target="_blank" rel="noreferrer">https://alist.nn.ci/tool/aliyundrive/request</a></p><p>点 <code>Go to Login</code> 去登录</p><p><img src="'+x+'" alt="" loading="lazy"></p><p><img src="'+q+'" alt="" loading="lazy"></p><p>登录后允许权限</p><p><img src="'+D+'" alt="" loading="lazy"></p><p>然后会得到一串数字和字母组合的令牌，一会要用到!</p><p><img src="'+P+'" alt="" loading="lazy"></p><p>打开 <a href="https://www.alipan.com/" target="_blank" rel="noreferrer">阿里云盘</a> 进入你要分享的目录（没有就新建），比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://www.alipan.com/drive/file/backup/634272c80aecead677524b03accbd969debd56ec</span></span></code></pre></div><p><code>634272c80aecead677524b03accbd969debd56ec</code> 就是 根文件夹ID 一会要用!</p><p><img src="'+w+'" alt="" loading="lazy"></p><p>存储 - 添加 - 选择 <code>阿里云盘Open</code>，这里挂载路径填文件夹名，可以自己随便写</p><p><img src="'+S+'" alt="" loading="lazy"></p><p>云盘类型选一下，我的是 <code>备份盘</code></p><p><code>根文件夹ID</code> 和 <code>刷新令牌</code> 也是刚刚获取的那一长串</p><p><img src="'+I+`" alt="" loading="lazy"></p><p><code>Oauth令牌链接</code> 改成下面连个任意一个，移除方式改成 <code>回收站</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://api-cf.nn.ci/alist/ali_open/token</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://api.xhofe.top/alist/ali_open/token</span></span></code></pre></div><p><img src="`+N+'" alt="" loading="lazy"></p><p>添加成功即可</p><p><img src="'+U+'" alt="" loading="lazy"></p><p>我们访问主页即可看到效果</p><p><img src="'+L+'" alt="" loading="lazy"></p><p>最后，我们希望别人访问，还需要开启 <code>guest</code> 用户</p><p>用户 - 编辑 <code>guest</code> 不用给权限，直接保存启用即可</p><p><img src="'+j+'" alt="" loading="lazy"></p><h2 id="拓展" tabindex="-1">拓展 <a class="header-anchor" href="#拓展" aria-label="Permalink to &quot;拓展&quot;">​</a></h2><h3 id="美化" tabindex="-1">美化 <a class="header-anchor" href="#美化" aria-label="Permalink to &quot;美化&quot;">​</a></h3><p>关闭站点公告：设置 - 站点 - 站点公告，再次打开就不会弹了</p><p><img src="'+M+'" alt="" loading="lazy"></p><p>元信息 - 路径(在哪个文件夹下显示) - 说明，支持Markdown</p><p><img src="'+V+'" alt="" loading="lazy"></p><p><img src="'+W+'" alt="" loading="lazy"></p><hr><h3 id="搜素" tabindex="-1">搜素 <a class="header-anchor" href="#搜素" aria-label="Permalink to &quot;搜素&quot;">​</a></h3><p>根据 <a href="https://alist.nn.ci/zh/guide/advanced/search.html" target="_blank" rel="noreferrer">官方的区别说明</a>，选 <code>数据库(非全文搜索)</code></p><p>开启自动更新索引，保存</p><p><img src="'+$+'" alt="" loading="lazy"></p><p>点击重建索引，等它自动爬数据</p><p><img src="'+O+'" alt="" loading="lazy"></p><p>这样有数据就可以了，点一个 <code>更新索引</code> 即可</p><p><img src="'+G+'" alt="" loading="lazy"></p><hr><h3 id="webdav" tabindex="-1">WebDAV <a class="header-anchor" href="#webdav" aria-label="Permalink to &quot;WebDAV&quot;">​</a></h3><p>可以挂载到本地当硬盘一样用，也可以在线看电影，但是由于阿里盘对流量有限制，就不演示了</p><p><a href="https://alist.nn.ci/zh/guide/webdav.html" target="_blank" rel="noreferrer">文档也很详细</a>，参照着来就行</p><hr><h3 id="备份" tabindex="-1">备份 <a class="header-anchor" href="#备份" aria-label="Permalink to &quot;备份&quot;">​</a></h3><p>备份与恢复 - 备份</p><p><img src="'+R+'" alt="" loading="lazy"></p><p>会自动下载一个 <code>json</code> 文件，可用于恢复所有索引及布局</p><p><img src="'+K+`" alt="" loading="lazy"></p><h2 id="更新" tabindex="-1">更新 <a class="header-anchor" href="#更新" aria-label="Permalink to &quot;更新&quot;">​</a></h2><p>需要删除容器和镜像，重新拉取，Xshell登录，删除容器</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>容器运行中，先停止后才可删除</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #查看容器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alist</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #暂停alist容器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alist</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #删除alist容器</span></span></code></pre></div><p><img src="`+T+`" alt="" loading="lazy"></p><p>重新命令拉取即可</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xhofe/alist:latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=unless-stopped</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/alist:/opt/alist/data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5244:5244</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PUID=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PGID=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> UMASK=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">022</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alist&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xhofe/alist:main</span></span></code></pre></div><details class="details custom-block"><summary>如何彻底卸载</summary><p>先 暂停、删除容器，再来删除镜像</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> images</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #查看镜像</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rmi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 镜像ID</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #删除镜像</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xhofe/alist:latest</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #删除镜像</span></span></code></pre></div><p><img src="`+J+'" alt="" loading="lazy"></p></details><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h4 id="_1-添加目录时报错" tabindex="-1">1.添加目录时报错 <a class="header-anchor" href="#_1-添加目录时报错" aria-label="Permalink to &quot;1.添加目录时报错&quot;">​</a></h4><blockquote><p>Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path</p></blockquote><p>文件夹重名了，即便网盘不同，挂载到Alist也不能重名</p><h4 id="_2-如何去掉底部的-由-alist-驱动" tabindex="-1">2.如何去掉底部的 <code>由 AList 驱动</code> <a class="header-anchor" href="#_2-如何去掉底部的-由-alist-驱动" aria-label="Permalink to &quot;2.如何去掉底部的 `由 AList 驱动`&quot;">​</a></h4><p>请尊重开发者的劳动，谢谢。如果你真的想删除它，你可以使用自定义 CSS 来隐藏它</p><h4 id="_3-站点转移" tabindex="-1">3.站点转移 <a class="header-anchor" href="#_3-站点转移" aria-label="Permalink to &quot;3.站点转移&quot;">​</a></h4><p>登录后台备份，将备份下载到桌面，部署好新站点后，导入即可</p><h4 id="_4-ipa下载变成了zip" tabindex="-1">4.ipa下载变成了zip <a class="header-anchor" href="#_4-ipa下载变成了zip" aria-label="Permalink to &quot;4.ipa下载变成了zip&quot;">​</a></h4><p>设置 - 全局 - 打包下载关闭</p>',131))])}const ls=t(Q,[["render",X]]);export{ts as __pageData,ls as default};