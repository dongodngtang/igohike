/**
 * PullRefresh.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/5/21.
 *
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Base, UltimateRefreshView, Button, QRCode, ImageLoad} from '../component'
import {app_home} from '../service/AccountDao'

class PullRefresh extends Component {
    render() {
        const arrys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (
            <Base>
                <ImageLoad
                    style={{
                        height: 200,
                        width: 200
                    }}
                    source={{uri: 'http://img3.imgtn.bdimg.com/it/u=2048380355,427352968&fm=27&gp=0.jpg'}}/>
                <UltimateRefreshView
                    onRefresh={(onRefreshEnd) => {
                        setTimeout(onRefreshEnd, 1000)
                        console.log('onRefresh')
                    }}>
                    {arrys.map((item, key) => {
                        return <Button key={key}
                                       onPress={() => {
                                           let body = {
                                               method: 'appHome'
                                           }
                                           app_home(body, data => {
                                               console.log(data)
                                           }, err => {
                                               console.log(err)
                                           })
                                       }}>
                            <Text>按钮{item}</Text>
                        </Button>
                    })}

                    <QRCode/>

                </UltimateRefreshView>
            </Base>
        );
    }
}


export default PullRefresh;
