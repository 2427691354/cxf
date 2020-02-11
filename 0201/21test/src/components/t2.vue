<template>
  <div id="pie" style="width: 600px;height:400px;"></div>
</template>
<script>
var echarts = require("echarts");

export default {
  data() {
    return {
      data: [
        // 数据数组，name 为数据项名称，value 为数据项值
        { value: 235, name: "视频广告" },
        { value: 274, name: "联盟广告" },
        { value: 310, name: "邮件营销" },
        { value: 335, name: "直接访问" },
        { value: 400, name: "搜索引擎" }
      ]
    };
  },
  mounted() {
    this.drawPie();
  },
  methods: {
    drawPie() {
      var myChart = echarts.init(document.getElementById("pie"));
      myChart.setOption({
        series: [
          {
            name: "访问来源",
            type: "pie", // 设置图表类型为饼图
            radius: "60%", // 饼图的半径
            data: this.data, //数据
            roseType: "angle",//把饼图显示成南丁格尔图
            itemStyle: {
              normal: {
                shadowBlur: 200,//模糊级数
                shadowColor: "rgba(0, 0, 0, 0.5)"//阴影颜色
              }
            }
          }
        ]
      });
    }
  }
};
</script>