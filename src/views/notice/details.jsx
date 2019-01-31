import React, { Component } from 'react';
import {getNoticeDetails} from '@/api/index';
import { Link } from 'react-router-dom';
import Header from '@/component/header';
import '@/styles/notice.scss';
import Loading from '@/component/loading'

import moment from 'moment'

export default class NoticeList extends Component {
	constructor(){
        super();
        this.state = {
        	title:'公告详情',
            contentData:{
            	createDate:'',
            	content:''
            },
            datailsId:'',
            loadingType:false,
        }
    }
    componentWillMount(){
    	console.log(this.props.match.params.id,'idididiid')
    	let id = this.props.match.params.id
    	this.setState({
            datailsId:id,
            loadingType:true
        });
        let dataObj = {
        	id:id
        }
        getNoticeDetails(dataObj).then(res=>{
            let data = res.data.result
            console.log(data,'公告详情')
            this.setState({
                contentData:data,
                loadingType:false
            });
        }).catch(err=>{
        	this.setState({
                loadingType:false
            });
            console.log(err)
        });
    }

    render(){
    	return(
    		<div className="notice-details">
    			<Header title={this.state.title} />
                <p className="details-time" >{this.state.contentData.createDate}</p>
                <div className="details-content"  dangerouslySetInnerHTML={{__html:this.state.contentData.content}} ></div>
    			{this.state.loadingType ? 
                    <Loading></Loading>
                :
                    <div></div>
                }
    		</div>
    	)
    }
}