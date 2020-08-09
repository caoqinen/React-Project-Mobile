import React, { Component } from 'react';
import "./Mine.css";
import { NavBar, Icon } from 'antd-mobile';

class Mine extends Component {


    render() {
        return (
            <div>
                <div className="head_classify">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}>个人中心</NavBar>
                </div>
            </div>
        );
    }
}

export default Mine;