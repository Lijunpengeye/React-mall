import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Carousel, WingBlank } from 'antd-mobile';
import '@/styles/index.css'
export default class Swiper extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        console.log(this.props.bannerData,'swiperdata')
    }
    render(){
        return(
            
            <WingBlank className="indexCarousel">
                <Carousel
                autoplay={false}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {this.props.bannerData.map((item,i) => (
                    <Link  key={i} to={{pathname:'/searchlist',state:{themeId:item.id,title:item.title}}} className="li-link">
                    
                        <img
                            src={item.url2}
                            key={item.id}
                            alt={item.title}
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                              // fire window resize event to change height
                              window.dispatchEvent(new Event('resize'));
                              this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </Link>
                ))}
                </Carousel>
            </WingBlank>
        )
    }
}
