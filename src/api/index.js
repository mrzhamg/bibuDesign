import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: '/api/address/list',
        method: 'post',
        data: query
    });
};


export const fetchProvinceData = query => {
    return request({
        url: 'api/address/getProvincialList',
        method: 'post',
        data: ""
    });
};
// // 获取省份列表
// export const fetchSelectData = query => {
//     return request({
//         url: './table.json',
//         method: 'get',
//         params: SelectData
//     });
// };