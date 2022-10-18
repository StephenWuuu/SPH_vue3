<template>
  <TypeNav></TypeNav>
  <ListContainer></ListContainer>
  <Recommend></Recommend>
  <Rank></Rank>
  <Like></Like>
  <Floor v-for="item in store.floorLists" :key="item"></Floor>
</template>
<script setup>
import { ref, reactive } from "vue";
import TypeNav from "@/components/TypeNav/index.vue";
import ListContainer from "./ListContainer/index.vue";
import Recommend from "./Recommend/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import { categoryListStore } from "@/store/index";

const store = categoryListStore();
</script>
<style scoped></style>
