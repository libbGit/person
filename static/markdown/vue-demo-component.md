#### 一个完整的vue组件的内容格式
```
<template>
    <div>
        <!--结合animate.css-->
        <transition 
            mode="out-in" 
            enter-active-class="animated lightSpeedIn" 
            leave-active-class="animated lightSpeedOut">
            <!-- v-if/v-show/is 元素和组件 -->
        </transition>
        
        <!-- 结合element-ui -->
        <transition 
            mode="out-in" 
            name="el-fade-in-linear">
            <!-- v-if/v-show/is 元素和组件 -->
        </transition>
        

        <transition-group 
            tag="div" 
            name="list">
            <!-- v-for-->
        </transition-group>

        <keep-alive>
          <router-view/>
        </keep-alive>
    </div>
</template>

<script>
import { mapState, mapGetters,mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
  name: "组件名称",
  //当在自身的模板中使用其他组件时，必须在此注册其他组件
  components: {
    Todo
    // MyTransition  //在动态组件中，可以不必注册
  }
  mixins:[混入的对象],
  /*
   * 在组件设置 v-model时修改默认value和input,
   */
  model: {
    prop: "checked", //注意当自定义v-mode的prop后，在下面 props中还要显式声明 类型等
    event: "change"
  },
  /*父组件传入的属性的类型*/
  props: {
    values: {
      type: Object,
      required: false
    },
    checked: {
      type: Boolean
    }
  },
  
  /*
   * 初始化。如果一个props给data赋值，则只赋值一次，之后值不会再改变，但如果值是引用，虽然引用不变，但是引用里的属性可以改变。
   */
  data() {
    return {
      number: "Welcome to Your Vue.js App"
    };
  },

  /*
   * 对于任何复杂逻辑，你都应当使用计算属性。并且基于依赖缓存数据。
   * 依赖的 data属性 改变或者 响应式对象(如Date对象) 改变，则更新computed实例，否则不更新。
   * 
   * {{}}和v-bind， v-model类 的变量放在这 最合理
   */
  computed: {
    ...mapState("模块名称", ["state名称"]),
    ...mapGetters('模块名称', ['getter名称']),
    now() {
      return Date.now(); //不变
    }
  },
  
  /*
  * 依赖注入， 本地通过this.injectName调用。
  * 
      在父组件定义值:
      provide(){
          return {injectName:"hello"}
      },
      则父组件的任何子组件、孙子组件，都可以接受到injectName变量值。
      
      但是非响应式，后期的变化，子组件不会监听到
  */
  inject: ['injectName'],
  
  /******************** 页面数据的来源有三处： data， props，computed(包括state)，依赖注入 *******************/
  
  
  /* 
    watch可以监听 data， props, computed(包括state)等 变量；
    当在数据变化时执行 异步 或 开销较大 的操作时，这个方式是最有用的。 简单的求值操作请用computed代替   
    注： 不能用 => 函数，否则无法指向this
  */
  watch: {
    msg() {  //data,props或computed变量
      console.log("msg is changed");
    },
    values: {
      handler: function(val) {
        //TODO
      },
      deep: true, //监听深度层次的数据结构
      immediate: true //如果为false，则在第一次实例化时不执行，在数据更新时执行，而为true，则
      //在created实例化时立即以 values 的当前值触发回调
    }
  },

  /*
   * 和computed完全类似，不会缓存，每次虚拟dom重新渲染组件，都要被调用执行。
   * 事件处理函数 放在这 最合理
   */
  methods: {
    ...mapMutations('模块名称', [
      'mutation名称'
    ]),
    
    ...mapActions('模块名称', [
      'action名称'
    ]),
    getDate() {
      return Date.now(); //每次不同
    }
  },

  /* 自定义指令，在当前组件内部和子组件中生效 */
  directives: {},

  /* 自定义过滤器 */
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  
  

  /****************************  生命周期钩子  ***********************************/
  beforeCreate() {
    console.log("beforeCreate", this.msg);
  },
  created() {
    
    //初始化，可以使用this,但不能通过this.$ref操作dom
  },
  beforeMount() {
    console.log("beforeMount", this.$el);
  },
  mounted() {
    //初始化，可以使用this，也可以通过this.$ref操作dom节点
  },
  
  activated(){
    //首次进入紧跟在mounted后面，再次进入(keep-alive)时，只调用activated，不调用mounted
  },

  /*
   * 只有在 虚拟dom 改变之后才会执行 beforeUpdate和updated, 虚拟dom改变 即 写入template的 数据(data,computed, state，props) 改变，
   如果不在template中使用此数据，则虚拟dom不变。
   * 
   * 有种特殊情况，prop传入的变量赋值给 data，在template中使用data变量，
   * 此时如果prop的变量是引用类型，则赋值给data后，props中的属性改变，则data会同步改变，虚拟dom也会改变；
   * 否则如果props是基本类型，则data不会再变(是第一次的值)，虚拟dom不会再改变。
   */
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    this.childRef = this.$refs.childVue.myCheck;
  },

  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  
  beforeRouteEnter(to,from,next){
    //组件激活进入时，无法访问this。
    next(vm => {
      // 通过 `vm` 访问组件实例
    });
    
    //如果没有访问组件实例的要求，则直接调用next
    //next();
  },
  beforeRouteUpdate(to,from,next){
    //组件被复用时，比如传参。可以访问this
    next();
  },
  beforeRouteLeave(to,from,next){
    //组件离开前调用。可以访问this
    next();
  }

};

/*生命周期
 *    beforeCreate时 data属性还没准备好
 *    created 时            data属性已准备好,实例已经创建好，但是并没有将数据挂载到dom节点上，让dom渲染
 *    beforeMount 时    this.$el还没创建好，无法操作dom
 *    mounted时           挂载完成，dom完成渲染。dom已经加载好，使用this.$el操作dom
 *    beforeUpdate
 *    updated                虚拟dom已改变
      
      
      
        父组件和子组件的生命周期顺序是:
                                                         时间顺序
        父 beforeCreate-->created-->beforeMount                                                   --->mounted
        子                                     --->beforeCreate--->created-->beforeMount-->mounted
        
        所以，这就是为什么$refs只有在mounted中才有效的原因。
 
 
 */

/*
    Vue 组件的 对外API 来自三部分—— prop、事件 和 插槽：
        Prop   允许外部环境传递数据给组件；
        事件   允许从组件内触发外部环境的副作用；
        插槽   允许外部环境将额外的内容组合在组件中。
  */

 /*
    实现缓存的方案有  
        <keep-alive>    缓存渲染过的组件     
        computed(){}    缓存数据
        v-once          缓存静态页面内容
  */
</script>

<style scoped>    /*本地部分*/
/*操作子组件样式*/
.parent >>> .child { }
.parent  /deep/ .child { }


/*用于name为list的列表过渡*/
.list-move{
    transition: all .5s;
}
</style>
<style>     /*全局部分*/

</style>
```

