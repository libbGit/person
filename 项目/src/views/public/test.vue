<template>
    <div>
        <el-form :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="年龄"
                prop="age">
                <el-input v-model="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item label="活动名称"
                prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";
import fetch from "@/services/fetch";

export default {
    name: "test",
    data() {
        return {
            ruleForm: {
                name: "",
                age: "",
            },
            rules: {
                age: [{ required: false, trigger: "blur" }],
                name: [
                    { required: false, message: "请输入活动名称", trigger: "blur" },
                    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
                ],
            }
        };
    },

    methods: {
        
        handSumit() {
            this.$refs.ruleForm.validate((valid)=>{
                console.log(valid);
            });
            return Date.now(); //每次不同
        }
    },


    created() {
        setTimeout(()=>{
            this.handSumit();
        },5000);
        //初始化，可以使用this,但不能通过this.$ref操作dom
    },

};
</script>

<style scoped>
/*本地部分*/
/*操作子组件样式*/
.parent >>> .child {
}
.parent /deep/ .child {
}

/*用于name为list的列表过渡*/
.list-move {
  transition: all 0.5s;
}
</style>
<style>
/*全局部分*/
</style>