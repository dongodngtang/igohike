/**
 * QRCode.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/5/23.
 *
 */

import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {QRCodeScanner} from '../component'

export default class QRCode extends PureComponent {

    state = {
        qrcontent: ''
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#000'}}>
                <QRCodeScanner onRead={this.onSuccess} finderY={50}/>
            </View>


        );
    }

    onSuccess = (data) => {
        console.log(data)
        alert(data.data)
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: 'red',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});

