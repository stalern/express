<template>
    <el-card class="box-card m-padded-tb-large">
        <el-row type="flex" justify="center">
            <el-col :span="12">
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
                        <el-button type="warning" @click="Login">登录</el-button>
                        <el-button @click="resetForm">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-card>
</template>

<script type="text/javascript">
    import { mapActions } from 'vuex'
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
            ...mapActions(['userLogin']),
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
                            if (response.data !== 'false') {
                                let data = {
                                    role: 'ADMIN',
                                    token: response.data === 'false' ? '' : response.data,
                                    name: formData.name
                                };
                                store.commit('Login.vue', data);
                                router.push({
                                    path: '/admin/index'
                                });
                                location.reload()
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
            }
        }
    }
</script>

<style scoped>
    .m-padded-tb-large{
        padding-top: 10em;
        padding-bottom: 10em;
    }
</style>
