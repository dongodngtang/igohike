/**
 * Home.componet.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/5/19.
 *
 */
import React, {PureComponent} from 'react';
import {View, Text,Platform} from 'react-native'
import {Base, Button, UltimateListView} from '../../component'


export default class Home extends PureComponent {
    render() {
        return (
            <Base
                ref={ref => this.base = ref}>

                <UltimateListView
                    refreshableMode={Platform.OS === "ios" ? 'advanced' : 'basic'}
                    keyExtractor={(item, index) => `item${index}`}
                    onFetch={this.onFetch}
                    item={this.renderItem}/>


            </Base>
        );
    }

    onFetch = (page = 1, postRefresh, endFetch) => {
        let arr = [];
        if (page < 5) {
            for (let i = 0; i < 10; i++) {
                arr.push(i)
            }
        }
        setTimeout(() => {
            postRefresh(arr, 10)
        }, 2000)


    };

    renderItem = (item, index) => {
        return <View style={{height: 100, backgroundColor: index % 2 === 0 ? '#485989' : '#7f6e96'}}>

        </View>
    }
}


