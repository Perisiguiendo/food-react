import React, { Component } from 'react'

export default class OrderItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className='order-food__wrap' key={item.food_id}>
                <div className='order-food__img-wrap'>
                    <img className='order-food__img' src={item.food_img} alt='pic' />
                </div>
                <div>
                    <div>{item.food_name}</div>
                    <div>{item.food_description}</div>
                </div>
                <div>
                    <span className='iconfont order-food__icon'>&#xe61d;</span>
                    <span>{item.food_count}</span>
                    <span className='iconfont order-food__icon' onClick={addHandleClick.bind(this, item)}>&#xe604;</span>
                </div>
            </div>
        )
    }
}
