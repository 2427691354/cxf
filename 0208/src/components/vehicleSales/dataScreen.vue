<template>
  <div class="container">
    <div class="nav">
      <div class="nav_item active">
        <router-link to="/vehicleSales">数据大屏</router-link>
      </div>
      <div class="nav_item">
        <router-link to="/sale">销售销售</router-link>
      </div>
    </div>
    <div class="mainbody">
      <div class="left">
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title">
              <strong>统计销售</strong>
            </div>
            <div id="reli"></div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title">
              <strong>销售量统计</strong>
            </div>
            <div id="xiaoshouzhuxing"></div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title">
              <strong>城市销售Top5</strong>
            </div>
            <div id="xiaoshoutop5"></div>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="ct_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title1">
              <strong>销售情况</strong>
            </div>
            <div id="map"></div>
          </div>
        </div>
        <div class="cb_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title">
              <strong>各年月销售趋势</strong>
            </div>
            <div id="xiaoshouqushi"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title">
              <strong>销售情况</strong>
            </div>
            <div class="test">
              <div id="leida"></div>
            </div>
            
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title">
              <strong>车辆销售统计</strong>
            </div>
            <div class="item_insertb_table">
              <table cellspacing="0">
                <tr class="item_insertb_table_head">
                  <td>地区</td>
                  <td>渠道</td>
                  <td>成交量</td>
                  <td>时间</td>
                </tr>
                <tr class="item_insertb_table_body">
                  <td>深圳</td>
                  <td>天猫</td>
                  <td>700</td>
                  <td>2019.01</td>
                </tr>
                <tr class="item_insertb_table_body">
                  <td>成都</td>
                  <td>京东</td>
                  <td>600</td>
                  <td>2019.01</td>
                </tr>
                <tr class="item_insertb_table_body">
                  <td>杭州</td>
                  <td>天猫</td>
                  <td>500</td>
                  <td>2019.01</td>
                </tr>
                <tr class="item_insertb_table_body">
                  <td>上海</td>
                  <td>线下</td>
                  <td>400</td>
                  <td>2019.01</td>
                </tr>
                <tr class="item_insertb_table_body">
                  <td>无锡</td>
                  <td>线下</td>
                  <td>300</td>
                  <td>2019.01</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="lr_item">
          <div class="item_inserta"></div>
          <div class="item_insertb">
            <div class="item_insertb_title">
              <strong>各价格段销售占比</strong>
            </div>
            <div id="zhanbi"></div>
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
.item_insertb_title {
  color: #fff;
  font-size: 18px;
}
.item_insertb_title1{
    color: #fff;
    font-size: 18px;
    padding-left: 300px;
    padding-top: 10px;
}
.item_insertb_table {
  text-align: center;
  width: 94%;
  padding-left: 3%;
}
.item_insertb_table_head {
  color: #fff;
  background-color: rgb(29, 72, 165);
}
.item_insertb_table_body {
  color: rgb(163, 243, 247);
}
.item_insertb_table td {
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
.test{
  width: 300px;
  height: 180px;
}
#map{
    width: 710px;
    height: 400px;
    margin-top: -50px;
}
#xiaoshouzhuxing{
  width: 350px;;
  height: 250px;
  margin-top: -40px;
}
#xiaoshoutop5{
  width: 350px;;
  height: 250px;
  margin-top: -50px;
}
#leida{
  width: 95%;
    height: 100%;
    margin-top: -20px;
    margin-left: 30px;
}
#zhanbi{
  width: 350px;;
  height: 250px;
  margin-top: -50px;
}
#reli{
  width: 350px;;
  height: 200px;
  margin-top: -10px;
}
#xiaoshouqushi{
  width: 710px;
    height: 225px;
    margin-top: -30px;
}
</style>
<script>
import echarts from "echarts";
import axios from "axios";
//将数据格式现在js文件中 等会将他暴露出去
import { option6,option10,option11,option12,option13,option16 } from "../../../static/op.js";
export default {
  name: "charts",
  data() {
    return {};
  },
  mounted() {
    
    this.drawMap();
    this.drawXiaoshouzhuxing();
    this.drawXiaoshoutop5();
    this.drawLeida();
    this.drawZhanbi();
    this.drawReli();
    this.drawcharts3();
  },
  methods: {
    drawMap(){
      var map = echarts.init(document.getElementById("map"));
      map.setOption(option6);
    },
    drawXiaoshouzhuxing() {
      var xiaoshouzhuxing = echarts.init(document.getElementById("xiaoshouzhuxing"));

      //绘制基本数据
      xiaoshouzhuxing.setOption(option10);
      window.onresize = xiaoshouzhuxing.resize;
      //myChart.showLoading();//没有加载出来隐藏加载动画
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        setTimeout(() => {
          //动画配置
          xiaoshouzhuxing.setOption({
            //json里数据
            series: [
            {
              data: res.data.zhanbi
            },
            {
              data: res.data.xiaoshou
            }
          ]
          });
        }, 200);
      });
    },
    drawXiaoshoutop5() {
      var xiaoshoutop5 = echarts.init(document.getElementById("xiaoshoutop5"));

      //绘制基本数据
      xiaoshoutop5.setOption(option11);
      window.onresize = xiaoshoutop5.resize;
      //myChart.showLoading();//没有加载出来隐藏加载动画
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        setTimeout(() => {
          //动画配置
          xiaoshoutop5.setOption({
            //json里数据
            series: [
            {
              data: res.data.jinzida
            }
          ]
          });
        }, 200);
      });
    },
    drawLeida() {
      var leida = echarts.init(document.getElementById("leida"));

      //绘制基本数据
      leida.setOption(option12);
      window.onresize = leida.resize;
      //myChart.showLoading();//没有加载出来隐藏加载动画
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        setTimeout(() => {
          //动画配置
          leida.setOption({
            //json里数据
            series: [
            {
              data: [
                {
                  value: res.data.leida
                }
              ]
            }
          ]
          });
        }, 200);
      });
    },
    drawZhanbi() {
      var zhanbi = echarts.init(document.getElementById("zhanbi"));

      //绘制基本数据
      zhanbi.setOption(option13);
      window.onresize = zhanbi.resize;
      //myChart.showLoading();//没有加载出来隐藏加载动画
      //获取数据
      axios.get("../../../static/m.json").then(res => {
        setTimeout(() => {
          //动画配置
          zhanbi.setOption({
            //json里数据
            series: [{
            data: res.data.xiaobing
          }]
          });
        }, 200);
      });
    },
    drawcharts3() {
      var myChart3 = echarts.init(document.getElementById("xiaoshouqushi"));
      myChart3.setOption(option16);
      //获取数据
      axios.get("../../static/m.json").then(res => {
        myChart3.setOption({
          series: [
            {
              data: res.data.year
            },
            {
              data: res.data.year2
            }
          ]
        });
      });
    },
    drawReli() {
      var myChart2 = echarts.init(document.getElementById("reli"));
      function getVirtulData(year) {
        year = year || "2017";
        var date = +echarts.number.parseDate(year + "-03-01");
        var end = +echarts.number.parseDate(year + "-04-02");
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
          data.push([
            echarts.format.formatTime("yyyy-MM-dd", time),
            Math.floor(Math.random() * 50)
          ]);
        }
        return data;
      }
      var option15 = {
        tooltip: {
          position: "top",
          formatter: function(p) {
            var format = echarts.format.formatTime("yyyy-MM-dd", p.data[0]);
            return format + "销售量" + ": " + p.data[1];
          }
        },
        calendar: {
          top: "middle",
          left: "center",
          orient: "vertical",
          cellSize: 25,
          yearLabel: {
            show: false
          },
          dayLabel: {
            firstDay: 1,
            nameMap: "cn"
          },
          monthLabel: {
            nameMap: "cn",
         
            textStyle: {
              fontSize: 12,
              color: "rgb(163, 243, 247)"
            }
          },
          range: ["2017-03", "2017-03-31"]
        },
        //相当于图例
        visualMap: {
          min: 0,
          max: 50,
          calculable: true,
          orient: "vertical",
          textStyle:{
            color:'#fff'
          },
          left: "270",
          top: "-5",
          
        },
        series: [
          {
            type: "graph",
            edgeSymbol: ["none", "arrow"],
            coordinateSystem: "calendar",
            symbolSize: 0,
            calendarIndex: 0,
            itemStyle: {
              color: "yellow",
              shadowBlue: 9,
              shadowOffsetX: 1.5,
              shadowOffsetY: 3,
              shadowColor: "#555"
            },
            lineStyle: {
              color: "#D10E00",
              width: 1,
              opacity: 1
            },
            data: getVirtulData(2017),
            z: 20
          },
          {
            type: "heatmap",
            coordinateSystem: "calendar",
            data: getVirtulData(2017)
          }
        ]
      };
      myChart2.setOption(option15);
    },
    
  }
};
</script>