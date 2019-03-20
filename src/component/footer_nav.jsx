import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class FooterNav extends Component {
    render(){
        return(
            <nav className="footer-nav">
            {this.props.activeType == 'index' ? 
            	<Link to="/"  className="nav-con active">
            		<i className="iconfont icon-shouyedianpujishishangcheng"></i>
            		<span>首页</span>
            	</Link>
            	:
            	<Link to="/" className="nav-con">
            		<i className="iconfont icon-shouyedianpujishishangcheng"></i>
            		<span>首页</span>
            	</Link>
            }
            {this.props.activeType == 'category' ? 
				<Link to="/category" className="nav-con active">
            		<i className="iconfont icon-icon"></i>
            		<span>分类</span>
            	</Link>
            	:
            	<Link to="/category" className="nav-con ">
            		<i className="iconfont icon-icon"></i>
            		<span>分类</span>
            	</Link>
            }
            {this.props.activeType == 'shop' ? 
            	<div className="nav-con active">
            		<i className="iconfont icon-icon22fuzhi"></i>
            		<span>购物车</span>
            	</div>
            	:
            	<div className="nav-con">
            		<i className="iconfont icon-icon22fuzhi"></i>
            		<span>购物车</span>
            	</div>
            }
            {this.props.activeType == 'shop' ? 
            	<div className="nav-con active">
            		<i className="iconfont icon-wode"></i>
            		<span>我的</span>
            	</div>
            	:
            	<div className="nav-con ">
            		<i className="iconfont icon-wode"></i>
            		<span>我的</span>
            	</div>
            }
            </nav>
        )
    }
}
