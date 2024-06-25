<template>
  <div class="Category">
    <div class="img-category">
      <img :src="img" alt="" />
      <div
        class="text-title Text-Background absolute h-[100%] w-[100%] flex items-center top-0"
        style="
          background-image: linear-gradient(
            90deg,
            hsla(338, 79%, 50%, 0.5) 0%,
            hsla(338, 81%, 56%, 0.5) 24%,
            hsla(340, 83%, 62%, 0.5) 34%,
            hsla(341, 84%, 67%, 0.5) 40%,
            hsla(343, 87%, 73%, 0.5) 44%,
            hsla(344, 89%, 79%, 0.5) 48%,
            hsla(342, 91%, 83%, 0.5) 53%,
            hsla(339, 94%, 87%, 0.5) 58%,
            hsla(336, 95%, 91%, 0.5) 64%,
            hsla(334, 100%, 95%, 0.5) 76%,
            hsla(330, 100%, 100%, 0.5) 100%
          );
        "
      >
        <h4 class="text-[40px] text-white w-[40%] animate">{{ msg }}</h4>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const { msg, img } = defineProps(["msg", "img"]);
</script>
<style scoped>
.img-category {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.img-category > img {
  width: 100%;
}
.text-title {
  position: absolute;
  top: 100px;
  width: 100%;
  text-align: center;
}
.text-title > h4 {
  font-weight: 600;
  color: #035898;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate {
  animation: animate 1.5s ease-in-out forwards;
}
</style>
