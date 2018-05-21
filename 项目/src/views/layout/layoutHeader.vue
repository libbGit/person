<template>
    <section class="page-header">
        <!-- <h1 class="project-name">person</h1>
        <h2 class="project-tagline">这是一个神奇的网站</h2> -->
        <el-carousel :interval="4000"
            class="header-carousel"
            type="card">
            <el-carousel-item v-for="(item,index) in newValue"
                :key="index">
                <img :src="$getUrl(item.url)"
                    class="image">
            </el-carousel-item>
        </el-carousel>
    </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
    name: "LayoutHeader",
    data() {
        return {
            newValue: [
                { url: '/static/local-image/header-new/海纳百川.jpg' },
                { url: '/static/local-image/header-new/九成宫醴泉铭01.jpg' },
                { url: '/static/local-image/header-new/test01.jpg' },
                { url: '/static/local-image/header-new/test02.jpg' }
            ]
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
.el-carousel__item {
  h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  &:nth-child(2n) {
    background-color: #99a9bf;
  }

  &:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}

.image {
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 100%;
  max-height: 100%;
}
</style>
<style>

</style>