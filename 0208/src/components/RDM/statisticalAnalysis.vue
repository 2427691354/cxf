<template>
  <div class="container">
    <div class="nav">
      <div class="nav_item">
        <router-link to="/RDM">数据大屏</router-link>
      </div>
      <div class="nav_item active">
        <router-link to="/statisticalAnalysis">统计分析</router-link>
      </div>
      <div class="nav_item">
        <router-link to="/separateVehicleMonitoring">单车监控</router-link>
      </div>
      <div class="nav_item">
        <router-link to="/vehicleManagement">车辆管理</router-link>
      </div>
      <div class="nav_item">
        <router-link to="/userManagement">用户管理</router-link>
      </div>
    </div>
    <div class="mainbody">
      <div class="con_top">
        时间
        
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
         <el-button type="primary" class="btn">查询</el-button>
      </div>
      <div class="con_center">
        <div class="con_center_item">
            <div class="con_center_item_text">
                新增故障比例
            </div>
            <div id="four">

            </div>
        </div>
        <div class="con_center_item_i"></div>
        <div class="con_center_item">
            <div class="con_center_item_text">
                新增故障数量
            </div>
            <div id="five">

            </div>
        </div>
      </div>
      <div class="con_center">
        <div class="con_center_item">
            <div class="con_center_item_text">
                能耗统计数据
            </div>
            <div id="nenghaotongji"></div>
        </div>
        <div class="con_center_item_i"></div>
        <div class="con_center_item">
            <div class="con_center_item_text">
                蓄电池平均电流电压
            </div>
            <div id="xudianchi"></div>
        </div>
      </div>
      <div class="con_bottom">
          <div class="con_bottom_text">
              车辆城市分布Top10
          </div>
          <div id="cheliangchengshi"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  background-color: rgb(12, 36, 88);
}
a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
}
.nav {
  position: fixed;
  top: 120px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 27px;
}
.nav_item {
  width: 15px;
  height: 80px;
  margin-top: 2px;
  padding: 8px 7px;
  background-color: rgb(28, 72, 165);
}
.active {
  background-color: rgb(13, 120, 204);
}
.btn{
    margin-left: 20px;
    width: 90px;
    height: 35px;
    box-shadow: 0 2px 4px rgba(66,124,255,.2), 3px 4px 4px rgba(66,124,255,.2), -3px 4px 4px rgba(66,124,255,.2);
}
.mainbody{
    margin-left: 60px;
    width: 1400px;
}
.con_top {
    
    margin-top: 20px;
    margin-bottom: 15px;
    padding-left: 20px;
    padding-top: 28px;
    padding-bottom: 28px;
    color: rgb(163, 243, 247);
    background: rgb(12, 37, 90);
    box-shadow: 0 0px 80px rgba(20, 40, 110,.5) inset;
}
.con_center{
 
    height: 380px;
    
    margin-bottom: 15px;
}
.con_center_item{
    width: 690px;
    height: 380px;
    float: left;
    background: rgb(12, 37, 90);
    box-shadow: 0 0px 80px rgba(20, 40, 110,.5) inset;
  
}
.con_center_item_text,.con_bottom_text{

    color: #fff;
    padding-left: 20px;
    padding-top: 10px;
    font-size: 18px;
    border-bottom: 1px rgb(63, 100, 180) solid;
}
.con_center_item_i{
    width: 20px;
    height: 380px;
    float: left;
    
}
.con_bottom{
    height: 480px;
    margin-bottom: 30px;
    background: rgb(12, 37, 90);
    box-shadow: 0 0px 80px rgba(20, 40, 110,.5) inset;
}
#four{
    width: 97%;
    height: 100%;
}
#five{
    width: 97%;
    height: 100%;
}
#nenghaotongji{
    width: 97%;
    height: 100%;
}
#xudianchi{
    width: 97%;
    height: 100%;
    margin-top: -10px;
}
#cheliangchengshi{
  width: 98%;
  height: 90%;
}
</style>
<script>
import echarts from "echarts";
import axios from "axios";
//将数据格式现在js文件中 等会将他暴露出去
import { option, option1, option2,option3,option4,optionNenghaotongji,optionXudianshi,optionCheliangchengshi } from "../../../static/op.js";
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  },
  mounted(){
    this.drawChart4();
     this.drawChart5();
     this.drawNenghaotongji();
     this.drawXudanchi();
     this.drawCheliangchengshi();
  },
  methods:{
    drawChart4() {
      var myChart4 = echarts.init(document.getElementById("four"));
      myChart4.setOption(option3);
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        myChart4.setOption({
          series: [
            {
              data: res.data.bili
            }
          ]
        });
      });
    },
     drawChart5() {
      var myChart5 = echarts.init(document.getElementById("five"));
      myChart5.setOption(option4);
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        myChart5.setOption({
          series: [
            {
              data: res.data.shuliang
            }
          ]
        });
      });
    },
    drawNenghaotongji(){
      var nenghaotongji = echarts.init(document.getElementById("nenghaotongji"));
      nenghaotongji.setOption(optionNenghaotongji);
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        nenghaotongji.setOption({
          series: [
            {
              data: res.data.nenghaotongji
            }
          ]
        });
      });
    },
    drawXudanchi(){
      var xudianchi = echarts.init(document.getElementById("xudianchi"));
      xudianchi.setOption(optionXudianshi);
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        xudianchi.setOption({
          series: [
            {
              data: res.data.xudianliu
            },
            {
              data: res.data.xudianya
            }
          ]
        });
      });
    },
    drawCheliangchengshi(){
      var cheliangchengshi = echarts.init(document.getElementById("cheliangchengshi"));
      cheliangchengshi.setOption(optionCheliangchengshi);
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        cheliangchengshi.setOption({
          series: [
            {
              data: res.data.city
            }
          ]
        });
      });
    }
  }
};
</script>