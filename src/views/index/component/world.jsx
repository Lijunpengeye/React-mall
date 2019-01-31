import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Recommend extends Component {
    state = {}
    componentDidMount() {}
    render(){
        return(
            <ul className="quan-list">
                {this.props.worldList.map((item,index)=>

                <Link to={'/details/'+item.goodsNo} className="list-li" key={index}>
                    {item.ifNew ? 
                        <div className="tab-new">新品</div>
                    :
                        <div></div>
                    }
                    <div className="list-img">
                        {!item.realStock ? 
                            <div className="no-goods">已抢光</div>
                        :
                            <div></div>
                        }
                        <img  src={item.imgUrl} />
                    </div>
                    <p className="smalltext">{item.deliveryText}</p>
                    <p className="name">{item.goodsName}</p>
                    <p className="price">￥{item.mallPrice}<del className="delete">￥{item.marketPrice}</del> </p>
                </Link>

                )}
            </ul>
        )
    }
}
