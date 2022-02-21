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
                <el-form ref="formRef" :rules="rules" :model="form" label-width="140px" label-position="right">
                    <el-form-item label="地区：" prop="region">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="bbk" label="北京" value="bbk"></el-option>
                            <el-option key="xtc" label="广东" value="xtc"></el-option>
                            <el-option key="imoo" label="湖北" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="栏目名称：" >
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="栏目路径：" >
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

                    <el-form-item label="栏目分类：" prop="">
                        <el-cascader ></el-cascader>
                    </el-form-item>

                    <el-form-item label="模板结构：" >
                        <el-radio-group v-model="showType">
                            <el-radio :label=1>栏目首页</el-radio>
                            <el-radio :label=2>列表页</el-radio>
                            <el-radio :label=3>详情页(单页)</el-radio>
                            <el-radio :label=4>无模板</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="内容模型：" >
                        <el-select v-model="partData.modelId" placeholder="请选择">
                            <el-option key="bbk1" label="文章模型" value="bbk1"></el-option>
                            <el-option key="xtc1" label="图片模型" value="xtc1"></el-option>
                            <el-option key="imoo1" label="其他模型" value="imoo1"></el-option>
                        </el-select>
                    </el-form-item>

                    <!-- 通用结构-栏目首页 -->
                    <el-form-item label="模板：" >
                        <el-select v-model="partData.modelId" placeholder="模板选择">
                            <el-option key="bb1" label="模块1" value="bb1"></el-option>
                            <el-option key="xt1" label="模块2" value="xt1"></el-option>
                            <el-option key="imo1" label="模块3" value="imo1"></el-option>
                        </el-select>
                    </el-form-item>
                   <!-- <el-form-item label="手机站：" >
                        <el-select v-model="partData."  placeholder="模板选择">
                            <el-option key="b1" label="模块1" value="b1"></el-option>
                            <el-option key="x1" label="模块2" value="x1"></el-option>
                            <el-option key="im1" label="模块3" value="im1"></el-option>
                        </el-select>
                    </el-form-item> -->

                    <!-- 列表页 -->
                    <el-form-item v-show="showType===2" label="列表页图片自适应：" >
                        <el-select  placeholder="请选择">
                            <el-option key="bk1" label="自适应选择" value="b1"></el-option>
                            <el-option key="tc1" label="图片尺寸相同" value="t1"></el-option>
                            <el-option key="moo1" label="图片裁剪(只显示中间)" value="mo1"></el-option>
                            <el-option key="moo1" label="图片缩放(但会有留白)" value="mo1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-show="showType===2" label="分页显示：">
                        <el-input v-model="partData.pcPage" placeholder="Please input" style="width:300px;margin-bottom:20px">
                            <template #prepend> PC站分页数</template>
                            <template #append>条</template>
                        </el-input>
                        <el-input v-model="partData.mobilePage" placeholder="Please input" style="width:300px">
                            <template #prepend>手机站分页数</template>
                            <template #append>条</template>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="文本框"  >
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
        // 栏目实体
        const partData = {
            addressid:"",
            name:"",
            subtitle:"",
            url:"",
            link:"",
            iconUrl:"",
            pictureUrl:"",
            parentId:"",
            modelType:"",
            modelId:"",
            recommendPlateId:"",
            pcPage:"",
            mobilePage:"",
            pcDesc:"",
            mobileDesc:"",
            tip:"",
            status:""
        }
        //显示类型（模板结构）
        const showType = ref(3);
        const radio = ref(3);
        const activeName = ref('first');
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
            partData,
            rules,
            formRef,
            form,
            onSubmit,
            onReset,
            radio,
            activeName,
            showType,
        };
    },
};
</script>