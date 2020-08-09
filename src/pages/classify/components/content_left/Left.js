import React from 'react';
import "./Left.css";

export default function Left(props) {
    const { classifyTree_left, getChildTextData, ind } = props;
    function dianqi(id, i) {
        // 点击某一条数据获取其id，通过findIndex方法找到对应下标
        const index = classifyTree_left.findIndex((value) => value.id === id)
        // console.log(index);
        // 通过这个函数吧 父级所需要的数据传递过去
        getChildTextData(index, i);
        // console.log(i);
    }

    return (
        <div className="left_classify fl">
            <ul className="ul">
                {
                    classifyTree_left.map((item, i) => {
                        return (
                            <li className={ind === i ? 'left_active' : null} onClick={() => dianqi(item.id, i)} key={item.id}><span className="sp"></span>{item.catename}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
