/**
 * index.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/5/19.
 *
 */
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Images, Styles} from '../config/Theme'
import {Scene} from 'react-native-router-flux';
import Home from './home/Home.componet'
import PullRefresh from './PullRefresh';
import QRCode from './QRCode';
import {SFSelectLocation} from '../component/location'
import BottomBar from './BottomBar'

export const Scenes = () => {

    return <Scene key="root">

        <Scene
            init
            animationEnabled={false}
            tabBarPosition={'bottom'}
            tabBarComponent={BottomBar}
            tabs
            key="Tabs">

            <Scene key="Home"
                   component={Home}
                   hideNavBar/>

            <Scene key="PullRefresh1"
                   component={PullRefresh}
                   {...TopNav({
                       title: 'ScrollView 刷新'
                   })}/>

            <Scene key="QRCode"
                   component={QRCode}
                   hideNavBar/>

        </Scene>


        <Scene
            key="SFSelectLocation"
            component={SFSelectLocation}
            {...TopNav({
                title: '选择城市'
            })}/>

    </Scene>
};


const TopNav = ({title, back}) => {

    return {
        title,
        back,
        headerStyle: {backgroundColor: 'white'},
        titleStyle: {justifyContent: 'center', color: 'black', textAlign: 'center'},
        renderLeftButton: () => renderLeft(),
        renderRightButton: () => renderRight()
    }
};

const renderLeft = () => {
    return <TouchableOpacity
        onPress={() => router.pop()}
        style={[{height: 40, width: 50}, Styles.flex_center]}>
        <Image
            style={{height: 14, width: 18}}
            source={Images.arrow_left}/>
    </TouchableOpacity>
}

const renderRight = () => {
    return <TouchableOpacity
        style={[{height: 40, width: 50}, Styles.flex_center]}>

    </TouchableOpacity>
}

const styles = StyleSheet.create({
    backButtonTextStyle: {color: 'white'}
})