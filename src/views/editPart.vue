<template>
    <div>
        <div class="container">
            <div class="form-box">
                <el-form ref="formRef" :model="partForm" label-width="140px" label-position="right">
                    <!-- <el-form-item label="地区：">
                        <el-select v-model="partForm.addressId" placeholder="请选择">
                            <el-option
                            v-for="item in provinceListData"
                            :key="item.provincialCode"
                            :label="item.provincialName"
                            :value="item.provincialCode"
                            >
                        </el-option>
                        </el-select>
                    </el-form-item> -->
                    <el-form-item label="栏目名称："  prop="name">
                        <el-input v-model="partForm.name" @input="changePinyin"></el-input>
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
                            <el-option
                            v-for="item in partList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="模板结构：" prop="modelType">
                        <el-radio-group v-model="partForm.modelType">
                            <el-radio :label=1>栏目首页</el-radio>
                            <el-radio :label=2>列表页</el-radio>
                            <el-radio :label=3>详情页(单页)</el-radio>
                            <el-radio :label=4>无模板</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="内容模型：" prop="modelId">
                        <el-select v-model="partForm.modelId" placeholder="请选择">
                        <el-option
                            v-for="item in modelOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
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
                    <el-form-item v-show="partForm.modelType===2" label="分页显示：" prop="pcPage"> 
                        <el-input v-model="partForm.pcPage" placeholder="Please input" style="width:300px" >
                            <template #prepend> PC站分页数</template>
                            <template #append>条</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item v-show="partForm.modelType===2"  prop="mobilePage"> 
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
                        <el-button type="primary" @click="onSubmit">确认修改</el-button>
                        <!-- <el-button @click="onReset">重置表单</el-button> -->
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, getCurrentInstance, nextTick } from "vue";
import { ElMessage,ElNotification } from "element-plus";
import { editPart, getPartById, fetchProvinceData, getPartList, getHospitalById, editHospitalData } from "../api/index";
import { pinyin } from 'pinyin-pro';
import { useRouter } from 'vue-router'



export default {
    name: "editPart",
    setup() {
        const router = useRouter();
        const instance = getCurrentInstance();
        const _this= instance.appContext.config.globalProperties;
        //省份列表
        const provinceListData = ref([]);
        // 栏目实体
        const partForm = reactive({
            id:"",
            addressId:"",
            name:"",
            subtitle:"",
            url:"",
            link:"",
            iconUrl:"",
            pictureUrl:"",
            parentId:"0",
            modelType:"",
            modelId:"",
            pcPage:"20",
            mobilePage:"20",
            pcDesc:"",
            mobileDesc:"",
            tip:"",
            status:"1"
        });
        const partList = ref([]);
        const modelOptions = [
            {
                value: 1,
                label: '文章模型',
            },
            {
                value: 2,
                label: '产品模型',
            },
            {
                value: 3,
                label: '单页模型',
            },
            {
                value: 4,
                label: '图片模型',
            },
            {
                value: 5,
                label: '视频模型',
            },
            {
                value: 7,
                label: '文件模型',
            },
        ]
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
        //根据医院ID获取需要关联的医院和对应栏目(你可能觉得我写的很蠢，既然你比我聪明，那就拜托你改的更好吧^_^)
        const getHospitalData = () =>{
            getHospitalById(_this.$route.params.hospital_id).then((res) => {  
                partForm.id = res.partId;
                partForm.addressId = res.addressId;
                getPartById(partForm.id).then((res) => {
                    partForm.addressId = res.provincialCode,
                    partForm.name = res.name,
                    partForm.subtitle = res.subtitle,
                    partForm.url = res.url,
                    partForm.link = res.link,
                    partForm.iconUrl = res.iconUrl,
                    partForm.pictureUrl = res.pictureUrl,
                    partForm.parentId = res.parentId,
                    partForm.modelType = res.modelType,
                    partForm.modelId = res.modelId,
                    partForm.pcPage = res.pcPage,
                    partForm.mobilePage = res.mobilePage,
                    partForm.pcDesc = res.pcDesc,
                    partForm.mobileDesc = res.mobileDesc,
                    partForm.tip = res.tip
                });
                // partForm.name = res.name;
                // partForm.addressid = res.provincialCode;
                // partForm.url =  pinyin(partForm.name,{ pattern: 'first',toneType: 'none'}).replace(/\s+/g,"");
            })
        }
        if(typeof(_this.$route.params.hospital_id) != "undefined"){
            getHospitalData();
        }
        if(typeof(_this.$route.params.part_id) != "undefined"){
            partForm.id = _this.$route.params.part_id;
             getPartById(partForm.id).then((res) => {
                    partForm.addressId = res.provincialCode,
                    partForm.name = res.name,
                    partForm.subtitle = res.subtitle,
                    partForm.url = res.url,
                    partForm.link = res.link,
                    partForm.iconUrl = res.iconUrl,
                    partForm.pictureUrl = res.pictureUrl,
                    partForm.parentId = res.parentId,
                    partForm.modelType = res.modelType,
                    partForm.modelId = res.modelId,
                    partForm.pcPage = res.pcPage,
                    partForm.mobilePage = res.mobilePage,
                    partForm.pcDesc = res.pcDesc,
                    partForm.mobileDesc = res.mobileDesc,
                    partForm.tip = res.tip
                });
        }
        //显示类型（模板结构）
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
            editPart(partForm).then((res) => {
                onReset();
                ElNotification({
                    title: '成功',
                    message: '修改成功！',
                    type: 'success',
                });
                if(typeof(_this.$route.params.hospital_id) != "undefined"){
                    editHospitalData(
                    {
                        id:_this.$route.params.hospital_id,
                        name:res.name,
                        
                    }
                    )
                router.push('/hospitalManage')
                }
                if(typeof(_this.$route.params.part_id) != "undefined"){
                    router.push('/partManage')
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
            modelOptions,
            rules,
            formRef,
            onSubmit,
            onReset,
            radio,
            activeName,
            provinceListData,
            getProvinceList,
            changePinyin,
            getPartListData,
            getHospitalData,
        };
    },
};
</script>