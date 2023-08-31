import{_ as s,o as a,c as n,V as l}from"./chunks/framework.d32248c8.js";const A=JSON.parse('{"title":"Compose常见问题","description":"","frontmatter":{"title":"Compose常见问题"},"headers":[],"relativePath":"docker/dockerCompose/problem.md"}'),o={name:"docker/dockerCompose/problem.md"},p=l(`<h2 id="普通端口占用-8088、7001、9000、9001" tabindex="-1">普通端口占用（8088、7001、9000、9001） <a class="header-anchor" href="#普通端口占用-8088、7001、9000、9001" aria-label="Permalink to &quot;普通端口占用（8088、7001、9000、9001）&quot;">​</a></h2><h4 id="_8088或7001端口被占用" tabindex="-1">8088或7001端口被占用 <a class="header-anchor" href="#_8088或7001端口被占用" aria-label="Permalink to &quot;8088或7001端口被占用&quot;">​</a></h4><p>8088端口对应的是后台管理系统，7001对应服务端端口。是两个自定义端口，也是比较容易修改的端口。<br> 当8088被占用时，只需要修改/docker/nginx.conf,将端口更改就好。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen  8088;</span></span>
<span class="line"><span style="color:#A6ACCD;">        charset utf-8;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">        root /opt/dist;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">           try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   # 将listen改为你需要的端口即可，例如：</span></span>
<span class="line"><span style="color:#A6ACCD;">   server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen  9999;</span></span>
<span class="line"><span style="color:#A6ACCD;">        charset utf-8;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">        root /opt/dist;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">           try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span></code></pre></div><p>当7001被占用时，只需要修改服务端配置文件<br> 打开/rightHouse/RH-server/config/config.default.js</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 将port修改即可</span></span>
<span class="line"><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cluster </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">listen</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7001</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>当你修改了服务端接口，就需要注意后台管理系统、小程序的接口访问地址<a href="/RH-doc-release/develop/options/">配置</a> 。</p><h4 id="_9000、9001-端口占用" tabindex="-1">9000、9001 端口占用 <a class="header-anchor" href="#_9000、9001-端口占用" aria-label="Permalink to &quot;9000、9001 端口占用&quot;">​</a></h4><p>9000对应minio后台管理页面地址端口，9001对应minio接口访问地址，修改方法为：</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /rightHouse/RH-server/docker/docker-compose.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">minio</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minio/minio:RELEASE.2023-05-04T21-44-30Z</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">network_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">host</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">on-failure</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">right-house-minio</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 在此处修改端口号，修改下面的9000和9001即可</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server /data --console-address :9000 --address :9001</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../docker/data/redis/data:/data</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MINIO_ROOT_USER=right_house_minio</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MINIO_ROOT_PASSWORD=right_house_minio_980128</span></span></code></pre></div><p>当修改9001端口后，需要修改对应服务端<a href="/RH-doc-release/develop/options/">配置</a></p><h2 id="特殊端口占用-3306、6379" tabindex="-1">特殊端口占用（3306、6379） <a class="header-anchor" href="#特殊端口占用-3306、6379" aria-label="Permalink to &quot;特殊端口占用（3306、6379）&quot;">​</a></h2><p>3306对应mysql端口，6379对应redis端口<br> 这两个端口一般不会有占用情况，除非已经有mysql、或者redis应用程序启动。</p><h3 id="例如本地已经有mysql数据库" tabindex="-1">例如本地已经有Mysql数据库 <a class="header-anchor" href="#例如本地已经有mysql数据库" aria-label="Permalink to &quot;例如本地已经有Mysql数据库&quot;">​</a></h3><h4 id="第一种解决方法-使用本地数据库" tabindex="-1">第一种解决方法：使用本地数据库 <a class="header-anchor" href="#第一种解决方法-使用本地数据库" aria-label="Permalink to &quot;第一种解决方法：使用本地数据库&quot;">​</a></h4><p>执行/rightHouse/docker/init-sql/init.sql数据库脚本<br> 修改服务端mysql相关<a href="/RH-doc-release/develop/options/">配置</a><br> 删除/rightHouse/docker/docker-compose.yml关于mysql的配置</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 删除如下</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mysql</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql:8.0.33</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--default-authentication-plugin=mysql_native_password</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">network_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">host</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">on-failure</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">right-house-mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">expose</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3306</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./init-sql:/docker-entrypoint-initdb.d</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;"># - &#39;../docker/data/mysql/conf/my.cnf:/etc/my.cnf&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#676E95;font-style:italic;"># - &#39;../docker/data/mysql/log:/var/log/mysql&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/etc/timezone:/etc/timezone:ro</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/etc/localtime:/etc/localtime:ro</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../docker/data/mysql/data:/var/lib/mysql</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MYSQL_ROOT_PASSWORD=right_house_sql_980128</span></span></code></pre></div><h4 id="第二种解决方法-修改容器数据库端口" tabindex="-1">第二种解决方法：修改容器数据库端口 <a class="header-anchor" href="#第二种解决方法-修改容器数据库端口" aria-label="Permalink to &quot;第二种解决方法：修改容器数据库端口&quot;">​</a></h4><p>取消使用host网络模式，单独映射端口</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /rightHouse/docker/docker-compose.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mysql</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql:8.0.33</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--default-authentication-plugin=mysql_native_password</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># network_mode使用：bridge</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">network_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bridge</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 添加端口映射 3306:你想要的端口</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3306:3307</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">on-failure</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">right-house-mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">expose</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3306</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./init-sql:/docker-entrypoint-initdb.d</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/etc/timezone:/etc/timezone:ro</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/etc/localtime:/etc/localtime:ro</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../docker/data/mysql/data:/var/lib/mysql</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MYSQL_ROOT_PASSWORD=right_house_sql_980128</span></span></code></pre></div><p>修改服务端mysql相关<a href="/RH-doc-release/develop/options/">配置</a></p><h3 id="例如本地已经有redis" tabindex="-1">例如本地已经有Redis <a class="header-anchor" href="#例如本地已经有redis" aria-label="Permalink to &quot;例如本地已经有Redis&quot;">​</a></h3><h4 id="第一种解决方法-使用本地redis" tabindex="-1">第一种解决方法：使用本地Redis <a class="header-anchor" href="#第一种解决方法-使用本地redis" aria-label="Permalink to &quot;第一种解决方法：使用本地Redis&quot;">​</a></h4><p>修改服务端Redis相关<a href="/RH-doc-release/develop/options/">配置</a><br> 删除/rightHouse/docker/docker-compose.yml关于Redis的配置</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 删除如下</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">redis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">redis:7.0.12</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">network_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">host</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">on-failure</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">right-house-redis</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../docker/data/redis/data:/data</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../docker/data/redis/conf/redis.conf:/etc/redis/redis.conf</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../docker/data/redis/logs:/logs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">redis-server  /etc/redis/redis.conf --requirepass right_house_redis_980128</span></span></code></pre></div><h4 id="第二种解决方法-修改容器redis端口" tabindex="-1">第二种解决方法：修改容器Redis端口 <a class="header-anchor" href="#第二种解决方法-修改容器redis端口" aria-label="Permalink to &quot;第二种解决方法：修改容器Redis端口&quot;">​</a></h4><p>取消使用host网络模式，单独映射端口</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">redis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">redis:7.0.12</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># network_mode使用：bridge</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">network_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bridge</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 添加端口映射 6379:你想要的端口</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6379:6380</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">on-failure</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">right-house-redis</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../docker/data/redis/data:/data</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../docker/data/redis/conf/redis.conf:/etc/redis/redis.conf</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../docker/data/redis/logs:/logs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">redis-server  /etc/redis/redis.conf --requirepass right_house_redis_980128</span></span></code></pre></div><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><p>当修改了yml、DockerFile文件、配置文件，需要重新up时，需要删除所有生成的容器，删除docker-right_house_server、docker-right_house_admin镜像，才能正常生效。</p>`,30),e=[p];function t(c,r,D,y,i,C){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};