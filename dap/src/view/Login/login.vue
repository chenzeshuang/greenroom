<template>
  <div class="login">
        <el-row type="flex" justify="center">
          <el-col :span="6">
            <el-form :model="formDate" ref="loginBox">
              <el-form-item label="用户名" prop="username" :rules="userRules">
                <el-input v-model="formDate.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password" :rules="passRules">
                <el-input v-model="formDate.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button v-on:click.native="login">登录</el-button>
              </el-form-item>
              
            </el-form>
          </el-col>        
        </el-row>
  </div>
</template>

<script>
import { login } from '../../tool/request'
console.log(login)
import axios from 'axios'
  export default {
    data(){
      return{
        formDate:{
          username:'陈泽爽',
          password:''
        },
        userRules:[
          {
           required:true,
           message:'用户名不能为空'
         },
         {
           type:'email',
           message:'请输入正确的email'
         }
        ],
        passRules:[
          {
            required:true,
            message:'密码不能为空'
            
          }
        ]
      }
    },
    methods:{
        login(){
          this.$refs.loginBox.validate((isValid,options) => {
            if(isValid){
              this.$store.dispatch('getToken',{
                data:this.formDate,
                router:this.$router,
                notify:this.$notify
              })
    //           axios.post('http://localhost:9000/dsp-admin/user/login').then((res) => {
    // console.log(res)
// })
          //      login(this.username,this.password,'123456').then((res) => {
          //     console.log(res)
          //  });
             }else{
               this.$notify({
                 title:'错误',
                 message:'填写正确的用户名和密码',
                 type:'warning'
               })
             }
          })
        }
    }
  }
</script>

<style scoped>
.login{
  background:url('../../../static/img/pic.jpg');
  background-size:center;
}

</style>