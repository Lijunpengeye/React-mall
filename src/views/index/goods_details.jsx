import React, { Component } from 'react';

import {getGoodsDetails} from '@/api/index';
import { Link } from 'react-router-dom';
import Recommend from './component/recommend'
import '@/styles/home.scss'
import Header from '@/component/header';
import Swiper from '@/component/swiper'


export default class GoodsDetails extends Component {
    constructor(){
        super();
        this.state = {
            title:'商品详情',
            detailsId:0,
            loadingType:false,
            detailsData:{},
            imgList:[],
            goodsData:[],
            bannerList:[],
            goodsCountry:{},
            logoImg:'',
            goodsBrand:{}
        };
    }

    componentWillMount(){
        console.log(this.props.match.params.id,'商品id');
        let id = this.props.match.params.id
        this.setState({
            detailsId:id,
            loadingType:true
        })

        let parameter = {
            goodsNo:id
        }
        getGoodsDetails(parameter).then(res=>{
            let data = res.data.result
            let list  = data.imgList
            let banner = []
            let goodsData1 = data.goods

            data.goods.skuList.forEach((item,index)=>{
                if (index <= 6){
                    item['url2'] = item.skuImg
                    item['id'] = item.skuId
                    banner.push(item)
                }
            })
            console.log(banner,'banner')
            this.setState({
                detailsData:data,
                loadingType:false,
                imgList:list,
                goodsData:goodsData1,
                bannerList:banner,
                goodsCountry:goodsData1.goodsCountry,
                logoImg:goodsData1.goodsBrand.brandLogo,
                goodsBrand:goodsData1.goodsBrand
            })
            console.log(this.state.goodsCountry,'this.state.goodsCountry')
        }).catch(err=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div className="details">
                <Header title={this.state.title}/>
                <Swiper bannerData={this.state.bannerList} />
                <div className="goods-con">
                    <p className="goodsname">{this.state.goodsData.goodsName}</p>
                    <p className="price">￥{this.state.goodsData.minPrice}~ {this.state.goodsData.maxPrice}</p>
                    <p className="original-price">
                        <span>价格：</span>
                        <del>￥{this.state.goodsData.marketPrice}</del>
                    </p>
                    <div className="goods-country">
                        <img src={this.state.goodsCountry.countryImgUrl2} alt="" />
                        <span className="country-name">{this.state.goodsCountry.countryName}</span>
                        <span> 预计7个工作日左右到达</span>
                    </div>
                </div>

                <div className="list-con">
                    <div className="left">配送至：</div>
                    <div className="centered">
                        <i className="icon iconfont icon-dizhi"></i>
                        <span className="province hui">浙江省</span>
                        <span className="hui">杭州</span>
                    </div>
                    <div className="right">
                        <i className="icon iconfont icon-jiantou1"></i>
                    </div>
                </div>

                {/*<div className="list-con">*/}
                    {/*<div className="left">说明：</div>*/}
                    {/*<div className="centered">*/}
                        {/*<span className="red-mark">商品税费</span>*/}
                        {/*<span className="red-mark">*/}
 					        {/*<span>该商品免运费</span>*/}
                        {/*</span>*/}
                        {/*<br/>*/}
                        {/*<span className="red-mark">100%正品保证</span>*/}
                        {/*<span className="red-mark true">假一赔十</span>*/}

                    {/*</div>*/}

                    {/*<div className="right">*/}
                        {/*<i className="icon iconfont icon-jiantou1"></i>*/}
                    {/*</div>*/}
                {/*</div>*/}

                <div className="brand">
                    <h2>
                        <span>品牌详情</span>
                    </h2>
                    <div  className="brand-der">
                        全球商品一站式采购代发，主营美妆/个护/食品/保健品/日用品等品类,国内领先主流跨境电商平台的日系产品供应者。设有东京、电商平台的日系产品供应者。设有东京、香港、浙江三个中心。东京：采购与仓储 ; 香港：仓储与BD ; 浙江：运营与购与仓储 ; 香港：仓储与BD ;
                    </div>
                    <div className="brand-img company-img">
                        <img width="100%"  src={this.state.logoImg} />
                    </div>
                    <Link to={{pathname:'/goodslist',state:{query:'brandId',title:this.state.goodsBrand.brandName,id:this.state.goodsBrand.brandId}}}  className="see-brand">
                        查看该品牌所有单品&gt;
                    </Link>
                </div>
                <div className="img-list">
                    <h3>商品图文说明:</h3>
                    {this.state.imgList.map((item,index)=>
                        <img key={index} src={item.imgUrl}/>
                    )}
                </div>
             </div>
        )
    }
}