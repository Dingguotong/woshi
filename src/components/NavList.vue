<template>
  <div class="nav">
      <ul>
          <!-- <router-link to='/bei'>dd</router-link> -->
          <li v-for='(a,i) in list' @click='bian(i)'>
              <router-link :to='a.lu'>
                <p v-bind:class='{active:a.check==true}'>{{a.name}}</p>
              </router-link>
              
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        list:[
            {name:'附近',check:true,lu:'/'},
            {name:'北小营',check:false,lu:'/BeiXY/bei'},
            {name:'二食堂',check:false,lu:'/BeiXY/bei3'},
            {name:'一食堂',check:false,lu:'/BeiXY/bei4'}
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
      bian(n){
          this.list.map((v)=>{
              return v.check=false
          })
        //   alert(this.list[n].check)
        this.list[n].check=true
      }

  },
 }
</script>

<style scoped>
.nav,.nav ul{
    width: 100%;
    height: 0.6rem;
    display: flex;

}
.nav ul li{
    width: 25%;
    height: 0.4rem;
    margin: 0.1rem 0;
}
.nav ul li p{
    width: 80%;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    background: #d4d4d4;
}
.nav ul li p.active{
    background: orange;
    color: #fff;

}
</style>