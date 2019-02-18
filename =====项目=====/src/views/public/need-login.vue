<template>
    <div>
        <div class="tips">
            此页面需要登录后才能查看，马上去
            <el-button type="text"
                @click.native="goLogin">登录</el-button>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
  name: "need-login",
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

    goLogin() {
      this.$router.push({
        path: "/login"
      });
    }
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
.tips {
  text-align: center;
  color: #717171;
  font-size: 13px;
  margin-top: 200px;
}
</style>
<style>
/*全局部分*/
</style>