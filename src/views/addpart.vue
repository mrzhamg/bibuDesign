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
                <el-form ref="formRef" :model="partForm" label-width="140px" label-position="right">
                    <el-form-item label="地区：">
                        <el-select v-model="partForm.addressid" placeholder="请选择">
                            <el-option
                            v-for="item in provinceListData"
                            :key="item.provincialCode"
                            :label="item.provincialName"
                            :value="item.provincialCode"
                            >
                        </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="栏目名称："  prop="name">
                        <el-input v-model="partForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="栏目路径：" prop="url">
                        <el-input v-model="partForm.url"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="关联标识：" >
                        <el-input v-model="form.name"></el-input>
                    </el-form-item> -->
                    <el-form-item label="自定义图标：" prop="iconUrl">
                        <el-input v-model="partForm.iconUrl">
                            <template #append>
                                <el-button type="primary">上传图片</el-button>
                            </template>
                        </el-input>
                    </el-form-item>

                    <!-- <el-form-item label="小程序图片（左）：" >
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
                    </el-form-item> -->

                    <el-form-item label="栏目分类：" prop="parentId">
                        <el-select v-model="partForm.parentId" placeholder="请选择">
                            <el-option  label="做为一级栏目" value="0"></el-option>
                            <el-option  label="医院转运" value="1"></el-option>
                            <el-option  label="康复回家" value="2"></el-option>
                            <el-option  label="服务优势" value="3"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="模板结构：" prop="showType">
                        <el-radio-group v-model="showType">
                            <el-radio :label=1>栏目首页</el-radio>
                            <el-radio :label=2>列表页</el-radio>
                            <el-radio :label=3>详情页(单页)</el-radio>
                            <el-radio :label=4>无模板</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="内容模型：" prop="modelId">
                        <el-select v-model="partForm.modelId" placeholder="请选择">
                            <el-option label="文章模型" value="1"></el-option>
                            <el-option label="产品模型" value="2"></el-option>
                            <el-option label="单页模型" value="3"></el-option>
                            <el-option label="图片模型" value="4"></el-option>
                            <el-option label="视频模型" value="5"></el-option>
                            <el-option label="文件模型" value="6"></el-option>
                        </el-select>
                    </el-form-item>

                    <!-- 通用结构-栏目首页 -->
                    <!-- <el-form-item label="模板：" >
                        <el-select v-model="partData.modelId" placeholder="模板选择">
                            <el-option key="bb1" label="模块1" value="bb1"></el-option>
                            <el-option key="xt1" label="模块2" value="xt1"></el-option>
                            <el-option key="imo1" label="模块3" value="imo1"></el-option>
                        </el-select>
                    </el-form-item> -->
                   <!-- <el-form-item label="手机站：" >
                        <el-select v-model="partData."  placeholder="模板选择">
                            <el-option key="b1" label="模块1" value="b1"></el-option>
                            <el-option key="x1" label="模块2" value="x1"></el-option>
                            <el-option key="im1" label="模块3" value="im1"></el-option>
                        </el-select>
                    </el-form-item> -->

                    <!-- 列表页 -->
                    <!-- <el-form-item v-show="showType===2" label="列表页图片自适应：" >
                        <el-select  placeholder="请选择">
                            <el-option key="bk1" label="自适应选择" value="b1"></el-option>
                            <el-option key="tc1" label="图片尺寸相同" value="t1"></el-option>
                            <el-option key="moo1" label="图片裁剪(只显示中间)" value="mo1"></el-option>
                            <el-option key="moo1" label="图片缩放(但会有留白)" value="mo1"></el-option>
                        </el-select>
                    </el-form-item> -->
                    <el-form-item v-show="showType===2" label="分页显示：" prop="pcPage"> 
                        <el-input v-model="partForm.pcPage" placeholder="Please input" style="width:300px" >
                            <template #prepend> PC站分页数</template>
                            <template #append>条</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item v-show="showType===2"  prop="mobilePage"> 
                        <el-input v-model="partForm.mobilePage" placeholder="Please input" style="width:300px" >
                            <template #prepend>手机站分页数</template>
                            <template #append>条</template>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="栏目简介:"  prop="pcDesc">
                        <el-input v-model="partForm.pcDesc" type="textarea" rows="5"></el-input>
                    </el-form-item>
                    <el-form-item label="操作提示:"  prop="tip">
                        <el-input v-model="partForm.tip" type="textarea" rows="5"></el-input>
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
import { ElMessage,ElNotification } from "element-plus";
import { addPart,fetchProvinceData } from "../api/index";


export default {
    name: "addpart",
    setup() {
        
        //省份列表
        const provinceListData = ref([]);
        // 栏目实体
        const partForm = reactive({
            addressid:"",
            name:"",
            subtitle:"",
            url:"",
            link:"",
            iconUrl:"",
            pictureUrl:"",
            parentId:"0",
            modelType:"",
            modelId:"1",
            recommendPlateId:"",
            pcPage:"20",
            mobilePage:"20",
            pcDesc:"",
            mobileDesc:"",
            tip:"",
            status:""
        });
        //获取省份列表数据
        const getProvinceList = () =>{
              fetchProvinceData().then((res) => {
                provinceListData.value = res;
            } );
        }
        getProvinceList();

        //显示类型（模板结构）
        const showType = ref(3);
        const radio = ref(3);
        const activeName = ref('first');
        const rules = {
            name: [
                { required: true, message: "请输入表单名称", trigger: "blur" },
            ],
        };
        //栏目名称转为拼音url
        const changePinyin = () =>{
           partForm.url = Pinyin.getCamelChars(partForm.name); 
        };

        const formRef = ref(null);
        // 提交
        const onSubmit = () => {
            partForm.modelType = showType;
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
        // 重置
        const onReset = () => {
            formRef.value.resetFields();
        };

        return {
            partForm,
            rules,
            formRef,
            onSubmit,
            onReset,
            radio,
            activeName,
            showType,
            provinceListData,
            getProvinceList,
            changePinyin
        };
    },
};
</script>