import React, { Component } from 'react'
export default function asyncComponent(fn) {


    class Zujian extends Component {

        constructor() {
            super();
            this.state = {
                Lazyloading: null
            }
        }

        componentDidMount() {
            fn().then(model => {
                this.setState({
                    Lazyloading: model.default
                })
            })
        }


        render() {
            const { Lazyloading } = this.state;
            return (
                <div>
                    {
                        Lazyloading ? <Lazyloading /> : null
                    }
                </div>
            )
        }
    }

    return Zujian;

}
