import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import './index.css'
import { withRouter } from 'react-router';

class NavLinkBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { pathname } = this.props.location;
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                tabBarPosition='bottom'
            >
                <TabBar.Item
                    key="home"
                    title="列表"
                    icon={<div style={{
                        width: '28px',
                        height: '28px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '28px',
                        height: '28px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selected={pathname === '/home'}
                    onPress={() => {
                        this.props.history.push('home');
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '28px',
                            height: '28px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '28px',
                            height: '28px',
                            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                    }
                    key="order"
                    title="订单"
                    selected={pathname === '/ordered'}
                    onPress={() => {
                        this.props.history.push('ordered');
                    }}
                >
                </TabBar.Item>
            </TabBar>
        )
    }
}

export default NavLinkBar
