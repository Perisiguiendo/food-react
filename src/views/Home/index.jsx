import React, { Component } from 'react';
import { Flex, WingBlank } from 'antd-mobile';
import Tab from '../../components/Tab';
import OrderList from '../../components/OrderList'
import Account from '../../components/Account';

import './home.css'


class Home extends Component {

    render() {
        return (
            <WingBlank>
                <div
                    style={{ marginTop: 15 }}
                >
                    <Flex
                        style={{ boxShadow: '0 0 10px #9c9c9c', borderRadius: 10 }}
                    >
                        <Flex.Item>
                            <div
                                style={{
                                    width: '100%',
                                    height: 160,
                                    background: '#dddddd'
                                }}
                            >
                            </div>
                        </Flex.Item>
                    </Flex>

                    <Flex
                        style={{
                            boxShadow: '0 0 10px #afafaf',
                            marginTop: 20,
                            borderRadius: 10
                        }}
                    >
                        <Flex.Item style={{ flex: 2 }}>
                            <Tab />
                        </Flex.Item>
                        <Flex.Item style={{ flex: 8 }}>
                            <div className="home-order-list">
                                <OrderList />
                            </div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Account history={this.props.history} />
                    </Flex>
                </div>
            </WingBlank>
        )
    }
}

export default Home