import React, { Component } from 'react';
import { WingBlank, Flex, Button, NavBar, Icon, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';

import './index.css'

class Pay extends Component {
    render() {
        const { data } = this.props;

        return (
            <WingBlank>
                <Flex>
                    <Flex.Item>
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" />}
                            onLeftClick={() => this.props.history.push('home')}
                        >确认订单</NavBar>
                    </Flex.Item>
                </Flex>
                <WhiteSpace />
                <WhiteSpace />

                <Flex>
                    <Flex.Item>
                        <div
                            style={{
                                width: '100%',
                                height: '3rem',
                                color: '#FFFFFF',
                                fontSize: '1.2rem',
                                textAlign: 'center',
                                lineHeight: '3rem',
                                backgroundImage: 'linear-gradient(to bottom, #ffac26, #ff7e02)'
                            }}
                        >
                            餐台号：<span>A01</span>
                        </div>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <div>
                            <WhiteSpace />
                            <WhiteSpace />
                            {/* <div>
                                {
                                    !data.length && <div className="iconfont pay__null">&#xe621;</div>
                                }
                            </div> */}
                            <div>
                                {
                                    Boolean(data.length) && (<div className='pay__list'>
                                        <WhiteSpace />
                                        {
                                            data.map(item => {
                                                return (
                                                    <WingBlank>
                                                        <WhiteSpace />
                                                        <div key={item.food_id} className='pay__ordered'>
                                                            <div className="pay__img-wrap">
                                                                <img className='pay__img' src={item.food_img} alt="food-pic" />
                                                            </div>
                                                            <div>
                                                                <div className="pay__right">
                                                                    <span className="pay__ordered-name">{item.food_name}</span>
                                                                    <span className="pay__ordered-price">￥ {item.food_price}</span>
                                                                </div>
                                                                <div className="pay__ordered-count">x {item.food_count}</div>
                                                            </div>
                                                        </div>
                                                        <WhiteSpace />
                                                    </WingBlank>
                                                )
                                            })
                                        }
                                        <WhiteSpace />
                                    </div>)
                                }
                            </div>
                        </div>
                        <div>
                            {
                                Boolean(data.length) && <div className="pay__total">合计：￥ 1111.00</div>
                            }
                            <div className="pay__total">
                                <span>
                                    <span className="pay__to">合计：</span>
                                    <span className="pay__num">￥ 1111.00</span>
                                </span>
                            </div>
                        </div>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <div>
                            <WhiteSpace />
                            <WhiteSpace />
                            <Button
                                style={{
                                    color: '#FFFFFF',
                                    backgroundImage: 'linear-gradient(to bottom, #ffac26, #ff7e02)'
                                }}
                            // onClick={}
                            >立即支付</Button>
                        </div>
                    </Flex.Item>
                </Flex>
            </WingBlank>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('stateToProps', state);
    return {
        data: state.checkedList
    };
}

export default connect(
    mapStateToProps
)(Pay)