<template>
        <div class="container">
            <!-- <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="编号" width="180" />
                <el-table-column prop="name" label="栏目名称" width="180" />
                <el-table-column prop="name" label="页面模型" width="180" />
                <el-table-column prop="name" label="状态" width="180" />
                <el-table-column prop="address" label="操作" />
            </el-table> -->

        <vxe-table
          resizable
          :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
          :data="tableData1"
          :checkbox-config="{labelField: 'id', highlight: true}"
          >
          <vxe-column type="checkbox" title="编号" width="280" tree-node></vxe-column>
          <vxe-column field="name" title="栏目名称"></vxe-column>
          <vxe-column field="size" title="页面模型"></vxe-column>
          <vxe-column field="type" title="状态"></vxe-column>
          <vxe-column field="date" title="操作"></vxe-column>
        </vxe-table>

        </div>
</template>

<script>

export default {
    name: "partManage",
    setup() {
        // const tableData = [
        //     {
        //         date: '2016-05-03',
        //         name: 'Tom',
        //         address: 'No. 189, Grove St, Los Angeles',
        //     },
        //     {
        //         date: '2016-05-02',
        //         name: 'Tom',
        //         address: 'No. 189, Grove St, Los Angeles',
        //     },
        //     {
        //         date: '2016-05-04',
        //         name: 'Tom',
        //         address: 'No. 189, Grove St, Los Angeles',
        //     },
        // ]
        const tableData1 = 
            [
                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },
                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
            ]
   

    return {
        tableData1,
    };
}
    
};
</script>



<style scoped>
.list {
    padding: 30px 0;
}
.list p {
    margin-bottom: 20px;
}
</style>
