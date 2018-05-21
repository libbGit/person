<template>
    <div>
        <h4>一个完整的vue组件的内容格式</h4>
        <el-table :show-header="false"
            :data="list"
            style="width: 100%">
            <el-table-column width="100">
            </el-table-column>
            <el-table-column width="500">
                <template slot-scope="scope">
                    <span class="text-content">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column align='right'>
                <template slot-scope="scope">
                    <span>
                        <a target="_blank"
                            :href="scope.row.url">查看</a>
                    </span>
                </template>
            </el-table-column>
            <el-table-column width="100">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
    name: "mind-map",
    data() {
        return {
            list: [
                { name: "Es6脑图", url: "https://libbgit.github.io/static-file/前端资料/es6脑图.svg" },
                { name: "Vue2.0脑图", url: "https://libbgit.github.io/static-file/前端资料/vue2.0脑图.svg" },
            ]
        };
    },
    props: {
        values: {
            type: Object,
            required: false,
            default: () => { return '' }
        }
    },
    computed: {
        /*...mapState({
           本地state名字: state => state.模块名称.state名称
        })*/
        /* ...mapGetters('模块名称', ['getter名称']),*/
        isReady() {
            return false;//必须有返回
        },
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
        onSubmit() {
            //不一定有返回值
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
<style scoped>
/*本地部分*/
</style>
<style>
/*全局部分*/
</style>