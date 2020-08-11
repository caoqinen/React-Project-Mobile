import React, { Component } from 'react';
// import Header from "./components/Header/Header";
import Right from "./components/content_right/Right";
import Left from "./components/content_left/Left";

import "./classify.css";
import { connect } from "react-redux";
import { classifyTree, reqClassifyTreeAction } from "../../store/modules/classify";
import Head from "../../components/wufHeader/Head";

class Classify extends Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            // 添加动态类名
            i: 0,
            tit: '分类'
        }
        // 改变this指向
        this.getChildTextData = this.getChildTextData.bind(this)
    }


    componentDidMount() {
        this.props.reqClassifyTree();
    }

    getChildTextData(index, i) {
        this.setState({
            index,
            i
        })
    }
    render() {
        const { classifyTree } = this.props;
        const { index, i, tit } = this.state;
        // console.log(i);
        return (
            // 
            <div className="classify">
                {/* 头部导航 */}
                <Head tit={tit} />

                {/* 内容区 */}
                <div className="context_classify clearfix">
                    <Left ind={i} getChildTextData={this.getChildTextData} classifyTree_left={classifyTree} />
                    <Right data={classifyTree[index]} />

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        classifyTree: classifyTree(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reqClassifyTree: () => { dispatch(reqClassifyTreeAction()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Classify);