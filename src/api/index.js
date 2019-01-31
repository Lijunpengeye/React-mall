import request from '@/utils/request'
export  const  ERR_OK = 0;

// 首页
export function getIndexData(data){
    return request({
        url: '/indexMobileTop.shtml',
        method: 'get',
        // params:data,
    })
}
// 全球购
export function getIndexHot(data){
    return request({
        url: '/indexHotList.shtml',
        method: 'post',
        // params:data,
    })
}


// 国家馆
export function getCountry(data){
 	return request({
        url: '/goods/queryCountryList.shtml',
        method: 'post',
        // params:data,
    })
}


// 主题商品列表  searchlist
export function getSearchGoods(data){
    return request({
        url: '/solr/searchGoods.shtml',
        method: 'post',
        data
    })
}

// 主题banner图
export function getFind(data){
    return request({
        url: '/find/themeBanner.shtml',
        method: 'post',
        data
    })
}


//品牌街  获取品牌列表
export function getStreet(data){
    return request({
        url: '/brand/queryBrandList.shtml',
        method: 'post',
        data
    })
}

//获取公告
export function getNotice(data){
    return request({
        url: '/active/newNotice.shtml',
        method: 'post',
    })
}


//获取公告 列表
export function getNoticeList(data){
    return request({
        url: '/active/getNotice.shtml',
        method: 'post',
    })
}


//获取公告 列表
export function getNoticeDetails(data){
    return request({
        url: '/active/getDetailById.shtml',
        method: 'post',
        data
    })
}

//获取商品详情
export function getGoodsDetails(data) {
    return request({
        url:'/goods/getDetailMo.shtml',
        method:'post',
        data
    })
}


