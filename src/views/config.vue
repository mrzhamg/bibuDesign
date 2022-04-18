<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 系统设置
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
             <vxe-table
                border
                show-header-overflow
                show-overflow
                :row-config="{isHover: true}"
                :data="tableData2">
                <vxe-column type="seq" title="key" width="60"></vxe-column>
                <vxe-column field="name" title="value"></vxe-column>
                <vxe-column field="sex" title="type"></vxe-column>
                <vxe-column field="age" title="remake"></vxe-column>
                <vxe-column title="操作" width="400">
                    <template #default="{}">
                        <vxe-button type="text" icon="el-icon-edit" >修改</vxe-button>
                        <vxe-button type="text" status="primary" >删除</vxe-button>
                    </template>
                </vxe-column>
            </vxe-table>
        </div>
    </div>
</template>

<script>
import { reactive, ref, getCurrentInstance, nextTick } from "vue";
import { ElMessage,ElNotification } from "element-plus";
import { addMenuData } from "../api/index";
import { useRouter } from 'vue-router'



export default {
    name: "config",
    setup() {
        const router = useRouter();

        const tableData2 = ref([
              { id: "web_name", name: '小微救护', role: 'Develop', sex: 'String', age: "网站名称", address: 'test abc' },
              { id: "web_domain", name: 'Test2', role: 'Test', sex: 'String', age: "网站域名", address: 'Guangzhou' },
              { id: "web_logo", name: 'Test3', role: 'PM', sex: 'Picture', age: "网站logo", address: 'Shanghai' }
            ])

        const formRef = ref(null);
        // 提交
        const onSubmit = () => {
            // addMenuData(form).then((res) => {
            //     ElNotification({
            //         title: '成功',
            //         message: '添加成功！',
            //         type: 'success',
            //     });
            // } );
            // router.push('/menuManage');
            // 表单校验
            // formRef.value.validate((valid) => {
            //     if (valid) {
            //         ElMessage.success("提交成功！");
            //     } else {
            //         return false;
            //     }
            // });
        };
        // 重置
        const onReset = () => {
            formRef.value.resetFields();
        };
        return {
            tableData2,
            router,
            onSubmit,
            onReset,
        };
    },
};
</script>