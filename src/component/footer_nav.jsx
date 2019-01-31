import React, { Component } from "react";
export default class FooterNav extends Component {
    render(){
        return(
            <nav className="footer-nav">
            {this.props.activeType == 'index' ? 
            	<div className="nav-con active">
            		<i className="iconfont icon-shouyedianpujishishangcheng"></i>
            		<span>首页</span>
            	</div>
            	:
            	<div className="nav-con">
            		<i className="iconfont icon-shouyedianpujishishangcheng"></i>
            		<span>首页</span>
            	</div>
            }
            {this.props.activeType == 'category' ? 
            	<div className="nav-con active">
            		<i className="iconfont icon-icon"></i>
            		<span>分类</span>
            	</div>
            	:
            	<div className="nav-con ">
            		<i className="iconfont icon-icon"></i>
            		<span>分类</span>
            	</div>
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
