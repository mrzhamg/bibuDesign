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
                <el-form ref="formRef" :model="partForm" label-width="140px" label-position="right">
                    <el-form-item label="导航名称："  prop="name">
                        <el-input v-model="partForm.name" @input="changePinyin"></el-input>
                    </el-form-item>
                    <el-form-item label="添加rel属性：" prop="url">
                        <el-input v-model="partForm.url"></el-input>
                    </el-form-item>
                    <el-form-item label="导航分类：" prop="iconUrl">
                        <el-select v-model="partForm.parentId" placeholder="请选择">
                            <el-option  label="做为一级栏目" value="0"></el-option>
                            <el-option
                            v-for="item in partList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                            >
                            </el-option>
                        </el-select>
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
                            <el-option
                            v-for="item in partList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                            >
                            </el-option>
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
import { reactive, ref, getCurrentInstance, nextTick } from "vue";
import { ElMessage,ElNotification } from "element-plus";
import { addPart, fetchProvinceData, getPartList, getHospitalById, editHospitalData } from "../api/index";
import { pinyin } from 'pinyin-pro';
import { useRouter } from 'vue-router'



export default {
    name: "addMenu",
    setup() {
        const router = useRouter();
        const instance = getCurrentInstance();
        const _this= instance.appContext.config.globalProperties;
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
            status:"1"
        });
        const partList = ref([]);
        
        console.log(_this.$route.params.hospital_id)

        //获取栏目列表数据
        const getPartListData = () => {
            getPartList().then((res) => {
                partList.value = res;
            })   
        }
        getPartListData();
        //获取省份列表数据
        const getProvinceList = () =>{
              fetchProvinceData().then((res) => {
                provinceListData.value = res;
            } );
        }
        getProvinceList();
        //根据医院ID获取需要关联的医院数据
        const getHospitalData = () =>{
            getHospitalById(_this.$route.params.hospital_id).then((res) => {  
                partForm.name = res.name;
                partForm.addressid = res.provincialCode;
                partForm.url =  pinyin(partForm.name,{ pattern: 'first',toneType: 'none'}).replace(/\s+/g,"");
            })
        }
        if(typeof(_this.$route.params.hospital_id) != "undefined"){
            getHospitalData();
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
        //栏目名称转为拼音url
        const changePinyin = () =>{
            partForm.url =  pinyin(partForm.name,{ pattern: 'first',toneType: 'none'}).replace(/\s+/g,"");
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
                if(typeof(_this.$route.params.hospital_id) != "undefined"){
                    editHospitalData(
                    {
                        id:_this.$route.params.hospital_id,
                        part_id:res.id,
                        status:'0'
                    }
                    )
                router.push('/hospitalManage')
                }
                
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

        let table = reactive({
            showTable: true
        })
        //使用刷新
        table.showTable = false
        nextTick(()=>{
        //写入操作
            table.showTable = true
        })

        return {
            partForm,
            partList,
            rules,
            formRef,
            onSubmit,
            onReset,
            radio,
            activeName,
            showType,
            provinceListData,
            getProvinceList,
            changePinyin,
            getPartListData,
            getHospitalData,
        };
    },
};
</script>