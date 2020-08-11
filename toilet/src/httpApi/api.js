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
    },
    pointTables(param) {
        return get('api/v1/get/pointTables', param)
    },
    type(param) {
        return get('api/v1/get/type', param)
    },
    deviceByType(param) {
        return get('api/v1/get/deviceByType', param)
    },
    pointTables(param) {
        return get('api/v1/get/pointTables', param)
    },
    saveGraph(param) {
        return post('api/v1/saveGraph', param)
    },

}
export default vartolet