<template>
  <div style="background-color: #eff6ff">
    <TaskBarMenu></TaskBarMenu>
    <Slidebar text="Liên hệ với chúng tôi"></Slidebar>
    <RouterView></RouterView>
    <InforContact></InforContact>
  </div>
</template>
<script setup>
import TaskBarMenu from "../../components/Client/PageHome/TaskBarMenu.vue";
import InforContact from "../../components/Client/Contact/InforContact.vue";
import Slidebar from "../../components/Client/InforUser/Slidebar.vue";
</script>
<style scoped></style>
