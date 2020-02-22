<template>
  <div class="container">
    <div class="nav">
      <div class="nav_item">
        <router-link to="/RDM">数据大屏</router-link>
      </div>
      <div class="nav_item">
        <router-link to="/statisticalAnalysis">统计分析</router-link>
      </div>
      <div class="nav_item active">
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
        <div class="con_top_text">车载终端编号</div>
        <div class="con_top_input">
          <el-input v-model="input" size="small"></el-input>
        </div>
        <div class="con_top_text">车牌号</div>
        <div class="con_top_input">
          <el-input v-model="input" size="small"></el-input>
        </div>
        <el-button type="primary" class="btn">查询</el-button>
      </div>
      <div class="con_top2_text">车载终端编号： 车牌号： 数据上传时间：</div>
      <div class="con_center">
        <div class="con_center_item">
          <div class="con_center_item_text">车辆数据</div>
          <div class="table">
            <div class="table_title">车速</div>
            <div class="table_title">机电转速1</div>
            <div class="table_title">机电转速2</div>
            <div class="table_title">仪表转速</div>
            <div class="table_content">km/h</div>
            <div class="table_content">rpm</div>
            <div class="table_content">rpm</div>
            <div class="table_content"></div>
            <div class="table_title">油门开度</div>
            <div class="table_title">刹车开度</div>
            <div class="table_title">舱门状态</div>
            <div class="table_title">档位</div>
            <div class="table_content">%</div>
            <div class="table_content">%</div>
            <div class="table_content">-</div>
            <div class="table_content"></div>
            <div class="table_title">前气压值</div>
            <div class="table_title">后气压值</div>
            <div class="table_title">驻气压值</div>
            <div class="table_title">前门状态</div>
            <div class="table_content">MPa</div>
            <div class="table_content">MPa</div>
            <div class="table_content">MPa</div>
            <div class="table_content">-</div>
            <div class="table_title">DCDC故障</div>
            <div class="table_title"></div>
            <div class="table_title"></div>
            <div class="table_title"></div>
            <div class="table_content"></div>
            <div class="table_content"></div>
            <div class="table_content"></div>
            <div class="table_content"></div>
          </div>
        </div>
        <div class="con_center_item_i"></div>
        <div class="con_center_item">
          <div class="con_center_item_text">车辆速度</div>
          <div id="cheliangsudu"></div>
        </div>
      </div>
      <div class="con_center">
        <div class="con_center_item">
          <div class="con_center_item_text">总电流</div>
        </div>
        <div class="con_center_item_i"></div>
        <div class="con_center_item">
          <div class="con_center_item_text">总电压</div>
        </div>
      </div>
      <div class="con_center">
        <div class="con_center_item">
          <div class="con_center_item_text">蓄电池温度</div>
        </div>
        <div class="con_center_item_i"></div>
        <div class="con_center_item">
          <div class="con_center_item_text">极值</div>
        </div>
      </div>
      <div class="bottom"></div>
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
.mainbody {
  margin-left: 60px;
  width: 1400px;
}
.table_title {
  width: 171px;
  height: 32px;
  text-align: center;
  padding-top: 11px;
  font-size: 14px;
  float: left;
  border-right: 1px rgb(64, 99, 180) solid;
  color: #fff;
  background-color: rgb(29, 72, 166);
}
.table_content {
  width: 171px;
  height: 32px;
  padding-top: 11px;
  text-align: center;
  font-size: 14px;
  float: left;
  border-right: 1px rgb(64, 99, 180) solid;
  color: rgb(163, 243, 247);
}
.btn {
  margin-left: 20px;
  width: 90px;
  height: 35px;
  box-shadow: 0 2px 4px rgba(66, 124, 255, 0.2),
    3px 4px 4px rgba(66, 124, 255, 0.2), -3px 4px 4px rgba(66, 124, 255, 0.2);
}
.con_top_text {
  padding-left: 20px;
  padding-top: 7px;
  padding-right: 5px;
  float: left;
}
.con_top_input {
  width: 200px;
  float: left;
}
.con_top {
  margin-top: 20px;
  margin-bottom: 15px;

  padding-top: 28px;
  padding-bottom: 28px;
  color: rgb(163, 243, 247);
  background: rgb(12, 37, 90);
  box-shadow: 0 0px 80px rgba(20, 40, 110, 0.5) inset;
}
.con_top2_text {
  margin-bottom: 15px;
  font-size: 12px;
  color: #cccccc;
}
.con_center {
  height: 380px;

  margin-bottom: 15px;
}
.con_center_item {
  width: 690px;
  height: 380px;
  float: left;
  background: rgb(12, 37, 90);
  box-shadow: 0 0px 80px rgba(20, 40, 110, 0.5) inset;
}
.con_center_item_text,
.con_bottom_text {
  color: #fff;
  padding-left: 20px;
  padding-top: 10px;
  font-size: 18px;
}
.con_center_item_i {
  width: 20px;
  height: 380px;
  float: left;
}
.bottom {
  height: 20px;
}
#cheliangsudu{
  width:740px;
  height: 400px;
  margin-left: -20px;
  margin-top: -20px;
}
</style>
<script>
import echarts from "echarts";
import axios from "axios";
//将数据格式现在js文件中 等会将他暴露出去
import { optionYibiao2 } from "../../../static/op.js";
// import {findBreakdownMaintenance} from '@/api/api'
export default {
  name: "charts",
  data() {
    return {};
  },
  mounted() {
    this.drawYibiao();

  },
  methods: {
    drawYibiao() {
      var yibiao = echarts.init(document.getElementById("cheliangsudu"));

      //绘制基本数据
      yibiao.setOption(optionYibiao2);
      window.onresize = yibiao.resize;
      //myChart.showLoading();//没有加载出来隐藏加载动画
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        setTimeout(() => {
          //动画配置
          yibiao.setOption({
            //json里数据
            series: [
              {
                data: res.data.sudu2
              },
              {
                data: res.data.zhuansu2
              },
              {
                data: res.data.youbiao2
              },
              {
                data: res.data.shuibiao2
              }
            ]
          });
        }, 200);
      });
    },
  }
};
</script>