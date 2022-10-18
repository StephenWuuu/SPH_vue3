<template>
  <Header v-show="!$route.meta.isHideFooter"></Header>
  <router-view />
  <Footer v-show="!$route.meta.isHideFooter"></Footer>
</template>
<script setup>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import { onMounted, onBeforeMount } from "vue";
import { categoryListStore } from "@/store/index";

const store = categoryListStore();
onBeforeMount(() => {
  store.getCategoryList();
  store.getBannerList();
  store.getFloorList();
});
</script>
<style lang="less"></style>
