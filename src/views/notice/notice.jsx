import React, { Component } from 'react';
import {getNotice} from '@/api/index';
import { Link } from 'react-router-dom';
import Header from '@/component/header';
import '@/styles/notice.scss';


export default class Notice extends Component {
	constructor(){
        super();
        this.state = {
        	title:'公告',
            context:'',
        }
    }
    componentWillMount()
    {
        getNotice().then(res=>{
            let data = res.data.result.title
            this.setState({
                context:data,
            });
        }).catch(err=>{
            console.log(err)
        });
    }

    render(){
    	return(
    		<div className="notice">
    			<Header title={this.state.title} />
                <div className="notice-box">
                    <Link to="/noticelist" className="notice-item">
                        <div className="public-logo">
                            <span className="dotted"></span>
                        </div>
                        <div className="text-box">
                            <p className="title">公告</p>
                            <p className="com-over">{this.state.context}</p>
                        </div>
                        <i className="icon iconfont icon-jiantou1"></i>
                    </Link>

                    <div className="notice-item">
                        <div className="public-logo"></div>
                        <div className="text-box">
                            <p className="title">客服助手</p>
                            <p className="com-over">在线客服咨询时间9:00-18:00 </p>
                        </div>
                        <i className="icon iconfont icon-jiantou1"></i>
                    </div>
                </div>
    		</div>
    	)
    }
}