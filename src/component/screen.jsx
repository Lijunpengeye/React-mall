import React, { Component } from "react";
export default class Screen extends Component {
	constructor(){
		super();
        // asc 升序排列
        // desc 降序排列
        // false 无
        this.state = {
            sale:false,//销量
            price:false,//价格
            stock:false,//库存量
            gotime:false,//上架时间
        }; 
	}



    sortScreen(type){
        if (type == 'sale') {
            if(!this.state.sale) {
                this.Initialization()
                this.setState({sale:true,})
                this.props.subSort('xl',1)
                return
            }else{
                this.Initialization()
                this.setState({sale:false,})
                this.props.subSort('','')
            }
        }

        if (type == 'price') {
            if(!this.state.price) {
                this.Initialization()
                this.setState({price:'asc',})
                this.props.subSort('sj',1)
                return
            }else if(this.state.price == 'asc'){
                this.Initialization()
                this.setState({price:'desc',})
                this.props.subSort('sj',2)
                return
            }else if(this.state.price == 'desc'){
                this.Initialization()
                this.setState({price:false,})
                this.props.subSort('','')
            }
        }

        if (type == 'stock') {
            if(!this.state.stock) {
                this.Initialization()
                this.setState({stock:'asc',})
                this.props.subSort('kcl',1)
                return
            }else if(this.state.stock == 'asc'){
                this.Initialization()
                this.setState({stock:'desc',})
                this.props.subSort('kcl',2)
                return
            }else if(this.state.stock == 'desc'){
                this.Initialization()
                this.setState({stock:false,})
                this.props.subSort('','')
            }
        }

        if (type == 'gotime') {
            if(!this.state.gotime) {
                this.Initialization()
                this.setState({gotime:'asc',})
                this.props.subSort('sjsj',1)
                return
            }else if(this.state.gotime == 'asc'){
                this.Initialization()
                this.setState({gotime:'desc',})
                this.props.subSort('sjsj',2)
                return
            }else if(this.state.gotime == 'desc'){
                this.Initialization()
                this.setState({gotime:false,})
                this.props.subSort('','')
            }
        }
        // this.props.subSort()
    }

    Initialization(){
        // console.log(this)
        this.setState({
            sale:false,//销量
            price:false,//价格
            stock:false,//库存量
            gotime:false,//上架时间
        })
    }

    render(){
        return(
            <div className="screen">
                <ul className="screen-ul">
                    <li className="screen-li" onClick={(elem)=>this.sortScreen('sale')}>
                        <span className={this.state.sale ? 'active' :''}> 销量</span>
                    </li>
                    <li className="screen-li" onClick={(elem)=>this.sortScreen('price')}>
                        <span  className={this.state.price ? 'active' :''}>价格</span>
                        <div className="sort">
                            <i className={this.state.price == 'asc' ? 'icon iconfont icon-jiantou shang active' :'icon iconfont icon-jiantou shang'}></i>
                            <i className={this.state.price == 'desc' ? 'icon iconfont icon-jiantou active' :'icon iconfont icon-jiantou'} ></i>
                        </div>
                    </li>
                    <li className="screen-li" onClick={(elem)=>this.sortScreen('stock')}>
                        <span  className={this.state.stock ? 'active' :''}>库存量</span>
                        <div className="sort">
                            <i className={this.state.stock == 'asc' ? 'icon iconfont icon-jiantou shang active' :'icon iconfont icon-jiantou shang'}></i>
                            <i className={this.state.stock == 'desc' ? 'icon iconfont icon-jiantou active' :'icon iconfont icon-jiantou'} ></i>
                        </div>
                    </li>
                    <li className="screen-li" onClick={(elem)=>this.sortScreen('gotime')}>
                        <span  className={this.state.gotime ? 'active' :''}>上架时间</span>
                        <div className="sort">
                            <i className={this.state.gotime == 'asc' ? 'icon iconfont icon-jiantou shang active' :'icon iconfont icon-jiantou shang'}></i>
                            <i className={this.state.gotime == 'desc' ? 'icon iconfont icon-jiantou active' :'icon iconfont icon-jiantou'} ></i>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}	