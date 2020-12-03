import React, { Component } from 'react';
import { connect } from 'react-redux';

class Order extends Component {
  render() {
    return (
      <div style={{
        width: 190,
        border: '1px solid #dddddd',
        margin: 20
      }}>
        xxxxxxOrder
        {/* {
          this.props.data.map(item => {
            return (
              <div key={item.food_id}>
                <div>
                  <img style={{ width: 100, height: 50 }} src="https://tse2-mm.cn.bing.net/th/id/OIP.Tlumx9iXVC4rqPbISLZaRQHaF7?pid=Api&rs=1" alt='pic' />
                  <br />
                  <span>{item.food_name}</span>
                  <br/>
                  <span>{item.food_count}</span>
                </div>
              </div>
            )
          })
        } */}
      </div>
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
)(Order);