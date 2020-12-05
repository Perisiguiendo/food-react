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
      temp: 0
    }
  }

  groupBy(array, f) {
    const groups = {};
    array.forEach(v => { //注意这里必须是forEach 大写
      const group = JSON.stringify(f(v));
      groups[group] = groups[group] || [];
      groups[group].push(v);
    });
    return Object.keys(groups).map(group => {
      return groups[group];
    });
  }

  render() {
    const { food } = this.props;
    // const sorted = this.groupBy(food, function (item) {
    //   return [item.food_type];//按照name进行分组
    // })
    // console.log(sorted);
    // for (let i = 0; i < sorted.length; i++) {
    //   for (let j = 0; j < sorted[i].length; j++) {
    //     sorted[i][j].food_unique = `${i}_${j}`;
    //   }
    // }

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
                      {
                        (item.food_count > 0)
                        &&
                        (
                          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                            <span
                              className='order-food__icon-minus iconfont'
                              onClick={() => {
                                this.props.minusItem(item);
                                this.setState({
                                  temp: 0
                                })
                              }}
                            >&#xe68f;</span>
                            <div className='order-food_count'>{item.food_count}</div>
                          </div>
                        )
                      }
                    </div>
                    <span
                      className='order-food__icon-add iconfont'
                      onClick={() => {
                        this.props.addItem(item);
                        this.setState({
                          temp: 0
                        })
                      }}
                    >&#xe659;</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
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