import React from 'react';
import "./Banner.css";
import { Carousel } from 'antd-mobile';

export default function Banner(props) {

    const { banner } = props;
    // console.log(banner);
    return (
        <div className="banner">
            <Carousel autoplay={true} infinite>
                {
                    banner.map(item => {
                        return <img key={item.id} src={item.img} alt="" />
                    })
                }
            </Carousel>
        </div>
    )
}
