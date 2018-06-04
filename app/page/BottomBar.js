/**
 * BottomBar.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/6/4.
 *
 */

import React, {PureComponent} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import {Styles, Metrics} from '../config/Theme'

class BottomBar extends PureComponent {
    render() {
        const {jumpToIndex} = this.props;
        const {routes, index} = this.props.navigationState;
        return (
            <View style={styles.tab}>
                {routes.length > 0 && routes.map((item,index) => {
                    return <TouchableOpacity
                        onPress={() => {
                            jumpToIndex(index)
                        }}
                        style={styles.btn}
                        key={item.key}
                    >
                        <Text>{this.tab_name(item.key)}</Text>

                    </TouchableOpacity>
                })}

            </View>
        );
    }

    tab_name = (name) => {
        switch (name) {
            case 'Home':
                return '首页'
            case 'PullRefresh1':
                return '发现'
            case 'QRCode':
                return '我的'
        }
    }
}


export default BottomBar;


const styles = StyleSheet.create({
    tab: {
        height: 50,
        backgroundColor: 'white',
        ...Styles.row_center,
        borderTopWidth: 1,
        borderTopColor: 'gray',
        width: Metrics.screenWidth
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
  
  