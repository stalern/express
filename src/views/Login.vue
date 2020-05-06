<template>
    <div>
        <img alt="Aladdin logo" src="../assets/aladdin.jpg">
        <el-row type="flex" justify="center" style="margin-top: 30px">
            <el-col :span="10">
                <el-form
                        label-position="left"
                        label-width="80px"
                        :model="formLogin"
                        :rules="rules"
                        style="height: 260px"
                        ref="formLogin">
                    <el-form-item label="账号" prop="name">
                        <el-input v-model="formLogin.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="formLogin.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="warning" @click="login">登录</el-button>
                        <el-button type="info" @click="resetForm">取消</el-button>
                        <el-button type="success" @click="back">返回</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <h3 style="margin-top: 60px;">Friendship Links</h3>
        <ul>
            <li><a href="https://cn.vuejs.org/" target="_blank" rel="noopener">Vue.js</a></li>
            <li><a href="http://wxxlamp.cn" target="_blank" rel="noopener">Wxxlamp</a></li>
            <li><a href="https://github.com/stalern/express" target="_blank" rel="noopener">Github</a></li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    import userApi from '../api/user'
    import store from '../store/store'
    import router from '../router/router'
    export default {
        name: "login",
        data () {
            let checkUserName = (rule, value, cb) => {
                if (!value) {
                    return cb(new Error('账户不能为空!'))
                } else {
                    cb()
                }
            };
            let checkPassword = (rule, value, cb) => {
                if (!value) {
                    return cb(new Error('密码不能为空!'))
                } else {
                    cb()
                }
            };
            return {
                formLogin: {
                    name: '',
                    password: ''
                },
                rules: {
                    name: [
                        { validator: checkUserName, trigger: 'blur' }
                    ],
                    password: [
                        { validator: checkPassword, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            // 向登录接口发起请求
            login () {
                let user = this.formLogin;
                let formData = {
                    name: user.name,
                    password: user.password
                };
                let _this = this;
                // 表单验证
                this.$refs['formLogin'].validate((valid) => {
                    if (valid) {
                        // 通过验证之后才请求登录接口
                        userApi.login(formData.name, formData.password).then(function (response) {
                            console.log(response);
                            if (response.data.code === 1) {
                                let token = response.data.data.key;
                                store.commit('login', token);
                                router.push('/admin');
                            } else {
                                _this.$message.error('表单验证失败!');
                                return false
                            }
                        })
                    } else {
                        this.$message.error('表单验证失败!');
                        return false
                    }
                })
            },
            // 表单重置
            resetForm () {
                // console.log('session')
                this.$refs['formLogin'].resetFields()
            },
            back() {
                router.push('/index')
            }
        }
    }
</script>

<style scoped>
</style>
