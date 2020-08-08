import React from 'react';
import "./Header.css";
import logo from "../../../../assets/img/img/home/logo.jpg";
import { SearchBar } from 'antd-mobile';

export default function Header() {
    return (
        <div>

            <div className="header_toubu clearfix">
                <div className="left fl">
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className="right fl">
                    <SearchBar placeholder="寻找商品" />
                </div>
            </div>
        </div>
    )
}
