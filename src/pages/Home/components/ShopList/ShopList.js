import React from 'react';
import "./ShopList.css";
import { Link } from "react-router-dom"

export default function ShopList(props) {
    const { goods } = props;
    // console.log(goods);


    return (
        <div className="shopList">
            {
                goods.map((item) => {
                    return (
                        <div key={item.id} className="list">
                            <div className="left">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="right">
                                <h3>{item.goodsname}</h3>
                                <p>￥{item.price}</p>
                                <Link to={"/shopdetail?id=" + item.id} className="btn">
                                    <span>立即抢购</span>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
