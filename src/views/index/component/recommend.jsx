import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Recommend extends Component {
    state = {}
    componentDidMount() {}
    render(){
        return(
            <div className="list-con">
                {this.props.RecomData.map((item,index)=>
                    <div key={index} className="listbest">
                        <div className="bigimg">
                        {this.props.Type == 'index' ?
                            <img  src={item.url2} />
                            :
                            <img  src={item.url} />
                        }
                        </div>
                        <ul className="small">
                            {item.goodsList.map((element,i)=>
                                <Link to={'/details/'+element.goodsNo} key={i} className="commodity">
                                    <img src={element.imgUrl} />
                                    <p className="name">{element.goodsName}</p>
                                    <p className="price">￥{element.mallPrice}</p>
                                </Link>
                            )}
                        </ul>
                    </div>
                )}

            </div>
        )
    }
}
