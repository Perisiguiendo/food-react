import React, { Component } from 'react';
import { Button } from 'antd-mobile';

export default class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableNum: 0
        }
    }
    render() {
        return (
            <div>
                <div style={{
                    width: '100%',
                    height: '30rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div
                        style={{
                            width: '22rem',
                            height: '22rem',
                            borderRadius: '10px',
                            backgroundSize: 'cover',
                            background: 'url(https://www.walkerland.com.tw/image/poi/p59102/m42441/f2ff1bcf706197bc397a24944455ca9f822991dd.jpg)'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                fontSize: '1.5rem',
                                left: '50%',
                                top: '50%',
                                transform: '(50%, 50%)',
                                width: 140,
                                height: 140,
                                backgroundColor: '#FFFFFF',
                                borderRadius: '50%'
                            }}>
                            餐桌号：{this.state.tableNum}
                        </div>
                    </div>

                </div>
                <div style={{
                    width: '100%',
                    height: '4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Button type="primary" style={{ width: '20rem' }}>点餐</Button>
                </div>
            </div>
        )
    }
}
