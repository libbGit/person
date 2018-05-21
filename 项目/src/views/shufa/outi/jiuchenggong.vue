<template>
    <div>
        <h4>九成宫醴泉铭</h4>
        <div>
            <shufa-card v-for="(item,index) in values" :key="index" :value="item"></shufa-card>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

import shufaCard from "@/views/public/shufa-card";

export default {
    name: "jiuchenggong",
    data() {
        return {
            values: [
                { title: '九成宫醴泉铭局部01', date: '2018-05-07', url: '/static/local-image/shufa/九成宫醴泉铭01.jpg' },
                { title: '海纳百川,有容乃大', date: '2018-05-07', url: '/static/local-image/shufa/海纳百川.jpg' },
                { title: '九成宫醴泉铭局部02', date: '2018-05-07', url: '/static/local-image/shufa/九成宫醴泉铭01.jpg' }]
        };
    },

    computed: {
        /*...mapState({
           本地state名字: state => state.模块名称.state名称
        })*/
        //  ...mapGetters('user', ['isLogin']),
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
        shufaCard
    }
};
</script>
<style lang="scss" scoped>

</style>
<style>
/*全局部分*/
</style>