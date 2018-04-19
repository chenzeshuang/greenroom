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
        <div class="banner" v-show="show">

          <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
                <el-tab-pane
                  :key="item.name"
                  v-for="(item, index) in editableTabs"
                  :label="item.title"
                  :name="item.name"
                >
                  {{item.content}}
                </el-tab-pane>
          </el-tabs>



           <el-upload
              action="http://localhost:9000/dsp-creative/creative/upload"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
   
        </div>
    </div>

    <button disabled="true">提交</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        show:false,
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }],
        tabIndex: 2
      }
     
    },
    methods:{

             open() {
        this.$alert('请选择',{
          confirmButtonText: '多图',
          center:true,
          callback: action => {
            this.show = true,
            this.$message({
              type: 'info',
              
              message: `action: ${ action }`
            });
          }
        });
      },
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
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