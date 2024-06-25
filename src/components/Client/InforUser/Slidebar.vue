<template>
  <div class="slide relative">
    <img
      width="800px"
      src="https://res.cloudinary.com/dn6xdmqbl/image/upload/v1716064319/slide/wm90w5misbt9dkecuxw6.jpg"
      alt=""
    />
    <div
      class="absolute h-[100%] w-[100%] flex items-center"
      style="
        background-image: linear-gradient(
          90deg,
          hsla(336, 79%, 50%, 0.5) 0%,
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
      <h2
        class="text-[40px] self-center ml-[100px] text-white text-[42px] animate font-semibold"
      >
        {{ text }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const { text } = defineProps(["text"]);
</script>

<style scoped>
.slide {
  width: 100%;
  height: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: start;
}
.slide > img {
  width: 100%;
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
