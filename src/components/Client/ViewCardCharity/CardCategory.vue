<template>
  <div class="card h-[400px]">
    <div class="image-charity w-[100%]">
      <img :src="Image" class="card-img-top" alt="..." />
    </div>
    <div class="card-body">
      <h5 class="card-title text-center text-[25px] text-[black]">
        {{ Title }}
      </h5>
      <div class="description">
        <p class="card-text">{{ Description }}</p>
      </div>
      <div class="line">
        <b></b>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-[#C30047] font-semibold text-[20px]">{{ Count }}</p>
        <p class="font-semibold">Chiến dịch</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "primevue/card";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { RouterLink } from "vue-router";
const { Title, Description, Image, Count } = defineProps([
  "Title",
  "Description",
  "Image",
  "Count",
]);
</script>
<style scoped>
.blue-text {
  color: #0d6efd;
}
.image-charity {
  width: 360px;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: start;
  border-bottom: 5px solid rgb(255, 99, 120);
}
.image-charity > img {
  width: auto;
}
.image-charity > img {
  border-radius: 30px 30px 0 0;
}
.card {
  margin: 20px;
  box-shadow: rgba(255, 99, 120, 0.1) 0px 1px 0px,
    rgba(255, 99, 120, 0.1) 0px 8px 24px, rgba(255, 99, 120, 0.1) 0px 16px 48px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  transition: 0.2s;
}

.card:hover {
  box-shadow: rgba(255, 99, 120) 0px 3px 25px;
}

.card-title {
  font-weight: 700;
}
.card-text {
  text-align: center;
}
.description {
  height: 50px;
  overflow: hidden;
}
.line {
  display: flex;
  justify-content: center;
  align-items: center;
}
.line > b {
  display: block;
  height: 8px;
  width: 80%;
  border-radius: 10px;
  margin: 10px 0;
  background: rgb(255, 99, 120);
}
</style>
