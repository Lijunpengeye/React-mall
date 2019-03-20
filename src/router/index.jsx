import React from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import asyncComponent from '@/component/asyncComponent';
import index from '@/views/index/index';
import country from '@/views/index/country';
import searchList from '@/views/index/search_list'
import goodsList from '@/views/index/goods_list'
import street from '@/views/index/street'
import notice from '@/views/notice/notice';
import NoticeList from '@/views/notice/notice_list';
import NoticeDetails from '@/views/notice/details';
import GoodsDetails from '@/views/index/goods_details';
import me from '@/views/me/me';
import  category from '@/views/category/category';

const history = createHistory();

// const me =() => import("@/views/me/me");

const RouteConfig = (
    <Router path="/" history={history}>
        <div>
            <Route path="/"  exact component={index} />
            <Route path="/country"   component={country} />
            <Route path="/searchlist"   component={searchList} />
            <Route path="/street"   component={street} />
            <Route path="/goodslist"   component={goodsList} />
            <Route path="/notice"   component={notice} />
            <Route path="/noticelist"   component={NoticeList} />
            <Route path="/noticedetails/:id"   component={NoticeDetails} />
            <Route path="/details/:id"   component={GoodsDetails} />
            <Route path="/me" component={me} />
            <Route path="/category" component={category} />
        </div>
    </Router>
);
export default RouteConfig;
