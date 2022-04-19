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
        :data="contentList"
        >
        <vxe-column type="checkbox" field="id" title="编号" width="280" tree-node></vxe-column>
        <vxe-column field="sort" title="排序"></vxe-column>
        <vxe-column field="title" title="标题"></vxe-column>
        <vxe-column field="part_id" title="栏目/分类"></vxe-column>
        <vxe-column field="view_count" title="浏览"></vxe-column>
        <vxe-column field="create_time" title="添加时间"></vxe-column>
        <vxe-column field="update_time" title="更新时间"></vxe-column>
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
import {  getContentData } from "../api/index";
import { useRouter } from 'vue-router'
import VXETable from 'vxe-table'
import XEUtils from 'xe-utils'

export default {
    name: "contentManage",
    setup() {
        const router = useRouter();
        const contentList = ref([]);
        //内容实体
        const contentForm = reactive({
            title:"",
            label:"",
            partId:"",
            desc:"",
            seoTitle:"",
            seoKeyword:"",
            link:"",
            recommendPlateId:"",
            pcContent:"",
            createTime:"",
            updateTime:"",
        });
        const content = {
            cityName:"东",
            pageNum:1,
            pageSize:15,
            sortField:"id desc"
            }

        //获取列表数据
        const getContentList = () => {
            getContentData(content).then((res) => {
                contentList.value = res;
            })   
        }
        getContentList();

        

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
        contentForm,
        contentList,
        content,
        confirmEvent,
        getContentList,
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
