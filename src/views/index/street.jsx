import React, { Component } from 'react';
import {getStreet} from '@/api/index';
import { Link } from 'react-router-dom';
import '@/styles/home.scss'
import Header from '@/component/header'


export default class Street extends Component {
	constructor(){
        super();
        this.state = {
        	hotList:[],
            streetList:[],
            title:'品牌街',
            listKey:[],
            searchList:[],
            searchType:false
        }; 
    }

    componentWillMount(){

       getStreet().then(res=>{
            let data = res.data.result
            let keyList = []
            let listData = []
            for(let key in data.brandMap){
            	keyList.push(key)
            	listData.push(data.brandMap[key])
            }
            // console.log(keyList,'keyList')

            // console.log(listData,'listData')

            this.setState({
                streetList:listData,
                listKey:keyList,
                hotList:data.hotBrandList
            });

            // console.log(this.state.streetList,'streetList')
            // console.log(this.state.hotList,'hotList')
        }).catch(err=>{
            console.log(err)
        });
        
    }

    inputChange(e){
    	console.log(e.target.value)
    	let val = e.target.value
    	if(!val){
    		return false
    	}
    	let data= {
    		brandName:val
    	}
    	getStreet(data).then(res=>{
    		let data = res.data.result
            let listData = []
            for(let key in data.brandMap){
            	listData.push(data.brandMap[key])
            }
            this.setState({
                searchList:listData,

            });
            console.log(this.state.searchList,'searchList')
            // console.log(this.state.hotList,'hotList')
        }).catch(err=>{
            console.log(err)
        });
    }

    showSearch(){
    	console.log(222222)
    	this.setState({
            searchType:true
        });
    }

    hideSearch(){
    	console.log(222222)
    	this.setState({
            searchType:false
        });
    }
    
    render(){
        return(
            <div className="street">
                <Header title={this.state.title} />
                <div className="sousuo" onClick={(i) =>this.showSearch(i)}>
                	<i className="iconfont icon-sousuo1"></i>
					<span>搜索</span>                
                </div>

                <div className="street-con" >
                	<p className="title">热门品牌</p>
	                	<ul className="con-ul" >
	                	{this.state.hotList.map((item,i)=>(
	                		<li className="con-li" key={i}>
	                			<img className="logo" src={item.brandLogo} />
	                			<span className="name">{item.brandName}</span>
	                		</li>
	                	))}
	                	</ul>
                	
                </div>

                {this.state.streetList.map((items,index)=>(
	                <div className="street-con" key={index}>
	                	<p className="title">{this.state.listKey[index]}</p>
		                	<ul className="con-ul" >
		                	{items.map((item,i)=>(
		                		<li className="con-li" key={i}>
		                			<img className="logo" src={item.brandLogo} />
		                			<span className="name">{item.brandName}</span>
		                		</li>
		                	))}
		                	</ul>
	                	
	                </div>
                ))}

                {this.state.searchType ? 
                	<div className="search showsearch">
                		<div className="search-con">
	               			<i className="iconfont icon-fanhui previous" onClick={(e)=>this.hideSearch(e)}></i>
	               			<div className="search-inp">
	               				<i className="iconfont icon-sousuo1"></i>
	               				<input type="text" onChange={(e)=>this.inputChange(e)}/>
	               			</div>
	               		</div>
	               		{this.state.searchList.map((items,index)=>(
			                <div className="street-con" key={index}>
			                	<ul className="con-ul" >
			                	{items.map((item,i)=>(
			                		<li className="con-li" key={i}>
			                			<img className="logo" src={item.brandLogo} />
			                			<span className="name">{item.brandName}</span>
			                		</li>
			                	))}
			                	</ul>
			                </div>
	                	))}
	               </div>
                :
                	<div className="search">
	               		<div className="search-con">
	               			<i className="iconfont icon-fanhui previous"></i>
	               			<div className="search-inp">
	               				<i className="iconfont icon-sousuo1"></i>
	               				<input type="text" onChange={(e)=>this.inputChange(e)}/>
	               			</div>
	               		</div>
	               		{this.state.searchList.map((items,index)=>(
			                <div className="street-con" key={index}>
			                	<ul className="con-ul" >
			                	{items.map((item,i)=>(
			                		<li className="con-li" key={i}>
			                			<img className="logo" src={item.brandLogo} />
			                			<span className="name">{item.brandName}</span>
			                		</li>
			                	))}
			                	</ul>
			                </div>
	                	))}
	               </div>
                }
               
                
            </div>
        ) 
    }
}
