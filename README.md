# 后台管理系统总结概述:
  # 项目描述：
      本项目是一款后台管理系统，主要操作后台管理系统数据。
  # 本项目主要技术：
     1、vue框架
     2、elment-ui桌面组件库
     3、vue-router构建单页面应用
     4、vuex
     5、运用less进行代码的编写
     6、Echarts图形展示
     7、接口是Axios
  # 项目技术说明：
     1、之所以选择vue.js框架，是因为Vue最大优势就是它比较新颖，轻量级，易上手，易学习，也更加灵活，最主要的 核心是组件（Component）是 Vue最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码，而且他的速度比较快而且性能高效，多人开发方便。
     2、选取elment-ui这个库是因为Element-Ul是饿了么前端团队推出的一款基于Vue.js 2.0 的桌面端UI框架，里面的组件比较丰富，适用场景比较多，背后有个很强大的团队维护着，在者就是个人认为它是依赖于Vue的组件库，很方便我写Vue(这是我选择他的主要原因，哈哈)
     3、项目中我用到啦vue-router插件进行路由配置，项目中的登录，注册和首页都为一级路由，当进入登录页根据账号判断权限，展示不同的页面，如果登录成功后台会返给我们一个token字段，判断token字段。
      新建广告
          新建广告计划
          新建广告单元
          新建广告创意 
      首页概览
      广告管理
          广告计划
          广告单元
          广告创意
      数据管理
      工具箱
          账户管理
          客户管理
     4、Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
     5、less，在less和sass中间徘徊很久，最后选择less，LESS和Sass之间的主要区别是他们的实现方式不同，LESS是基于JavaScript运行,所以LESS是在客户端处理，Sass是基于Ruby的，是在服务器端处理的。
     6、Echarts的有点是 开发速度快 与用户交互效果好 兼容性好
     7、选择axios我原因是因为简单易用，api接近于jquery，比原生的fetch之类的简单，浏览器兼容性好，都能兼容IE7，使用fetch就得自己处理兼容，通用性好，能在node和浏览器中使用。
  # 项目中的核心功能： 
     此项目中的核心功能具体在广告管理方面，因为涉及好几个页面，每个页面的功能其实很复杂,例：
     首页:根据日期时间动态渲染到Echarts图表。
     创意:点击添加创意，需要tab切换。并且点击上传图片传到后台返回的数据展示到页面，
  # 遇到的难点：
     其中有遇到难点:
     1、在首页选择月份区间，使用element-ui组件时，不能选到月份，后开选择element-ui月份的组件，然后对日期区间进行处理生成图标的X坐标，符合要求的X坐标进行折线图的渲染。

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
     2、比如在广告创意这块需要添加创意，添加创意会出现tab切换，因为开始用的是elment-ui，但是效果并不是很好，后来自己封装了个组件，开始的时候没有封装组件，导致于数据出现共享的状态。后来封装组件之后解决了这个问题。
  

  # 未完待续...(后期想起哪里补哪里，谢谢观赏O(∩_∩)O哈哈~)
  









 




