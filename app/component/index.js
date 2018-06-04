/**
 * index.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/5/19.
 *
 */


import UltimateListView from './refreshlist/ultimateListView';//下拉刷新，上拉加载 FlatList
import UltimateRefreshView from './refreshlist/refreshableScrollView';//刷新ScrollView
import Base from './Base'//父容器
import Button from './Button'//按钮
import Swiper from './Swiper'//轮播图
import Input from './Input'//输入框
import CountDownButton from './CountDownButton'//倒计时按钮
import QRCode from './qrcode/QRCode'//生成二维码
import QRCodeScanner from './qrcode/QRCodeScanner'//扫描二维码
import ImageLoad from './ImageLoad'

export {
    UltimateListView,//下拉刷新，上拉加载列表
    UltimateRefreshView,//自定义头部ScrollView
    Base,//所有Component类的顶层容器
    Button,
    Swiper,
    Input,
    CountDownButton,
    QRCode,
    QRCodeScanner,
    ImageLoad
}