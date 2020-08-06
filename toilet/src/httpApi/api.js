import {
    get,
    post,
} from './fetch'

import axios from "axios"

axios.defaults.baseURL = 'http://192.168.3.171:8481/ucloud-smart-toilet/' //测/试服务器  

const vartolet = {
    test(param) {
        return get('', param)
    },
    testPost(param) {
        return post('', param)
    },
    getGraphStyle(param) {
        return get('api/v1/get/graphStyle', param)
    },
    graphById(param) {
        return get('api/v1/get/graphById', param)
    }

}
export default vartolet