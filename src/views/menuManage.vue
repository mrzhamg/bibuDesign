<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 导航管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>导航列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <vxe-table
            :align="allAlign"
            :data="menuList"
            >
            <vxe-column type="checkbox" title="编号"></vxe-column>
            <vxe-column field="id" title="排序"></vxe-column>
            <vxe-column field="name" title="显示名称"></vxe-column>
            <!-- <vxe-column field="statu" title="系统模块"></vxe-column> -->
            <vxe-column field="url" title="链接"></vxe-column>
            <vxe-column field="status" title="状态" formatter="formatState"></vxe-column>
            <vxe-column title="操作" width="400">
                <template #default="{row}">
                <vxe-button type="text" icon="el-icon-edit" @click="handleEdit(row)">修改</vxe-button>
                <vxe-button type="text" status="danger" @click="confirmEvent(row)">删除</vxe-button>
                <vxe-button type="text" status="primary" v-if="row.status == 0" @click="displayOrhide(row)">显示</vxe-button>
                <vxe-button type="text" status="danger" v-if="row.status == 1" @click="displayOrhide(row)">隐藏</vxe-button>
                <vxe-button type="text" status="primary" >排序</vxe-button>
                </template>
            </vxe-column>
            </vxe-table>

            <!-- 编辑弹出框 -->
            <el-dialog title="编辑" v-model="editVisible" width="30%">
                <el-form label-width="70px">
                    <el-form-item label="名称：">
                        <el-input v-model="form.name" @input="changePinyin"></el-input>
                    </el-form-item>
                    <el-form-item label="链接：">
                        <el-input v-model="form.url"></el-input>
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
    </div>
</template>

<script>
import { reactive, ref, getCurrentInstance, nextTick } from "vue";
import { ElMessage } from "element-plus";
import { deleteMenuById, getMenuData,editMenuData } from "../api/index";
import { useRouter } from 'vue-router'
import VXETable from 'vxe-table'
import { pinyin } from 'pinyin-pro';

export default {
    name: "menuManage",
    setup() {
        const router = useRouter();
        const menuList = ref([]);
        //获取列表数据
        const getMenuListData = () => {
            getMenuData({}).then((res) => {
                menuList.value = res;
            })   
        }
        getMenuListData();
        
        

        VXETable.formats.mixin({
          // 格式化状态
          formatState ({ cellValue }) {
            return cellValue === 1 ? '显示' : '隐藏'
          }
        })
        //显示或隐藏操作
        const displayOrhide = (row) => {
            if(row.status == 1){
                editMenuData({id:row.id,status:0}).then((res) =>{
                    location.reload();
                    });
            }else{
                editMenuData({id:row.id,status:1}).then((res) =>{
                location.reload();
            });
            }
        }
        //删除导航
        const confirmEvent = async (row) => {
              const type = await VXETable.modal.confirm('您确定要删除 ‘'+row.name+'’ 导航吗？')
              if (type === 'confirm') {
                deleteMenuById(row.id)
                VXETable.modal.message({ content: `删除成功 ${type}`, status: 'success' })
              } else {
                VXETable.modal.message({ content: `删除失败 ${type}`, status: 'error' })
                return new Error()
              }
            }

        // 表格编辑时弹窗和保存
        const editVisible = ref(false);
        let form = reactive({
            id:"",
            name: "",
            url: "",
        });

        //名称转为拼音url
        const changePinyin = () =>{
            form.url = "/" + pinyin(form.name,{ pattern: 'first',toneType: 'none'}).replace(/\s+/g,"");
        };

        const handleEdit = (row) => {
            form.id = row.id;
            form.name = row.name;
            form.url = row.url;
            editVisible.value = true;
        };
        const saveEdit = () => {
            editMenuData(form).then((res) =>{
                location.reload();
            });
            editVisible.value = false;
            ElMessage.success(`修改第 ${form.name} 成功`);
            
        };

    return {
        form,
        menuList,
        editVisible,
        displayOrhide,
        handleEdit,
        saveEdit,
        getMenuListData,
        confirmEvent,
        changePinyin,
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
