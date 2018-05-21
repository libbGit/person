<template>
    <div>
        <h4>SCSS简易教程</h4>
        <article class="markdown-body">
            <p data-source-line="1">sass让人们受益的一个重要特性就是它为css引入了变量。你可以把反复使用的css属性值 定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值。</p>
            <h5 id="1-变量声明使用符号"
                data-source-line="3">
                <a class="markdownIt-Anchor"
                    href="#1-变量声明使用符号"></a>1、变量声明;【使用$符号】</h5>
            <p data-source-line="4">当变量定义在css规则块内，那么该变量只能在此规则块内使用。如果它们出现在任何形式的{...}块中（如@media或者@font-face块）中时，只能在块内生效。</p>
            <pre data-source-line="6"><code class="hljs"><span class="hljs-variable">$highlight-color</span>: <span class="hljs-number">#F90</span>;  <span class="hljs-comment">//<span class="zh-hans">变量名使用中划线和下划线都行</span></span>
  
  <span class="hljs-selector-class">.login-wrap</span> {
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">30px</span>;
    <span class="hljs-attribute">color</span>:<span class="hljs-variable">$highlight-color</span>;
    <span class="hljs-attribute">border</span>:<span class="hljs-number">1px</span> solid <span class="hljs-variable">$highlight-color</span>
  }
  </code></pre>
            <pre data-source-line="17"><code class="hljs"><span class="hljs-variable">$highlight-color</span>: <span class="hljs-number">#F90</span>;    <span class="hljs-comment">//<span class="zh-hans">可以在</span>login-wrap<span class="zh-hans">外的块中使用</span></span>
  
  <span class="hljs-selector-class">.login-wrap</span> {
    <span class="hljs-variable">$width</span>: <span class="hljs-number">30px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-variable">$width</span>;    <span class="hljs-comment">//<span class="zh-hans">只能在</span>login-wrap<span class="zh-hans">块中使用</span></span>
    <span class="hljs-attribute">color</span>:<span class="hljs-variable">$highlight-color</span>;
  }
  </code></pre>
            <h5 id="2-css嵌套"
                data-source-line="27">
                <a class="markdownIt-Anchor"
                    href="#2-css嵌套"></a>2、css嵌套</h5>
            <p data-source-line="28">可以避免重复多次的写父选择器。将嵌套的选择器作为子选择器。</p>
            <pre data-source-line="29"><code class="hljs">.center{
    .title{
      <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
      <span class="hljs-attribute">font-weight</span>: bold;
    }
  
    input{
      <span class="hljs-attribute">background-color</span>: gray;
    }
  }
   <span class="hljs-comment">/* <span class="zh-hans">编译后</span> */</span>
  <span class="hljs-selector-class">.center</span> <span class="hljs-selector-class">.title</span> {
     <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
     <span class="hljs-attribute">font-weight</span>: bold; 
  }
  <span class="hljs-selector-class">.center</span> <span class="hljs-selector-tag">input</span> { <span class="hljs-attribute">background-color</span>: gray;}
  </code></pre>
            <p data-source-line="47">群组的嵌套</p>
            <pre data-source-line="48"><code class="hljs"><span class="hljs-comment">//<span class="zh-hans">子元素群组</span></span>
  <span class="hljs-selector-class">.container</span> {
    <span class="hljs-selector-tag">h1</span>, <span class="hljs-selector-tag">h2</span>, <span class="hljs-selector-tag">h3</span> {<span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">10px</span>}
  }
  <span class="zh-hans">编译后</span>
  <span class="hljs-selector-class">.container</span> <span class="hljs-selector-tag">h1</span>, <span class="hljs-selector-class">.container</span> <span class="hljs-selector-tag">h2</span>, <span class="hljs-selector-class">.container</span> <span class="hljs-selector-tag">h3</span> { <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">10px</span> }
  </code></pre>
            <pre data-source-line="57"><code class="hljs"><span class="hljs-comment">//<span class="zh-hans">父元素群组</span></span>
  <span class="hljs-selector-tag">nav</span>, <span class="hljs-selector-tag">aside</span> {
    <span class="hljs-selector-tag">a</span> {<span class="hljs-attribute">color</span>: blue}
  }
  <span class="zh-hans">编译后</span>
  <span class="hljs-selector-tag">nav</span> <span class="hljs-selector-tag">a</span>, <span class="hljs-selector-tag">aside</span> <span class="hljs-selector-tag">a</span> {<span class="hljs-attribute">color</span>: blue}
  </code></pre>
            <h5 id="3-父元素的引用"
                data-source-line="66">
                <a class="markdownIt-Anchor"
                    href="#3-父元素的引用"></a>3、父元素的引用</h5>
            <p data-source-line="67">有时并不是让嵌套的作为子原则器，而是父选择器的补充，比如:hover,，此时必须使用 父元素的引用符 &amp;, 此时&amp;代表父元素</p>
            <pre data-source-line="68"><code class="hljs"><span class="hljs-selector-class">.center</span>{
    <span class="hljs-selector-tag">input</span>{
      <span class="hljs-attribute">background-color</span>: gray;
    }
  
    &amp;:hover{ 
      <span class="hljs-attribute">color</span>:red;
    }
  }
  <span class="zh-hans">编译后</span>
  <span class="hljs-selector-class">.center</span> <span class="hljs-selector-tag">input</span>{<span class="hljs-attribute">background-color</span>: gray;}
  <span class="hljs-selector-class">.center</span>:hover{<span class="hljs-attribute">color</span>:red;}
  </code></pre>
            <h5 id="4-子组合和同胞选择器的使用-和-~"
                data-source-line="82">
                <a class="markdownIt-Anchor"
                    href="#4-子组合和同胞选择器的使用-和-~"></a>4、子组合和同胞选择器的使用 &gt;、+ 和 ~ ;</h5>
            <p data-source-line="83">可以把它们放在
                <mark>外层选择器
                    <strong>后边</strong>
                </mark>，或
                <mark>里层选择器
                    <strong>前边</strong>
                </mark>：</p>
            <pre data-source-line="85"><code class="hljs"><span class="hljs-selector-tag">article</span> {
    ~ <span class="hljs-selector-tag">article</span> { <span class="hljs-attribute">border-top</span>: <span class="hljs-number">1px</span> dashed <span class="hljs-number">#ccc</span> }  //<span class="zh-hans">里层选择器前面</span>
    &gt; <span class="hljs-selector-tag">section</span> { <span class="hljs-attribute">background</span>: <span class="hljs-number">#eee</span> }
    <span class="hljs-selector-tag">dl</span> &gt; {    <span class="hljs-comment">//<span class="zh-hans">外层选择器前面</span></span>
      <span class="hljs-selector-tag">dt</span> { <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span> }
      <span class="hljs-selector-tag">dd</span> { <span class="hljs-attribute">color</span>: <span class="hljs-number">#555</span> }
    }
    <span class="hljs-selector-tag">nav</span> + &amp; { <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">0</span> }
  }
  
  <span class="hljs-comment">//<span class="zh-hans">编译后</span></span>
  <span class="hljs-selector-tag">article</span> ~ <span class="hljs-selector-tag">article</span> { <span class="hljs-attribute">border-top</span>: <span class="hljs-number">1px</span> dashed <span class="hljs-number">#ccc</span> }
  <span class="hljs-selector-tag">article</span> &gt; <span class="hljs-selector-tag">footer</span> { <span class="hljs-attribute">background</span>: <span class="hljs-number">#eee</span> }
  <span class="hljs-selector-tag">article</span> <span class="hljs-selector-tag">dl</span> &gt; <span class="hljs-selector-tag">dt</span> { <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span> }
  <span class="hljs-selector-tag">article</span> <span class="hljs-selector-tag">dl</span> &gt; <span class="hljs-selector-tag">dd</span> { <span class="hljs-attribute">color</span>: <span class="hljs-number">#555</span> }
  <span class="hljs-selector-tag">nav</span> + <span class="hljs-selector-tag">article</span> { <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">0</span> }
  </code></pre>
            <h5 id="5-混合器"
                data-source-line="103">
                <a class="markdownIt-Anchor"
                    href="#5-混合器"></a>5、混合器</h5>
            <p data-source-line="104">通过变量我们可以对单个css值，定义定义和重用，如果对多个css值，都写变量，显得太麻烦，所以使用混合器一次性定义多个。</p>
            <p data-source-line="106">
                <strong>通过@mixin定义， 通过@include使用</strong>
            </p>
            <pre data-source-line="107"><code class="hljs">@<span class="hljs-keyword">mixin</span> rounded-corners {
    -moz-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50px</span>;
    -webkit-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50px</span>;
  }
  
  <span class="hljs-selector-class">.center</span>{
    <span class="hljs-selector-tag">input</span>{
      <span class="hljs-attribute">background-color</span>: gray;
      @<span class="hljs-keyword">include</span> rounded-corners;
    }
  }
  <span class="zh-hans">编译后</span>
  <span class="hljs-selector-class">.center</span>{
    <span class="hljs-selector-tag">input</span>{
      <span class="hljs-attribute">background-color</span>: gray;
      -moz-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50px</span>;
      -webkit-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50px</span>;
      <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50px</span>;
    }
  }
  </code></pre>
            <p data-source-line="130">可以给混合器传参</p>
            <pre data-source-line="131"><code class="hljs">@<span class="hljs-keyword">mixin</span> rounded-corners(<span class="hljs-variable">$normal</span>) {
    -moz-<span class="hljs-attribute">border-radius</span>: <span class="hljs-variable">$normal</span>;
    -webkit-<span class="hljs-attribute">border-radius</span>: <span class="hljs-variable">$normal</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-variable">$normal</span>;
  }
  
  <span class="hljs-selector-class">.center</span>{
    <span class="hljs-selector-tag">input</span>{
      <span class="hljs-attribute">background-color</span>: gray;
      @<span class="hljs-keyword">include</span> rounded-corners(<span class="hljs-number">50%</span>);
    }
  }
  </code></pre>
            <h5 id="6-继承"
                data-source-line="145">
                <a class="markdownIt-Anchor"
                    href="#6-继承"></a>6、继承</h5>
            <p data-source-line="146">变量是基于单个 css 属性的，mixin是基于多个css属性的，并且这两个都是同属一个css样式文件才生效，</p>
            <p data-source-line="148">而继承是基于css类的，可以在不同的css文件间使用，既可以给自身的选择器用，也可以给继承的后代选择器用</p>
            <pre data-source-line="150"><code class="hljs"><span class="hljs-comment">//1.css</span>
  @<span class="hljs-keyword">mixin</span> rounded-corners(<span class="hljs-variable">$normal</span>) {
    -moz-<span class="hljs-attribute">border-radius</span>: <span class="hljs-variable">$normal</span>;
    -webkit-<span class="hljs-attribute">border-radius</span>: <span class="hljs-variable">$normal</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-variable">$normal</span>;
  }
  
  <span class="hljs-selector-class">.center</span>{  <span class="hljs-comment">//<span class="zh-hans">可用于</span>class<span class="zh-hans">为</span>center<span class="zh-hans">的元素</span></span>
    <span class="hljs-selector-class">.title</span>{
      <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
      <span class="hljs-attribute">font-weight</span>: bold;
    }
    <span class="hljs-selector-tag">input</span>{
      <span class="hljs-attribute">background-color</span>: gray;
      @<span class="hljs-keyword">include</span> rounded-corners(<span class="hljs-number">50%</span>);   <span class="hljs-comment">//<span class="zh-hans">使用混合器</span></span>
    }
    &amp;:hover{
      <span class="hljs-attribute">color</span>:red;
    }
  }
  </code></pre>
            <pre data-source-line="173"><code class="hljs"><span class="hljs-comment">//2.css</span>
  <span class="hljs-selector-class">.password</span> {
    @<span class="hljs-keyword">extend</span> .center;      <span class="hljs-comment">//<span class="zh-hans">继承</span>.center<span class="zh-hans">的所有样式。</span></span>
    <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span> red inset;
  }
  </code></pre>
            <p data-source-line="180">不仅会继承.center自身的所有样式，任何跟.center有关的组合选择器样式也会被.password 以组合选择器的形式继承</p>
            <pre data-source-line="183"><code class="hljs"><span class="hljs-string">//</span><span class="zh-hans">不要使用后代选择器去继承</span>
  <span class="hljs-string">.password</span> <span class="hljs-string">.text</span>{   <span class="hljs-string">//</span><span class="zh-hans">不推荐</span>
    @extend <span class="hljs-string">.center</span>;
  }
  </code></pre>
            <p data-source-line="189">extend-Only 选择器【将原来的“ . ”使用“ % ”定义，只用于继承，不会给某个元素用】</p>
            <pre data-source-line="190"><code class="hljs">%center{  <span class="hljs-comment">//<span class="zh-hans">只用于</span>@extend<span class="zh-hans">的使用，不会给</span>class<span class="zh-hans">为</span>center<span class="zh-hans">的元素用，况且此时也不是</span>class<span class="zh-hans">样式了</span></span>
    <span class="hljs-selector-tag">input</span>{
      <span class="hljs-attribute">background-color</span>: gray;
      @<span class="hljs-keyword">include</span> rounded-corners(<span class="hljs-number">50%</span>);
    }
    &amp;:hover{
      <span class="hljs-attribute">color</span>:red;
    }
  }
  <span class="hljs-selector-class">.password</span> {
    @<span class="hljs-keyword">extend</span> %center;
    <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">10px</span> red inset;
  }
  </code></pre>
        </article>

    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
    name: "scss-tutorial",
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