<template>
  <div class="select">
    <h1>广告创意</h1>
    <p>落地页</p>
    <div>
    <span>着陆页地址：   </span>
     <input type="text" name="" placeholder="设置广告名称">
    </div>
    <div class="line">
        <span>
            上传创意
        </span>
        <p v-on:click="open">添加创意</p>
    </div>

    <button disabled="true">提交</button>
  </div>
</template>

<script>
  export default {
    methods:{

             open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }

    }
  }
</script>

<style scoped>
.select{
  line-height:60px;

}
button{
    width:80px;
    height:40px;
}
.line span{
 font-weight:800;
}
.line p{
    color:blue;
    font-size:14px;
}
</style>