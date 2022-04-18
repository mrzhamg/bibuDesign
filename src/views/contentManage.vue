<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 内容管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>内容列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
        <vxe-table
        >
        <vxe-column type="checkbox" title="编号" width="280" tree-node></vxe-column>
        <vxe-column field="name" title="排序"></vxe-column>
        <vxe-column field="url" title="标题"></vxe-column>
        <vxe-column field="status" title="栏目/分类"></vxe-column>
        <vxe-column field="status" title="添加时间"></vxe-column>
        <vxe-column field="status" title="更新时间"></vxe-column>
        <vxe-column field="status" title="状态"></vxe-column>
        <vxe-column title="操作" width="400">
            <template #default="{row}">
              <vxe-button type="text" icon="el-icon-edit" @click="pushToEditPart(row)">修改</vxe-button>
              <vxe-button type="text" status="primary" @click="confirmEvent(row)">删除</vxe-button>
              <vxe-button type="text" status="primary" >隐藏</vxe-button>
              <vxe-button type="text" status="primary" >排序</vxe-button>
            </template>
        </vxe-column>
        </vxe-table>

        </div>
    </div>
</template>

<script>
import { reactive, ref, getCurrentInstance, nextTick } from "vue";
import { getPartListData, deletePartById, editHospitalData } from "../api/index";
import { useRouter } from 'vue-router'
import VXETable from 'vxe-table'
import XEUtils from 'xe-utils'

export default {
    name: "contentManage",
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

        

        VXETable.formats.mixin({
          // 格式化状态
          formatState ({ cellValue }) {
            return cellValue === 1 ? '显示' : '隐藏'
          }
        })

        const confirmEvent = async (row) => {
              const type = await VXETable.modal.confirm('您确定要删除 ‘'+row.name+'’ 栏目吗？')
              if (type === 'confirm') {
                deletePartById(row.id)
                VXETable.modal.message({ content: `删除成功 ${type}`, status: 'success' })
                router.push('/partManage')
              } else {
                VXETable.modal.message({ content: `删除失败 ${type}`, status: 'error' })
                return new Error()
              }
            }



    return {
        partList,
        getPartAllList,
        confirmEvent,
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
