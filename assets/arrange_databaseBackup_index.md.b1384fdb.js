import{_ as s,o as a,c as n,O as l}from"./chunks/framework.4afe7240.js";const d=JSON.parse('{"title":"数据库备份","description":"","frontmatter":{"title":"数据库备份"},"headers":[],"relativePath":"arrange/databaseBackup/index.md","filePath":"arrange/databaseBackup/index.md"}'),p={name:"arrange/databaseBackup/index.md"},o=l(`<p>任何数据库都需要备份，备份数据是维护数据库必不可少的操作。<br> 备份就是为了防止原数据丢失，保证数据的安全。当数据库因为某些原因造成部分或者全部数据丢失后，备份文件可以帮我们找回丢失的数据。因此，数据备份是很重要的工作。</p><h2 id="编写脚本文件" tabindex="-1">编写脚本文件 <a class="header-anchor" href="#编写脚本文件" aria-label="Permalink to &quot;编写脚本文件&quot;">​</a></h2><p>新建一个工作目录</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">copyDB</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建脚本文件并进入编辑</span></span>
<span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">copy.sh</span></span>
<span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">copy.sh</span></span></code></pre></div><p>写入脚本</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/sh</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">### BEGIN INIT INFO</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Provides: starter</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Required-Start: $remote_fs $syslog</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Required-Stop: $remote_fs $syslog</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Default-Start: 2 3 4 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Default-Stop: 0 1 6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Short-Description: start starter</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Description: start starter</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">### END INIT INFO</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#数据库用户名</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_USER</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">XXXXXX</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#数据库密码</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_PASS</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">XXXXXX</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#数据库地址</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_HOST</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx.xxx.xxx.xxx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#要备份的数据库名</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_NAME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right_house_db</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#日期</span></span>
<span class="line"><span style="color:#A6ACCD;">DATE</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">date</span><span style="color:#C3E88D;"> +%F</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#文件保存的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">DIR</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/opt/copyDB/DB</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">mysqldump</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--opt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;">$DB_USER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;">$DB_PASS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span><span style="color:#A6ACCD;">$DB_HOST</span><span style="color:#A6ACCD;"> $DB_NAME </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> $DIR</span><span style="color:#C3E88D;">/DB_</span><span style="color:#A6ACCD;">$DATE</span><span style="color:#C3E88D;">.sql</span></span></code></pre></div><p>如果报错：mysqldump: not found则需要安装mysqldump</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql-client-core-8.0</span></span></code></pre></div><p>修改脚本权限</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">777</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">copy.sh</span></span></code></pre></div><p>创建备份文件夹</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DB</span></span></code></pre></div><p>测试脚本</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./copy.sh</span></span></code></pre></div><p>查看是否有报错；查看DB文件夹内是否有新文件产生；打开DB文件夹内的文件，查看是否有内容。</p><h2 id="创建定时任务" tabindex="-1">创建定时任务 <a class="header-anchor" href="#创建定时任务" aria-label="Permalink to &quot;创建定时任务&quot;">​</a></h2><p>cron是一个Linux定时执行工具，可以在无需人工干预的情况下运行作业。在Ubuntu中，cron是被默认安装并启动的。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#编辑ect下crontab文件</span></span>
<span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/crontab</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#写入定时任务</span></span>
<span class="line"><span style="color:#FFCB6B;">00</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">08</span><span style="color:#A6ACCD;">   </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">/opt/copyDB/copy.sh</span></span></code></pre></div><p>crontab定时任务语法</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">minute</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">hour</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">day</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">month</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">week</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">user</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">command</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 即：分 时 日 月 周 用户 命令</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># minute： 表示分钟，可以是从 0 到 59 之间的任何整数。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># hour：表示小时，可以是从 0 到 23 之间的任何整数。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># day：表示日期，可以是从 1 到 31 之间的任何整数。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># month：表示月份，可以是从 1 到 12 之间的任何整数。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># week：表示星期几，可以是从 0 到 7 之间的任何整数，这里的 0 或 7 代表星期日。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># user：linux的用户身份，例如root，或者其他用户</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># command：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 星号（*）：代表所有可能的值，例如 month 字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 逗号（,）：可以用逗号隔开的值指定一个列表范围，例如，“1,2,5,7,8,9”</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 中杠（-）：可以用整数之间的中杠表示一个整数范围，例如“2-6”表示“2,3,4,5,6”</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，\\</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 例如*/10，如果用在 minute 字段，表示每十分钟执行一次。</span></span></code></pre></div><p>crontab操作命令</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#启动服务</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cron</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#关闭服务</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cron</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#重启服务</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cron</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#重新载入配置</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cron</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#查看crond状态</span></span>
<span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cron</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span></code></pre></div>`,22),e=[o];function t(c,r,i,y,C,D){return a(),n("div",null,e)}const E=s(p,[["render",t]]);export{d as __pageData,E as default};
