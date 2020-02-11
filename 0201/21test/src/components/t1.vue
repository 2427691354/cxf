<template>
    <div>
        <div id="bar" style="width: 500px; height: 400px;padding:100px"></div>
    </div>
</template>
<script>
var echarts = require("echarts");
export default {
  data() {
    return {
      List1: [51, 64, 40, 54], //门店一数据列表
      List2: [59, 59, 43, 60] //门店二数据列表
    };
  },
  mounted() {
    this.drawDataTable1();
  },
  methods: {
    drawDataTable1() {
      // 基于准备好的dom，初始化echarts实例
        let myChart1 = echarts.init(document.getElementById("bar"));
        
        // 绘制图表
        myChart1.setOption({
            title: { text: "2019xxx年门店销售情况" },
            grid: {
            left: "10%",
            right: "8%",
            top: "20%"
            },
            legend: {
            top: "10%",
            textStyle: { color: "#fff" },
            itemGap: 20,
            itemHeight: 10,
            data: [{ name: "门店一" }, { name: "门店二" }]
            },
            color: ["#28F2A8", "#28D8FF"],
            xAxis: [
            {
                type: "category",
                data: ["第一季度", "第二季度", "第三季度", "第四季度"],
                boundaryGap: false,
                axisLabel: {
                interval: 0,
                textStyle: {
                    color: "#fff"
                },
                lineHeight: 24
                },
                axisLine: {
                // 坐标轴线
                lineStyle: {
                    color: "rgba(85,85,85,0.4)"
                }
                },
                axisTick: {
                //刻度线
                show: false,
                lineStyle: {
                    color: "rgba(85,85,85,0.4)"
                }
                },
                axisPointer: {
                type: "shadow"
                }
            }
            ],
            yAxis: [
            {
                type: "value",
                name: "销售额（万元）",
                min: 0,
                max: 75,
                interval: 15,
                nameTextStyle: {
                color: "#fff"
                },
                axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: "#fff"
                }
                },
                axisLine: {
                lineStyle: {
                    color: "rgba(85,85,85,0.4)"
                }
                },
                axisTick: {
                show: false,
                lineStyle: {
                    color: "rgba(85,85,85,0.4)"
                }
                },
                splitLine: {
                //去除网格线
                show: true,
                lineStyle: {
                    color: ["rgba(85,85,85,0.4)"]
                }
                }
            },
            {
                type: "value",
                axisLine: {
                lineStyle: {
                    color: "rgba(85,85,85,0.4)"
                }
                }
            }
            ],
            series: [
            {
                name: "门店一",
                type: "line",
                label: {
                show: true,
                position: "top",
                color: "#fff"
                },
                itemStyle: {
                normal: {
                    lineStyle: {
                    width: 2, //调整 线条的宽度
                    color: "#28F2A8" //线条颜色 - 绿色
                    }
                }
                },
                // showSymbol: false,
                smooth: true,
                barWidth: "20%",
                data: this.List1
            },
            {
                name: "门店二",
                type: "line",
                label: {
                show: true,
                position: "bottom",
                color: "#fff"
                },
                itemStyle: {
                normal: {
                    lineStyle: {
                    width: 2, //调整 线条的宽度
                    color: "#28D8FF" //线条颜色 - 蓝色
                    }
                }
                },
            // showSymbol: false,
            smooth: true,
            barWidth: "20%",
            data: this.List2
          }
        ]
      });
    }
  }
};
</script>
