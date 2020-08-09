import { NavBar } from 'antd-mobile';
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
                <NavBar mode="light">{title_name}</NavBar>
            </div>

        )
    }
}

export default withRouter(Head)

