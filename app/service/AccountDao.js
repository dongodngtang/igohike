/**
 * AccountDao.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/6/1.
 *
 */

import {post, get} from '../config/fetch';
import api from '../config/api';

/**
 * 接口介绍
 * @param body 参数
 * @param resolve 正确回调
 * @param reject 错误回调
 */
export function app_home(body, resolve, reject) {

    post(api.app_api_do, body, resolve, reject)
}