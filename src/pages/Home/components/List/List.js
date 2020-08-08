import React from 'react';
import "./List.css";
import qianggou from "../../../../assets/img/img/home/1.jpg"

let arrData = [
    { id: 1, name: "限时抢购" },
    { id: 2, name: "积分商城" },
    { id: 3, name: "联系我们" },
    { id: 4, name: "商品分类" }
]
export default function List() {


    return (
        <div className="List">
            {
                arrData.map((item => {
                    return (
                        <div key={item.id} className="List_img">
                            <img src={qianggou} alt="" />
                            <p>{item.name}</p>
                        </div>
                    )
                }))
            }


        </div>
    )
}
