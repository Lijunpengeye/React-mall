import React, { Component } from 'react';
import logo from '@/images/logo.svg';
import '@/styles/App.css';
import Header from '@/component/header';
import router from '@/router/index.jsx';
import { Link } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css'; 
import '@/icon/iconfont.css'
import createHistory from 'history/createBrowserHistory';
const history = createHistory();


export default  class App extends Component {
  componentWillMount() {
        console.log(history.location,'history') 
   }
  render() {
    return (
      <div className="App">
          {router}
      </div>
    );
  }
}