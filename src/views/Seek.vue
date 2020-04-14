<template>
    <div>
        <img alt="Aladdin logo" src="../assets/aladdin.jpg">
        <el-container class="around-margin" v-if="flag">
            <el-input type="success" class="right-margin"
                      placeholder="请输入查询单号"
                      v-model="input"
                      clearable>
            </el-input>
            <el-button type="warning" icon="el-icon-s-help" @click="checkExpress">搜索</el-button>
        </el-container>
        <el-container v-else class="around-margin-table">
            <el-table
                    :data="tableData"
                    height="250"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="time"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="liablePerson"
                        label="寄件人"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="transportNode"
                        label="快递停靠点">
                </el-table-column>
            </el-table>
            <i class="el-icon-chicken" style="padding-left: 10px" @click="flag = true"></i>
            <i class="el-icon-map-location" style="padding-left: 10px" @click="drawer = true"></i>
        </el-container>
        <el-drawer
                title="包裹运输路线图"
                :visible.sync="drawer"
                size="90%">
            <el-amap style="margin: 20px 20px 20px 20px" :center="center">
                <el-amap-polyline :editable="polyline.editable" :path="polyline.path"
                                  :events="polyline.events" :line-join="polyline.lineJoin"></el-amap-polyline>
            </el-amap>
        </el-drawer>
    </div>
</template>

<script>
    import express from "../api/express";

    export default {
        data() {
            return {
                flag: true,
                input: '',
                drawer: false,
                center: [113.613, 34.7483],
                tableData: [],
                polyline: {
                    path: [[113.613, 34.7483],
                        [113.994, 32.9731],
                        [114.651, 33.6476],
                        [114.163, 35.9546],
                        [115.074, 35.7773]
                    ],
                    lineJoin: 'round',
                    events: {
                        // eslint-disable-next-line no-unused-vars
                        click(e) {
                            alert('click polyline');
                        },
                        end: (e) => {
                            let newPath = e.target.getPath().map(point => [point.lng, point.lat]);
                            console.log(newPath);
                        }
                    },
                    editable: false
                }
            }
        },
        methods: {
            checkExpress() {
                this.flag = !this.flag;
                let _this = this;
                express.getExpress(this.input).then(function (response) {
                    if (response.data.code === 1) {
                        _this.tableData = response.data.data.expressLocationVO;
                    } else {
                        alert('包裹订单号不正确哦~');
                    }
                })
            }
        }
    }
</script>

<style>
    .around-margin {
        margin-top: 50px;
        margin-left: 400px;
        margin-right: 350px;
    }

    .around-margin-table {
        margin-top: 50px;
        margin-left: 400px;
        margin-right: 320px;
    }

    .right-margin {
        margin-right: 20px;
    }
</style>
