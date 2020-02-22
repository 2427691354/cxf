<template>
    <div class="container">
        <div class="head">
            <div class="nav">
            <div class="nav_items">
                <div class="nav_item active">
                    <router-link to="/RDM">研发与维修</router-link>
                </div>
                <div class="nav_item">
                    <router-link to="/vehicleSales">车辆销售</router-link> 
                </div>
                <div class="nav_item">
                    <router-link to="/fleetManagement">车队管理</router-link> 
                </div>
            </div>
        </div>
        <div class="title"></div>
        </div>
        
        <div class="mainbody">
            <router-view/>
        </div>
    </div>
</template>
<style scoped>
.container{
    height: 100%;
    width: 100%;
    background-color: rgb(12,36,88);
}
a{
    color:#fff;
    text-decoration: none;
}
.head{
    width:100%;
    position:fixed;
    top:0px;
    left:0px;
    z-index: 999;
}
.nav{
    height: 50px;
    width: 100%;
    color: rgb(64,158,255);
    background-color: rgb(12,36,88);
    
}
.nav_items{
    height: 50px;
    padding-left: 63px;
}
.nav_item{
    padding-top: 12px;
    height: 38px;
    width: 130px;
    float: left;
    text-align: center;
    font-size: 18px;
}
.active{
    color: #fff;

    background-color: rgb(35,69,155);
}
.title{
   
    height: 45px;
    background: url('../assets/title.png') no-repeat;
    background-size: 100% 100%;
}
.mainbody{
    padding-top: 100px;
    
    background-color: rgb(12,36,88);
}
</style>
<script>
export default {
    methods:{
        
    }
}
</script>