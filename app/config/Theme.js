/**
 * Theme.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/5/19.
 *
 */


import {Dimensions, Platform, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('window');

export function realSize(size) {
    return size * width / 375;
}

export const Metrics = {
    screenHeight: height,
    screenWidth: width
}

export const Images = {
    f: require('../static/account/F.png'),
    arrow_left: require('../static/account/arrow-thin-left.png'),
    home_selected: require('../static/home_selected.png'),
    home_select: require('../static/home_select.png')
}


export const Styles = {
    row_center: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    column_center: {
        alignItems: 'center'
    },
    flex_center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#ECECEC'
    }
}

export const Colors = {
    _06c: '#06c8d0',
    _000: "#000000"
}


export function isIphoneX() {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimen.height === 812 || dimen.width === 812)
    );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}

export function getStatusBarHeight(safe) {
    return Platform.select({
        ios: ifIphoneX(safe ? 44 : 30, 20),
        android: StatusBar.currentHeight
    });
}
  
  