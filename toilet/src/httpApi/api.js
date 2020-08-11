import {
    get,
    post,
} from './fetch'

import axios from "axios"
axios.defaults.withCredentials = true;//让ajax携带cookie
axios.defaults.baseURL = 'http://192.168.3.171:8481/ucloud-smart-toilet' //测试服务器 
// axios.defaults.baseURL = 'http://192.168.3.89:80' //本地悦轩服务器
const vartolet = {
    toiletNumber(param){
        return get('/api/v1/statistics/get/toiletNumber',param)// 公厕数量统计
    },
    visitors(){
        return get('/api/v1/statistics/get/visitors')//当月如厕人数
    },
    getByMonth(){
        return get('/api/v1/statistics/waterele/byMonth')//当月水电
    },
    getByToday(){
        return get('/api/v1/statistics/waterele/byToday')//当日水电
    },
    getExcept(){
        return get('/api/v1/statistics/except')//当日异常情况
    },
    getAlarm(){
        return get('/api/v1/statistics/alarm')//当日公厕报警情况
    },
    getLocation(){
        return get('/api/v1/statistics/get/lnglat') //获取公厕的所有坐标点
    },
    getFlow(){
        return get('/api/v1/statistics/visitor/flow')//昨日人流量
    },
    flowByCondition(param){//排名统计
        return get('/api/v1/statistics/flowByCondition',param)
    },
    getToiletInfo(param){//根据公厕id获取公厕信息
        return get('/api/v1/statistics/get/toiletInfo',param)
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