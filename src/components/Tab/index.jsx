import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';
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

  toLocation(index) {
    console.log('index');
  }

  render() {
    const { food_cat } = this.props;
    const tabs = [];
    food_cat.forEach((item) => {
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
            onTabClick={(obj, index) => {
              this.toLocation(index)
            }}
          >
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Tab
