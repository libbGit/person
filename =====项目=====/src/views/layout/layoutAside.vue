<template>
    <el-menu default-active="1-4-1"
        class="el-menu-vertical-demo"
        :router="true"
        :unique-opened="true">
        <el-submenu index="1">
            <template slot="title">
                <strong slot="title">前端技术</strong>
            </template>
            <el-menu-item-group title="我的博客">
                <el-menu-item index="/home/test">TEST</el-menu-item>
                <el-menu-item index="/home/scss-tutorial">SCSS简易教程</el-menu-item>
                <el-menu-item index="/home/deep-copy">JS浅拷贝和深拷贝</el-menu-item>
                <el-menu-item index="/home/mind-map">前端脑图</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Vue体系知识">
                <el-menu-item index="/home/blog-vue-issue">vue常见问题及解决</el-menu-item>
                <el-menu-item index="/home/entire-vue-component">完整的vue组件格式</el-menu-item>
                <el-menu-item index="/home/vue-form-demo">Vue表单实例</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <!-- 书法学习 -->
        <el-submenu index="2">
            <template slot="title">
                <strong slot="title">书法</strong>
            </template>
            <el-menu-item-group title="教程和碑帖">
                <el-menu-item index="2-3">发发</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="作品展示">
                <el-menu-item index="/home/jiuchenggong">九成宫醴泉铭</el-menu-item>
            </el-menu-item-group>
            
        </el-submenu>
        <el-menu-item index="3"
            disabled>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
    name: "LayoutAside",
    data() {
        return {
            isNeedLogin:false,
        };
    },
    computed: {
        /*...mapState({
           本地state名字: state => state.模块名称.state名称
        })*/
    },
    watch: {
        
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
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
} */
</style>
<style>

</style>