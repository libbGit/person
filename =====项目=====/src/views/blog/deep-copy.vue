<template>
    <div>
        <h4>深拷贝和浅拷贝</h4>
        <article class="markdown-body">
            <p data-source-line="2">对于 数字，boolean 和 字符串等基本类型而言，赋值、浅拷贝和深拷贝无意义，因为其永远指向同一个内存地址。</p>
            <blockquote data-source-line="4">
                <p>
                    <strong>对于对象，数组等而言，进行赋值、浅拷贝和深拷贝时，其内存地址的变化是不同的。</strong>
                </p>
            </blockquote>
            <p data-source-line="6">浅拷贝只拷贝第一层地址，而深拷贝是不管你数据结构多么复杂，都在内存里开辟一块新的空间，直到简单数据类型为止。</p>
            <h5 id="1-赋值"
                data-source-line="8">
                <a class="markdownIt-Anchor"
                    href="#1-赋值"></a>1、赋值:</h5>
            <p>指向同一个地址，不拷贝。
                <img :src="$getUrl('/static/local-image/blog/赋值.png')" alt="image">
            </p>
            <pre data-source-line="13"><code class="hljs">var obj1 = {<span class="hljs-string">name:</span><span class="hljs-string">'<span class="zh-hans">圆</span>'</span>, <span class="hljs-string">radius:</span><span class="hljs-number">10</span>, <span class="hljs-string">point:</span>{<span class="hljs-string">x:</span><span class="hljs-number">0</span>,<span class="hljs-string">y:</span><span class="hljs-number">0</span>}};
  var obj2 = obj1;
   
  obj2.name = <span class="hljs-string">"<span class="zh-hans">圆</span>2"</span>;  <span class="hljs-comment">// obj1<span class="zh-hans">中的</span>name<span class="zh-hans">也会变</span></span>
  </code></pre>
            <h5 id="2-浅拷贝"
                data-source-line="19">
                <a class="markdownIt-Anchor"
                    href="#2-浅拷贝"></a>2、浅拷贝:</h5>
            <p>拷贝第一层，第二层的指向同一个地址。
                <img :src="$getUrl('/static/local-image/blog/浅拷贝.png')" alt="image" style="margin-left:50px">
            </p>
            <pre data-source-line="23"><code class="hljs">var obj1 = {<span class="hljs-string">name:</span><span class="hljs-string">'<span class="zh-hans">圆</span>'</span>, <span class="hljs-string">radius:</span><span class="hljs-number">10</span>, <span class="hljs-string">point:</span>{<span class="hljs-string">x:</span><span class="hljs-number">0</span>,<span class="hljs-string">y:</span><span class="hljs-number">0</span>}};
  var obj2 = Object.assign({},obj1);
   
  obj2.name=<span class="hljs-string">"<span class="zh-hans">圆</span>2"</span>  <span class="hljs-comment">// obj1.name<span class="zh-hans">不会变</span></span>
  obj2.point.x = <span class="hljs-number">2</span>       <span class="hljs-comment">//obj1.point.x <span class="zh-hans">改变，因为只拷贝到</span>point<span class="zh-hans">一层</span></span>
  
  <span class="zh-hans">同样，解构赋值也是如此</span>
  var obj1 = {<span class="hljs-string">name:</span><span class="hljs-string">'<span class="zh-hans">圆</span>'</span>, <span class="hljs-string">radius:</span><span class="hljs-number">10</span>, <span class="hljs-string">point:</span>{<span class="hljs-string">x:</span><span class="hljs-number">0</span>,<span class="hljs-string">y:</span><span class="hljs-number">0</span>}};
  var obj2 = {<span class="zh-hans">…</span>obj1}
  </code></pre>
            <h5 id="3-深拷贝"
                data-source-line="35">
                <a class="markdownIt-Anchor"
                    href="#3-深拷贝"></a>3、深拷贝:</h5>
            <p>不管有多少层属性，都会拷贝。
                <img :src="$getUrl('/static/local-image/blog/深拷贝.png')" alt="image">
            </p>
            <h6 id="方法1"
                data-source-line="39">
                <a class="markdownIt-Anchor"
                    href="#方法1"></a>
                <em>方法1:</em>
            </h6>
            <pre data-source-line="41"><code class="hljs"><span class="hljs-built_in">JSON</span>.stringify(obj)  <span class="zh-hans">先将对象转换为字符串</span>
  <span class="hljs-built_in">JSON</span>.parse(str)      <span class="zh-hans">然后再将字符串转为对象。</span>
   
  <span class="hljs-keyword">var</span> obj1 = {<span class="hljs-attr">name</span>:<span class="hljs-string">'<span class="zh-hans">圆</span>'</span>, <span class="hljs-attr">radius</span>:<span class="hljs-number">10</span>, <span class="hljs-attr">point</span>:{<span class="hljs-attr">x</span>:<span class="hljs-number">0</span>,<span class="hljs-attr">y</span>:<span class="hljs-number">0</span>}};
  <span class="hljs-keyword">var</span> obj2 = <span class="hljs-built_in">JSON</span>.stringify(obj1 );
  <span class="hljs-keyword">var</span> obj1 = <span class="hljs-built_in">JSON</span>.parse(obj2);
   
  obj2.name = <span class="hljs-string">"<span class="zh-hans">圆</span>2"</span>;  <span class="hljs-comment">// obj1 <span class="zh-hans">不变</span></span>
  obj2.point.x = <span class="hljs-number">3</span>;     <span class="hljs-comment">//  obj1 <span class="zh-hans">不变</span></span>
   
  <span class="zh-hans">但</span><span class="hljs-built_in">JSON</span>.stringify<span class="zh-hans">在转换</span><span class="hljs-built_in">Date</span><span class="zh-hans">，</span><span class="hljs-built_in">RegExp</span><span class="zh-hans">对象及</span><span class="hljs-function"><span class="hljs-keyword">function</span><span class="zh-hans">时会出现问题，同时也会忽略</span><span class="hljs-title">undefined</span><span class="zh-hans">、</span><span class="hljs-title">function</span><span class="zh-hans">。</span>
  
  <span class="zh-hans">如下：</span>
  //<span class="hljs-title">date</span> <span class="zh-hans">类型</span>
  <span class="hljs-title">var</span> <span class="hljs-title">o</span> = <span class="hljs-title">new</span> <span class="hljs-title">Date</span>(<span class="hljs-params"></span>);
  <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(<span class="hljs-params">o.toString(</span>));                  //  <span class="hljs-title">Mon</span> <span class="hljs-title">Nov</span> 06 2017 11:23:35 <span class="hljs-title">GMT</span>+0800 (<span class="hljs-params">China Standard Time</span>)  <span class="zh-hans">本地标准时间</span>
  <span class="hljs-title">console</span>.<span class="hljs-title">log</span>(<span class="hljs-params">JSON.stringify(o</span>));    // "2017-11-06<span class="hljs-title">T03</span>:23:35.547<span class="hljs-title">Z</span>"  <span class="zh-hans">国际标准时间</span>
   
  <span class="zh-hans">因为</span><span class="hljs-title">stringify</span><span class="zh-hans">调用的是对象的</span><span class="hljs-title">toJSON</span><span class="zh-hans">方法，所以重写</span><span class="hljs-title">toJSON</span>
  <span class="hljs-title">Date</span>.<span class="hljs-title">prototype</span>.<span class="hljs-title">toJSON</span> = <span class="hljs-title">function</span> (<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.toLocaleString();
  }
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">JSON</span>.stringify(o));      <span class="hljs-comment">// "11/6/2017, 11:23:35 AM"</span>
   
   
  <span class="hljs-comment">//RegExp<span class="zh-hans">类型</span></span>
  r1 = <span class="hljs-regexp">/\d+/</span>;
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">JSON</span>.stringify(r1));           <span class="hljs-comment">//   {}</span>
   
  <span class="hljs-built_in">RegExp</span>.prototype.toJSON = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.toString();
  }
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">JSON</span>.stringify(r1));          <span class="hljs-comment">//    "/\\d+/"</span>
  </code></pre>
            <h6 id="方法2"
                data-source-line="76">
                <a class="markdownIt-Anchor"
                    href="#方法2"></a>
                <em>方法2:</em>
            </h6>
            <p data-source-line="77">改写深拷贝方法</p>
            <pre data-source-line="78"><code class="hljs"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deepCopy</span>(<span class="hljs-params">obj1, obj2</span>) </span>{
      <span class="hljs-keyword">var</span> obj = obj1 || {};          <span class="hljs-comment">//<span class="zh-hans">容错处理</span></span>
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> k <span class="hljs-keyword">in</span> obj2) {
          <span class="hljs-keyword">if</span> (obj2.hasOwnProperty(k)) {                <span class="hljs-comment">//<span class="zh-hans">只拷贝实例属性，不进行原型的拷贝</span></span>
              <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> obj2[k] == <span class="hljs-string">'object'</span>) {            <span class="hljs-comment">//<span class="zh-hans">引用类型的数据单独处理</span></span>
                  <span class="hljs-comment">//<span class="zh-hans">处理</span>date<span class="zh-hans">和</span>RegExp</span>
                  <span class="hljs-keyword">if</span> (obj2[k] <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Date</span> || obj2[k] <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">RegExp</span>) {
                      obj1[k] = obj2[k];
                      <span class="hljs-keyword">continue</span>;
                  }
                  <span class="hljs-comment">//<span class="zh-hans">处理</span>null</span>
                  <span class="hljs-keyword">if</span> (!obj2[k]) {
                      obj1[k] = obj2[k];
                      <span class="hljs-keyword">continue</span>;
                  }
                  <span class="hljs-comment">//json<span class="zh-hans">和</span> array</span>
                  obj1[k] = <span class="hljs-built_in">Array</span>.isArray(obj2[k]) ? [] : {};
                  obj1[k] = deepCopy({}, obj2[k]);     <span class="hljs-comment">//<span class="zh-hans">递归处理引用类型数据</span></span>
              } <span class="hljs-keyword">else</span> {
                  <span class="hljs-comment">//undefined,number string,boolean,function</span>
                  obj1[k] = obj2[k];      <span class="hljs-comment">//<span class="zh-hans">值类型的数据直接进行拷贝</span></span>
              }
          }
      }
      <span class="hljs-keyword">return</span> obj;
  }
  </code></pre>
            <p data-source-line="106">则y为x的深拷贝，完美解决 Date和RegExp,function的问题。</p>
            <h6 id="方法3"
                data-source-line="108">
                <a class="markdownIt-Anchor"
                    href="#方法3"></a>
                <em>方法3:</em>
            </h6>
            <p data-source-line="109">使用jquery库</p>
            <pre data-source-line="110"><code class="hljs"><span class="hljs-keyword">var</span>  y = $.extend(<span class="hljs-literal">true</span>,{},x)   <span class="hljs-comment">//<span class="zh-hans">第一个参数</span> <span class="zh-hans">必须为</span>true</span>
  <span class="hljs-comment">//<span class="zh-hans">则</span>y<span class="zh-hans">为</span>x<span class="zh-hans">的深拷贝，完美解决</span> Date<span class="zh-hans">和</span>RegExp,function<span class="zh-hans">的问题。</span></span>
  </code></pre>
            <p data-source-line="115">使用lodash库</p>
            <pre data-source-line="116"><code class="hljs"><span class="hljs-keyword">let</span> obj<span class="hljs-number">2</span> = <span class="hljs-number">_</span>.cloneDeep(obj)
  <span class="hljs-comment">//<span class="zh-hans">则</span>obj2<span class="zh-hans">为</span>ojb<span class="zh-hans">的深拷贝</span></span>
  </code></pre>
        </article>

    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
    name: "组件名称",
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
@import "mark-down.scss";
</style>
<style>
/*全局部分*/
</style>