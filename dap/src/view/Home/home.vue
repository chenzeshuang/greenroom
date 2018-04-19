<template>
  <div>
    <el-row>
      
        <el-col :span="24">
          <div>
              <el-row>
                  <el-col :span="12">
                      <h4>整体情况</h4>                 
                  </el-col>
                  <el-col :span="12">
                   
                      <el-date-picker
                        v-model="value4"
                        type="month"
                        value-format="yyyy/MM"
                        placeholder="选择月">
                      </el-date-picker>
                    
                      <el-date-picker
                        v-model="value5"
                        type="month"
                        value-format="yyyy/MM"
                        placeholder="选择月">
                      </el-date-picker>
                  </el-col>
              </el-row>
              <el-row :gutter="20" style="margin-top:10px;">
                <el-col :span="6">
                  <el-card shadow="always">
                      曝光量(次)
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card shadow="always">
                      点击量(次)
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card shadow="always">
                      点击量(次)
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card shadow="always">
                      点击量(次)
                  </el-card>
                </el-col>

              </el-row>
              <el-row :gutter="20" style="margin-top:10px;">
                <el-col :span="12">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                 </el-select>
                
                </el-col>
              </el-row>
              <el-row>
                <div ref="graph" class="graph">
                </div>
              </el-row>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import Echarts,{ init } from 'echarts'
  export default {
    name:'plan',
    data() {
      
      return {
         graphInit:null,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        datas:null,
       
        value4: '',
        value5:''
      }
    },
    created(){

    },
    watch:{
      value5(o,n){
        let strTime = []
        let startTime = this.value4  //开始时间
        let endTime = this.value5  //结束时间
        console.log(typeof(startTime))
        let [startY,startM] = startTime.split("/")  //开始年和开始月格式截取
        let [ endY, endM] = endTime.split("/") //结束年和结束月的格式截取
        let end = (endY-startY)*12 + (endM-startM)
        for(let i=0;i<=end;i++){
           strTime.push(
            `${ startY*1+ parseInt((startM-1)/12)}/${(startM++ -1)%12+1}`
          )
        }
        this.graphInit.setOption({
           xAxis: {
                type: 'category',
                data:strTime
            },
        })
        

        
      }
    },
    mounted(){
    
     this.graphInit=init(this.$refs.graph)
     window.onresize= () =>{
        this.graphInit.resize()
     }
      let  option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                boundaryGap:false
            },
            yAxis: {
                type: 'value',
                scale:true
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
      this.graphInit.setOption(option)
    }
  };
</script>

<style scoped>
.graph{
  width:100%;
  height:290px;
}
</style>