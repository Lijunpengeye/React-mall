import request from '@/utils/request'
export  const  ERR_OK = 0;
// 获取侧边栏标题
export function getCategoryTitle(data){
    return request({
        url: '/category/getCategory.shtml',
        method: 'post',
        // params:data,
    })
}
//获取相应标题内容
export function getCategoryCom(data){
    return request({
        url: '/category/getCategoryTwo.shtml',
        method: 'post',
        data
    })
}

