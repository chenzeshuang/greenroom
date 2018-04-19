

<template>
   <div class="box">
    <el-container style="height: 600px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['2']" router>
    
      <el-submenu index="2"  style="background:#ccc">
        <template slot="title"><i class="el-icon-printer"></i>新建广告计划</template>
          <el-menu-item index="/newmetter/select" style="background:#fff">选择计划</el-menu-item>
      </el-submenu>
        <el-submenu index="2" style="background:#ccc">
        <template slot="title" ><i class="el-icon-printer"></i>广告单元</template>
          <el-menu-item index="/new/1" style="background:#fff">基本信息</el-menu-item>
          <el-menu-item index="/new/1"  style="background:#fff">定向</el-menu-item>
          <el-menu-item index="/new/1" style="background:#fff">广告位</el-menu-item>
          <el-menu-item index="/new/1" style="background:#fff">出价</el-menu-item>
      </el-submenu>
        <el-submenu index="2"  style="background:#ccc">
        <template slot="title"><i class="el-icon-printer"></i>广告创意</template>
          <el-menu-item index="1" style="background:#fff">落地页</el-menu-item>
          <el-menu-item index="2" style="background:#fff">上传创意</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
    <el-main class='homemain'>
        <router-view></router-view>
    </el-main>
</el-container>

 </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.box .el-submenu .el-menu{
  background:#fff;
}
.box .el-aside {
    color: red;
  }
  .box .el-menu-item{
    width:100%;
  }
  .box .el-menu-item img{
    width:100%;
  }
    .box .el-header {
    background-color: #fff;
    color: red;
    border-bottom:2px solid #ccc;
    line-height: 60px;
  }
  .box .el-submenu__title{
    color:red;
  }
  .box .el-submenu__title {
    color: red}
  .box .el-submenu.is-active .el-submenu__title {
    border-bottom-color:red;

}
.box .el-menu-item:focus, .box .el-menu-item:hover {
    outline: 0;
    background-color: #fff;
}
.box .el-container{
  background:#F5F5F5;
}

</style>
