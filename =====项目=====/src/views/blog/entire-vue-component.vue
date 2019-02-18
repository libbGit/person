<template>
    <div>
        <h4>一个完整的vue组件的内容格式</h4>
      <article class="markdown-body">
        <div>
        <pre data-source-line="2"><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-comment">&lt;!--<span class="zh-hans">结合</span>animate.css--&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">transition</span> 
                <span class="hljs-attr">mode</span>=<span class="hljs-string">"out-in"</span> 
                <span class="hljs-attr">enter-active-class</span>=<span class="hljs-string">"animated lightSpeedIn"</span> 
                <span class="hljs-attr">leave-active-class</span>=<span class="hljs-string">"animated lightSpeedOut"</span>&gt;</span>
                <span class="hljs-comment">&lt;!-- v-if/v-show/is <span class="zh-hans">元素和组件</span> --&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
            
            <span class="hljs-comment">&lt;!-- <span class="zh-hans">结合</span>element-ui --&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">transition</span> 
                <span class="hljs-attr">mode</span>=<span class="hljs-string">"out-in"</span> 
                <span class="hljs-attr">name</span>=<span class="hljs-string">"el-fade-in-linear"</span>&gt;</span>
                <span class="hljs-comment">&lt;!-- v-if/v-show/is <span class="zh-hans">元素和组件</span> --&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
            

            <span class="hljs-tag">&lt;<span class="hljs-name">transition-group</span> 
                <span class="hljs-attr">tag</span>=<span class="hljs-string">"div"</span> 
                <span class="hljs-attr">name</span>=<span class="hljs-string">"list"</span>&gt;</span>
                <span class="hljs-comment">&lt;!-- v-for--&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">transition-group</span>&gt;</span>

            <span class="hljs-tag">&lt;<span class="hljs-name">keep-alive</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">router-view</span>/&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">keep-alive</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">import</span> { mapState, mapGetters,mapMutations, mapActions } <span class="hljs-keyword">from</span> <span class="hljs-string">"vuex"</span>;
    <span class="hljs-keyword">import</span> _ <span class="hljs-keyword">from</span> <span class="hljs-string">"lodash"</span>;
    <span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">"@/services/fetch"</span>;

    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      <span class="hljs-attr">name</span>: <span class="hljs-string">"<span class="zh-hans">组件名称</span>"</span>,
      <span class="hljs-comment">//<span class="zh-hans">当在自身的模板中使用其他组件时，必须在此注册其他组件</span></span>
      components: {
        Todo
        <span class="hljs-comment">// MyTransition  //<span class="zh-hans">在动态组件中，可以不必注册</span></span>
      }
      mixins:[<span class="zh-hans">混入的对象</span>],
      <span class="hljs-comment">/*
      * <span class="zh-hans">在组件设置</span> v-model<span class="zh-hans">时修改默认</span>value<span class="zh-hans">和</span>input,
      */</span>
      model: {
        <span class="hljs-attr">prop</span>: <span class="hljs-string">"checked"</span>, <span class="hljs-comment">//<span class="zh-hans">注意当自定义</span>v-mode<span class="zh-hans">的</span>prop<span class="zh-hans">后，在下面</span> props<span class="zh-hans">中还要显式声明</span> <span class="zh-hans">类型等</span></span>
        event: <span class="hljs-string">"change"</span>
      },
      <span class="hljs-comment">/*<span class="zh-hans">父组件传入的属性的类型</span>*/</span>
      props: {
        <span class="hljs-attr">values</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-built_in">Object</span>,
          <span class="hljs-attr">required</span>: <span class="hljs-literal">false</span>
        },
        <span class="hljs-attr">checked</span>: {
          <span class="hljs-attr">type</span>: <span class="hljs-built_in">Boolean</span>
        }
      },
      
      <span class="hljs-comment">/*
      * <span class="zh-hans">初始化。如果一个</span>props<span class="zh-hans">给</span>data<span class="zh-hans">赋值，则只赋值一次，之后值不会再改变，但如果值是引用，虽然引用不变，但是引用里的属性可以改变。</span>
      */</span>
      data() {
        <span class="hljs-keyword">return</span> {
          <span class="hljs-attr">number</span>: <span class="hljs-string">"Welcome to Your Vue.js App"</span>
        };
      },

      <span class="hljs-comment">/*
      * <span class="zh-hans">对于任何复杂逻辑，你都应当使用计算属性。并且基于依赖缓存数据。</span>
      * <span class="zh-hans">依赖的</span> data<span class="zh-hans">属性</span> <span class="zh-hans">改变或者</span> <span class="zh-hans">响应式对象</span>(<span class="zh-hans">如</span>Date<span class="zh-hans">对象</span>) <span class="zh-hans">改变，则更新</span>computed<span class="zh-hans">实例，否则不更新。</span>
      * 
      * {{}}<span class="zh-hans">和</span>v-bind<span class="zh-hans">，</span> v-model<span class="zh-hans">类</span> <span class="zh-hans">的变量放在这</span> <span class="zh-hans">最合理</span>
      */</span>
      computed: {
        ...mapState(<span class="hljs-string">"<span class="zh-hans">模块名称</span>"</span>, [<span class="hljs-string">"state<span class="zh-hans">名称</span>"</span>]),
        ...mapGetters(<span class="hljs-string">'<span class="zh-hans">模块名称</span>'</span>, [<span class="hljs-string">'getter<span class="zh-hans">名称</span>'</span>]),
        now() {
          <span class="hljs-keyword">return</span> <span class="hljs-built_in">Date</span>.now(); <span class="hljs-comment">//<span class="zh-hans">不变</span></span>
        }
      },
      <span class="hljs-comment">/******************** <span class="zh-hans">页面数据的来源有三处：</span> data<span class="zh-hans">，</span> props<span class="zh-hans">，</span>computed(<span class="zh-hans">包括</span>state) *******************/</span>
      
      
      <span class="hljs-comment">/* 
        watch<span class="zh-hans">可以监听</span> data<span class="zh-hans">，</span> props, computed(<span class="zh-hans">包括</span>state)<span class="zh-hans">等</span> <span class="zh-hans">变量；</span>
        <span class="zh-hans">当在数据变化时执行</span> <span class="zh-hans">异步</span> <span class="zh-hans">或</span> <span class="zh-hans">开销较大</span> <span class="zh-hans">的操作时，这个方式是最有用的。</span> <span class="zh-hans">简单的求值操作请用</span>computed<span class="zh-hans">代替</span>   
        <span class="zh-hans">注：</span> <span class="zh-hans">不能用</span> =&gt; <span class="zh-hans">函数，否则无法指向</span>this
      */</span>
      watch: {
        msg() {  <span class="hljs-comment">//data,props<span class="zh-hans">或</span>computed<span class="zh-hans">变量</span></span>
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"msg is changed"</span>);
        },
        <span class="hljs-attr">values</span>: {
          <span class="hljs-attr">handler</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">val</span>) </span>{
            <span class="hljs-comment">//TODO</span>
          },
          <span class="hljs-attr">deep</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">//<span class="zh-hans">监听深度层次的数据结构</span></span>
          immediate: <span class="hljs-literal">true</span> <span class="hljs-comment">//<span class="zh-hans">立即以</span> values <span class="zh-hans">的当前值触发回调</span></span>
        }
      },

      <span class="hljs-comment">/*
      * <span class="zh-hans">和</span>computed<span class="zh-hans">完全类似，不会缓存，每次虚拟</span>dom<span class="zh-hans">重新渲染组件，都要被调用执行。</span>
      * <span class="zh-hans">事件处理函数</span> <span class="zh-hans">放在这</span> <span class="zh-hans">最合理</span>
      */</span>
      methods: {
        ...mapMutations(<span class="hljs-string">'<span class="zh-hans">模块名称</span>'</span>, [
          <span class="hljs-string">'mutation<span class="zh-hans">名称</span>'</span>
        ]),
        
        ...mapActions(<span class="hljs-string">'<span class="zh-hans">模块名称</span>'</span>, [
          <span class="hljs-string">'action<span class="zh-hans">名称</span>'</span>
        ]),
        getDate() {
          <span class="hljs-keyword">return</span> <span class="hljs-built_in">Date</span>.now(); <span class="hljs-comment">//<span class="zh-hans">每次不同</span></span>
        }
      },

      <span class="hljs-comment">/* <span class="zh-hans">自定义指令，在当前组件内部和子组件中生效</span> */</span>
      directives: {},

      <span class="hljs-comment">/* <span class="zh-hans">自定义过滤器</span> */</span>
      filters: {
        capitalize(value) {
          <span class="hljs-keyword">if</span> (!value) <span class="hljs-keyword">return</span> <span class="hljs-string">""</span>;
          value = value.toString();
          <span class="hljs-keyword">return</span> value.charAt(<span class="hljs-number">0</span>).toUpperCase() + value.slice(<span class="hljs-number">1</span>);
        }
      },
      
      

      <span class="hljs-comment">/****************************  <span class="zh-hans">生命周期钩子</span>  ***********************************/</span>
      beforeCreate() {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"beforeCreate"</span>, <span class="hljs-keyword">this</span>.msg);
      },
      created() {
        
        <span class="hljs-comment">//<span class="zh-hans">初始化，可以使用</span>this,<span class="zh-hans">但不能通过</span>this.$ref<span class="zh-hans">操作</span>dom</span>
      },
      beforeMount() {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"beforeMount"</span>, <span class="hljs-keyword">this</span>.$el);
      },
      mounted() {
        <span class="hljs-comment">//<span class="zh-hans">初始化，可以使用</span>this<span class="zh-hans">，也可以通过</span>this.$ref<span class="zh-hans">操作</span>dom<span class="zh-hans">节点</span></span>
      },

      <span class="hljs-comment">/*
      * <span class="zh-hans">只有在</span> <span class="zh-hans">虚拟</span>dom <span class="zh-hans">改变之后才会执行</span> beforeUpdate<span class="zh-hans">和</span>updated, <span class="zh-hans">虚拟</span>dom<span class="zh-hans">改变</span> <span class="zh-hans">即</span> <span class="zh-hans">写入</span>template<span class="zh-hans">的</span> <span class="zh-hans">数据</span>(data,computed, state<span class="zh-hans">，</span>props) <span class="zh-hans">改变，</span>
      <span class="zh-hans">如果不在</span>template<span class="zh-hans">中使用此数据，则虚拟</span>dom<span class="zh-hans">不变。</span>
      * 
      * <span class="zh-hans">有种特殊情况，</span>prop<span class="zh-hans">传入的变量赋值给</span> data<span class="zh-hans">，在</span>template<span class="zh-hans">中使用</span>data<span class="zh-hans">变量，</span>
      * <span class="zh-hans">此时如果</span>prop<span class="zh-hans">的变量是引用类型，则赋值给</span>data<span class="zh-hans">后，</span>props<span class="zh-hans">中的属性改变，则</span>data<span class="zh-hans">会同步改变，虚拟</span>dom<span class="zh-hans">也会改变；</span>
      * <span class="zh-hans">否则如果</span>props<span class="zh-hans">是基本类型，则</span>data<span class="zh-hans">不会再变</span>(<span class="zh-hans">是第一次的值</span>)<span class="zh-hans">，虚拟</span>dom<span class="zh-hans">不会再改变。</span>
      */</span>
      beforeUpdate() {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"beforeUpdate"</span>);
      },
      updated() {
        <span class="hljs-keyword">this</span>.childRef = <span class="hljs-keyword">this</span>.$refs.childVue.myCheck;
      },

      beforeDestroy() {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"beforeDestroy"</span>);
      },
      destroyed() {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"destroyed"</span>);
      },
      
      beforeRouteEnter(to,<span class="hljs-keyword">from</span>,next){
        <span class="hljs-comment">//<span class="zh-hans">组件激活进入时，无法访问</span>this<span class="zh-hans">。</span></span>
        next(<span class="hljs-function"><span class="hljs-params">vm</span> =&gt;</span> {
          <span class="hljs-comment">// <span class="zh-hans">通过</span> `vm` <span class="zh-hans">访问组件实例</span></span>
        });
        
        <span class="hljs-comment">//<span class="zh-hans">如果没有访问组件实例的要求，则直接调用</span>next</span>
        <span class="hljs-comment">//next();</span>
      },
      beforeRouteUpdate(to,<span class="hljs-keyword">from</span>,next){
        <span class="hljs-comment">//<span class="zh-hans">组件被复用时，比如传参。可以访问</span>this</span>
        next();
      },
      beforeRouteLeave(to,<span class="hljs-keyword">from</span>,next){
        <span class="hljs-comment">//<span class="zh-hans">组件离开前调用。可以访问</span>this</span>
        next();
      }

    };

    <span class="hljs-comment">/*<span class="zh-hans">生命周期</span>
    *    beforeCreate<span class="zh-hans">时</span> data<span class="zh-hans">属性还没准备好</span>
    *    created <span class="zh-hans">时</span>            data<span class="zh-hans">属性已准备好</span>,<span class="zh-hans">实例已经创建好，但是并没有将数据挂载到</span>dom<span class="zh-hans">节点上，让</span>dom<span class="zh-hans">渲染</span>
    *    beforeMount <span class="zh-hans">时</span>    this.$el<span class="zh-hans">还没创建好，无法操作</span>dom
    *    mounted<span class="zh-hans">时</span>           <span class="zh-hans">挂载完成，</span>dom<span class="zh-hans">完成渲染。</span>dom<span class="zh-hans">已经加载好，使用</span>this.$el<span class="zh-hans">操作</span>dom
    *    beforeUpdate
    *    updated                <span class="zh-hans">虚拟</span>dom<span class="zh-hans">已改变</span>
    */</span>

    <span class="hljs-comment">/*
        Vue <span class="zh-hans">组件的</span> <span class="zh-hans">对外</span>API <span class="zh-hans">来自三部分——</span> prop<span class="zh-hans">、事件</span> <span class="zh-hans">和</span> <span class="zh-hans">插槽：</span>
            Prop   <span class="zh-hans">允许外部环境传递数据给组件；</span>
            <span class="zh-hans">事件</span>   <span class="zh-hans">允许从组件内触发外部环境的副作用；</span>
            <span class="zh-hans">插槽</span>   <span class="zh-hans">允许外部环境将额外的内容组合在组件中。</span>
      */</span>

    <span class="hljs-comment">/*
        <span class="zh-hans">实现缓存的方案有</span>  
            &lt;keep-alive&gt;    <span class="zh-hans">缓存渲染过的组件</span>     
            computed(){}    <span class="zh-hans">缓存数据</span>
            v-once          <span class="zh-hans">缓存静态页面内容</span>
      */</span>
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="undefined">    /*<span class="zh-hans">本地部分</span>*/
    /*<span class="zh-hans">操作子组件样式</span>*/
    .parent &gt;&gt;&gt; .child { }
    .parent  /deep/ .child { }


    /*<span class="zh-hans">用于</span>name<span class="zh-hans">为</span>list<span class="zh-hans">的列表过渡</span>*/
    .list-move{
        transition: all .5s;
    }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">     <span class="hljs-comment">/*<span class="zh-hans">全局部分</span>*/</span>

    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
    </code>
    </pre>
    </div>
    </article>



    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
    name: "entire-vue-component",
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