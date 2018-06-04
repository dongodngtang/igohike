/**
 * Router.js
 *
 * @des the file dees
 * @author lorne (2270333671@qq.com)
 * Created at 2018/5/21.
 *
 */

import {Actions} from 'react-native-router-flux';

export default class Router {

    push({sceneKey, params}) {
        Actions.push(sceneKey, {params})
    }

    pop() {
        Actions.pop()
    }


    toPullRefresh() {
        console.log('toPullRefresh')
        this.push({
            sceneKey: 'PullRefresh'
        })
    }



    toSFSelectLocation() {
        this.push({
            sceneKey: 'SFSelectLocation'
        })
    }
}



  
  