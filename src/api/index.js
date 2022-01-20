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
        url: 'api/address/getProvincialList',
        method: 'post',
        data: ""
    });
};

//修改地址信息
export const editAddressInfo = query => {
    return request({
        url: 'api/address/edit',
        method: 'post',
        data: query
    });
};

