import request from '../utils/request';

//获取城市列表
export const getCityData = query => {
    return request({
        url: '/api/address/getCityList',
        method: 'post',
        data: query
    });
};


//获取地址列表
export const fetchData = query => {
    return request({
        url: '/api/address/list',
        method: 'post',
        data: query
    });
};

//获取省份列表
export const fetchProvinceData = query => {
    return request({
        url: '/api/address/getProvincialList',
        method: 'post',
        data: ""
    });
};

//修改地址信息
export const editAddressInfo = query => {
    return request({
        url: '/api/address/edit',
        method: 'post',
        data: query
    });
};

//获取医院栏目列表
export const fetchHospitalData = query => {
    return request({
        url: '/api/hospital/list',
        method: 'post',
        data: query
    });
};

//通过医院id获取单个医院信息
export const getHospitalById = query => {
    return request({
        url: '/api/hospital/get/'+query,
        method: 'get',
        data: query
    }).catch(err=>{
        console.log(err)
    })
};
//修改医院信息
export const editHospitalData = query => {
    return request({
        url: '/api/hospital/edit',
        method: 'post',
        data: query
    });
};

//获取所有栏目
export const getPartList = query => {
    return request({
        url: '/api/part/getPartList',
        method: 'post',
        data: query
    });
};
export const getPartListData = query => {
    return request({
        url: '/api/part/list',
        method: 'post',
        data: query
    });
};

//通过栏目id获取单个栏目信息
export const getPartById = query => {
    return request({
        url: '/api/part/get/'+query,
        method: 'get',
        data: query
    }).catch(err=>{
        console.log(err)
    })
};

//添加栏目
export const addPart = query => {
    return request({
        url: '/api/part/add',
        method: 'post',
        data: query
    }).catch(err=>{
        console.log(err)
    })
};

//修改栏目
export const editPart = query => {
    return request({
        url: '/api/part/edit',
        method: 'post',
        data: query
    }).catch(err=>{
        console.log(err)
    })
};

//删除栏目
export const deletePartById = query => {
    return request({
        url: '/api/part/delete/'+query,
        method: 'get',
        data: query
    }).catch(err=>{
        console.log(err)
    })
};

//获取导航列表
export const getMenuData = query => {
    return request({
        url: '/api/menu/list',
        method: 'post',
        data: query
    });
};
//修改导航列表
export const editMenuData = query => {
    return request({
        url: '/api/menu/edit',
        method: 'post',
        data: query
    });
};
//添加导航列表
export const addMenuData = query => {
    return request({
        url: '/api/menu/add',
        method: 'post',
        data: query
    });
};
//删除导航
export const deleteMenuById = query => {
    return request({
        url: '/api/menu/delete/'+query,
        method: 'get',
        data: query
    }).catch(err=>{
        console.log(err)
    })
};
//获取内容列表
export const getContentData = query => {
    return request({
        url: '/api/content/list',
        method: 'post',
        data: query
    });
};

//添加内容
export const addContent = query => {
    return request({
        url: '/api/content/add',
        method: 'post',
        data: query
    });
};

//修改内容
export const editContent = query => {
    return request({
        url: '/api/content/edit',
        method: 'post',
        data: query
    });
};

//删除内容
export const deleteContentById = query => {
    return request({
        url: '/api/content/delete/'+query,
        method: 'get',
        data: query
    }).catch(err=>{
        console.log(err)
    })
};