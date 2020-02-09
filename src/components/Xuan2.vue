<template>
  <div class="xuan">
      <ul>
          <li v-for='(a,i) in list'><img :src="a.url" alt=""></li>
      </ul>
      
  </div>
</template>

<script>
export default {
  name: 'bei',
  data() { 
    return {
        list:[
            {url:require('@/assets/002.jpg'),check:false},
            {url:require('@/assets/002.jpg'),check:false},
            {url:require('@/assets/002.jpg'),check:false},
            {url:require('@/assets/002.jpg'),check:false}
        ]
    }
  },
  props: [

  ],
  components:{
  },
  mounted() {

  },
  methods:{
  },
 }
</script>

<style scoped>
.xuan,.xuan ul{
    width: 100%;
}
.xuan ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.xuan ul li{
    width: 49%;
    height: 2rem;
    /* background: red; */
    margin: 0.05rem 0;
}
.xuan ul li img{
    width: 100%;
    height: 2rem;
}
</style>