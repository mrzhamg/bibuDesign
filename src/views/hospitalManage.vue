<template>
    <div> 
        <div class="container">
            <!-- 选择器 -->
            <div class="handle-box">
                <el-select v-model="selectProvince" placeholder="省份" class="handle-select mr10">
                        <el-option key="1" label="所有省份" value=""></el-option>
                        <el-option
                            v-for="item in provinceListData"
                            :key="item.provincialCode"
                            :label="item.provincialName"
                            :value="item.provincialCode"
                            >
                        </el-option>
                </el-select>
                <el-input v-model="selectName" placeholder="医院名称" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <!-- 表单 -->
            <el-table ref="filterTable" row-key="date" :data="tableData.list" border style="width: 100%">
                <el-table-column label="序号" type="index"  align="center" style="width:30%"/>
                

                <el-table-column prop="name" label="医院名称"  align="center" style="width:10%" />
                <el-table-column prop="cityName" label="市级"  align="center" style="width:10%" />
                <el-table-column prop="areaName" label="区/县"  align="center" style="width:10%" />
                <el-table-column label="操作"  align="center" style="width:10%" >
                    <template #default="scope">
                        <el-button type="text" icon="el-icon-edit" v-if="scope.row.status == '1'"><router-link v-bind:to="{name:'addpart',params:{hospital_id:scope.row.id}}">关联</router-link></el-button>
                        <el-button type="text" icon="el-icon-edit" v-if="scope.row.status == '0'"><router-link v-bind:to="{name:'editPart',params:{hospital_id:scope.row.id}}">修改</router-link></el-button>
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)" >内容管理</el-button>
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)" >添加内容</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                    <el-pagination background layout="total, sizes, prev, pager, next" 
                       :page-sizes="[15, 20, 50, 100]" :total="tableData.total" @size-change="handleSizeChange" @current-change="handlePageChange" ></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox,ElNotification } from "element-plus";
import { editAddressInfo, fetchHospitalData, fetchProvinceData } from "../api/index";

export default {
    name: "hospitalManage",
    setup() {
        const query = reactive({
            province: "",
            city: "",
            pageIndex: 1,
            pageSize: 15,
            active:true
        });
        // 地址实体类变量（修改数据用）
        const address = {
            areaCode: "",
            areaName: "",
            cityCode: "",
            cityName: "",
            id: "",
            isHot: "",
            provincialCode: "",
            provincialName: "",
            status: ""
        };
        //地址列表变量（查询用）
        const hospitalData = {
            provincialCode: "",
            name: "",
            pageNum: 1,
            pageSize: 15,
            sortField: "id asc"
        };
        //搜索省份选择
        const selectProvince = ref();
        //搜索市级选择
        const selectName = ref() ;
        //省份列表
        const provinceListData = ref([]);
        //地址表格相关数据
        const tableData = ref([]);
        //分页相关
        const pageData = ref([]);
        // 获取表格数据(分页)
        const getData = () => {
            fetchHospitalData(hospitalData).then((res) => {
                tableData.value = res;
            });
        };
        //获取省份列表数据
        const getProvinceList = () =>{
              fetchProvinceData().then((res) => {
                provinceListData.value = res;
            } );
        }
        getData();
        getProvinceList();
        


        // 查询操作
        const handleSearch = () => {
            hospitalData.provincialCode = selectProvince.value;
            hospitalData.name = selectName.value;
            getData();
        };
        // 分页导航
        const handlePageChange = (val) => {
            hospitalData.pageNum = val;
            getData();
        };
        const handleSizeChange = (val) => {
            hospitalData.pageSize = val;
            getData();
        };
        //修改地址热门和显示状态
        const editAddress = (row) =>{
            address.id = row.id
            address.isHot = row.isHot
            address.status = row.status
            editAddressInfo(address).then((res) => {
                ElNotification({
                        title: '成功',
                        message: '修改状态成功！',
                        type: 'success',
                    });
            } );
        }

        // 删除操作
        const handleDelete = (index) => {
            // 二次确认删除
            ElMessageBox.confirm("确定要隐藏吗？", "提示", {
                type: "warning",
            })
                .then(() => {
                    ElMessage.success("隐藏成功");
                    tableData.value.splice(index, 1);
                })
                .catch(() => {});
        };

        // 表格编辑时弹窗和保存
        const editVisible = ref(false);
        let form = reactive({
            provincialName: "",
            cityName: "",
            areaName: "",
        });
        let idx = -1;
        const handleEdit = (index, row) => {
            idx = index;
            Object.keys(form).forEach((item) => {
                form[item] = row[item];
            });
            editVisible.value = true;
        };
        const saveEdit = () => {
            editVisible.value = false;
            ElMessage.success(`修改第 ${idx + 1} 行成功`);
            Object.keys(form).forEach((item) => {
                tableData.value[idx][item] = form[item];
            });
        };

        const filterTag = (value, row) =>{
            return row.hotcity === value
        };
        const provinceTag = (value, row) =>{
            return row.province === value
        };

        return {
            query,
            tableData,
            editVisible,
            form,
            hospitalData,
            pageData,
            provinceListData,
            selectProvince,
            selectName,
            address,
            handleSearch,
            handlePageChange,
            handleSizeChange,
            handleDelete,
            handleEdit,
            editAddress,
            saveEdit,
            filterTag,
            provinceTag,
        };
    },
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
