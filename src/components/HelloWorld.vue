<template>
  <div class="hello">
    <div>3333</div>
    <Top/>
    <Lun/>
    <Nav/>
    <Xuan/>
    <!-- <router-view></router-view> -->



  </div>
</template>

<script>
import Top from './HeadTop'
import Lun from './LunBo'
import Nav from './NavList'
import Xuan from './XuanRan'
import Xuan2 from './Xuan2'
import Bei3 from './Bei3'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Top,
    Lun,
    Nav,
    Xuan,
    Xuan2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
