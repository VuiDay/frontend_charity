<template>
  <div style="background-color: #eff6ff">
    <TaskBarMenu></TaskBarMenu>
    <TaskBarName
      msg="Cảm ơn bạn đã quyên góp cho chiến dịch ♥️"
      :img="[
        'https://res.cloudinary.com/dn6xdmqbl/image/upload/v1716031295/slide/ga9nkxr7s3ce4boyygvi.jpg',
      ]"
    ></TaskBarName>
    <RouterView></RouterView>
    <InforContact></InforContact>
  </div>
</template>
<script setup>
import TaskBarMenu from "../../components/Client/PageHome/TaskBarMenu.vue";
import TaskBarName from "../../components/Client/PageInforCharity/TaskBarName.vue";
import InforContact from "../../components/Client/Contact/InforContact.vue";
</script>
<style scoped></style>
