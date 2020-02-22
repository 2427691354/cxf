<template>
  <div class="container">
    <div class="nav">
      <div class="nav_item active">
        <router-link to="/RDM">数据大屏</router-link>
      </div>
      <div class="nav_item">
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
      <div class="left">
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
              <div id="three">

              </div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
              <div class="item_insertb_title"><strong>故障时间轴</strong></div>
              <div class="item_insertb_left">
                  <div class="item_insertb_left_item">2018-04-12</div>
                  <div class="item_insertb_left_item">2018-04-08</div>
                  <div class="item_insertb_left_item">2018-04-05</div>
              </div>
              <div class="item_insertb_center"></div>
              <div class="item_insertb_right">
                  <div class="item_insertb_right_item">无锡，驱动电机超速</div>
                  <div class="item_insertb_right_item">苏州，发动机冷却液过高</div>
                  <div class="item_insertb_right_item">深圳，驱动电机过载</div>
              </div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
              <div id="huanxing">

              </div>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="ct_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
              <div class="item_insertb_title1"><strong>故障热力分布</strong></div>
              <div id="map"></div>
          </div>
        </div>
        <div class="cb_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
              <div id="one">

              </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
              <div id="two">

              </div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
              <div class="item_insertb_title"><strong>维修人员排名情况</strong></div>
              <div class="item_insertb_table">
                  <table cellspacing="0">
                      <tr class="item_insertb_table_head">
                          <td>姓名</td>
                          <td>地区</td>
                          <td>维修单数</td>
                          <td>满意度</td>
                      </tr>
                      <tr class="item_insertb_table_body">
                         
                          <td>杨明明</td>
                          <td>无锡</td>
                          <td>120</td>
                          <td>非常满意</td>
                      </tr>
                    <tr class="item_insertb_table_body">
                         
                          <td>李亮</td>
                          <td>南京</td>
                          <td>100</td>
                          <td>满意</td>
                      </tr>
                      <tr class="item_insertb_table_body">
                          
                          <td>陈坤</td>
                          <td>上海</td>
                          <td>96</td>
                          <td>满意</td>
                      </tr>
                     <tr class="item_insertb_table_body">
                          
                          <td>张良</td>
                          <td>常州</td>
                          <td>57</td>
                          <td>满意</td>
                      </tr>
                     <tr class="item_insertb_table_body">
                          
                          <td>万明明</td>
                          <td>苏州</td>
                          <td>86</td>
                          <td>满意</td>
                      </tr>
                  </table>
              </div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title"><strong>故障原因词云</strong></div>
              <div id="word_cloud_index">

              </div>
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
  height: 650px;
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
.item_insertb_left{
    width: 35%;
    height: 80%;
    float: left;
    color: rgb(163,243,247);

}
.item_insertb_left_item{
    margin-left: 30%;
    padding-top: 15%;
    float: left;

}
.item_insertb_center{
    width: 5%;
    height: 80%;
    float: left;
    background:url('../../assets/zhu.png');
    background-size: 100% 100%;

}
.item_insertb_right{
    width: 50%;
    height: 80%;
    float: left;
    color: rgb(163,243,247);

}
.item_insertb_right_item{
    margin-left: 2%;
    padding-top: 9%;
    float: left;
 
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
.item_insertb_table{
    text-align: center;
    width: 94%;
    padding-left: 3%;
   
    
}
.item_insertb_table_head{
    color: #fff;
    background-color: rgb(29,72,165);
}
.item_insertb_table_body{
    color: rgb(163,243,247);
    
}
.item_insertb_table td{
    width: 90px;
    height: 23px;
   
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

#one{
    width: 710px;
    height: 225px;
   

}
#two{
    
    width: 97%;
    height: 205px;
}
#three{
    width: 350px;
    height: 210px;

}
#map{
    width: 710px;
    height: 400px;
    margin-top: -50px;
}
#huanxing{
  width: 97%;
    height: 205px;
}
#word_cloud_index{
  width: 100%;
    height: 160px;

 
}
</style>
<script>
import echarts from "echarts";
import axios from "axios";
require("echarts-wordcloud");
import "echarts/theme/macarons.js";
//将数据格式现在js文件中 等会将他暴露出去
import { option, option1, option2,option3,option4,option5,option14 } from "../../../static/op.js";
// import {findBreakdownMaintenance} from '@/api/api'
export default {
  name: "charts",
  data() {
    return {
      word_cloud_view: null,
    word_cloud_options: {},
    word_list: [
      { name: "欠压", value: 10927 },
      { name: "过流", value: 15902 },
      { name: "过温", value: 6902 },
      { name: "短路", value: 6902 },
      { name: "电源电压超高温", value: 9902 },
      { name: "故障", value: 6902 },
      { name: "过压", value: 6902 },
      { name: "单体电池温度过高", value: 9902 },
      { name: "单体电池温度过低", value: 9902 },
      { name: "单体断线", value: 5902 }
    ]
    };
  },
  mounted() {
    this.drawChart();
    this.drawChart2();
    this.drawChart3();
    this.drawMap();
    this.drawHuanxing();
    this.draw_word_cloud_view();
    this.init_view_data();
    
   
  },
  methods: {
     draw_word_cloud_view() {
      if (this.word_cloud_view) {
        this.word_cloud_view.dispose();
      }
      this.word_cloud_view =
        document.getElementById("word_cloud_index") &&
        echarts.init(document.getElementById("word_cloud_index"), "macarons");
      this.word_cloud_view &&
        this.word_cloud_view.setOption(this.word_cloud_options);
    },
    init_view_data() {
      let word_cloud_series = [
        {
          type: "wordCloud",
          shape: "circle",
          //maskImage: maskImage,
          left: "center",
          top: "center",
          width: "100%",
          height: "100%",
          right: null,
          bottom: null,
          sizeRange: [6, 70],
          rotationRange: [-45, 90],
          autoSize: {
            enable: true,
            minSize: 6
          },
          tooltip: {
              show:true,
            trigger: "item",
            formatter: "name"
          },
          textPadding: 0,
          // rotationStep: 45,
          // gridSize: 8,
          drawOutOfBound: false,
          textStyle: {
            normal: {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              // Color can be a callback function or a color string
              color: function() {
                // Random color
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 256),
                    Math.round(Math.random() * 256),
                    Math.round(Math.random() * 256)
                  ].join(",") +
                  ")"
                );
              }
            }
            // emphasis: {
            //   shadowBlur: 10,
            //   shadowColor: "#333"
            // }
          },
          data: this.word_list
        }
      ];

      this.word_cloud_options = {
        series: word_cloud_series
      };
      this.word_cloud_view.setOption(this.word_cloud_options);
    },
    drawChart() {
      var myChart = echarts.init(document.getElementById("one"));

      //绘制基本数据
      myChart.setOption(option);
      window.onresize = myChart.resize;
      //myChart.showLoading();//没有加载出来隐藏加载动画
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        setTimeout(() => {
          //动画配置
          myChart.setOption({
            //json里数据
            series: [
              {
                data: res.data.SOC
              },
              {
                data: res.data.ele
              },
              {
                data: res.data.vol
              }
            ]
          });
        }, 200);
      });
    },
    drawChart2() {
      var myChart2 = echarts.init(document.getElementById("two"));
      myChart2.setOption(option1);
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        myChart2.setOption({
          series: [
            {
              data: res.data.num
            }
          ]
        });
      });
    },
    drawChart3() {
      var myChart3 = echarts.init(document.getElementById("three"));
      myChart3.setOption(option2);
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        myChart3.setOption({
          series: [
            {
              data: res.data.dianliu
            },
            {
              data: res.data.dianya
            }
          ]
        });
      });
    },
    drawMap(){
      var map = echarts.init(document.getElementById("map"));
      map.setOption(option5);
    },
    drawHuanxing(){
      var huanxing = echarts.init(document.getElementById("huanxing"));
      huanxing.setOption(option14);
    },
 
  }
};
</script>