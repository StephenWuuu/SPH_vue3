<template>
  <div class="swiper-container" ref="cur">
    <!-- <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(slide, index) in store.skuImageList"
        :key="slide.id"
      >
        <img
          :src="slide.imgUrl"
          :class="{ active: currentIndex == index }"
          @click="changeCurrentIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
    <!-- <el-carousel
      class="swiper-wrapper"
      :interval="4000"
      type="card"
      height="80px"
    >
      <el-carousel-item
        class="swiper-slide"
        v-for="(item, index) in store.skuImageList"
        :key="item.id"
      >
        <el-image
          :src="item.imgUrl"
          :class="{ active: currentIndex == index }"
          @click="changeCurrentIndex(index)"
          style="width: 80px; height: 80px"
        ></el-image>
      </el-carousel-item>
    </el-carousel> -->
    <swiper
      :modules="modules"
      :slides-per-view="5"
      :space-between="15"
      :freeMode="true"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(item, index) in store.skuImageList"
        :key="item.id"
        @click="changeCurrentIndex(index)"
      >
        <img :src="item.imgUrl" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { detailInfoStore } from "@/store/detail";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref, reactive, watch, nextTick, onMounted } from "vue";

const onSwiper = (swiper) => {
  console.log("000", swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
const modules = [FreeMode, Pagination];
const currentIndex = ref(null);
const store = detailInfoStore();
const props = defineProps(["skuImageList"]);
const emit = defineEmits(["getIndex"]);
const changeCurrentIndex = (index) => {
  currentIndex.value = index;
  emit("getIndex", currentIndex.value);
};
// watch(
//   () => props.skuImageList,
//   (newValue, oldValue) => {
//     nextTick(() => {
//       new Swiper({
//         loop: true,

//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//         slidesPerView: 3,
//         slidesPerGroup: 1,
//       });
//     });
//   },
//   { immediate: true }
// );
</script>
<style scoped lang="less">
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;
  // display: flex;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
