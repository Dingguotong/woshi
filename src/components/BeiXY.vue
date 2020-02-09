<template>
  <div class="">
    <Top/>
    <Lun/>
    <Nav2/>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from './HeadTop'
import Lun from './LunBo'
import Nav2 from './Nav2'
import Xuan2 from './Xuan2'
export default {
  name: 'beixy',
  data() { 
    return {

    }
  },
  props: [

  ],
  components:{
    Top,
    Lun,
    Nav2,
    Xuan2
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style scoped>
</style>