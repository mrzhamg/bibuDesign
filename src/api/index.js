import request from '../utils/request';
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

//获取所有栏目
export const getPartList1 = query => {
    return request({
        url: '/api/part/list',
        method: 'post',
        data: query
    });
};

//添加栏目
export const addPart = query => {
    return request({
        url: '/api/part/add',
        method: 'post',
        data: query
    });
};