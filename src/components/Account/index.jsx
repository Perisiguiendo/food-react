import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.css';
import { getList, addItem, minusItem } from '../../reducers/food.redux'

@connect(
    state => state.foodReducer,
    { getList, addItem, minusItem }
)
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            food: []
        }
    }

    showList = (e) => {
        e.stopPropagation();
        const account = document.getElementById('account-list');
        const account__list = document.getElementsByClassName('account__list')[0];
        if (this.state.isShow) {
            this.setState({
                isShow: false
            }, () => {
                account.classList.remove('account__mask');
                account__list.classList.remove('show');
                account__list.classList.add('hidden');
            })
        } else {
            this.setState({
                isShow: true
            }, () => {
                account.classList.add('account__mask');
                account__list.classList.remove('hidden');
                account__list.classList.add("show");
            })
        }
    }

    handleClickBlankHiddenAccount() {
        const account = document.getElementById('account-list');
        const account__list = document.getElementsByClassName('account__list')[0];
        if (this.state.isShow) {
            this.setState({
                isShow: false
            }, () => {
                document.body.onclick = () => {
                    account.classList.remove('account__mask');
                    account__list.classList.add('hidden');
                    account__list.classList.remove('show');
                }
            })
        }
    }

    payPage(e) {
        e.stopPropagation();
        this.props.history.push('pay');
    }

    // clearClick(e) {
    //     e.stopPropagation();
    //     this.props.clearHandleClick(this.props.data);
    // }

    minusClick(item, event) {
        event.stopPropagation();
        this.props.minusItem(item);
    }

    addClick(item, event) {
        event.stopPropagation();
        this.props.addItem(item);
    }

    render() {
        console.log('account-render');
        const { food } = this.state;
        let newList = food.filter(v => v.food_count > 0) // 过滤数量为0的数据
        const total = () => {
            let totalPrice = 0;
            newList.forEach(item => {
                totalPrice += parseFloat(item.food_price) * parseFloat(item.food_count);
            })
            return totalPrice.toFixed(2);
        }

        return (
            <div>
                <div id="account-list" onClick={this.handleClickBlankHiddenAccount.bind(this)}></div>
                <div className='test'>
                    <div className='account__wrap'>
                        <span className='account__icon iconfont' onClick={this.showList.bind(this)}>&#xe602;</span>
                        <span className='account__total'>共 ￥ {total()}</span>
                        <span className='account__submit' onClick={this.payPage.bind(this)}>去结算</span>
                    </div>
                    <div className='account__list hidden' onClick={(e) => { e.stopPropagation() }}>
                        <div className='account__content'>
                            <div className="account__food-list-title">
                                <span>已选商品</span>
                                {/* <span className='iconfont'>&#xe639;</span> */}
                            </div>
                            <div className="account__food-list">
                                {
                                    newList.map(item => {
                                        return (
                                            <div key={item.food_id} className='account__ordered'>
                                                <span className="account__ordered-name">{item.food_name}</span>
                                                <span className="account__ordered-price">￥ {item.food_price}</span>
                                                <span className="account__ordered-btn">
                                                    <span className='iconfont account__ordered-minus' onClick={this.minusClick.bind(this, item)}>&#xe68f;</span>
                                                    <span style={{ lineHeight: '22px', margin: '0 10px' }}>{item.food_count}</span>
                                                    <span className='iconfont account__ordered-add' onClick={this.addClick.bind(this, item)}>&#xe659;</span>
                                                </span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account
