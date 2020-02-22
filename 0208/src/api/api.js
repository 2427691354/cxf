import axios from 'axios'
import Router from 'vue-router'

axios.defaults.baseURL = "/api";
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;   //设置cross跨域 并设置访问权限 允许跨域携带cookie信息



//获取气压数据
export const findWeeklyPressureDataBySensorId = () => {
    return axios({
        method: 'get',
        url: '../../static/sensorData.json',
        
         
     })
 }
 
