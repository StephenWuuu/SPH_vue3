<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script setup>
import Swiper from "swiper";
import vue from "vue";
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const carouselList = ref(null);
// const props = defineProps({ carouselList: array });
onMounted(() => {
  console.log("onMounted", carouselList.length);
});
</script>
<style scoped lang="less"></style>
