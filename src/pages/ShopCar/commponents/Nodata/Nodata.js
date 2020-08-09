import React from 'react';
import "./Nodata.css";
import shopCar_img from "../../../../assets/img/tab_shopping_nor.png";

export default function Nodata() {
    return (
        <div className="nodata_box">
            <img className="pic" src={shopCar_img} alt="" />
            <p>购物车还是空的快去逛逛吧~</p>
        </div>
    )
}
