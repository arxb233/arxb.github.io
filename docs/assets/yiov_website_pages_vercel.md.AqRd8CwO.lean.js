import{_ as a,c,j as p,a as o,G as t,a4 as r,B as s,o as i}from"./chunks/framework.iuAMY0aj.js";const n="/pages/vercel/vercel-01.png",d="/pages/vercel/vercel-02.png",g="/pages/vercel/vercel-03.png",m="/pages/vercel/vercel-04.png",v="/pages/vercel/vercel-05.png",_="/pages/vercel/vercel-06.png",h="/pages/vercel/vercel-07.png",u="/pages/vercel/vercel-08.png",y="/pages/vercel/vercel-09.png",b="/pages/vercel/vercel-10.png",z="/pages/vercel/vercel-11.png",k="/pages/vercel/vercel-12.png",f="/pages/vercel/vercel-13.png",w="/pages/vercel/vercel-14.png",x="/pages/vercel/vercel-15.png",P="/pages/vercel/vercel-16.png",q="/pages/vercel/vercel-17.png",V="/pages/vercel/vercel-18.png",N="/pages/vercel/vercel-19.png",A="/pages/vercel/vercel-20.png",D="/pages/vercel/vercel-21.png",G="/pages/vercel/vercel-22.png",C="/pages/vercel/vercel-23.png",B="/pages/vercel/vercel-24.png",E="/pages/vercel/vercel-25.png",S="/pages/vercel/vercel-26.png",$="/pages/vercel/vercel-27.png",M="/pages/vercel/vercel-28.png",j="/pages/vercel/vercel-29.png",F="/pages/vercel/vercel-30.png",H="/pages/vercel/vercel-31.png",L=JSON.parse('{"title":"Vercel静态部署网站","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/website/pages/vercel.md","filePath":"yiov/website/pages/vercel.md","lastUpdated":1734678955000}'),O={name:"yiov/website/pages/vercel.md"};function U(Y,e,J,K,T,W){const l=s("ArticleMetadata");return i(),c("div",null,[e[0]||(e[0]=p("h1",{id:"vercel静态部署网站",tabindex:"-1"},[o("Vercel静态部署网站 "),p("a",{class:"header-anchor",href:"#vercel静态部署网站","aria-label":'Permalink to "Vercel静态部署网站"'},"​")],-1)),t(l),e[1]||(e[1]=r('<div class="tip custom-block"><p class="custom-block-title">(当前界面文档全部来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>一个网站托管服务平台，可以轻松的一键部署项目，且自带CDN加速</p><p>官网：<a href="https://vercel.com/" target="_blank" rel="noreferrer">https://vercel.com/</a></p><p><img src="'+n+'" alt="" loading="lazy"></p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><ul><li><p><a href="./../domain/">域名一个</a></p></li><li><p><a href="./github.html">Github账户并已上传代码</a></p></li></ul><h2 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h2><p>点击 <a href="https://vercel.com/signup" target="_blank" rel="noreferrer">Sign UP</a> 注册，选择 <code>Hobby</code> 个人爱好者，再取一个昵称，点继续</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>这里为什么不直接用Github关联登录呢，因为登录不了</p><p>至少我是，没关系自己注册后再关联一样的</p></div><p><img src="'+d+'" alt="" loading="lazy"></p><p>这里选择 <code>Continue With Email</code> 邮箱注册，一会再来关联Github</p><p><img src="'+g+'" alt="" loading="lazy"></p><p>输入邮箱后会发邮件，我们再邮箱点击验证，成功即可</p><p><img src="'+m+'" alt="" loading="lazy"></p><p><img src="'+v+'" alt="" loading="lazy"></p><p><img src="'+_+'" alt="" loading="lazy"></p><p>验证成功，我们去重新登录账号，会要手机验证码，选 Chinese <code>+86</code></p><p><img src="'+h+'" alt="" loading="lazy"></p><p>输完验证码，我们就注册完成了</p><p><img src="'+u+'" alt="" loading="lazy"></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><details class="details custom-block"><summary>部署项目</summary><p>在 GitHub 仓库上传好代码，点击 <code>Add a New Project</code> 新增一个项目</p><p><img src="'+y+'" alt="" loading="lazy"></p><p>我们再选择 Github ，跳出关联确认</p><p><img src="'+b+'" alt="" loading="lazy"></p><p><img src="'+z+'" alt="" loading="lazy"></p><p>这里还是没有加载出仓库，我们选择底部 导入第三方仓库</p><p><img src="'+k+'" alt="" loading="lazy"></p><p>粘贴我们的仓库地址，并授权对Giithub仓库进行修改</p><p><img src="'+f+'" alt="" loading="lazy"></p><p><img src="'+w+'" alt="" loading="lazy"></p><p>我们先返回去看，仓库就都有了，我们选择想要的仓库 <code>import</code> 导入</p><p><img src="'+x+'" alt="" loading="lazy"></p><p>这里一般都默认不用改，会自动识别框架</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>如果你是源文件还未构建，需要打开下方按键并填入</p><p>已经是静态文件了，不用打开按钮</p></div><p><img src="'+P+'" alt="" loading="lazy"></p><p>我是VitePress，根据文档命令改正确，然后 <code>Deploy</code> 发布</p><div class="danger custom-block"><p class="custom-block-title">特别注意</p><p>依赖、构建命令和静态文件夹保证都是对的，否则会失败</p><p>如果你安装了插件，也必须和依赖整合在一起安装！！！</p></div><p><img src="'+q+'" alt="" loading="lazy"></p><p>耐心等待一会就自动部署完成啦，还能看到我们的首页</p><p><img src="'+V+'" alt="" loading="lazy"></p><p>点击 <code>Continue to Dashboard</code> 进入面板， <code>Domains</code> 就是我们的访问链接</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>是不是发现访问不了，因为自带域名被墙了，我们需要使用自己的域名</p></div><p><img src="'+N+'" alt="" loading="lazy"></p><p>点击 <code>Domains</code> 进入域名管理，这里输入我们自己的域名 <code>Add</code> 添加</p><p><img src="'+A+'" alt="" loading="lazy"></p><p>这里我只选择新增一个一级域名，不喜欢用<code>www</code>，可以根据自己的需求</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>前两个实际就是一个重定向的区别</p><p>第一个：输入 <code>www.yiov.top</code> ，实际访问 <code>yiov.top</code></p><p>第二个：输入 <code>yiov.top</code> ，实际访问 <code>www.yiov.top</code></p><p>第三个：就只访问 <code>yiov.top</code></p></div><p><img src="'+D+'" alt="" loading="lazy"></p><p>现在他要求我们去解析域名，添加A记录</p><p><img src="'+G+'" alt="" loading="lazy"></p><p>我以腾讯云为例，添加域名解析 <code>@</code> ，记录值为 <code>76.76.21.21</code></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>官方的其他解析值，任选一即可</p><ul><li><p>A记录：<code>76.223.126.88</code></p></li><li><p>cname记录： <code>cname-china.vercel-dns.com</code></p></li></ul></div><p><img src="'+C+'" alt="" loading="lazy"></p><p>等一会它解析完成就可以了</p><p><img src="'+B+'" alt="" loading="lazy"></p><p>我们访问看看，完全OK</p><p><img src="'+E+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>部署失败</summary><p>部署失败后，可以点击 <code>Error</code> 查看什么原因</p><p><img src="'+S+'" alt="" loading="lazy"></p><p>这里告诉我是有23条死链，展开看一下</p><p><img src="'+$+'" alt="" loading="lazy"></p><p>已经告诉你在哪个文件中，哪一段是有问题的，依次修改即可</p><p>非常贴心，Vercel！YYDS！</p><p><img src="'+M+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>延迟优化</summary><p>先使用 <a href="https://zhale.me/http/" target="_blank" rel="noreferrer">炸了么</a> 测一下自己网站的速度</p><p>可以看到即便有vercel自带的cdn加成，仍还有超时的区域</p><p><img src="'+j+'" alt="" loading="lazy"></p><p>使用 <a href="https://www.yt-blog.top/9952/" target="_blank" rel="noreferrer">@Fgaoxing</a> 维护的Vercel节点，类似cf的优选节点</p><p>我们解析这里修改成 <code>CNAME</code> 记录，值 <code>vercel.cdn.yt-blog.top</code>，确认添加</p><p><img src="'+F+'" alt="" loading="lazy"></p><p>返回炸了么，再次测速，发现基本上都绿了</p><p>有超时的节点是没办法的，已经很不错了</p><p><img src="'+H+'" alt="" loading="lazy"></p></details><h2 id="特别鸣谢" tabindex="-1">特别鸣谢 <a class="header-anchor" href="#特别鸣谢" aria-label="Permalink to &quot;特别鸣谢&quot;">​</a></h2><ul><li><p><a href="https://zhale.me/http/" target="_blank" rel="noreferrer">炸了么</a></p></li><li><p><a href="https://www.yt-blog.top/" target="_blank" rel="noreferrer">Fgaoxing</a></p></li></ul>',27))])}const Q=a(O,[["render",U]]);export{L as __pageData,Q as default};
