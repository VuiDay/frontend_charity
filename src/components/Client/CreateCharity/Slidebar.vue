<template>
  <div>
    <div class="slide">
      <img src="../../../image/Slider/slidecreate.jpg" alt="" />
    </div>
    <div class="text-slide">
      <p>Tham gia cùng chúng tôi</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.slide {
  width: 100%;
  height: 800px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}
.slide > img {
  width: 100%;
  opacity: 0.6;
}
.text-slide {
  position: absolute;
  bottom: 65%;
  left: 10%;
}

.text-slide > p {
  font-size: 25px;
  font-weight: 500;
  color: white;
  font-family: "Dancing Script", cursive;
}
</style>
