import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getList } from '../../reducers/food.redux'
import { connect } from 'react-redux'

import NavLinkBar from '../NavLinkBar'
import Home from '../../views/Home'
import Order from '../../views/Order'
import Pay from '../../views/Pay'

@connect(
    state => state.foodReducer,
    { getList }
)
class DashBoard extends Component {

    componentDidMount() {
        this.props.getList();
    }

    render() {
        return (
            <div>
                <main>
                    <Switch>
                        <Route path='/home' exact component={Home} />
                        <Route path='/ordered' exact component={Order} />
                        <Route path='/pay' exact component={Pay} />
                    </Switch>
                </main>
                <footer>
                    <Route component={NavLinkBar} />
                </footer>
            </div>
        )
    }
}

export default DashBoard
