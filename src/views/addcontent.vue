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
                <el-form  :model="contentForm" label-width="140px" >

                    <el-form-item label="文章标题："  prop="title">
                        <el-input v-model="contentForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="文章分类（栏目）：" prop="partId">
                        <el-select v-model="contentForm.partId" placeholder="请选择">
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
                        <el-input v-model="contentForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="SEO标题：" prop="seoTitle">
                        <el-input v-model="contentForm.seoTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="SEO关键字：" prop="seoKeyword" >
                        <el-input v-model="contentForm.seoKeyword"></el-input>
                    </el-form-item>
                    <el-form-item label="热门标签：" prop="label" >
                        <el-input v-model="contentForm.label"></el-input>
                    </el-form-item>
                    <el-form-item label="略缩图：" prop="link">
                        <el-input v-model="contentForm.link">
                            <template #append>
                                <el-button type="primary">上传略缩图</el-button>
                            </template>
                        </el-input>
                    </el-form-item>
                    <!-- <el-form-item label="文章推荐：" prop="recommendPlateId">
                        <el-select  placeholder="推荐位置选择">
                            <el-option
                            v-for="item in partList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item> -->

                    <!-- 富文本编辑器 -->
                    <el-form-item label="详细内容：" >
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
import { getPartListData,addContent} from "../api/index";
import { useRouter } from 'vue-router'



export default {
    name: "addcontent",
    setup() {
        const router = useRouter();
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
        const partList = ref([]);
        //获取列表数据
        const getPartAllList = () => {
            getPartListData({}).then((res) => {
                partList.value = res;
            })   
        }
        getPartAllList();


        const editor = ref(null);
        const content = reactive({
            html: "",
            text: "",
        });
        let instance;
        onMounted(() => {
            instance = new WangEditor(editor.value);
            // instance.config.height = 500;
            instance.config.zIndex = 1;
            instance.create();
        });
        onBeforeUnmount(() => {
            instance.destroy();
            instance = null;
        });
        const syncHTML = () => {
            content.html = instance.txt.html();
            content.text = instance.txt.text();
            contentForm.pcContent = content;
            console.log(content.html);
            console.log(content.text);
        };

        //获取时间
       const formatDate = () => {
            let date = new Date();
            let year = date.getFullYear(); // 年
            let month = date.getMonth() + 1; // 月
            let day = date.getDate(); // 日
            contentForm.createTime = `${year}/${month}/${day}`;
            contentForm.updateTime = `${year}/${month}/${day}`;
        }
        // 提交
        const onSubmit = () => {
            formatDate();
            syncHTML();
            addContent(contentForm).then((res) => {
                ElNotification({
                    title: '成功',
                    message: '添加成功！',
                    type: 'success',
                });
                
            } );
            console.log(contentForm);
            router.push('/contentManage');
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
            router,
            contentForm,
            partList,
            onSubmit,
            syncHTML,
            editor,
            content,
            getPartAllList,
            formatDate,
        };
    },
};
</script>

<style scoped>
.form-box{width: 100%;}
</style>
