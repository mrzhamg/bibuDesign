<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 导航管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>添加导航</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="formRef" :model="form"  label-position="right">
                    <el-form-item label="导航名称："  prop="name" >
                        <el-input v-model="form.name" @input="changePinyin"></el-input>
                    </el-form-item>
                    <el-form-item label="添加rel属性：" prop="url">
                        <el-input v-model="form.subtitle"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="导航分类：" prop="iconUrl">
                        <el-select  placeholder="请选择">
                            <el-option  label="做为一级栏目" value="0"></el-option>
                            <el-option
                            v-for="item in partList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item> -->
                        <el-form-item label="访问链接：" prop="url">
                        <el-input v-model="form.url" ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <el-button @click="onReset">重置表单</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, getCurrentInstance, nextTick } from "vue";
import { ElMessage,ElNotification } from "element-plus";
import { addMenuData } from "../api/index";
import { pinyin } from 'pinyin-pro';
import { useRouter } from 'vue-router'



export default {
    name: "addMenu",
    setup() {
        const router = useRouter();
        const form = reactive({
            name:"",
            subtitle:"",
            url:"",
            status:0
        })

        //名称转为拼音url
        const changePinyin = () =>{
            form.url = "/" + pinyin(form.name,{ pattern: 'first',toneType: 'none'}).replace(/\s+/g,"");
        };

        const formRef = ref(null);
        // 提交
        const onSubmit = () => {
            addMenuData(form).then((res) => {
                ElNotification({
                    title: '成功',
                    message: '添加成功！',
                    type: 'success',
                });
            } );
            router.push('/menuManage');
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
            router,
            form,
            onSubmit,
            onReset,
            changePinyin
        };
    },
};
</script>