/**
 * Base.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/5/21.
 *
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Loading from './Loading'


class Base extends Component {


    render() {
        const {style} = this.props;
        return (
            <View style={[{flex: 1, backgroundColor: '#fbbcd9'}, style]}>
                {this.props.children}

                <Loading
                    ref={ref => this.loading = ref}/>

            </View>
        );
    }
}


export default Base;

  