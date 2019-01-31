import React, { Component } from 'react';
import {getCountry} from '@/api/index';
import { Link } from 'react-router-dom';
import Recommend from './component/recommend'
import '@/styles/home.scss'
import Header from '@/component/header'

export default class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            carouselList: [],
            title: '国家馆'
        };
    }

    componentWillMount() {

        getCountry().then(res => {
            let data = res.data.result

            let list = data
            this.setState({
                carouselList: list
            });
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="country">
                <Header title={this.state.title}/>
                {/*推荐*/}
                <Recommend RecomData={this.state.carouselList} Type="country"/>
            </div>
        )
    }
}