<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 栏目管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>栏目列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!-- <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="编号" width="180" />
                <el-table-column prop="name" label="栏目名称" width="180" />
                <el-table-column prop="name" label="页面模型" width="180" />
                <el-table-column prop="name" label="状态" width="180" />
                <el-table-column prop="address" label="操作" />
            </el-table> -->

        <vxe-table
        resizable
        :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
        :data="partList"
        :checkbox-config="{labelField: 'id', highlight: true}"
        >
        <vxe-column type="checkbox" title="编号" width="280" tree-node></vxe-column>
        <vxe-column field="name" title="栏目名称"></vxe-column>
        <vxe-column field="url" title="访问路径"></vxe-column>
        <vxe-column field="status" title="状态"></vxe-column>
        <vxe-column title="操作">
            <template #default="{row}">
              <vxe-button type="text" icon="el-icon-edit" @click="pushToEditPart(row)">修改</vxe-button>
              <vxe-button type="text" status="primary" >优化</vxe-button>
              <vxe-button type="text" status="primary" >内容管理</vxe-button>
              <vxe-button type="text" status="primary" >添加内容</vxe-button>
            </template>
        </vxe-column>
        </vxe-table>

        </div>
    </div>
</template>

<script>
import { reactive, ref, getCurrentInstance, nextTick } from "vue";
import { getPartListData } from "../api/index";
import { useRouter } from 'vue-router'

export default {
    name: "partManage",
    setup() {
        const router = useRouter();
        const partList = ref([]);
        //获取列表数据
        const getPartAllList = () => {
            getPartListData({}).then((res) => {
                partList.value = res;
            })   
        }
        getPartAllList();

        //跳转到栏目修改页面并传id值
        const pushToEditPart = (row) => {
            router.push({name:'editPart',params:{part_id:row.id}})
        }
   

    return {
        partList,
        getPartAllList,
        pushToEditPart,
    };
}
    
};
</script>



<style scoped>
.list {
    padding: 30px 0;
}
.list p {
    margin-bottom: 20px;
}
</style>
