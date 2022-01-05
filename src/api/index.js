import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
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