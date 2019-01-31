import React, { Component } from 'react';
import {getSearchGoods,getFind} from '@/api/index';
import { Link } from 'react-router-dom';
import World from './component/world'
import Header from '@/component/header'
import '@/styles/home.scss'
export default class SearchList extends Component {
	constructor(){
        super();
        this.state = {
            pageNum:1,
            pageSize:30,
            query:{},
            listData:[],
            totalPage:1,
            bannerUrl:'',
            title:''
        }; 
    }

    componentWillMount(){
        console.log(this.props.location)//val值
        let query = {
            themeId:this.props.location.state.themeId
        }
        let title = this.props.location.state.title
        let newQuery = Object.assign({},query)
        newQuery['pageNum']  = this.state.pageNum
        newQuery['pageSize'] = this.state.pageSize
        let queryBanner = this.props.location.state
        this.getBanner(query)
        this.setState({
            query:query,
            title:title
        })
       
        
        this.getListData(newQuery)
    }

    getListData(data){
        getSearchGoods(data).then(res=>{
            let data = res.data.result
            let list = data.list
            let total = data.pages
            this.setState({
                listData:list,
                totalPage:total
            });
        }).catch(err=>{
            console.log(err)
        });
    }

    getBanner(data){
        getFind(data).then(res=>{
            let data = res.data.result
            let url = data[0].adImgUrl
            this.setState({
                bannerUrl:url
            });
        }).catch(err=>{
            console.log(err)
        });
    }
    
    render(){
        return(
            <div className="theme">
                <Header title={this.state.title} />
                <div className="theme-img">
                    <img src={this.state.bannerUrl} />
                </div>
                <div className="index-quan themelist">
                    <World worldList={this.state.listData}  />
                </div>
            </div>
        ) 
    }
}