import { NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import "./Head.css";

class Head extends Component {
    constructor() {
        super();
        this.state = {
            title_name: null
        }
    }

    // 点击退回一步
    onLeftClick() {
        this.props.history.goBack();
    }

    componentDidMount() {
        this.setState({
            title_name: this.props.tit
        })
    }
    render() {
        const { title_name } = this.state;
        return (

            //头部 
            <div className="head_detail">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.onLeftClick()}>{title_name}</NavBar>
            </div>

        )
    }
}

export default withRouter(Head)

