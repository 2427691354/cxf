<template>
    <div class="container">
        <div class="nav">
            <div class="nav_item">
                <router-link to="/fleetManagement">管理管理</router-link>
            </div>
            <div class="nav_item active">
                <router-link to="/Administration2">管理管理</router-link>
            </div>
        </div>
        <div class="mainbody">
            <div class="con">
                <div class="con_item"></div>
                <div class="con_item"></div>
                <div class="con_item"></div>
            </div>
            <div class="con">
                <div class="con_item"></div>
                <div class="con_item"></div>
                <div class="con_item"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    background-color: rgb(12,36,88);
}
a{
    color:#fff;
    text-decoration: none;
    font-size: 14px;
}
.nav{
    position:fixed;
    top: 120px;
    left:0px;
    right:0px;
    bottom:0px;
    width: 27px;
}
.nav_item{
    width: 15px;
    height: 80px;
    margin-top: 2px;
    padding: 8px 7px;
    background-color: rgb(28,72,165);
}
.active{
    background-color:rgb(13,120,204);
}
.mainbody{
    width: 100%;
    height: 655px;
    padding-top: 10px;
  
}
.con{
    height: 250px;
    width: 1400px;
    margin-left: 70px;
    margin-bottom: 20px;
   
}
.con_item{
    height: 250px;
    width: 415px;
    margin-left: 30px;
    float: left;
    background-color: rgb(28,72,165);
}
</style>
<script>
export default {
    methods:{
        
    }
}
</script>