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
            <div class="nav_item">
                <router-link to="/vehicleManagement">车辆管理</router-link>
            </div>
            <div class="nav_item active">
                <router-link to="/userManagement">用户管理</router-link>
            </div>
        </div>
     <div class="mainbody">
      <div class="con_top">
            <div class="con_top_item">
                用户名
                <div class="con_top_item_input">
                <el-input v-model="input" size="small"></el-input>
                </div>
            </div>
          <div class="con_top_item">
                真实姓名
                <div class="con_top_item_input">
                <el-input v-model="input" size="small"></el-input>
                </div>
          </div>
          <div class="con_top_item">
                手机号
                <div class="con_top_item_input">
                <el-input v-model="input" size="small"></el-input>
                </div>
          </div>
          <div class="con_top_item">
                公司
                <div class="con_top_item_input">
                    <el-select v-model="company" placeholder="all" size="small">
                    <el-option
                    v-for="item1 in companys"
                    :key="item1.value"
                    :label="item1.label"
                    :value="item1.value"
                    ></el-option>
                </el-select>
                </div>
                
          </div>
          <div class="con_top_item">
                状态
                <div class="con_top_item_input">
                <el-select  placeholder="请选择" size="small">
                    <el-option
                    v-for="item2 in status"
                    :key="item2.value"
                    :label="item2.label"
                    :value="item2.value"
                    ></el-option>
                </el-select>
                </div>
          </div>
          <div class="con_top_item">
                部门
                <div class="con_top_item_input">
                 <el-select  placeholder="请选择" size="small">
                    <el-option
                    v-for="item3 in departments"
                    :key="item3.value"
                    :label="item3.label"
                    :value="item3.value"
                    ></el-option>
                </el-select>
                </div>
                
          </div>

        
       
        
       
        
        <el-button type="primary" class="btn">查询</el-button>
      </div>
      <div class="tab">
          <table cellspacing=0>
              <tr>
                  <th>序号</th>
                  <th>真实姓名</th>
                  <th>用户名</th>
                  <th>手机号码</th>
                  <th>部门</th>
                  <th>运营公司</th>
                  <th>车企</th>
                  <th>状态</th>
                  <th>创建时间</th>
                  <th>操作</th>
              </tr>
              <tr>
                  <td>1</td>
                  <td>张三</td>
                  <td>zhangsan</td>
                  <td>123456789985</td>
                  <td>测试部</td>
                  <td>xxx运营公司</td>
                  <td>海格车企</td>
                  <td>启用</td>
                  <td>2018-03-15</td>
                  <td>编辑　删除</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>张三</td>
                  <td>zhangsan</td>
                  <td>123456789985</td>
                  <td>测试部</td>
                  <td>xxx运营公司</td>
                  <td>海格车企</td>
                  <td>启用</td>
                  <td>2018-03-15</td>
                  <td>编辑　删除</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>张三</td>
                  <td>zhangsan</td>
                  <td>123456789985</td>
                  <td>测试部</td>
                  <td>xxx运营公司</td>
                  <td>海格车企</td>
                  <td>启用</td>
                  <td>2018-03-15</td>
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

.btn {
  margin-left: 20px;
  width: 90px;
  height: 35px;
  box-shadow: 0 2px 4px rgba(66, 124, 255, 0.2),
    3px 4px 4px rgba(66, 124, 255, 0.2), -3px 4px 4px rgba(66, 124, 255, 0.2);
}

.con_top {
  margin-top: 20px;
  margin-bottom: 15px;
  padding-left: 10px;
  padding-top: 15px;
  height: 60px;
  padding-bottom: 28px;
  color: rgb(163, 243, 247);
  background: rgb(12, 37, 90);
  box-shadow: 0 0px 80px rgba(20, 40, 110, 0.5) inset;
}
.con_top_item{
    width: 200px;
    padding-left: 10px;
   
    float: left;
}
.con_top_item_input{
    padding-top: 5px;
    
}
.btn {
  margin-bottom: 15px;
  margin-top: 23px;
}
.page_items{
    padding:20px 450px;
    
}
.bottom {
  height: 280px;
}
</style>
<script>
export default {
     data() {
      return {
        companys: [{
          value: '公司1',
          label: '公司1'
        }, {
          value: '公司2',
          label: '公司2'
        }, {
          value: '公司3',
          label: '公司3'
        }],
        status:[{
          value: '全部',
          label: '全部'
        }, {
          value: '启用',
          label: '启用'
        }, {
          value: '禁用',
          label: '禁用'
        }],
        departments:[{
          value: '部门1',
          label: '部门1'
        }, {
          value: '部门2',
          label: '部门2'
        }, {
          value: '部门3',
          label: '部门3'
        }],
      }
    },
  methods: {}
};
</script>