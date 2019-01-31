import React, { Component } from 'react';
import {getIndexData} from '@/api/index'
import { Link } from 'react-router-dom';

export default class Me extends Component {
	constructor(){
        super();
        this.state = {
            indexData:[]
        };
    }

    componentWillMount(){
        getIndexData().then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        });
    }
    
    render(){
        return(
            <div>
                我的
                <Link to="/" >跳转首页</Link>

            </div>
        )
    }
}