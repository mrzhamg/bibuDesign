<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 内容管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>添加内容</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="formRef" :model="partForm" label-width="140px" >

                    <el-form-item label="文章标题："  prop="title">
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="文章分类（栏目）：" prop="parentId">
                        <el-select  placeholder="请选择">
                            <el-option
                            v-for="item in partList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="文章简介：" prop="desc" >
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="SEO标题：" prop="seo_title">
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="SEO关键字：" prop="seo_keyword" >
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="热门关键字：" prop="" >
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="热门关键字：" prop="" >
                        <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="略缩图：" prop="iconUrl">
                        <el-input >
                            <template #append>
                                <el-button type="primary">上传略缩图</el-button>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="文章推荐：" prop="parentId">
                        <el-select  placeholder="推荐位置选择">
                            <el-option
                            v-for="item in partList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <!-- 富文本编辑器 -->
                    <el-form-item label="详细内容：" prop="" >
                        <div class="mgb20" ref='editor'></div>
                    </el-form-item>
                    
        

                    
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <!-- <el-button @click="onReset">重置表单</el-button> -->
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import WangEditor from "wangEditor"; 
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import { ElMessage,ElNotification } from "element-plus";
import { addPart} from "../api/index";
import { useRouter } from 'vue-router'



export default {
    name: "addcontent",
    setup() {
        const editor = ref(null);
        const content = reactive({
            html: "",
            text: "",
        });
        let instance;
        onMounted(() => {
            instance = new WangEditor(editor.value);
            instance.config.h
            instance.config.zIndex = 1;
            instance.create();
        });
        onBeforeUnmount(() => {
            instance.destroy();
            instance = null;
        });
        const syncHTML = () => {
            content.html = instance.txt.html();
            console.log(content.html);
        };
       
        // 提交
        const onSubmit = () => {

            addPart(partForm).then((res) => {
                onReset();
                ElNotification({
                    title: '成功',
                    message: '添加成功！',
                    type: 'success',
                });
                
            } );
            // 表单校验
            // formRef.value.validate((valid) => {
            //     if (valid) {
            //         ElMessage.success("提交成功！");
            //     } else {
            //         return false;
            //     }
            // });
        };




        return {
            syncHTML,
            editor,
            content,
        };
    },
};
</script>