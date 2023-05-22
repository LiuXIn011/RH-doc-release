import{_ as a,o as e,c as s,O as n}from"./chunks/framework.4afe7240.js";const t="/quanjiatong.png",p="/acro.png",o="/uniapp.jpeg",r="/uview.png",y=JSON.parse('{"title":"前端","description":"","frontmatter":{"title":"前端"},"headers":[],"relativePath":"overview/technologyStack/front.md","filePath":"overview/technologyStack/front.md"}'),l={name:"overview/technologyStack/front.md"},i=n('<h2 id="后台管理系统" tabindex="-1">后台管理系统 <a class="header-anchor" href="#后台管理系统" aria-label="Permalink to &quot;后台管理系统&quot;">​</a></h2><p><img src="'+t+'" alt="An image"> 后台管理系统是一个web应用，是对整个系统的全局管理，包括房东、房屋、租客、评论、维修、房圈、点赞、求租等功能的管理，拥有最高权限。<br> 技术栈使用vue全家桶，vue3+TS+vite开发模式。</p><h3 id="ui框架使用字节跳动出品的arco-design的vue版本" tabindex="-1">UI框架使用字节跳动出品的<a href="https://arco.design/" target="_blank" rel="noreferrer">arco.design</a>的vue版本 <a class="header-anchor" href="#ui框架使用字节跳动出品的arco-design的vue版本" aria-label="Permalink to &quot;UI框架使用字节跳动出品的[arco.design](https://arco.design/)的vue版本&quot;">​</a></h3><p><img src="'+p+'" alt="An image"> arco.design不仅仅是一款ui框架，他具有完备的企业级设计系统，包含开发设计于一身。在使用上也有自己的风格，一直以来element-ui都占据vue生态ui框架的首选地位。arco.design不是一个平替产品，他的使用思想经过重新构建，有着更高效的设计。</p><h2 id="租客及房东小程序" tabindex="-1">租客及房东小程序 <a class="header-anchor" href="#租客及房东小程序" aria-label="Permalink to &quot;租客及房东小程序&quot;">​</a></h2><h3 id="租客及房东小程序均使用uni-app开发" tabindex="-1">租客及房东小程序均使用<a href="https://uniapp.dcloud.net.cn/" target="_blank" rel="noreferrer">uni-app</a>开发 <a class="header-anchor" href="#租客及房东小程序均使用uni-app开发" aria-label="Permalink to &quot;租客及房东小程序均使用[uni-app](https://uniapp.dcloud.net.cn/)开发&quot;">​</a></h3><p><img src="'+o+'" alt="An image"> uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。</p><p>对比原生小程序的语法，uni-app还是比较适合vue开发者，原生语法确实有点反人类，让人很难适应。多端发布更是一种优势。</p><h3 id="小程序ui框架使用uview" tabindex="-1">小程序ui框架使用<a href="https://www.uviewui.com/" target="_blank" rel="noreferrer">uview</a> <a class="header-anchor" href="#小程序ui框架使用uview" aria-label="Permalink to &quot;小程序ui框架使用[uview](https://www.uviewui.com/)&quot;">​</a></h3><p><img src="'+r+`" alt="uview"> 可以很负责任的说：uview是uniapp首选ui框架，在uniapp官方<a href="https://ext.dcloud.net.cn/" target="_blank" rel="noreferrer">插件市场</a>上都有着很高的热度，一度热度超过官方。现在的开发都达成了一致：不重复造轮子，能使用开源框架解决的绝不自己写。但是ui框架良莠不齐，甚至有大厂搞出颇为诟病的kpi项目，后期基本不维护，使得开发者一但入坑，就很难脱身，项目中期替换ui框架无疑是灭顶之灾，所以在项目开始就选择一款合适的ui框架很重要。</p><p>uniapp官方ui框架和物料市场提供的ui组件都存在几个问题：</p><p>1、设计不够美观，且难以修改。<br> 2、样式不统一，整个应用像是一个缝合怪。<br> 3、使用逻辑混乱，例如在数据双向绑定方面。<br> 4、功能不齐全，无法满足全部开发需求。<br> 5、代码健壮性很差，使用后控制台无端一堆warning。</p><p>uview很好的解决了以上问题，也是uniapp社区开发者都很喜欢他的原因。uview也存在他的问题，由于样式隔离，当你想要修改样式的时候就会变得很麻烦，你必须在css选择器的前面加上::deep，才能修改。例如你要给按钮加上一个上间距：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">u-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>上面的代码是不起作用的，你必须这样写：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">::</span><span style="color:#FFCB6B;">v-deep</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">u-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,16),c=[i];function u(d,h,g,_,m,v){return e(),s("div",null,c)}const D=a(l,[["render",u]]);export{y as __pageData,D as default};
