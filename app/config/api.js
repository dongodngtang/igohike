/**
 * api.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/6/1.
 *
 */


export default {
    production: 'https://mobile.touna.cn/',
    app_api_do: 'appApi.do'
}

function user_id() {
    return loginUser.user_id
}

function profile() {
    return `account/users/${user_id()}/profile`
}