<template>
  <div class="Slide">
    <div class="Background-Image h-[800px] overflow-hidden">
      <img
        src="https://res.cloudinary.com/dn6xdmqbl/image/upload/v1715908385/slide/roxfyzdpmertb3pk37uh.jpg"
        alt=""
        width="100%"
        height="auto"
      />
    </div>
    <div
      class="Text-Background absolute h-[100%] w-[100%] flex items-center"
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
      <h2 class="text-xl self-start ml-[100px] text-white text-[42px] animate">
        Chiến Dịch {{ msg }}
      </h2>
      <p class="self-start ml-[100px] text-[30px] text-white mt-[10px] animate">
        <RouterLink class="!text-[#c30047]" :to="{ name: 'HomePage' }"
          >Trang Chủ</RouterLink
        >
        /
        <RouterLink class="!text-[#c30047]" :to="{ name: route }"
          >Dự Án</RouterLink
        >
      </p>
    </div>
  </div>
</template>
<script setup>
const { msg, route } = defineProps(["msg", "route"]);
</script>
<style scoped>
.Slide {
  position: relative;
}
.Text-Background {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.Text-Background > h2 {
  font-weight: 600;
  color: #035898;
}
.Text-Background > p > a {
  text-decoration: none;
  color: black;
  font-weight: 600;
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
