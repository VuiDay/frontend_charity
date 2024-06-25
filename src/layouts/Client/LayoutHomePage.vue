<template>
  <div style="background-color: #eff6ff">
    <Taskbarmenu class="Menu"></Taskbarmenu>
    <SliderPageHome></SliderPageHome>
    <CardList></CardList>
    <Whoweare></Whoweare>
    <Introduce></Introduce>
    <introTech></introTech>
    <InforContact></InforContact>
  </div>
</template>

<script setup>
import Taskbarmenu from "../../components/Client/PageHome/TaskBarMenu.vue";
import SliderPageHome from "../../components/Client/PageHome/SliderPageHome.vue";
import CardList from "../../components/Client/ViewCardCharity/CardList.vue";
import InforContact from "../../components/Client/Contact/InforContact.vue";
import Introduce from "../../components/Client/Contact/Introduce.vue";
import introTech from "../../components/Client/Contact/introTech.vue";
import Whoweare from "../../components/Client/ViewCardCharity/Whoweare.vue";
</script>

<style scoped></style>
