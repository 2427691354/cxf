<template>
  <div id="hello">
    <div class="login">
      <img src="../assets/logo.png" alt />
      <div class="login-box">
        <img src="../assets/che.gif" alt="">
        <el-row>
          <el-col :span="8">
            <el-input id="name" v-model="name" placeholder="请输入帐号">
              <template slot="prepend">帐号</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
              <template slot="prepend">密码</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-button
              id="login"
              v-on:click="check"
              style="width:100%;opacity:0.8"
              type="primary"
            >登录</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { loginUser } from "@/api/api";
export default {
  name: "hello",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    check: function(event) {
      //获取值
      var name = this.name;
      var password = this.password;
      if (name == "" || password == "") {
        this.$message({
          message: "账号或密码为空！",
          type: "error"
        });
        return;
      } else if (name == "zheng" && password == "123") {
        this.$message({
          message: "登录成功！",
          type: "success"
        });
        return this.$router.push({path:'/RDM'});
      }
      
    }
  }
};
</script>
<style>
.el-input-group__prepend {
  border-right: 0;
  background-color: #2b3036;
  color: white;
  border-style: none;
}
</style>
<style scoped>
.login {
  background: url("../assets/login.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}

.el-row {
  margin-bottom: 20px;
}
.login-box {
  margin-top: 15%;
  margin-left: 40%;
}
.login img {
  width: 300px;
  padding-top: 10px;
  padding-left: 5px;
}
.login-box img{
  width:40px;
  padding-left: 14%;
  padding-bottom: 1%;
}
</style>
