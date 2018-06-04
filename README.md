

网络请求操作顺序：
1、接口写入：app/config/api  如 app_api_do: 'appApi.do'
2、接口方法定义：app/service/AccountDao 如 app_home(body, resolve, reject)
3、在界面使用接口:app/page/PullRefresh 如  let body = { method: 'appHome'};
app_home(body, data => {
       console.log(data)
     }, err => {
           console.log(err)
          })