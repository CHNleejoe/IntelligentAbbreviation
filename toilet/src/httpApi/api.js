import {
    get,
    post,
} from './fetch'

import axios from "axios"

axios.defaults.baseURL = '' //测/试服务器  

const vartolet = {
    test(param){
        return get('',param)
    },
    testPost(param){
        return post('',param)
    }
}
export default vartolet