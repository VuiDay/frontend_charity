<template>
  <div class="flex justify-center items-center mt-[40px] py-[120px]">
    <div class="relative ml-[200px]">
      <img
        width="800px"
        src="https://res.cloudinary.com/dn6xdmqbl/image/upload/v1716141707/slide/xmrdpwv2ehzn8gnis0sh.jpg"
        alt=""
        class="rounded-[20px]"
      />
      <div
        class="absolute h-[100%] w-[100%] flex items-center top-0 rounded-[20px]"
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
      ></div>
    </div>
    <div class="ml-[100px] mr-[200px] w-[50%]">
      <h2 class="text-[46px] text-[#c30047] font-semibold">{{ data.titel }}</h2>
      <p class="font-semibold">{{ data.answer }}</p>
      <p class="font-semibold">
        Facebook:
        <a :href="data.facebook" class="text-[#0866FF]"
          ><i class="fa-brands fa-facebook"></i> Cường Trần</a
        >
      </p>
      <p class="font-semibold">
        Discord:
        <a :href="data.github" class="text-[#4682B4]"
          ><i class="fa-brands fa-discord"></i> cuong_tran</a
        >
      </p>
      <p class="font-semibold">
        Gmail:
        <a style="text-decoration: none" :href="`mailto:${Email}`"
          ><i class="fa-regular fa-envelope-open"></i> {{ data.gmail }}</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
const data = {
  titel: "Contact for us",
  answer: "Thông tin liên hệ",
  facebook: "https://www.facebook.com/profile.php?id=100040116545591",
  github: "https://discord.com/",
  gmail: "cuongtran01237@gmail.com",
};
</script>

<style scoped></style>
