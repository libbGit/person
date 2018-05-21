<template>
    <div class="login-wrap">
        <div class="center">
            <div class="form login">
                <el-form class="fix-ie"
                    :model="loginForm"
                    ref="loginForm"
                    :rules="rules"
                    label-width="0px">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username"
                            autoComplete="on"
                            :autofocus="true"
                            placeholder="请输入用户名">
                            <i slot="prefix"
                                class="iconfont user"
                                style="font-size:16px"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password"
                            autoComplete="on"
                            v-model="loginForm.password"
                            placeholder="请输入密码">
                            <i slot="prefix"
                                class="iconfont lock-o"
                                style="font-size:16px"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login-btn"
                            type="primary"
                            :loading="loading"
                            @click.enter="onSubmit">
                            {{loginBtnText}}
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="footer">
        </div>
    </div>

</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            loading: false,
            loginBtnText: '登录',
            loginForm: {
                username: '',
                password: '',
                vcode: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'change' },
                    { min: 4, max: 25, message: '长度在 4 到 25 个字符', trigger: 'change' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'change' },
                    { min: 6, max: 25, message: '长度在 6 到 25 个字符', trigger: 'change' }
                ],
                vcode: [
                    { required: true, message: '请输入验证码', trigger: 'change' },
                    { min: 4, max: 4, message: '长度为 4 个字符', trigger: 'change' }
                ]
            }
        }
    },
    mounted() {
        //   this.$refs.vcode.click()
        this.resetForm()
    },
    methods: {
        ...mapActions('user', ['login']),
        ...mapMutations('user', ['UPDATE_TOKEN']),
        //   refresh_vcode() {
        //     this.$refs.vcode.src = "/api/user/vcode?t=2&random=" + Math.random();
        //   },
        onSubmit() {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    this.triggerLogin()
                } else {
                    return false
                }
            })
        },
        triggerLogin() {
            this.triggerLoading(true)
            debugger
            if (this.loginForm.username == "admin" && this.loginForm.password == "31415926") {
                this.UPDATE_TOKEN(1);
                this.$router.push({
                    path: "/home"
                });
            } else {
                this.triggerLoading(false);
                this.$message({
                    type: 'error',
                    message: "用户名或者密码输入错误"
                })
            }

            // this.login(this.loginForm)
            //   .then( ()=>{
            //     this.triggerLoading(false)
            //     this.$router.replace( '/choose')
            //   })
            //   .catch( (err) => {
            //     this.$refs.vcode.click()
            //     this.triggerLoading(false)
            //     this.$message({
            //       type: 'error',
            //       message: err.message
            //     })
            //   })
        },
        triggerLoading(flag) {
            this.loading = flag
            this.loginBtnText = flag ? "正在登录" : "登录"
        },
        resetForm() {
            this.loginForm = {
                username: '',
                password: '',
                vcode: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  /* position: relative; */
  width: 100%;
  height: 100%;
  background-color: #000;
  /* background-image: url("~@assets/image/bg.png"); */
  background-size: cover;
  background-repeat: no-repeat;
}
.center {
  width: 365px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.title {
  width: 362px;
  margin: 0 auto;
  text-align: center;
}
.form {
  width: 300px;
  margin: 0 auto 0;
  .vcode {
    display: block;
    margin: 0px -16px;
    height: 27px;
  }
  .login-btn {
    width: 100%;
  }
}

.footer {
  width: 100%;
  position: absolute;
  bottom: 20px;
  color: #999;
  font-size: 12px;
  text-align: center;
}
</style>
