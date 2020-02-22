<template>
    <div class="container">
        <div class="nav">
            <div class="nav_item">
                <router-link to="/vehicleSales">数据大屏</router-link>
            </div>
            <div class="nav_item active">
                <router-link to="/sale">销售销售</router-link>
            </div>
        </div>
        <div class="mainbody">
      <div class="left">
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title"><strong>仪表图</strong></div>
            <div id="yibiao"></div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title"><strong>车速</strong></div>
            <div id="chesu"></div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
             <div class="item_insertb_title"><strong>里程数</strong></div>
            <div id="shuidi"></div>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="ct_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title1">
              <strong>车辆</strong>
            </div>
            <div id="map"></div>
          </div>
        </div>
        <div class="cb_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div id="cheliangxingshi"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title"><strong>档位</strong></div>
            <div id="dangwei"></div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title"><strong>加速踏板</strong></div>
            <div id="jiasutaban"></div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title"><strong>故障热力图</strong></div>
            <div id="guzhangreli"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  background-color: rgb(12, 36, 88);
}
.mainbody {
  width: 100%;
  height: 655px;
  padding-top: 10px;
}
.left {
  width: 24%;
  height: 100%;
  margin-left: 3%;
  float: left;
}
.lr_item {
  height: 30%;
  margin-bottom: 4%;
  background: url("../../assets/card.png");
  background-size: 100% 100%;
}
.item_inserta {
  height: 3.5%;
}
.item_insertb {
  margin: auto;
  height: 95%;
  width: 99%;
  box-shadow: 0px 0px 20px rgba(66, 124, 255, 0.2) inset;
  border-radius: 0px 0px 15px 0px;
}
.item_insertb_title{
    color: #fff;
    font-size: 18px;
}
.item_insertb_title1{
    color: #fff;
    font-size: 18px;
    padding-left: 300px;
    padding-top: 10px;
}
.ct_item {
  height: 62%;
  margin-bottom: 2%;
  background: url("../../assets/card.png");
  background-size: 100% 100%;
}
.cb_item {
  height: 30%;
  margin-bottom: 4%;
  background: url("../../assets/card.png");
  background-size: 100% 100%;
}
.center {
  width: 46%;
  height: 100%;
  float: left;
  margin: 0px 1%;
}
.right {
  width: 24%;
  height: 100%;
  float: left;
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
#yibiao{
  width: 370px;;
  height: 360px;
  margin-top: -100px;
}
#chesu{
  width: 350px;;
  height: 200px;
  margin-top: -50px;
}
#dangwei{
  width: 350px;;
  height: 200px;
  margin-top: -50px;
}
#jiasutaban{
  width: 370px;;
  height: 250px;
  margin-top: -50px;
}
#cheliangxingshi{
  width: 710px;
  height: 225px;
}
#map{
    width: 710px;
    height: 400px;
    margin-top: -50px;
}
#guzhangreli{
  width: 350px;;
  height: 100%;
  margin-left: 10px;

  
  
}
#shuidi{
  width: 350px;;
  height: 100%;
  margin-left: 10px;
  margin-top: -40px;
}
</style>
<script>
import echarts from "echarts";
import axios from "axios";
import 'echarts-liquidfill';
//将数据格式现在js文件中 等会将他暴露出去
import { optionYibiao,optionChesu,optionDangwei,optionJiasutaban,optionCheliangxingshi,option6,option17 } from "../../../static/op.js";
// import {findBreakdownMaintenance} from '@/api/api'
export default {
  name: "charts",
  data() {
    return {};
  },
  mounted() {
    this.drawYibiao();
    this.drawChesu();
    this.drawDangwei();
    this.drawJiasutaban();
    this.drawCheliangxingshi();
    this.drawMap();
    this.drawcharts4();
   this.drawShuidi();
  },
  methods: {
    drawYibiao() {
      var yibiao = echarts.init(document.getElementById("yibiao"));

      //绘制基本数据
      yibiao.setOption(optionYibiao);
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
                data: res.data.sudu
              },
              {
                data: res.data.zhuansu
              },
              {
                data: res.data.youbiao
              },
              {
                data: res.data.shuibiao
              }
            ]
          });
        }, 200);
      });
    },
    drawChesu() {
      var chesu = echarts.init(document.getElementById("chesu"));
  
      //绘制基本数据
      chesu.setOption(optionChesu);
      window.onresize = chesu.resize;
      // chesu.showLoading();//没有加载出来隐藏加载动画
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        setTimeout(() => {
          //动画配置
          
          chesu.setOption({
            //json里数据
            series: [
              {
                data: res.data.chesu
              },
            ]
          });
        }, 200);
      });
    },
    drawDangwei() {
      var dangwei = echarts.init(document.getElementById("dangwei"));
  
      //绘制基本数据
      dangwei.setOption(optionDangwei);
      window.onresize = dangwei.resize;
      // dangwei.showLoading();//没有加载出来隐藏加载动画
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        setTimeout(() => {
          //动画配置
      
          dangwei.setOption({
            //json里数据
            series: [
              {
                data: res.data.dangwei
              },
            ]
          });
        }, 200);
      });
    }, 
    drawJiasutaban() {
      var jiasutaban = echarts.init(document.getElementById("jiasutaban"));
  
      //绘制基本数据
      jiasutaban.setOption(optionJiasutaban);
      window.onresize = jiasutaban.resize;
      // dangwei.showLoading();//没有加载出来隐藏加载动画
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        setTimeout(() => {
          //动画配置
       
          jiasutaban.setOption({
            //json里数据
            series: [
              {
                data: res.data.jiasutaban
              },
            ]
          });
        }, 200);
      });
    }, 
    drawCheliangxingshi() {
      var cheliangxingshi = echarts.init(document.getElementById("cheliangxingshi"));
  
      //绘制基本数据
      cheliangxingshi.setOption(optionCheliangxingshi);
      window.onresize = cheliangxingshi.resize;
      // dangwei.showLoading();//没有加载出来隐藏加载动画
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        setTimeout(() => {
          //动画配置
          
          cheliangxingshi.setOption({
            //json里数据
            series: [
              {
                data: res.data.jiasutaban2
              },
              {
                data: res.data.chesu2
              },
              {
                data: res.data.dangwei2
              },
            ]
          });
        }, 200);
      });
    }, 
    drawcharts4(){
        var myChart4 = echarts.init(document.getElementById("guzhangreli"));
      myChart4.setOption(option17);
      //获取数据
      axios.get("../../static/m.json").then(res => {
        myChart4.setOption({
          series: [
            {
              data: res.data.reli.map(function(item){
                  return [item[1], item[0], item[2] || '-'];
              })
            }
          ]
        });
      });
    },
    drawMap(){
      var map = echarts.init(document.getElementById("map"));
      map.setOption(option6);
    },
    drawShuidi(){
       // 基于准备好的dom，初始化echarts实例
      var chart = echarts.init(document.getElementById('shuidi'))
      // 监听屏幕变化自动缩放图表
      window.addEventListener('resize', function () {
        chart.resize()
      })
      // 绘制图表
      chart.setOption({
        // 图表主标题
        // title: {
        //   text: '全国就业率', // 主标题文本，支持使用 \n 换行
        //   top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
        //   left: 'center', // 值: 'left', 'center', 'right' 同上
        //   textStyle: { // 文本样式
        //     fontSize: 30,
        //     fontWeight: 600,
        //     color: '#fff'
        //   }
        // },
        // 提示框组件
        // tooltip: {
        //   trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        //   textStyle: {
        //     color: '#fff' // 文字颜色
        //   },
        //   // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
        //   // 水球图: {a}（系列名称），{b}（无），{c}（数值）
        //   // 使用函数模板   传入的数据值 -> value: number|Array,
        //   formatter: function (value) {
        //     return value.seriesName + ': ' + value.data * 100 + '%'
        //   }
        // },
        series: [{
          type: 'liquidFill',
          name: '全国就业率', // 系列名称，用于tooltip的显示，legend 的图例筛选
          radius: '62%', // 水球图的半径
          center: ['50%', '60%'], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
          // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形  
          // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
          shape: 'circle',
          phase: 0, // 波的相位弧度 不设置  默认自动
          direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
          outline: {
            show: true,
            borderDistance: 0, // 边框线与图表的距离 数字
            itemStyle: {
              opacity: 1, // 边框的透明度   默认为 1
              borderWidth: 3, // 边框的宽度
              // shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
              // shadowColor: '#fff', // 边框的阴影颜色,
              borderColor: '#6CC0AD' // 边框颜色
            }
          },
          // 图形样式
          itemStyle: {
            color: '#6CC0AD', // 水球显示的背景颜色
            //opacity: 1, // 波浪的透明度
            shadowBlur: 10 // 波浪的阴影范围
          },
          backgroundStyle: {
            color: '#15357E', // 水球未到的背景颜色
            //opacity: 0.5
          },
          // 图形的高亮样式
          emphasis: {
            itemStyle: {
              opacity: 0.8 // 鼠标经过波浪颜色的透明度
            }
          },
          // 图形上的文本标签
          label: {
            fontSize: 60,
            fontWeight: 400,
            color: '#294D99'
          },
          data: [0.08] // 系列中的数据内容数组
        }]
      })
    }
  }
}
    
</script>