<template>
    <div>
        <div class="crumbs">
            <!-- <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>添加栏目</el-breadcrumb-item>
            </el-breadcrumb> -->
        </div>
        <div class="container">
         
        </div>
    </div>
</template>

<script>
import WangEditor from "wangEditor";
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
export default {
    name: "editor",
    setup() {
        const editor = ref(null);
        const content = reactive({
            html: "",
            text: "",
        });
        let instance;
        onMounted(() => {
            instance = new WangEditor(editor.value);
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
        return {
            syncHTML,
            editor,
            content,
        };
    },
};
</script>

<style>
</style>