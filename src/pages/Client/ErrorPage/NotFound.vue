<template>
  <div class="page-errro">
    <img src="../../../image//Slider/download.jpg" alt="" />
    <RouterLink :to="{ name: 'HomePage' }">Quay về trang chủ</RouterLink>
  </div>
</template>

<script setup></script>

<style scoped>
.page-errro {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eff6ff;
}
a {
  margin-top: 10px;
  text-decoration: none;
  border: 1px solid black;
  background-color: red;
  color: white;
  padding: 10px 30px;
  border-radius: 50px;
  font-weight: 600;
}
</style>
