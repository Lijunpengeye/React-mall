import React, { Component } from "react";
export default class Loading extends Component {
	render(){
        return(
        	<div className="loading">
        		<img src={require('@/images/loading.gif')} />
        	</div>
        )
     }
}