<template>
  <div style="background-color: #eff6ff">
    <TaskBarMenu></TaskBarMenu>
    <SlideCharity :msg="categoryName" route="CharityCategory"></SlideCharity>
    <RouterView></RouterView>
    <InforContact></InforContact>
  </div>
</template>
<script setup>
import TaskBarMenu from "../../components/Client/PageHome/TaskBarMenu.vue";
import SlideCharity from "../../components/Client/SlidePageCharity/SlideCharity.vue";
import InforContact from "../../components/Client/Contact/InforContact.vue";
import { useRoute } from "vue-router";
import useCharityStore from "../../store/fetchAPI";
const store = useCharityStore();
import { onMounted, ref, watchEffect } from "vue";
const categoryName = ref("");
const route = useRoute().params.id;
onMounted(async () => {
  await store.fetchCategoryID(route);
});
watchEffect(() => {
  categoryName.value = store.categoryByID.Title;
});
</script>
<style scoped></style>
