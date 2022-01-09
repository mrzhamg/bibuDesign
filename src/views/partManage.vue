<template>
        <div class="container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="编号" width="180" />
                <el-table-column prop="name" label="栏目名称" width="180" />
                <el-table-column prop="name" label="页面模型" width="180" />
                <el-table-column prop="name" label="状态" width="180" />
                <el-table-column prop="address" label="操作" />
            </el-table>
        </div>
</template>

<script>
export default {
    name: "partManage",
    setup() {
        const tableData = [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]
    return {
        tableData
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
