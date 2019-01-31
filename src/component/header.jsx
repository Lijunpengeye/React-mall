import React, { Component } from "react";
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const location = history.location;
export default class Header extends Component {
	componentWillMount(){
		console.log(history,'history')
       
        console.log(location,'location')
        // history.goBack()
	}
    render(){
        return(
            <header ref="header">
            	<Link to={location.pathname}>
            		<i className="iconfont icon-fanhui previous"></i>
            	</Link>
            	<span>{this.props.title}</span>
            </header>
        )
    }
}
