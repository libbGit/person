<template>
    <div>
         <h4>vue常见问题及解决</h4>
        <article class="markdown-body">
            <h5 id="1-动态排序"
                data-source-line="2">
                <a class="markdownIt-Anchor"
                    href="#1-动态排序"></a>1、动态排序</h5>
            <p data-source-line="3">方案1、使用动态组件 is</p>
            <pre data-source-line="5"><code class="hljs">&lt;component v-<span class="hljs-keyword">for</span>=<span class="hljs-string">"c in getComponents"</span> :is=<span class="hljs-string">"c.name"</span> :complete=<span class="hljs-string">"c.param"</span> @click=<span class="hljs-string">"c.method"</span>&gt;&lt;/component&gt;
  
  getComponents = [
      {<span class="hljs-built_in">name</span>:Todo, <span class="hljs-built_in">param</span>:<span class="hljs-number">2</span>,  method:this.getDate },
      {<span class="hljs-built_in">name</span>:Task,},
      {<span class="hljs-built_in">name</span>:Complete,<span class="hljs-built_in">param</span>:<span class="hljs-number">4</span>}
  ];
  </code></pre>
            <p data-source-line="14">此方法适用于 每个组件的传参一样或非常类似时。 方案1、使用slot 插槽</p>
            <pre data-source-line="16"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">parent</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">children</span> 
        <span class="hljs-attr">:slot</span>=<span class="hljs-string">"getPosition(1)"</span>  
        <span class="hljs-attr">title</span>=<span class="hljs-string">"<span class="zh-hans">广告主数据</span>"</span> 
        <span class="hljs-attr">:values</span>=<span class="hljs-string">"advertiserData"</span>
        @<span class="hljs-attr">update</span>=<span class="hljs-string">"updateDateAndAdvertiser($event)"</span>&gt;</span>
     <span class="hljs-tag">&lt;/<span class="hljs-name">children</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">parent</span>&gt;</span>
  
  parent.vue
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">slot</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  </code></pre>
            <p data-source-line="33">此方法适用于每个组件相差比较大时。</p>
            <h5 id="2-使用scss"
                data-source-line="34">
                <a class="markdownIt-Anchor"
                    href="#2-使用scss"></a>2、使用scss</h5>
            <p data-source-line="35">
                <a href="http://vuejs-templates.github.io/webpack/pre-processors.html">http://vuejs-templates.github.io/webpack/pre-processors.html</a>
            </p>
            <pre data-source-line="36"><code class="hljs">npm install sass-loader <span class="hljs-keyword">node</span><span class="hljs-title">-sass</span> --save-dev
  </code></pre>
            <p data-source-line="39">在*.vue上加上</p>
            <pre data-source-line="41"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"scss"</span>&gt;</span><span class="css">
     <span class="hljs-comment">/* write SCSS! */</span>
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
  </code></pre>
            <ul data-source-line="46">
                <li>lang="scss" 对应于CSS超集语法（带花括号和分号）[常用]。</li>
                <li>lang="sass" 对应于基于缩进的语法。</li>
            </ul>
            <h5 id="3-webpack中的-sourcemap配置"
                data-source-line="49">
                <a class="markdownIt-Anchor"
                    href="#3-webpack中的-sourcemap配置"></a>3、webpack中的 sourcemap配置</h5>
            <p data-source-line="50">如:
                <br> devtool: 'eval-source-map',</p>
            <p data-source-line="53">sourcemap是为了解决开发代码与实际运行代码不一致时帮助我们debug到原始开发代码的技术。</p>
            <p data-source-line="55">而他们都是通过以下关键字组合得到:</p>
            <ol data-source-line="56">
                <li>eval： 使用eval包裹模块代码。然后在模块末尾添加模块来源//# souceURL， 依靠souceURL找到原始代码的位置。性能最好，但不完整</li>
                <li>source-map： 产生.map文件。该文件保存有原始代码与运行代码的映射关系， 浏览器可以通过它找到原始代码的位置。控制台log将会定位到列字符位置。性能低，但最完整</li>
                <li>cheap： 产生的.map文件不包含列信息。也就是说当你在浏览器中点击该代码的位置时， 光标只定位到行数，不定位到具体字符位置。</li>
                <li>module： 包含loader的sourcemap（比如jsx to js ，babel的sourcemap）</li>
            </ol>
            <p data-source-line="61">常见devtool值</p>
            <ul data-source-line="62">
                <li>eval</li>
                <li>eval-source-map</li>
                <li>cheap-eval-source-map</li>
                <li>cheap-module-eval-source-map（webpack默认）</li>
            </ul>
            <h5 id="4-keep-alive的用法"
                data-source-line="67">
                <a class="markdownIt-Anchor"
                    href="#4-keep-alive的用法"></a>4、keep-alive的用法</h5>
            <p data-source-line="68">&lt;keep-alive&gt; 是用在其一个直属的子组件被开关的情形。如果你在其中有 v-for 则不会工作。如果有上述的多个条件性的子元素，&lt;keep-alive&gt; 要求同时只有一个子元素被渲染。</p>
            <h5 id="5-动态给对象添加属性vue不更新"
                data-source-line="71">
                <a class="markdownIt-Anchor"
                    href="#5-动态给对象添加属性vue不更新"></a>5、动态给对象添加属性，vue不更新</h5>
            <p data-source-line="72">当对象在data中定义好变量之后，给里面增加或删除属性，vue不会更新。</p>
            <pre data-source-line="74"><code class="hljs"><span class="hljs-keyword">data</span>:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span></span>{
    <span class="hljs-keyword">return</span> {
      obj:{}
    }
  }
  
  </code></pre>
            <pre data-source-line="82"><code class="hljs"><span class="hljs-comment">/*
  <span class="zh-hans">动态增加属性</span>,<span class="zh-hans">错误方法</span>,vue<span class="zh-hans">不更新</span>
  */</span>
  addAttribute1(){
     let key = <span class="hljs-string">"id"</span>;
     obj.id = <span class="hljs-number">1</span>;
     obj[key] = <span class="hljs-number">1</span>;
  }
  
  <span class="hljs-comment">/*
  <span class="zh-hans">动态增加属性</span>,vue<span class="zh-hans">正确更新</span>
  */</span>
  addAttribute2(){
     <span class="hljs-comment">//<span class="zh-hans">方法</span>1<span class="zh-hans">，使用</span> $set <span class="zh-hans">增加属性</span></span>
     let key = <span class="hljs-string">"id"</span>;
     <span class="hljs-keyword">this</span>.$<span class="hljs-keyword">set</span>(<span class="hljs-keyword">this</span>.obj, <span class="hljs-string">"id"</span>, <span class="hljs-number">1</span>);   
     <span class="hljs-keyword">this</span>.$<span class="hljs-keyword">set</span>(<span class="hljs-keyword">this</span>.obj, key, <span class="hljs-number">1</span>);    
     
     
     <span class="hljs-comment">//<span class="zh-hans">方法</span>2<span class="zh-hans">，改变</span>obj<span class="zh-hans">的引用，即重新赋值</span>,<span class="zh-hans">解构和</span>Object.assign<span class="zh-hans">都行</span></span>
     <span class="hljs-keyword">this</span>.obj = {...<span class="hljs-keyword">this</span>.obj, id:<span class="hljs-string">''</span> };      
     <span class="hljs-keyword">this</span>.obj = {...<span class="hljs-keyword">this</span>.obj, [key]:<span class="hljs-string">''</span> };  
     
  }
  
  </code></pre>
            <p data-source-line="109">而当对象定义好属性后</p>
            <pre data-source-line="111"><code class="hljs">data:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span></span>{
    <span class="hljs-keyword">return</span> {
      obj:{id:<span class="hljs-string">''</span>}
    }
  }
  </code></pre>
            <p data-source-line="118">则更新属性值，vue直接生效</p>
            <pre data-source-line="119"><code class="hljs">obj.id = <span class="hljs-number">2</span><span class="hljs-comment">;</span>
  </code></pre>
            <h5 id="6-动态给数组新增项vue不更新"
                data-source-line="123">
                <a class="markdownIt-Anchor"
                    href="#6-动态给数组新增项vue不更新"></a>6、动态给数组新增项，vue不更新</h5>
            <pre data-source-line="124"><code class="hljs">data:<span class="hljs-type">function</span>(){
    <span class="hljs-keyword">return</span> {
      arr:<span class="hljs-type"></span>[],
      <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>:{arr:<span class="hljs-type"></span>[]}
    }
  }
  
  arr[<span class="hljs-number">0</span>] = <span class="hljs-number">2</span>;  
  <span class="hljs-comment">//<span class="zh-hans">不更新，有时能看到更新是因为其他的改变导致了</span>vue<span class="zh-hans">的更新，</span></span>
  <span class="hljs-comment">//<span class="zh-hans">然后把当前的赋值一并更新到页面，如果单独操作此语句则不更新页面</span></span>
  <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.arr[<span class="hljs-number">0</span>] = <span class="hljs-number">2</span>;   <span class="hljs-comment">//<span class="zh-hans">不更新</span></span>
  </code></pre>
            <pre data-source-line="138"><code class="hljs"><span class="hljs-comment">//<span class="zh-hans">有两种办法</span></span>
  updateArr(){
      <span class="hljs-comment">//1</span>
      <span class="hljs-built_in">this</span>.$<span class="hljs-keyword">set</span>(<span class="hljs-built_in">this</span>.arr, <span class="hljs-number">0</span>, <span class="hljs-number">1321</span>);  
      <span class="hljs-built_in">this</span>.$<span class="hljs-keyword">set</span>(<span class="hljs-built_in">this</span>.<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.arr, <span class="hljs-number">0</span>, <span class="hljs-number">1321</span>);  
      
      <span class="hljs-comment">//2 <span class="zh-hans">解构改变引用</span></span>
      <span class="hljs-built_in">this</span>.<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>[<span class="hljs-number">0</span>] = <span class="hljs-number">123</span>;
      <span class="hljs-built_in">this</span>.arr = [...<span class="hljs-built_in">this</span>.arr];
      
      <span class="hljs-built_in">this</span>.<span class="hljs-keyword">new</span><span class="hljs-type">Data</span>.arr[<span class="hljs-number">0</span>] = <span class="hljs-number">1231</span>;
      <span class="hljs-built_in">this</span>.<span class="hljs-keyword">new</span><span class="hljs-type">Data</span>.arr = [...<span class="hljs-built_in">this</span>.<span class="hljs-keyword">new</span><span class="hljs-type">Data</span>.arr];
      <span class="hljs-comment">//<span class="zh-hans">甚至改变</span>newArr<span class="zh-hans">的引用</span></span>
      <span class="hljs-built_in">this</span>.<span class="hljs-keyword">new</span><span class="hljs-type">Data</span> = {...<span class="hljs-built_in">this</span>.<span class="hljs-keyword">new</span><span class="hljs-type">Data</span>, arr:<span class="hljs-type"></span>[<span class="hljs-string">'1231'</span>]};
  }
  </code></pre>
            <h5 id="7-el-tree的过滤不生效"
                data-source-line="156">
                <a class="markdownIt-Anchor"
                    href="#7-el-tree的过滤不生效"></a>7、el-tree的过滤不生效</h5>
            <pre data-source-line="157"><code class="hljs">&lt;<span class="hljs-keyword">el</span>-tree
         :data=<span class="hljs-string">"filterList"</span>
          default-<span class="hljs-built_in">expand</span>-<span class="hljs-keyword">all</span>
          node-key=<span class="hljs-string">"key"</span>
          ref=<span class="hljs-string">"selectedTree"</span>
          <span class="hljs-keyword">highlight</span>-current
         :props=<span class="hljs-string">"defaultProps"</span>
         :<span class="hljs-built_in">filter</span>-node-method=<span class="hljs-string">"filterNode"</span>
         :render-content=<span class="hljs-string">"renderContent"</span>&gt;
  &lt;/<span class="hljs-keyword">el</span>-tree&gt;
  </code></pre>
            <p data-source-line="169">当在一次更新时，同时修改filterList并立即执行this.$refs.selectedTree.filter(val); 对这个tree进行更新，则不起作用。</p>
            <p data-source-line="171">因为$refs只有在组件el-tree渲染完成后(mounted钩子执行完)才能使用，才能调用filter过滤。</p>
            <p data-source-line="173">所以我们必须等待el-tree的data更新后(或之前已存在)，才去执行 this.$refs.selectedTree.filter(val);这样会生效。
            </p>
            <p data-source-line="176">下面的两种方式可以解决:</p>
            <ol data-source-line="177">
                <li>可以使用promise，先更新data，完了执行then 执行过滤。</li>
                <li></li>
            </ol>
            <pre data-source-line="179"><code class="hljs">  <span class="hljs-comment">//this.filterList = <span class="zh-hans">赋值</span></span>
    <span class="hljs-keyword">this</span>.$nextTick(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> </span>{  
       <span class="hljs-keyword">this</span>.$refs.selectedTree.filter(val);   
    })
  </code></pre>
            <h5 id="8-v-loading不要放到el-table上"
                data-source-line="186">
                <a class="markdownIt-Anchor"
                    href="#8-v-loading不要放到el-table上"></a>8、v-loading不要放到el-table上</h5>
            <p data-source-line="187">v-loading不要放到el-table上，会在加载中有轻微的错位抖动。 应放到el-table外面的div上。
            </p>
            <p data-source-line="190">因为当v-loading放到el-table上时，加载loading时会取消table的边框</p>
            <pre data-source-line="192"><code class="hljs"><span class="hljs-selector-class">.el-table-border</span><span class="hljs-selector-class">.el-loading-parent--relative</span>{
      <span class="hljs-attribute">border</span>:none;
  }
  </code></pre>
            <p data-source-line="197">当loading结束。table又重新修改回样式</p>
            <pre data-source-line="198"><code class="hljs"><span class="hljs-selector-class">.el-table--border</span>, <span class="hljs-selector-class">.el-table--group</span> {
      <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ebeef5</span>;
  }
  </code></pre>
            <p data-source-line="203">而这1px刚好就造成了抖动。 如果当el-table的width是100%时，一旦抖动。可能会出现 x 方向的滚动条。死活去不掉。</p>
            <h5 id="8-在父组件中验证子组件表单"
                data-source-line="206">
                <a class="markdownIt-Anchor"
                    href="#8-在父组件中验证子组件表单"></a>8、在父组件中验证子组件表单</h5>
            <pre data-source-line="207"><code class="hljs"><span class="hljs-comment">//<span class="zh-hans">在父组件中</span></span>
  &lt;child ref=<span class="hljs-string">"childComponent"</span>&gt;<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">child</span>&gt;</span></span>
  
  <span class="hljs-keyword">this</span>.$refs[<span class="hljs-string">"childComponent"</span>].$refs[<span class="hljs-string">"childForm"</span>]
      .validate(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{})
  </code></pre>
            <h5 id="9-vue在chrome上无法debugger的问题"
                data-source-line="215">
                <a class="markdownIt-Anchor"
                    href="#9-vue在chrome上无法debugger的问题"></a>9、vue在chrome上无法debugger的问题</h5>
            <p data-source-line="216">修改vue项目中 build\webpack.dev.conf.js 文件</p>
            <pre data-source-line="217"><code class="hljs">// cheap-module-<span class="hljs-built_in">eval</span>-<span class="hljs-keyword">source</span>-<span class="hljs-keyword">map</span> <span class="hljs-keyword">is</span> faster <span class="hljs-keyword">for</span> development
  // devtoo<span class="hljs-variable">l:</span> <span class="hljs-string">'#eval-source-map'</span>,
     devtoo<span class="hljs-variable">l:</span> <span class="hljs-string">'#eval-source-map'</span>,
     
  </code></pre>
        </article>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
    name: "vue-issue",
    data() {
        return {
            message: ""
        };
    },

    computed: {
        /*...mapState({
           本地state名字: state => state.模块名称.state名称
        })*/
        /* ...mapGetters('模块名称', ['getter名称']),*/
    },
    watch: {
        /*data或computed变量: {
          handler: function(val) {
            
          },
          deep: true
        }*/
    },

    methods: {
        /*...mapMutations('模块名称', [
          'mutation名称'
        ]),
        
        ...mapActions('模块名称', [
          'action名称'
        ]),*/
    },

    created() {
        //初始化,无法操作dom
    },

    mounted() {
        //初始化，可以操作dom
        //this.refs
    },

    components: {
        //子组件
    }
};
</script>
<style lang="scss" scoped>
/*本地部分*/
@import "mark-down.scss";
</style>
<style>
/*全局部分*/
</style>