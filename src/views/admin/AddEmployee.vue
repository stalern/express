<template>
    <el-card style="margin-top: 30px">
        <el-card style="margin: 98px 350px 98px 350px;">
            <el-row type="flex" justify="center">
                <el-col :span="18">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="姓名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="电话">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-radio-group v-model="form.gender">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="所属网点">
                            <el-autocomplete
                                    class="inline-input"
                                    v-model="form.region"
                                    :fetch-suggestions="querySearch"
                                    placeholder="请输入内容"
                                    :trigger-on-focus="false"
                            ></el-autocomplete>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="warning" @click="onSubmit">立即录入</el-button>
                            <el-button  @click="loadAll">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-card>
    </el-card>
</template>

<script>
    import user from "../../api/user";
    import transnode from "../../api/transnode";
    import router from '../../router/router'
    export default {
        name: "AddEmployee",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    phone: '',
                    gender: ''
                },
                restaurants: [],
                regions: []
            }
        },
        methods: {
            onSubmit() {
                let _this = this;
                user.postUser(this.form.name, this.form.phone, this.form.gender === '男' ? 1 : 2, this.form.region).then(function () {
                    _this.$message({
                        type: 'success',
                        message: '上传员工成功'
                    });
                    router.push('/admin/employee/list')
                })
            },
            listNodeRegion() {
                let _this = this;
                transnode.listAllNode().then(function (res) {
                    console.log(res);
                    _this.regions = res.data.data;
                })
            },
            querySearch(queryString, cb) {
                let restaurants = this.restaurants;
                let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                let res = [];
                for (let i = 0; i < this.regions.length; i ++) {
                    let re = function(value) {
                        this.value = value;
                    };
                    res.push(new re(this.regions[i].region));
                }
                console.log(res);
                this.restaurants = res;
            }
        },
        created() {
            this.listNodeRegion();
        }
    }
</script>

<style scoped>

</style>
