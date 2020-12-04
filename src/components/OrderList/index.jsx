import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WhiteSpace } from 'antd-mobile';
import { addItem, minusItem } from '../../reducers/food.redux'

import './index.css'

@connect(
  state => state.foodReducer,
  { addItem, minusItem }
)
class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: []
    }
  }

  componentDidMount() {
    this.setState({
      food: this.props.food
    })
  }

  addItem(data) {
    const { food } = this.state;
    food.forEach(item => {
      if (item.food_id === data.food_id) {
        item.food_count += 1;
      }
    })
    this.setState({
      food: [...food]
    })
  }

  minusItem(data) {
    const { food } = this.state;
    food.forEach(item => {
      if (item.food_id === data.food_id) {
        item.food_count -= 1;
      }
    })
    this.setState({
      food: [...food]
    })
  }

  render() {
    const { food } = this.state;
    console.log('orderlist-render函数', food);
    return (
      <div className='order-list'>
        {food.map((item, index) => {
          return (
            <div className='order-food__wrap' key={item.food_id} id={`${item.food_type}_${index}`}>
              <div className='order-food__img-wrap'>
                <img className='order-food__img' src={item.food_img} alt='pic' />
              </div>
              <div style={{ margin: '0 10px', width: '100%' }}>
                <div style={{ fontSize: 18, paddingTop: 5 }}>{item.food_name}</div>
                <WhiteSpace />
                <div style={{ fontSize: 14, color: '#666666' }}>{item.food_description}</div>
                <WhiteSpace />
                <div className='order-food__ops'>
                  <div>￥<span style={{ fontSize: 20 }}>{item.food_price}</span></div>
                  <div className="order-food__ops-wrap">
                    <div className="order-food__ops-left">
                      {item.food_count}
                      {/* {
                        (item.food_count > 0)
                        &&
                        (
                          <div style={{ height: '100%', display: 'flex', alignContent: 'space-around' }}>
                            <span
                              className='order-food__icon-minus iconfont'
                              onClick={() => this.props.minusItem(item)}
                            >&#xe68f;</span>
                            <div className='order-food_count'>{item.food_count}</div>
                          </div>
                        )
                      } */}
                    </div>
                    <span
                      className='order-food__icon-add iconfont'
                      onClick={() => {
                        this.props.addItem(item);
                        this.addItem(item);
                      }}
                    >&#xe659;</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <button onClick={() => console.log(food)}>xxx</button>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
      </div>
    )
  }
}

export default OrderList