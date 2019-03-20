import React, { Component } from 'react';
import {getCategoryTitle,getCategoryCom} from '@/api/category';
import { Link } from 'react-router-dom';
import FooterNav from '@/component/footer_nav'
import Header from '@/component/header'
import Loading from '@/component/loading'

import '@/styles/home.scss'
import '@/styles/common.scss'
import '@/styles/category.scss'


export default class Category extends Component {
    constructor(){
        super();
        this.state = {
            leftTitle:[],
            title:'分类',
            titleId:'',
            contentData:[],
            loadingType:false
        }
    }

    componentWillMount(){
        getCategoryTitle().then(res=>{
            let data = res.data.result
            console.log(data)
            this.setState({
                leftTitle:data,
                titleId:data[0].classid
            })
            this.getCom(data[0].classid)
        }).catch(err=>{
            console.log(err)
        })
    }

    SelectTitle(id){
        // console.log(id,'------------e-----')
        this.setState({
            titleId:id
        })
        this.getCom(id)
    }

    getCom(id){
        console.log('---------------')
        console.log(id)
        let data = {
            categoryId:id
        }
        this.setState({
            loadingType:true
        })
        getCategoryCom(data).then(res=>{
            let dataArr = res.data.result.classTwoList
            this.setState({
                contentData:dataArr,
                loadingType:false
            })
            console.log(dataArr,'--------dataArr-----------')
        }).catch(err=>{
            console.log(err)
        })
    }


    render(){
        return(
            <div className="category">
                <Header title={this.state.title}/>

                <ul className="category-tab">
                    {this.state.leftTitle.map((item,index)=>
                        <div key={index}>
                            {item.classid ==  this.state.titleId?
                                <li className="tab-li border-select" >{item.classdesc}</li>
                                :
                                <li className="tab-li"  onClick={(e)=>this.SelectTitle(item.classid)}>{item.classdesc}</li>
                            }
                        </div>
                    )}
                </ul>

                <div className="category-com">
                    <div className="category-com-div">
                        {this.state.contentData.length ?
                            <div>
                            {this.state.contentData.map((item,index)=>
                                <div className="com-div" key={index}>
                                    <div className="com-title">{item.name}</div>
                                    <ul className="com-ul">
                                        {item.threeCategoryList.map((com,i)=>
                                            <Link to={{pathname:'/goodslist',state:{query:'threeCategory',title:com.threeName,id:com.id}}}  className="com-li" key={i}>
                                                <img className="com-li-img" src={com.imgUrl} />
                                                <span>{com.threeName}</span>
                                            </Link>
                                        )}
                                    </ul>
                                </div>
                            )}
                            </div>

                        :
                            <img className="none-img" src="http://www.weinihaigou.com/m-images/com-no-num.png" />

                        }
                    </div>
                </div>

                {this.state.loadingType ?
                    <Loading></Loading>
                    :
                    <div></div>
                }
                <FooterNav activeType={'category'} />
            </div>

        )
    }
}
