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
                <el-input v-model="selectCity" placeholder="市级" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <!-- 表单 -->
            <el-table ref="filterTable" row-key="date" :data="tableData.list" border style="width: 100%">
                <el-table-column label="序号" type="index"  align="center" style="width:30%"/>
                

                <el-table-column prop="provincialName" label="省级"  align="center" style="width:10%" />
                <el-table-column prop="cityName" label="市级"  align="center" style="width:10%" />
                <el-table-column prop="areaName" label="区/县"  align="center" style="width:10%" />
                <el-table-column label="热门城市"  align="center" style="width:10%" >
                <template #default="scope">
                    <!-- <el-tag :type="scope.row.hotcity === '热' ? 'danger' : 'info'" disable-transitions>{{ scope.row.hotcity }}</el-tag> -->
                    <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.isHot" active-color="#13ce66" @click="editAddress(scope.row)"></el-switch>
                </template>
                </el-table-column>
                <el-table-column label="前台显示/隐藏"  align="center" style="width:10%" >
                <template  #default="scope">
                    <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.status" active-color="#13ce66" @click="editAddress(scope.row)"></el-switch>
                </template>
                </el-table-column>
                <el-table-column label="操作"  align="center" style="width:10%" >
                    <template #default="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)" >修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                    <el-pagination background layout="total, sizes, prev, pager, next" 
                       :page-sizes="[15, 20, 50, 100]" :total="tableData.total" @size-change="handleSizeChange" @current-change="handlePageChange" ></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" v-model="editVisible" width="30%">
            <el-form label-width="70px">
                <el-form-item label="省">
                    <el-input v-model="form.provincialName"></el-input>
                </el-form-item>
                <el-form-item label="市">
                    <el-input v-model="form.cityName"></el-input>
                </el-form-item>
                <el-form-item label="区/县">
                    <el-input v-model="form.areaName"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="editVisible = false">取 消</el-button>
                    <el-button type="primary" @click="saveEdit">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox,ElNotification } from "element-plus";
import { editAddressInfo, fetchData, fetchProvinceData } from "../api/index";

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
        const addressData = {
            id:"",
            provincialCode: "",
            provincialName: "",
            cityName: "",
            ishot:"",
            status:"",
            pageNum: 1,
            pageSize: 15,
            sortField: "id asc"
        };
        //搜索省份选择
        const selectProvince = ref();
        //搜索市级选择
        const selectCity = ref() ;
        //省份列表
        const provinceListData = ref([]);
        //地址表格相关数据
        const tableData = ref([]);
        //分页相关
        const pageData = ref([]);
        // 获取表格数据(分页)
        const getData = () => {
            fetchData(addressData).then((res) => {
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
            addressData.provincialCode = selectProvince.value;
            addressData.cityName = selectCity.value;
            getData();
        };
        // 分页导航
        const handlePageChange = (val) => {
            addressData.pageNum = val;
            getData();
        };
        const handleSizeChange = (val) => {
            addressData.pageSize = val;
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
            addressData,
            pageData,
            provinceListData,
            selectProvince,
            selectCity,
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
