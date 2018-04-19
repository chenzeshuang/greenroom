<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px"  style="background:#022050">
    <el-menu :default-openeds="['1']" router style="background:#022050">
      <el-menu-item index="/home" style="color:#ccc">
        <img src="../static/img/banner.png" alt="">
       
      </el-menu-item>  
    <el-menu-item style="color:#fff;" index="/newmetter">
       <template slot="title" style="background:#022050" >新建广告</template>

    </el-menu-item>
      <el-submenu index="1" >
        
        <template slot="title" style="background:#022050" ></i>广告管理</template>
        <el-menu-item-group >
          <el-menu-item index="/plan" style="color:#fff">广告计划</el-menu-item>
          <el-menu-item index="/unit" style="color:#fff">广告单元</el-menu-item>
          <el-menu-item index="/creative" style="color:#fff">广告创意</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-menu-item index="/unit" style="color:#fff">数据中心</el-menu-item>
        <el-menu-item index="/creative" style="color:#fff">工具箱</el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
         <i class="el-icon-warning" style="margin-right: 15px"></i>
        
      </el-dropdown>
      <span>{{username}}</span>
    </el-header>
   <router-view></router-view>
  </el-container>
   
</el-container>

   
   
   
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components:{
   
  },
  computed:{
    ...mapState(['username'])
  }

}
</script>

<style>
#app{
  width:100%;
  height:100%;
  overflow: hidden
 
}
.el-submenu .el-menu{
  background:#1C2941;
}
.el-aside {
    color: #333;
  }
  .el-menu-item{
    width:100%;
  }
  .el-menu-item img{
    width:100%;
  }
    .el-header {
    background-color: #fff;
    color: #333;
    border-bottom:2px solid #ccc;
    line-height: 60px;
  }
  .el-submenu__title{
    color:#fff;
  }
  .el-submenu.is-active .el-submenu__title {
    border-bottom-color:#2873FF;

}
.el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #2873FF;
}
.el-container{
  background:#F5F5F5;
}


</style>
