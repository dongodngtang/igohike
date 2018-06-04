/**
 * fetch.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/6/1.
 *
 */

import {create, SERVER_ERROR, TIMEOUT_ERROR, NETWORK_ERROR} from 'apisauce';
import api from './api'
import {isStrNull, showToast} from "./utils";
import {Platform, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import md5 from 'react-native-md5';
import Query from 'querystring'

let TAG = 'Http:';

global.VERSION = '060300';
global.CHANNEL_ID = '2';

// Get Tua Info
let _getAppTUAString = function () {
    let tuaStr = (Platform.OS === 'ios' ? 'I' : 'A') + 'LC-';// I 表示 iOS，android 为 ALC-
    tuaStr += global.VERSION + '&' // APP 版本
    tuaStr += 'NA' + '&' // 保留字段
    tuaStr += DeviceInfo.getSystemVersion() + '-2&' // 系统版本，后面的2表示未越狱/root
    tuaStr += Dimensions.get('window').width + '_' + Dimensions.get('window').height + '_12&' // 宽_高_系统字体大小
    tuaStr += DeviceInfo.getModel() + '&' // 手机型号
    // tuaStr += DeviceInfo.getUniqueID() + "&"; // 设备标识
    tuaStr += (global.CHANNEL_ID ? global.CHANNEL_ID : '1') + '&' // 渠道
    tuaStr += 'V1' // 不知道啥
    return tuaStr
};

/**
 * 生成签名
 * @param serviceName
 * @param search
 */
function sign(serviceName, search) {
    let requestSingCode = '748F9987483EC37852EF1B3E95A8BCD2';
    return md5.hex_md5(serviceName + search + requestSingCode)

}


// define the api
const client = create({
    baseURL: api.production,
    timeout: 30000
});
//请求头设置
client.setHeader('tua', _getAppTUAString());
client.setHeader('user-agent', DeviceInfo.getUserAgent());
client.setHeader('credentials', 'include');


//请求 响应 log打印
if (__DEV__) {
    client.addMonitor(response => {
        const {url} = response.config;
        console.log('RES_HTTP: ' + url, response)
    })

    client.addRequestTransform(request => {
        console.log(TAG + request.url, request)
    })
}

function fillPath(path, params) {
    return path.replace(/:\w*/g, (id_str) => {
        return params[id_str.substring(1)]
    })
}

/**
 * URL参数处理
 * @param path
 * @param params
 * @returns {*}
 */
function search(path, params) {

    let url = fillPath(path, params)
    if (params) {
        let paramsArray = []
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
        if (url.search(/\?/) === -1)
            url += '?' + paramsArray.join('&')
        else
            url += '&' + paramsArray.join('&')
    }
    return url
}

/**
 * 为获取sign,URL参数处理
 * @param query
 * @returns {string}
 * @private
 */
function _stringifySorted(query) {
    let keys = Object.keys(query).sort()
    let pairs = keys.reduce(function (collect, key) {
        let p = {}
        p[key] = query[key]
        return collect.concat(decodeURIComponent(Query.stringify(p)))
    }, [])
    return pairs.join('&')
}

/**
 * 响应结果处理
 * @param res
 * @param resolve
 * @param reject
 */
function handle(res, resolve, reject) {
    const {ok, status, data} = res;
    if (ok && status === 200 && data.code === 0) {
        resolve && resolve(data.result)
    } else {
        reject && reject(data.msg);
        errReject(res)
    }
}

/**
 * 转化成已签名的URL
 * @param url
 * @param body
 * @returns {string|*}
 */
function convert_url(url, body) {
    let timestamp = Math.round(new Date().getTime())
    let params = {
        method: body.method,
        subtime: timestamp,
        version: global.VERSION
    };
    let str_query = _stringifySorted(params);
    console.log(str_query)
    params.sign = sign(url, str_query);
    let pathname = search(url, params)
    console.log(pathname)
    return pathname;
}


export function get(url, body, resolve, reject) {
    client.get(url, body).then(res => {
        handle(res, resolve, reject)
    }).catch(err => {
        errReject(err)
    })
}


export function post(url, body, resolve, reject) {

    url = convert_url(url, body)
    client.post(url, body).then(res => {
        handle(res, resolve, reject)
    }).catch(err => {
        errReject(err)
    })
}

/**
 * 错误处理
 * @param err
 */
function errReject(err) {
    console.log(err)
}



