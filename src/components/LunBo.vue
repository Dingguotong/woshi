<template>
    <div class="lunbo">
        <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="@/assets/1.png" alt=""></div>
            <div class="swiper-slide"><img src="@/assets/1.png" alt=""></div>
            <div class="swiper-slide"><img src="@/assets/1.png" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
        </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: [

  ],
  components:{
  },
  mounted() {
      this.lunbo()
  },
  methods:{
      lunbo(){
        new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:{
                el:1000
            },
            observer:true,
            observeparents:true,
            
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
            el: '.swiper-scrollbar',
            },
        })        
      }
  },
 }
</script>

<style scoped>
@import 'swiper/css/swiper.css';
.swiper-container,.swiper-container img{
    width: 100%;
    height: 2.25rem;
}  
</style>