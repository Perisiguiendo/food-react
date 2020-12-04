import React, { Component } from 'react';
import { WingBlank, Flex, NavBar, Icon, WhiteSpace, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import axios from 'axios'

import './index.css'


@connect(
    state => state.foodReducer,
    null
)
class Pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmit: false
        }
    }

    submit(order, foods) {
        if (foods.length > 0) {
            axios.post('/orderdetailll', {
                order,
                foods
            })
                .then(res => {
                    if (res.status === 200) {
                        this.showToastNoMask();
                    } else {
                        this.failToast();
                    }
                })
        }
    }

    showToastNoMask() {
        Toast.success('Load success !!!', 1);
    }

    failToast() {
        Toast.fail('Load failed !!!', 1);
    }


    render() {
        const { food } = this.props;
        let totalPrice = 0;
        let foods = [];
        let newList = food.filter(v => v.food_count > 0) // 过滤数量为0的数据
        newList.forEach(v => {
            let temp = {};
            temp.food_id = v.food_id;
            temp.food_count = v.food_count;
            foods.push(temp);
            totalPrice += v.food_price * v.food_count;
        })

        return (
            <div>
                <Flex>
                    <Flex.Item>
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" color='#ffac26' />}
                            onLeftClick={() => this.props.history.push('home')}
                        >确认订单</NavBar>
                    </Flex.Item>
                </Flex>
                <Flex style={{ borderRadius: 5 }}>
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
                            餐台号：<span>1</span>
                        </div>
                    </Flex.Item>
                </Flex>
                <WingBlank>
                    <Flex>
                        <Flex.Item>
                            <div style={{ maxHeight: 'calc(100vh -  8.4rem - 80px)', overflow: 'scroll' }}>
                                <WhiteSpace />
                                <WhiteSpace />
                                <div>
                                    {
                                        !newList.length && <div className="iconfont pay__null">&#xe621;</div>
                                    }
                                </div>
                                <div>
                                    {
                                        Boolean(newList.length) && (<div className='pay__list'>
                                            <WhiteSpace />
                                            {
                                                newList.map(item => {
                                                    return (
                                                        <div key={item.food_id}>
                                                            <WingBlank>
                                                                <WhiteSpace />
                                                                <div className='pay__ordered'>
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
                                                        </div>
                                                    )
                                                })
                                            }
                                            <WhiteSpace />
                                        </div>)
                                    }
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                </WingBlank>

                <Flex style={{ position: 'fixed', bottom: '4rem', width: '100%' }}>
                    <Flex.Item>
                        <div>
                            <WhiteSpace />
                            <WhiteSpace />
                            <div className='pay__submit'>
                                <span className='account__icon iconfont'>&#xe602;</span>
                                <span className='account__total'>共 ￥ {totalPrice.toFixed(2)}</span>
                                <span className='account__submit' onClick={() => this.submit({ order: 1 }, foods)}>提交</span>
                            </div>
                        </div>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}

export default Pay