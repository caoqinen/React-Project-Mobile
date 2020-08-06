import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import "./GoBack.css";

class GoBack extends Component {

    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <button onClick={() => this.goBack()}>返回</button>
            </div>
        )
    }
}

export default withRouter(GoBack)
