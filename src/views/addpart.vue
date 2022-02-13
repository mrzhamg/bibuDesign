<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 栏目管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>添加栏目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="formRef" :rules="rules" :model="form" label-width="140px">
                    <el-form-item label="地区：" prop="region">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="bbk" label="北京" value="bbk"></el-option>
                            <el-option key="xtc" label="广东" value="xtc"></el-option>
                            <el-option key="imoo" label="湖北" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="栏目名称：" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="栏目路径：" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="关联标识：" >
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="栏目banner：" >
                        <el-input v-model="form.name">
                            <template #append>
                                <el-button type="primary">上传图片</el-button>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="小程序图片（左）：" >
                        <el-input v-model="form.name">
                            <template #append>
                                <el-button type="primary">上传图片</el-button>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="小程序图片（右）：" >
                        <el-input v-model="form.name">
                            <template #append>
                                <el-button type="primary">上传图片</el-button>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="栏目分类：" prop="options">
                        <el-cascader :options="options" v-model="form.options"></el-cascader>
                    </el-form-item>

                    <el-form-item label="模板结构：" >
                        <el-radio-group v-model="radio">
                            <el-radio :label="3">栏目首页</el-radio>
                            <el-radio :label="6">列表页</el-radio>
                            <el-radio :label="9">详情页</el-radio>
                            <el-radio :label="10">无模板</el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <!-- <el-form-item label="选择开关" prop="delivery">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="多选框" prop="type">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="步步高" name="type"></el-checkbox>
                            <el-checkbox label="小天才" name="type"></el-checkbox>
                            <el-checkbox label="imoo" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="单选框" prop="resource">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="beij"></el-radio>
                            <el-radio label="小天才"></el-radio>
                            <el-radio label="imoo"></el-radio>
                        </el-radio-group>
                    </el-form-item> -->
                    <el-form-item label="内容模型：" prop="region">
                        <el-select v-model="form.part" placeholder="请选择">
                            <el-option key="bbk1" label="文章模型" value="bbk1"></el-option>
                            <el-option key="xtc1" label="图片模型" value="xtc1"></el-option>
                            <el-option key="imoo1" label="其他模型" value="imoo1"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="文本框" prop="desc">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
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
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
export default {
    name: "addpart",
    setup() {
        const radio = ref(3);
        const options = [
            {
                value: "guangdong",
                label: "一级栏目A",
                children: [
                    {
                        value: "guangzhou",
                        label: "二级栏目A",
                        children: [
                            {
                                value: "tianhe",
                                label: "三级栏目A",
                            },
                            {
                                value: "haizhu",
                                label: "三级栏目B",
                            },
                        ],
                    },
                    {
                        value: "dongguan",
                        label: "二级栏目B",
                        children: [
                            {
                                value: "changan",
                                label: "三级栏目C",
                            },
                            {
                                value: "humen",
                                label: "三级栏目D",
                            },
                        ],
                    },
                ],
            },
            {
                value: "hunan",
                label: "一局栏目B",
                children: [
                    {
                        value: "changsha",
                        label: "二级栏目C",
                        children: [
                            {
                                value: "yuelu",
                                label: "三级栏目D",
                            },
                        ],
                    },
                ],
            },
        ];
        const rules = {
            name: [
                { required: true, message: "请输入表单名称", trigger: "blur" },
            ],
        };
        const formRef = ref(null);
        const form = reactive({
            name: "",
            region: "",
            part:"bbk1",
            date1: "",
            date2: "",
            delivery: true,
            type: ["步步高"],
            resource: "小天才",
            desc: "",
            options: [],
        });
        // 提交
        const onSubmit = () => {
            // 表单校验
            formRef.value.validate((valid) => {
                if (valid) {
                    console.log(form);
                    ElMessage.success("提交成功！");
                } else {
                    return false;
                }
            });
        };
        // 重置
        const onReset = () => {
            formRef.value.resetFields();
        };

        return {
            options,
            rules,
            formRef,
            form,
            onSubmit,
            onReset,
            radio,
        };
    },
};
</script>