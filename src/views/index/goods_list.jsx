import React, { Component } from 'react';
import {getSearchGoods,getFind} from '@/api/index';
import { Link } from 'react-router-dom';
import World from './component/world'
import Header from '@/component/header'
import Loading from '@/component/loading'

import Screen from '@/component/screen'
import '@/styles/home.scss'

import { PullToRefresh } from 'antd-mobile';


export default class GoodsList extends Component {
	constructor(){
        super();
        this.state = {
            pageNum:1,
            pageSize:30,
            query:{},
            listData:[],
            totalPage:1,
            bannerUrl:'',
            title:'新品',
            refreshing: false,
            up: true,
            height: document.documentElement.clientHeight,
            loadingType:false,
            down: true,
        }; 
        this.parentSort = this.parentSort.bind(this)
        this.onScrollStart = this.onScrollStart.bind(this)
    }

    componentWillMount(){
        console.log(this.props.location)//val值
        let query = {}
        if (this.props.location.state.query == 'ifNew') {
            query = {
                ifNew:1,
            }
        }
        if (this.props.location.state.query == 'brandId') {
            query = {
                brandId:this.props.location.state.id,
            }
        }

        if (this.props.location.state.query == 'threeCategory'){
            query = {
                threeCategory:this.props.location.state.id,
            }
        }
        let title = this.props.location.state.title
        // let newQuery = Object.assign({},query)
        query['pageNum']  = this.state.pageNum
        query['pageSize'] = this.state.pageSize
        let queryBanner = this.props.location.state
        console.log(query,'----query----')
        this.setState({
            query:query,
            title:title
        })
        this.getList(query)
    }

    getList(data){
        console.log(data,'----this.state.query----')
        this.setState({
            loadingType:true,
        });
        getSearchGoods(data).then(res=>{
            let data = res.data.result
            let list = this.state.listData
            data.list.forEach(item=>{
                list.push(item)
            })
            // list.push(data.list)
            // console.log(list,'listlist')
            let total = data.pages
            this.setState({
                listData:list,
                totalPage:total,
                loadingType:false,
                refreshing:false
            });
        }).catch(err=>{
            this.setState({
                loadingType:false,
                refreshing:false
            });
            console.log(err)
        });
    }

    parentSort(sort,type){
        console.log(sort,'-----父类 sort-----')
        console.log(type,'-----父类 type-----')
        let dataObj = {
            sort: sort,
            order:type,

        }
        if (this.state.query.brandId) {
            dataObj['brandId'] = this.state.query.brandId
        }else{
            dataObj['ifNew'] = 1
        }

        console.log(this.state.pageNum,'dataObj')
        dataObj['pageNum']  = this.state.pageNum
        dataObj['pageSize'] = this.state.pageSize
        this.setState({
            query:dataObj,
            listData:[],
        })
        this.getList(dataObj)
    }

    onScrollStart(){
        console.log(212222)
        if (this.state.pageNum >this.state.totalPage) {
            return
        }
        let page = this.state.pageNum++
        let dataObj = this.state.query
        dataObj['pageNum'] = page
        this.setState({
            query:dataObj,
            refreshing:true
        })
        this.getList(dataObj)
    }

	render(){
        return(
            <div className="goods-list">
                <Header title={this.state.title} />
                <Screen subSort={this.parentSort}></Screen>
                <PullToRefresh
                    damping={200}
                    ref={el => this.ptr = el}
                    style={{
                      height: this.state.height,
                      overflow: 'auto',
                    }}
                    indicator={this.state.up ? {} : { deactivate: '上拉可以加载更多' }}
                    direction='up'
                    refreshing={this.state.refreshing}
                    onRefresh={this.onScrollStart.bind(this)}
                >
                    <div className="index-quan goodslist">
                        <World worldList={this.state.listData}  />
                    </div>
                </PullToRefresh>
                {this.state.loadingType ? 
                    <Loading></Loading>
                :
                    <div></div>
                }
                
            </div>
        ) 
    }
}