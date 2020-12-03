import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux'
import { getCat } from '../../reducers/cat.redux'
import './index.css'

@connect(
  state => state.foodCat,
  { getCat }
)
class Tab extends Component {

  componentDidMount() {
    this.props.getCat();
  }

  render() {
    const { food_cat } = this.props;
    const data =
      [
        {
          "id": 1,
          "food_cat_name": "肉类"
        },
        {
          "id": 2,
          "food_cat_name": "蔬菜类"
        },
        {
          "id": 3,
          "food_cat_name": "水果类"
        },
        {
          "id": 4,
          "food_cat_name": "套餐"
        }
      ]
    const tabs = [];
    data.forEach((item) => {
      let obj = {};
      obj['key'] = item.id;
      obj['title'] = item.food_cat_name;
      tabs.push(obj)
    })
    return (
      <div style={{ height: 'calc(100vh -  8.4rem - 130px)', background: '#ffffff', width: 61 }}>
        <div style={{ height: 200 }}>
          <Tabs tabs={tabs}
            initialPage={'1'}
            tabBarPosition="left"
            tabDirection="vertical"
            tabBarActiveTextColor="#ff7e02"
            tabBarUnderlineStyle={{ color: '#ff7e02' }}
          >
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Tab
