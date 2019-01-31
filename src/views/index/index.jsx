import React, { Component } from 'react';
import {getIndexData,getIndexHot} from '@/api/index';
import { Link } from 'react-router-dom';
import Swiper from '@/component/swiper'
import Recommend from './component/recommend'
import World from './component/world'
import FooterNav from '@/component/footer_nav'
import '@/styles/home.scss'
import '@/styles/common.scss'


export default class Index extends Component {
	constructor(){
        super();
        this.state = {
            indexData:[],
            bannerData:[],
            newSubjectData:[],
            worldList:[],
            subjectData:[],
        }; 
    }

    componentWillMount(){

       getIndexData().then(res=>{
            // console.log(res)
            let data = res.data.result
            // console.log(data)
            let banner = data.banner
            // console.log(banner)
            let newSubject = data.newSubject
            let subject = data.subject
            this.setState({
                indexData:data,
                bannerData:banner,
                newSubjectData:newSubject,
                subjectData:subject
            });
            console.log(this.state.subjectData,'subjectData')
            console.log(this.state.bannerData,'bannerData')
        }).catch(err=>{
            console.log(err)
        });

        getIndexHot().then(res=>{
            let data = res.data.result
            let worldList = data
            worldList.forEach(item=>{
                 if (item.deliveryType == 1) {
                    item['deliveryText'] = '保税区邮'
                }else if(item.deliveryType == 2 ){
                    item['deliveryText'] = '香港直邮'
                }else if(item.deliveryType == 5 ){
                    item['deliveryText'] = '国内发货'
                }else if(item.deliveryType == 4 ){
                    item['deliveryText'] = '海外直邮'
                }else if(item.deliveryType == 3 ){
                    item['deliveryText'] = '海外直邮'
                }
            })
            console.log(worldList)
            this.setState({
                worldList:worldList,
            });
            console.log(this.state.worldList,'worldList')
        }).catch(err=>{
            console.log(err)
        });
    }
    
    render(){
        return(
            <div className="index-con">
            {/*<Link to="/me" >1212</Link>*/}
                <div  className="index-header">
                    <div className="index-search">
                        <div className="search">
                            <i className="iconfont icon-sousuo1"></i>
                            <span>囤货</span>
                        </div>
                        <Link to="/notice" className="msgicon">
                            <i className="iconfont icon-tubiao15 msgicon"></i>
                        </Link>
                    </div>
                    <Swiper bannerData={this.state.bannerData} />
                </div>

                <ul className="index-nav">
                    <Link to="/country" className="li-nav">
                        <img src={require('@/images/nav2.png')} />
                        <div className="navtext">国家馆</div>
                    </Link>
                    <Link to="/street"  className="li-nav">
                        <img  src={require('@/images/nav1.png')} />
                        <div className="navtext">品牌街</div>
                    </Link>
                    <Link to={{pathname:'/goodslist',state:{query:'ifNew',title:'新品'}}}  className="li-nav">
                        <img  src={require('@/images/nav3.png')} />
                        <div className="navtext">新品</div>
                    </Link>
                    <Link to={{pathname:'/searchlist',state:{themeId:'317',title:'当季热卖'}}}  className="li-nav">
                        <img  src={require('@/images/nav4.png')} />
                        <div className="navtext">热卖</div>
                    </Link>
                </ul>

                <ul className="list-column">
                    {this.state.subjectData.map((item,index)=>
                         <Link key={index}  to={{pathname:'/searchlist',state:{themeId:item.id,title:item.title}}} className="li-link">
                            <img  src={item.url2} />
                        </Link>
                    )}         
                </ul>
                {/*推荐*/}
                <Recommend RecomData={this.state.newSubjectData}  Type="index"  />

                {/*全球*/}
                <div className="index-quan">
                    <div className="quan-head">
                        <img  src={require('@/images/quanqiu.png')} />
                    </div>
                    <World worldList={this.state.worldList}  />
                </div>


                <FooterNav activeType={'index'} />

            </div>
        )
    }
}