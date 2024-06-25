<script setup>
import TaskBarMenu from "../../components/Client/PageHome/TaskBarMenu.vue";
import SlideCharity from "../../components/Client/SlidePageCharity/SlideCharity.vue";
import InforContact from "../../components/Client/Contact/InforContact.vue";
import { ref, provide } from "vue";
import useCharityStore from "../../store/fetchAPI";
const store = useCharityStore();
</script>
<template>
  <div style="background-color: #eff6ff">
    <TaskBarMenu></TaskBarMenu>
    <SlideCharity :msg="store.message"></SlideCharity>
    <RouterView></RouterView>
    <InforContact></InforContact>
  </div>
</template>
<style scoped></style>
