<template>
  <div style="background-color: #eff6ff">
    <TaskBarMenu></TaskBarMenu>
    <Slidebar text="Thông tin cá nhân"></Slidebar>
    <Taskmenu></Taskmenu>
    <RouterView></RouterView>
    <InforContact></InforContact>
  </div>
</template>

<script setup>
import TaskBarMenu from "@/components/Client/PageHome/TaskBarMenu.vue";
import Slidebar from "@/components/Client/InforUser/Slidebar.vue";
import Taskmenu from "@/components/Client/InforUser/Taskmenu.vue";
import InforContact from "@/components/Client/Contact/InforContact.vue";
</script>

<style scoped></style>
