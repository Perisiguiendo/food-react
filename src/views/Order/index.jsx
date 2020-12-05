import React, { Component } from 'react'
import axios from 'axios'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import './index.css'

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedList: []
    }
  }

  componentDidMount() {
    axios.get('/orderdetail/details/?order=11')
      .then(res => {
        if (res.status === 200) {
          this.setState({
            orderedList: [...this.state.orderedList, ...res.data]
          })
        }
      })
  }

  render() {
    const { orderedList } = this.state;
    const total = () => {
      let totalPrice = 0;
      orderedList.forEach(v => {
        totalPrice += v.counts * v.food_price;
      })
      return totalPrice.toFixed(2);
    }

    return (
      <WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        <div className='order__food-wrap'>
          <WhiteSpace />
          <WhiteSpace />
          {
            orderedList.map(item => {
              return (
                <div key={item.food_id}>
                  <div className='order__ordered'>
                    <span className="order__ordered-name">{item.food_name}</span>
                    <span className="order__ordered-price">￥ {item.food_price}</span>
                    <span className="order__ordered-count">x {item.counts}</span>
                  </div>
                  <WhiteSpace />
                </div>
              )
            })
          }
          <div className='order__btn-wrap'>
            <div>总金额：<span className='order__total'>￥{total()}</span></div>
            <button className='order__submit'>再来一单</button>
          </div>
          <WhiteSpace />
          <WhiteSpace />
        </div>
      </WingBlank >
    )
  }
}

export default Order