import echarts from "echarts";
//故障维修统计图
export const option = {
    color: ['#08E6D9', '#3C76E0', '#E8504F'],
    title: {
        text: "故障维修统计",
       
        textStyle:{
            fontSize:20,
            color:'#FFFFFF'
        }
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "cross",
            crossStyle: {
                color: "#049AD1"
            }
        }
    },
    legend: {
        data: ["荷电状态", "电流", "电压"],
        padding: [10, 0, 0, 0],
        textStyle:{
           
            color:'#ffffff',
        },
    },
    xAxis: [
        {
            type: "category",
            data: [
                "9:00",
                "9:01",
                "9:02",
                "9:03",
                "9:04",
                "9:05",
                "9:06",
                "9:07",
                "9:08",
                "9:09",
                "9:10"
            ],
            axisPointer: {
                type: "shadow"
            },
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            },
            axisTick:{
                lineStyle:{
                    color:'#049AD1'
                }
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            min: 0,
            max: 120,
            interval: 20,
            axisLabel: {
                formatter: "{value}"
            },
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            }
            
        },
        {
            type: "value",
            min: 0,
            max: 60,
            interval: 10,
            axisLabel: {
                formatter: "{value} %"
            },
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#049AD1'
                }
            }
        }
    ],
    series: [
        {
            name: "荷电状态",
            type: "line",
            data: []
        },
        {
            name: "电流",
            type: "bar",
            data: []
        },
        {
            name: "电压",
            type: "bar",
            data: []
        }
    ]
};
//故障数量统计图
export const option1 = {
    
    color: ['#DCDC24', '#8965EC', '#F95454', '#01E07D', '#3AC8EE', '#FFAD05'],
    title: {
        text: '故障数量统计',
        textStyle:{
            fontSize:18,
            color:'#ffffff',
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}%'
    },
    itemStyle: {
        // 阴影的大小
        shadowBlur: 200,
        // 阴影水平方向上的偏移
        shadowOffsetX: 0,
        // 阴影垂直方向上的偏移
        shadowOffsetY: 0,
        // 阴影颜色
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        emphasis: {
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    },
    series: [
        {
            type: 'pie',
            radius: [40, 80],
            center: ['50%', '50%'],
            //angle南丁格尔图
            roseType: 'angle',
            data: []
        }
    ]
};
//车辆情况图
export const option2 = {
    title: {
        text: "车辆情况",
        
        textStyle:{
            fontSize:18,
            color:'#ffffff',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
            // crossStyle: {
            //     color: '#999'
            // }
        }
    },
    legend: {
        data: ['电流', '电压'],
        textStyle:{
           
            color:'#ffffff',
        },
    },
    xAxis: [
        {
            type: 'category',
            data: ['9:00', '' , '9:02', '', '9:04', '', '9:08', '', '9:10'],
            interval: 1,
            axisPointer: {
                type: 'shadow'
            },
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            },
            axisTick:{
                lineStyle:{
                    color:'#049AD1'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color:'#049AD1'

                }
            },
            min: 0,
            max: 400,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            }
        },
        {
            type: 'value',
            //将网格线变成虚线
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color:'#049AD1'
                }
            },
            min: 0,
            max: 80,
            interval: 10,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            },
            
        }

    ],
    series: [
        {
            name: '电流',
            type: 'scatter',
            
            data: []
        },
        {
            name: '电压',
            type: 'scatter',
            data: []
        },
    ]
};
//新增故障比例图
export const option3 = {
    color:['#3471FD','#6BABFF','#AEE1FF','#FFB99D'],
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        top: 100,
        right: 50,
        textStyle: {
            fontSize: 20,
           
           
                color:'#ffffff',
            
        },
        data: ['电池', '电机', '发动机', '其他']

    },
    series: [
        {
            type: 'pie',
            radius: ['36%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    // textStyle: {
                    //     fontSize: '20',
                    //     fontWeight: 'bold'
                    // }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: []
        }
    ]
};
//新增故障数量
export const option4 = {
    color:['#83F967','#FBFE27','#FE5050','#1DB7E5'],
    // title: {
    //     text: '南丁格尔玫瑰图',
    //     subtext: '纯属虚构',
    //     left: 'center'
    // },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    // legend: {
    //     left: 'center',
    //     top: 'bottom',
    //     data: ['电池', '电机', '发电机', '其他']
    // },
    series: [
        {
            type: 'pie',
            radius: [50, 100],
            center: ['50%', '50%'],
            roseType: 'angle',
            data: []
        }
    ]
};
//仪表图
export const optionYibiao = {

        
        tooltip: {
            formatter: '{a} <br/>{c} {b}'
        },
        series: [
            {
                name: '速度',
                type: 'gauge',
                min: 0,
                max: 220,
                splitNumber: 11,
                radius: '50%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                        width: 3,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 8
                },
                axisTick: {            // 坐标轴小标记
                    length: 8,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length: 10,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 分隔线
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    backgroundColor: 'rgba(30,144,255,0.8)',
                    borderWidth: 1,
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#fff'
                    }
                },
                data: []
            },
            {
                name: '转速',
                type: 'gauge',
                center: ['25%', '55%'],    // 默认全局居中
                radius: '30%',
                min: 0,
                max: 7,
                endAngle: 45,
                splitNumber: 7,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                        width: 2,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 8
                },
                axisTick: {            // 坐标轴小标记
                    length: 5,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 7
                    }
                },
                splitLine: {           // 分隔线
                    length: 8,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width: 5,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    //backgroundColor: 'rgba(30,144,255,0.8)',
                    // borderWidth: 1,
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                    width: 80,
                    height: 30,
                    offsetCenter: [25, '20%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#fff'
                    }
                },
                data: []
            },
            {
                name: '油表',
                type: 'gauge',
                center: ['75%', '50%'],    // 默认全局居中
                radius: '30%',
                min: 0,
                max: 2,
                startAngle: 135,
                endAngle: 45,
                splitNumber: 2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                        width: 2,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 5,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 7
                    }
                },
                axisLabel: {
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10,
                    formatter: function (v){
                        switch (v + '') {
                            case '0': return 'E';
                            case '1': return 'Gas';
                            case '2': return 'F';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length:7,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width:2,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    show: false
                },
                detail: {
                    show: false
                },
                data: []
            },
            {
                name: '水表',
                type: 'gauge',
                center: ['75%', '50%'],    // 默认全局居中
                radius: '30%',
                min: 0,
                max: 2,
                startAngle: 315,
                endAngle: 225,
                splitNumber: 2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                        width: 2,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false
                },
                axisLabel: {
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10,
                    formatter: function(v){
                        switch (v + '') {
                            case '0': return 'H';
                            case '1': return 'Water';
                            case '2': return 'C';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length: 7,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    width: 2,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    show: false
                },
                detail: {
                    show: false
                },
                data:[]
            }
        ],
        
   
};
//地图1
import 'echarts/map/js/china.js' // 引入中国地图数据
export const option5 = {
    //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
    visualMap: {
        min: 0, //最小值
        max: 10, //最大值
        calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
        inRange: {
            color: ['yellow','red'] //颜色
        },
        textStyle: {
            color: '#fff'
        },
    },
    //配置地图的数据，并且显示
    series: [
        {
            name: '地图',
            type: 'map',  //地图种类
            map: 'china', //地图类型。
            data: [
                { name: '北京', value: Math.round(Math.random() * 10) },
                { name: '天津', value: Math.round(Math.random() * 10) },
                { name: '上海', value: Math.round(Math.random() * 10) },
                { name: '重庆', value: Math.round(Math.random() * 10) },
                { name: '河北', value: Math.round(Math.random() * 10) },
                { name: '河南', value: Math.round(Math.random() * 10) },
                { name: '云南', value: Math.round(Math.random() * 10) },
                { name: '辽宁', value: Math.round(Math.random() * 10) },
                { name: '黑龙江', value: Math.round(Math.random() * 10) },
                { name: '湖南', value: Math.round(Math.random() * 10) },
                { name: '安徽', value: Math.round(Math.random() * 10) },
                { name: '山东', value: Math.round(Math.random() * 10) },
                { name: '新疆', value: Math.round(Math.random() * 10) },
                { name: '江苏', value: Math.round(Math.random() * 10) },
                { name: '浙江', value: Math.round(Math.random() * 10) },
                { name: '江西', value: Math.round(Math.random() * 10) },
                { name: '湖北', value: Math.round(Math.random() * 10) },
                { name: '广西', value: Math.round(Math.random() * 10) },
                { name: '甘肃', value: Math.round(Math.random() * 10) },
                { name: '山西', value: Math.round(Math.random() * 10) },
                { name: '内蒙古', value: Math.round(Math.random() * 10) },
                { name: '陕西', value: Math.round(Math.random() * 10) },
                { name: '吉林', value: Math.round(Math.random() * 10) },
                { name: '福建', value: Math.round(Math.random() * 10) },
                { name: '贵州', value: Math.round(Math.random() * 10) },
                { name: '广东', value: Math.round(Math.random() * 10) },
                { name: '青海', value: Math.round(Math.random() * 10) },
                { name: '西藏', value: Math.round(Math.random() * 10) },
                { name: '四川', value: Math.round(Math.random() * 10) },
                { name: '宁夏', value: Math.round(Math.random() * 10) },
                { name: '海南', value: Math.round(Math.random() * 10) },
                { name: '台湾', value: Math.round(Math.random() * 10) },
                { name: '香港', value: Math.round(Math.random() * 10) },
                { name: '澳门', value: Math.round(Math.random() * 10) },
                { name: '南海诸岛', value: Math.round(Math.random() * 10) }
            ],
            itemStyle: { //地图区域的多边形 图形样式。
                normal: {
                    borserWidth: .5,
                    borderColor: '#0B44C2'
                }
            },
        }
    ]
};
export const option6 = {
    //地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
    //要显示散点图，必须填写这个配置
    geo: {
        show: true,
        roam: false, //是否允许鼠标滚动放大，缩小
        map: 'china',
        label: {  //图形上的文本标签，可用于说明图形的一些数据信息
            show: false,  //是否显示文本
            color: '#CCC',  //文本颜色
        },
        itemStyle: { //地图区域的多边形 图形样式。 默认样试。
            areaColor: '#000748', //地图区域的颜色。
            borderColor: '#0B44C2', //边框线
        },
        emphasis: { //高亮状态下的多边形和标签样式。
            label: { //文本
                show:false,
            },
            itemStyle: { //区域
                areaColor: '#F60'
            }
        },
        data: [
            { name: '北京', value: Math.round(Math.random() * 200) },
            { name: '天津', value: Math.round(Math.random() * 200) },
            { name: '上海', value: Math.round(Math.random() * 200) },
            { name: '重庆', value: Math.round(Math.random() * 200) },
            { name: '河北', value: Math.round(Math.random() * 200) },
            { name: '河南', value: Math.round(Math.random() * 200) },
            { name: '云南', value: Math.round(Math.random() * 200) },
            { name: '辽宁', value: Math.round(Math.random() * 200) },
            { name: '黑龙江', value: Math.round(Math.random() * 200) },
            { name: '湖南', value: Math.round(Math.random() * 200) },
            { name: '安徽', value: Math.round(Math.random() * 200) },
            { name: '山东', value: Math.round(Math.random() * 200) },
            { name: '新疆', value: Math.round(Math.random() * 200) },
            { name: '江苏', value: Math.round(Math.random() * 200) },
            { name: '浙江', value: Math.round(Math.random() * 200) },
            { name: '江西', value: Math.round(Math.random() * 200) },
            { name: '湖北', value: Math.round(Math.random() * 200) },
            { name: '广西', value: Math.round(Math.random() * 200) },
            { name: '甘肃', value: Math.round(Math.random() * 200) },
            { name: '山西', value: Math.round(Math.random() * 200) },
            { name: '内蒙古', value: Math.round(Math.random() * 200) },
            { name: '陕西', value: Math.round(Math.random() * 200) },
            { name: '吉林', value: Math.round(Math.random() * 200) },
            { name: '福建', value: Math.round(Math.random() * 200) },
            { name: '贵州', value: Math.round(Math.random() * 200) },
            { name: '广东', value: Math.round(Math.random() * 200) },
            { name: '青海', value: Math.round(Math.random() * 200) },
            { name: '西藏', value: Math.round(Math.random() * 200) },
            { name: '四川', value: Math.round(Math.random() * 200) },
            { name: '宁夏', value: Math.round(Math.random() * 200) },
            { name: '海南', value: Math.round(Math.random() * 200) },
            { name: '台湾', value: Math.round(Math.random() * 200) },
            { name: '香港', value: Math.round(Math.random() * 200) },
            { name: '澳门', value: Math.round(Math.random() * 200) },
            { name: '南海诸岛', value: Math.round(Math.random() * 200) }

        ],
    },
    tooltip: {
        show: true
        //formatter:'{b}<br/>销售量：'
    },
    //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
    visualMap: {
        min: 0, //最小值
        max: 600, //最大值
        calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
        inRange: {
            color: ['#54C886','#5ADE57','#ED328A'] //颜色
        },
        textStyle: {
            color: '#54C886'
        },
    },
    series: [
        {
            type: 'effectScatter', //样试
            coordinateSystem: 'geo', //该系列使用的坐标系
            data: [ //数据
                { name: '宜昌', value: [111.3, 30.7, 330] },
                { name: '信阳', value: [114.089435, 32.167686, 440] },
                { name: '北京', value: [116.422586, 39.921549, 560] }
            ],
            itemStyle: { //样试。
                normal: { //默认样试
                    color: '#d6f628'
                }
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            //标记的大小,可以设置数组或者函数返回值的形式
            symbolSize: function (val) {
                return val[2] / 25;
            },
            rippleEffect: { //涟漪特效相关配置。
                brushType: 'stroke' //波纹的绘制方式
            },
            hoverAnimation: true, //鼠标移入放大圆
        }
    ]
};
export const optionChesu = {

        // color:'red',
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                axisTick: {
                    alignWithLabel: true,
                    lineStyle:{
                        color:'#049AD1'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#049AD1'
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'#049AD1'
                    }
                },
                 splitLine: {
                    lineStyle: {
                        color:'#0E469B'
                    }
                },
            }
        ],
        series: [
            {
                name: '占比',
                type: 'bar',
                barWidth: '35%',
                itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#65F0AB' // 0% 处的颜色
                },{
                    offset: 1,
                    color: '#31AA9E' // 100% 处的颜色
                }], false)
            }
        },
                data: []
            }
        ]
    
    
};
export const optionDangwei = {

    // color:'red',
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月'],
            axisTick: {
                alignWithLabel: true,
                lineStyle:{
                    color:'#049AD1'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            },
             splitLine: {
                lineStyle: {
                    color:'#0E469B'
                }
            },
        }
    ],
    series: [
        {
            name: '占比',
            type: 'bar',
            barWidth: '35%',
           
            data: []
        }
    ]


};
export const optionJiasutaban = {


        tooltip: {
           trigger: 'axis',
           axisPointer: {            // 坐标轴指示器，坐标轴触发有效
               type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
           }
       },
       
       xAxis: {
           type: 'category',
           data: ['一月', '二月', '三月', '四月', '五月', '六月'],
           axisLine:{
                   lineStyle:{
                       color:'#049AD1'
                   }
               },
               axisTick:{
                   lineStyle:{
                       color:'#049AD1'
                   }
               }
       },
       yAxis: {
           type: 'value',
           splitLine: {
                   lineStyle: {
                       color:'#049AD1'
   
                   }
               },
               axisLine:{
                   lineStyle:{
                       color:'#049AD1'
                   }
               }
       },
       series: [{
           data: [60, 65, 55, 70, 80, 110],
   
   itemStyle : { 
   normal : { 
   color:'#08EBDA', //改变折线点的颜色
   lineStyle:{ 
   color:'#08EBDA' //改变折线颜色
   } 
   } 
   },
           type: 'line'
           
       }]

   
};
export const optionCheliangxingshi = {


        color: ['#08E6D9', '#3C76E0', '#E8504F'],
       title: {
           text: "车辆行驶情况",
          
           textStyle:{
               fontSize:20,
               color:'#FFFFFF'
           }
       },
       tooltip: {
           trigger: "axis",
           axisPointer: {
               type: "cross",
               crossStyle: {
                   color: "#049AD1"
               }
           }
       },
       legend: {
           data: ["加速踏板", "车速", "档位"],
           padding: [10, 0, 0, 0],
           textStyle:{
              
               color:'#ffffff',
           },
       },
       xAxis: [
           {
               type: "category",
               data: [
                   "一月",
                   "二月",
                   "三月",
                   "四月",
                   "五月",
                   "六月"
               ],
               axisPointer: {
                   type: "shadow"
               },
               axisLine:{
                   lineStyle:{
                       color:'#049AD1'
                   }
               },
               axisTick:{
                   lineStyle:{
                       color:'#049AD1'
                   }
               }
           }
       ],
       yAxis: [
           {
               type: "value",
               min: 0,
               max: 12,
               interval: 2,
               axisLabel: {
                   formatter: "{value}"
               },
               axisLine:{
                   lineStyle:{
                       color:'#049AD1'
                   }
               }
               
           },
           {
               type: "value",
               min: 0,
               max: 6,
               interval: 1,
               axisLabel: {
                   formatter: "{value} %"
               },
               axisLine:{
                   lineStyle:{
                       color:'#049AD1'
                   }
               },
               splitLine:{
                   show:true,
                   lineStyle:{
                       color:'#049AD1'
                   }
               }
           }
       ],
       series: [
           {
               name: "加速踏板",
               type: "line",
               data: [1,3,5,7,9,12]
           },
           {
               name: "车速",
               type: "bar",
               data: [1,3,5,7,9,12]
           },
           {
               name: "档位",
               type: "bar",
               data: [1,3,5,7,9,12]
           }
       ]
   
   
};
export const optionNenghaotongji = {
    
     color:'#43A9E4',
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        data: ['13:30', '13:35', '13:40', '13:45', '13:50'],
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        },
        splitLine: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color:'#274499'
            },
        },
        axisTick:{
            lineStyle:{
               
                color: new echarts.graphic.LinearGradient(-1, 1, 1, -1, [{
                    offset: 0,
                    color: '#3FABE5' // 0% 处的颜色
                },
                {
                    offset: 0.5,
                    color: '#7F7FD8' // 50% 处的颜色
                },
                {
                    offset: 1,
                    color: '#F030C2' // 100% 处的颜色
                }], false),
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 180000,
        //name: 'km/s minus 299,000',
        splitArea: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color:'#274499'
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#274499'
            }
        }
    },
    series: [
        {
            name: 'boxplot',
            type: 'boxplot',
            
            itemStyle: {
                normal: {
                    
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#4C90C3' // 0% 处的颜色
                    },
                    {
                        offset: 0.5,
                        color: '#5B55BE' // 50% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#9310D4' // 100% 处的颜色
                    }], false),
                    
                }
            },
            data: [],
            tooltip: {
                formatter: function (param) {
                    return [
                        'boxplot',
                        param.name,
                        'max: ' + param.data[5],
                        'Q1: ' + param.data[4],
                        'median: ' + param.data[3],
                        'Q3: ' + param.data[2],
                        'min: ' + param.data[1]
                    ].join('<br/>');
                }
            }
        }
    ]
}
export const optionXudianshi = {
    color: ['#17FFF3', '#FF6461'],

    tooltip: {
        trigger: 'item',
        // axisPointer: {
        //     type: 'cross'
        // }
    },
    legend: {
        data: ['电流', '电压'],
        top:"20",
        textStyle:{
            color:"rgb(163, 243, 247)"
        }
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            
            axisLine: {
                onZero: false,
                lineStyle: {
                    color:'#274499'
                }
            },
            data: ['13:00', '13:10', '13:20', '13:30', '13:40', '13:50']
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 700,
            axisLine:{
            lineStyle:{
                color:'#274499'
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#274499'
            }
        }
        },
        
    ],
    series: [
        {
            name: '电流',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [],
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0,0, 0, 1, [
                        { offset: 0, color: "rgba(163, 243, 247,0.5)" },
                        { offset: 0.5, color: "rgba(163, 243, 247,0.3)" },
                        { offset: 0.9, color: "rgba(163, 243, 247,0)" },
                      ])
                  }
            }
        },
        {
            name: '电压',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [],
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0,0, 0, 1, [
                      { offset: 0, color: "rgba(255,100,67,0.5)" },
                      { offset: 0.5, color: "rgba(255,100,67,0.3)" },
                      { offset: 0.9, color: "rgba(255,100,67,0)" },
                    ])
                  }
            }
        }
    ]
};
export const optionCheliangchengshi = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'item',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',

            data: ['苏州', '无锡', '南京', '北京', '上海', '天津', '重庆', '成都', '广州', '深圳'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 150,
        }
    ],
    series: [
        {
            //name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [],
            itemStyle: {
                normal: {
                    
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#00FEFF' // 0% 处的颜色
                    },
                    {
                        offset: 0.5,
                        color: '#027FFF' // 50% 处的颜色
                    },
                    {
                        offset: 1,
                        color: '#0286FF' // 100% 处的颜色
                    }], false),
                    
                }
            },
            
        }
    ]
};
//仪表盘
export const optionYibiao2 = {

        
    tooltip: {
        formatter: '{a} <br/>{c} {b}'
    },
    series: [
        {
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: '50%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                    width: 3,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 8
            },
            axisTick: {            // 坐标轴小标记
                length: 8,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length: 10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 3,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {           // 分隔线
                shadowColor: '#fff', //默认透明
                shadowBlur: 5
            },
            title: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail: {
                backgroundColor: 'rgba(30,144,255,0.8)',
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            },
            data: []
        },
        {
            name: '转速',
            type: 'gauge',
            center: ['25%', '55%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 7,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                    width: 2,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 8
            },
            axisTick: {            // 坐标轴小标记
                length: 5,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 7
                }
            },
            splitLine: {           // 分隔线
                length: 8,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 3,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width: 5,
                shadowColor: '#fff', //默认透明
                shadowBlur: 5
            },
            title: {
                offsetCenter: [0, '-30%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail: {
                //backgroundColor: 'rgba(30,144,255,0.8)',
                // borderWidth: 1,
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                width: 80,
                height: 30,
                offsetCenter: [25, '20%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            },
            data: []
        },
        {
            name: '油表',
            type: 'gauge',
            center: ['75%', '50%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                    width: 2,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 5,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 7
                }
            },
            axisLabel: {
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 10,
                formatter: function (v){
                    switch (v + '') {
                        case '0': return 'E';
                        case '1': return 'Gas';
                        case '2': return 'F';
                    }
                }
            },
            splitLine: {           // 分隔线
                length:7,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:2,
                shadowColor: '#fff', //默认透明
                shadowBlur: 5
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: []
        },
        {
            name: '水表',
            type: 'gauge',
            center: ['75%', '50%'],    // 默认全局居中
            radius: '30%',
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                    width: 2,
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },
            axisLabel: {
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 10,
                formatter: function(v){
                    switch (v + '') {
                        case '0': return 'H';
                        case '1': return 'Water';
                        case '2': return 'C';
                    }
                }
            },
            splitLine: {           // 分隔线
                length: 7,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 3,
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width: 2,
                shadowColor: '#fff', //默认透明
                shadowBlur: 5
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data:[]
        }
    ],
    

};
//销售量统计
export const option10 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },

    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisPointer: {
                type: 'shadow'
            },
            axisTick: {
                alignWithLabel: true,
                lineStyle:{
                    color:'#049AD1'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 6,
            interval: 1,
            axisLabel: {
                formatter: '{value} '
            },
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            },
             splitLine: {
                lineStyle: {
                    color:'#0E469B'
                }
            },
        },
        {
            type: 'value',
            min: 0,
            max: 12,
            interval: 2,
            axisLabel: {
                formatter: '{value} %'
            },
            axisLine:{
                lineStyle:{
                    color:'#049AD1'
                }
            },
             splitLine: {
                lineStyle: {
                    color:'#0E469B'
                }
            },
        }
    ],
    series: [
        {
            name: '占比',
            type: 'bar',
            barWidth: 18,
            data: []
        },
        {
            name: '销售量',
            type: 'line',
            yAxisIndex: 1,
            data: [],
            itemStyle : { 
                normal : { 
                color:'#08EBDA', //改变折线点的颜色
                lineStyle:{ 
                color:'#08EBDA' //改变折线颜色
                } 
                } 
                },
        }
    ]
};
//城市销售Top5
export const option11 = {
    color: ['#FA88C6', '#FFDED9', '#16FEFE', '#A09EFF', '#53D9FE'],
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}"
    },
    series: [
        {
            name: '金字塔',
            type: 'funnel',
            x: '10%',
            sort: 'ascending',
            itemStyle: {
                normal: {
                    // color: 各异,
                    label: {
                        position: 'right'
                    }
                }
            },
            data: []
        }
    ]
};
//销售情况图雷达
export const option12 = {
    tooltip: {},
    radar: {
        name: {
            textStyle: {
                color: 'rgb(163, 243, 247)',
                fontSize:12
            }
        },
        axisLine:{
            lineStyle:{
                color:'#3D62B2'
            }
            
        },
        indicator: [
            { name: '一月份', max: 5000},
            { name: '二月份', max: 5000},
            { name: '三月份', max: 5000},
            { name: '四月份', max: 5000},
            { name: '五月份', max: 5000},
            { name: '六月份', max: 5000}
        ],
        //背景色
        splitArea:{
            show:true,
            areaStyle:{
                color:'#0C2458'
            }
        },
        //网格线颜色
        splitLine:{
            show:true,
            lineStyle:{
                color:'#3D62B2',
                width:1
            }
        }
    },
    series: [{
        //name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        symbolSize: 10,
        // areaStyle: {normal: {}},
        data: [
            {
                value: [],
                name: '销售情况'
            }
        ],
        itemStyle : { 
            normal : { 
            color:'#08EBDA', //改变折线点的颜色
            lineStyle:{ 
            color:'#08EBDA' //改变折线颜色
            } 
            } 
            },
    }]
};
//销售情况图环形
export const option13 = {
    color:['#37A2DA','#31C1E5','#9FE6B8','#FFDB5C','#FF9F7F','#FB7293','#E7BCF3','#8378EA'],
    
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/> {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['10万-20万', '20万-30万', '30万-40万', '40万-50万', '50万-60万', '60万-70万', '70万-80万', '80万-90万']
    },
    series: [
        {
            name: '各价格段销售占比',
            type: 'pie',
            radius: [30, 60],
            center: ['50%', '50%'],
            roseType: 'area',
           
            max:40,
            data: []
        }
    ]
};
//环形热力图
export const option14 = {
    color: ['#C15150', '#F7974D', '#4DFF8F', '#ADFF4D', "#fff"],
    legend: {
        show: true,
        orient: 'vertical',
        left: 'left',
        top: 'middle',
        data: ['华南', '西南', '东北', '华中'],
        textStyle: {
            color: '#fff', //修改字体颜色
            fontSize: 16
        }
    },
    series: [{
        name: '华南',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [60, 61],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                    position: 'outside'
                },
                labelLine: {
                    show: false,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 10,
                shadowBlur: 40,
                borderColor: "#C15150",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 7,
            name: '70%'
        },
        {
            value: 3,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                      show: false,
                      position: "center"
                    },
                    labelLine: {
                      show: false
                    },
                    color: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "#dedede",
                    borderColor: "#dedede",
                    borderWidth: 0
                  }
            }
        }
        ]
    }, {
        name: '西南',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [45, 46],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 10,
                shadowBlur: 40,
                borderColor: "#F7974D",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 5,
            name: '60%'
        },
        {
            value: 4,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                      show: false,
                      position: "center"
                    },
                    labelLine: {
                      show: false
                    },
                    color: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "#dedede",
                    borderColor: "#dedede",
                    borderWidth: 0
                  }
            }
        }
        ]
    }, {
        name: '东北',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [30, 31],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 10,
                shadowBlur: 40,
                borderColor: "#4DFF8F",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 5,
            name: '40%'
        },
        {
            value: 5,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                      show: false,
                      position: "center"
                    },
                    labelLine: {
                      show: false
                    },
                    color: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "#dedede",
                    borderColor: "#dedede",
                    borderWidth: 0
                  }
            }
        }
        ]
    }, {
        name: '华中',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [15, 16],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 10,
                shadowBlur: 40,
                borderColor: "#ADFF4D",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 2,
            name: '30%'
        },
        {
            value: 5,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                      show: false,
                      position: "center"
                    },
                    labelLine: {
                      show: false
                    },
                    color: "rgba(0,0,0,0)",
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0
                  },
                  emphasis: {
                    color: "#dedede",
                    borderColor: "#dedede",
                    borderWidth: 0
                  }
            }
        }
        ]
    }]
};
//各年月销售图表
export const option16 = {
    color: ['#CE7E63', '#09CFCA'],
    legend: {
        data: ['2018年', '2019年'],
        left: '550',
        top:'20',
        textStyle:{
            color: 'rgb(163, 243, 247) '
        }
    },
    // grid: {
    //     left: 2,
    //     bottom: 10,
    //     right: 10,
    //     containLabel: true
    // },
    xAxis: {
        type: 'category',
        data: ['01月', '02月', '03月', '04月', '05月', '06月',
            '07月', '08月', '09月', '10月', '11月',
            '12月'],
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0E49A1',
                type: 'solid'
            }
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#AAFFFF',
                fontSize: 15
            }
        }

    },
    yAxis: {
        show: false
    },
    series: [{
        name: '2018年',
        type: 'scatter',
        data: [],
        symbolSize: 30
    },
    {
        name: '2019年',
        type: 'scatter',
        data: [],
        symbolSize: 30
    }
    ]
};
//故障热力图
export const option17 = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '60%',
        top: '15%'
    },
    xAxis: {
        type: 'category',
        data: [ '1a', '', '3a', '', '5a', '',
        '7a', '', '9a','','11a',
        ''],
        splitArea: {
            show: true
        },
        axisLabel:{
            show:true,
            textStyle:{
                fontSize:15,
                color:'rgb(163, 243, 247)'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['周一', '', '周三', '', '周五', '', '周日'],
        splitArea: {
            show: true
        },
        axisLabel:{
            show:true,
            textStyle:{
                fontSize:14,
                color:'rgb(163, 243, 247)',
                
            }
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: '145',
        top:'-10',
        textStyle:{
            color:'#fff'
        }
    },
    series: [{
        //name: 'Punch Card',
        type: 'heatmap',
        data: [],
        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
}