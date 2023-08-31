import{_ as s,o as a,c as n,V as l}from"./chunks/framework.d32248c8.js";const B=JSON.parse('{"title":"文件目录","description":"","frontmatter":{"title":"文件目录"},"headers":[],"relativePath":"overview/files/index.md"}'),p={name:"overview/files/index.md"},o=l(`<h2 id="服务端" tabindex="-1">服务端 <a class="header-anchor" href="#服务端" aria-label="Permalink to &quot;服务端&quot;">​</a></h2><p>根目录：/RH-server</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/RH-server</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package.json</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">controller</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">model</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">middleware</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">routerModules</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">router.js</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">plugin.js</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config.default.js</span></span>
<span class="line"><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span></code></pre></div><p>为了规范目录，所有的路由分模块存放在routerModules文件夹内</p><h2 id="后台管理系统" tabindex="-1">后台管理系统 <a class="header-anchor" href="#后台管理系统" aria-label="Permalink to &quot;后台管理系统&quot;">​</a></h2><p>根目录：/RH-admin</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/RH-admin</span></span>
<span class="line"><span style="color:#FFCB6B;">├─api</span></span>
<span class="line"><span style="color:#FFCB6B;">├─assets</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">├─img</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">└─login</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">└─lottiefiles</span></span>
<span class="line"><span style="color:#FFCB6B;">├─components</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">├─chart</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">└─headForm</span></span>
<span class="line"><span style="color:#FFCB6B;">├─layout</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">└─components</span></span>
<span class="line"><span style="color:#FFCB6B;">├─router</span></span>
<span class="line"><span style="color:#FFCB6B;">├─stores</span></span>
<span class="line"><span style="color:#FFCB6B;">├─utils</span></span>
<span class="line"><span style="color:#FFCB6B;">└─views</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">├─comments</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">├─home</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">├─house</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">├─landlord</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">├─login</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">├─not-found</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">├─settings</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">└─tenants</span></span></code></pre></div><h2 id="租客端小程序" tabindex="-1">租客端小程序 <a class="header-anchor" href="#租客端小程序" aria-label="Permalink to &quot;租客端小程序&quot;">​</a></h2><p>根目录：/RH-tenant<br> 使用分包加载，具体目录参见pages.json</p><h2 id="房东端小程序" tabindex="-1">房东端小程序 <a class="header-anchor" href="#房东端小程序" aria-label="Permalink to &quot;房东端小程序&quot;">​</a></h2><p>根目录：/RH-landlord<br> 使用分包加载，具体目录参见pages.json</p>`,11),e=[o];function t(c,r,C,y,i,F){return a(),n("div",null,e)}const D=s(p,[["render",t]]);export{B as __pageData,D as default};
