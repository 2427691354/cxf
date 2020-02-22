<template>
  <div class="container">
    <div class="nav">
      <div class="nav_item">
        <router-link to="/RDM">数据大屏</router-link>
      </div>
      <div class="nav_item">
        <router-link to="/statisticalAnalysis">统计分析</router-link>
      </div>
      <div class="nav_item">
        <router-link to="/separateVehicleMonitoring">单车监控</router-link>
      </div>
      <div class="nav_item active">
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
        <div class="con_top_text">车辆状态</div>
        <div class="con_top_input">
          <el-select v-model="value" placeholder="请选择" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <el-button type="primary" class="btn">查询</el-button>
      </div>
      <div class="con_btn">
        <el-button size="small">新增车辆</el-button>
      </div>
      <div class="tab">
          <table cellspacing=0>
              <tr>
                  <th>序号</th>
                  <th>车载终端编号</th>
                  <th>车牌号</th>
                  <th>运营公司</th>
                  <th>车队</th>
                  <th>出厂日期</th>
                  <th>注册日期</th>
                  <th>当前里程数</th>
                  <th>故障次数</th>
                  <th>状态</th>
                  <th>操作</th>
              </tr>
              <tr>
                  <td>1</td>
                  <td>LA9HIGECXH1HGC007</td>
                  <td>渝A 65301</td>
                  <td>海格车企</td>
                  <td>车队1</td>
                  <td>2018-03-15</td>
                  <td>2018-03-15</td>
                  <td>34,152km</td>
                  <td>32</td>
                  <td>启用</td>
                  <td>编辑　删除</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>LA9HIGECXH1HGC007</td>
                  <td>渝A 65301</td>
                  <td>海格车企</td>
                  <td>车队1</td>
                  <td>2018-03-15</td>
                  <td>2018-03-15</td>
                  <td>34,152km</td>
                  <td>32</td>
                  <td>启用</td>
                  <td>编辑　删除</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>LA9HIGECXH1HGC007</td>
                  <td>渝A 65301</td>
                  <td>海格车企</td>
                  <td>车队1</td>
                  <td>2018-03-15</td>
                  <td>2018-03-15</td>
                  <td>34,152km</td>
                  <td>32</td>
                  <td>启用</td>
                  <td>编辑　删除</td>
              </tr>
          </table>
      </div>
      <div class="page">
         <el-pagination class="page_items"
            background
            :page-size="20"
            :pager-count="11"
            layout="prev, pager, next"
            :total="200">
            </el-pagination>
      </div>
    </div>
    
    <div class="bottom"></div>
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
.page_items{
    padding:20px 450px;
    
}
.mainbody {
  margin-left: 60px;
  width: 1400px;
}
.tab{
    text-align: center;
    font-size: 14px;

}
.tab th{
    color: rgb(113, 121, 138);
    padding:12px 0px;
}
.tab td{
    color: rgb(182, 186, 194);
    background-color: rgb(25,55,119);
    padding:12px 0px;
}
.tab table{
    width: 1400px;
}
.page{
    height: 70px;
    background: rgb(12, 37, 90);
    box-shadow: 0 0px 80px rgba(20, 40, 110, 0.5) inset;
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
.con_btn {
  margin-bottom: 15px;
}

.bottom {
  height: 243px;
}
</style>
<script>
export default {
     data() {
      return {
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '启用'
        }, {
          value: '选项3',
          label: '禁用'
        }],
        value: ''
      }
    },
  methods: {}
};
</script>