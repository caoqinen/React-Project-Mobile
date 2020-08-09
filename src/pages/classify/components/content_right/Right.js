import React from 'react';
// 把这个变成路由组件
import { withRouter } from "react-router-dom";

import "./Right.css";

function Right(props) {
    const { data } = props;
    if (!data) {
        return <div></div>
    }
    // console.log(data.children);

    function toDetail(id, name) {
        props.history.push(`/classifyDetail?id=${id}&name=${name}`)
    }
    return (
        <div className="right_classify fl">
            {
                data.children.map((item) => {
                    return (
                        <div onClick={() => toDetail(item.id, item.catename)} className="pic fl" key={item.id}>
                            <img className="img" src={item.img} alt="" />
                            <p>{item.catename}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default withRouter(Right)
