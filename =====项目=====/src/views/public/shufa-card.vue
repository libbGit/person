<template>
    <div>
        <div class="shufa-card">
            <img :src="$getUrl(value.url)"
                class="image">
            <div style="padding: 14px;">
                <span class="card-title"
                    :title="value.title">{{value.title}}</span>
                <div class="bottom clearfix">
                    <el-row style="line-height:40px;font-size:13px;">
                        <el-col :span="12">
                            <time class="time">{{value.date}}</time>
                        </el-col>
                        <el-col :span="2"
                            :offset="10">
                            <el-button type="text"
                                class="button"
                                @click.native="$previewImage($getUrl(value.url))">预览</el-button>
                        </el-col>
                    </el-row>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
    name: "card",
    data() {
        return {
            message: ""
        };
    },
    props: {
        value: {
            type: Object,
            required: false
        }
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

</style>
<style>
/*全局部分*/
</style>