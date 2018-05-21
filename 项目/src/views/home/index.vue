<template>
    <el-container>
        <el-header style="height:auto;padding: 0;">
            <layout-header></layout-header>
        </el-header>
        <el-container>
            <el-aside class="left-aside">
                <layout-aside></layout-aside>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <!-- <el-footer>Footer</el-footer> -->
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

import layoutHeader from "@/views/layout/layoutHeader";
import layoutAside from "@/views/layout/layoutAside";


export default {
    name: "home",
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
        layoutHeader,
        layoutAside
    }
};
</script>
<style lang="scss" scoped>
/*本地部分*/
</style>
<style>
/*全局部分*/
</style>