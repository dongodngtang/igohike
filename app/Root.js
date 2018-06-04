/**
 * Root.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/5/19.
 *
 */

import React, {Component} from 'react';
import {Router} from 'react-native-router-flux';
import {Scenes} from './page';
import RouterO from './page/Router'

export default class Root extends Component {
    constructor(props) {
        super(props)
        this.router = this.router || new RouterO();
        global.router = this.router;
    }

    render() {
        return <Router>
            {Scenes()}
        </Router>
    }

}