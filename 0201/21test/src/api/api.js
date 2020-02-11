import axios from 'axios'
import Router from 'vue-router'

axios.defaults.baseURL = "/api";
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;   //设置cross跨域 并设置访问权限 允许跨域携带cookie信息

// 获取所有线路信息
export const findLineByExample = (params) => {
   return axios({
        method: 'get',
        url: 'line/findByExample',
        params: params
    })
}

// 获取所有线路信息-Json
export const findLineByLine = (params) => {
   return axios({
        method: 'post',
        url: 'line/findByLine',
        headers:{'Content-Type':'application/json'},
        data: JSON.stringify(params)
    })
}

//登录
export const loginUser = (params) => {
   return axios({
        method: 'post',
        url: 'user/login',
        headers:{'Content-Type':'application/json'},
        data: JSON.stringify(params)
    })
}

//注册
export const registerUser = (params) => {
    return axios({
         method: 'post',
         url: 'user/register',
         headers:{'Content-Type':'application/json'},
         data: JSON.stringify(params)
     })
 }

 //获取站点信息
 export const selectStationByLineID = (params) => {
    return axios({
         method: 'get',
         url: 'station/selectStationByLineID',
         params: params
     })
 }
 //获取站内气瓶最新信息
 export const getSensorNewInfoByStationID = (params) => {
    return axios({
         method: 'get',
         url: 'station/getSensorNewInfoByStationID',
         params: params
     })
 }

//获取气压数据
export const findWeeklyPressureDataBySensorId = () => {
    return axios({
        method: 'get',
        url: '../../static/sensorData.json',
        
         
     })
 }
 
