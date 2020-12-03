import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WhiteSpace } from 'antd-mobile';
import { addItemCount, minusItemCount } from "../../action/action";
import { getList } from '../../reducers/food.redux'

import './index.css'

@connect(
  state => state.foodReducer,
  { getList }
)
class ItemA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      checkedList: []
    }
  }

  componentDidMount() {
    // this.setState({
    //   data: [...this.props.data]
    // })
    this.props.getList();
  }

  handleClick(item) {
    this.setState({
      checkedList: [...this.state.checkedList, item]
    }, () => {
      console.log('checkedList', this.state.checkedList);
      this.props.sendAction();
    })
  }


  render() {
    const { addHandleClick, minusHandleClick } = this.props;
    return (
      <div className='order-list'>
        {this.props.data.map(item => {
          return (
            <div className='order-food__wrap' key={item.food_id}>
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
                        <div style={{ height: '100%', display: 'flex', alignContent: 'space-around' }}>
                          <span className='order-food__icon-minus iconfont' onClick={minusHandleClick.bind(this, item)}>&#xe68f;</span>
                          <div style={{ height: '100%', width: '1rem', textAlign: 'center', lineHeight: '1.8rem', margin: '0 auto' }}>{item.food_count}</div>
                        </div>
                      }
                    </div>
                    <span className='order-food__icon-add iconfont' onClick={addHandleClick.bind(this, item)}>&#xe659;</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHandleClick: (data) => dispatch(addItemCount(data)),
    minusHandleClick: (data) => dispatch(minusItemCount(data))
  }
}

const mapStateToProps = (state) => {
  console.log('stateToProps', state);
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemA);