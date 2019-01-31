import React, { Component } from 'react';
import {getNoticeList} from '@/api/index';
import { Link } from 'react-router-dom';
import Header from '@/component/header';
import '@/styles/notice.scss';
import moment from 'moment'

export default class NoticeList extends Component {
	constructor(){
        super();
        this.state = {
        	title:'公告',
            listData:[],
        }
    }
    componentWillMount(){
        getNoticeList().then(res=>{
            let data = res.data.result
            
            data.forEach(item=>{
                item.createTime  = moment(item.createTime).format('YYYY.MM.DD');
            })
            console.log(data,'公告列表')
            this.setState({
                listData:data,
            });
        }).catch(err=>{
            console.log(err)
        });
    }

    render(){
    	return(
    		<div className="notice-list">
    			<Header title={this.state.title} />
                {this.state.listData.map(item=>
                    <Link to={'/noticedetails/'+item.id} className="public-item" key={item.id}>
    		            <p className="time">{item.createTime}</p>
    		            <div className="public-item-main">
    		                <div className="public-header">{item.title}</div>
    		                <div className="public-link" href="/m-html/my/public-details.html?id=271">
    		                    <span>点击查看</span>
    		                    <i className="icon iconfont icon-jiantou1"></i>
    		                </div>
    		            </div>
    		        </Link>
                )}
    		</div>
    	)
    }
}