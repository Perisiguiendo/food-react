import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavLinkBar from '../NavLinkBar'
import Home from '../../views/Home'
import Order from '../../views/Order'
import Pay from '../../views/Pay'

class DashBoard extends Component {
    constructor(props) {
        super(props);
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
