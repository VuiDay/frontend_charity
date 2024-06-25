<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(data, index) of datas"
        class="carousel-item img-slide"
        :class="index === 0 ? 'active' : ''"
      >
        <img :src="data.img" class="d-block w-100 opacity-[0.9]" alt="..." />
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
          <div class="ml-[100px]">
            <h1
              class="text-[2.5rem] text-[white] font-semibold animate"
              style="font-family: 'Poetsen One', sans-serif"
            >
              {{ data.title }}
            </h1>
            <div class="animate mt-[10px] w-[55%]">
              <RouterLink
                :to="{ name: data.redirect }"
                class="bg-[#C30047] text-white rounded-[50px] font-semibold px-[20px] py-[10px] text-center"
                >{{ data.text }}</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev w-[5%]"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next w-[5%]"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script setup>
const datas = [
  {
    img: "https://res.cloudinary.com/dn6xdmqbl/image/upload/v1715850289/slide/isfzyuekrkgvkfc9fgc8.jpg",
    title: "Tìm hiểu về chúng tôi",
    redirect: "Contact",
    text: "Tìm hiểu",
  },
  {
    img: "https://res.cloudinary.com/dn6xdmqbl/image/upload/v1715850303/slide/ybkwbygzdrznd9ojbkpg.jpg",
    title: "Các chiến dịch đang diễn ra",
    redirect: "LongCharity",
    text: "Xem các chiến dịch",
  },
  {
    img: "https://res.cloudinary.com/dn6xdmqbl/image/upload/v1715850216/slide/x62hledgccghf7dm2rvq.jpg",
    title: "Tham gia cùng chúng tôi",
    redirect: "CreateCharity",
    text: "Tạo chiến dịch của bạn",
  },
];
</script>
<style scoped>
.img-slide {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 800px;
}
.img-slide img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
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
