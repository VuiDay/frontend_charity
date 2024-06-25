<template>
  <div>
    <div class="flex justify-center mt-3">
      <input
        style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        class="bg rounded-[50px] w-[50%] px-[10px] py-[5px]"
        type="text"
        v-model="dataFind"
        placeholder="Tìm kiếm chiến dịch"
      />
    </div>
    <div class="Page">
      <div v-if="dataCharity.length !== 0" class="Page-Online">
        <Card v-for="(charity, index) of dataCharity" :data="charity"></Card>
      </div>
      <div v-else class="h-[500px] flex justify-center items-center">
        <h4 class="text-[25px] text-[#808080]">Chưa có chiến dịch</h4>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from "../../../components/Client/ViewCardCharity/Card.vue";
import useCharityStore from "../../../store/fetchAPI";
import { ref, onMounted, watchEffect, computed } from "vue";
const store = useCharityStore();
let Charitys = ref([]);
const dataFind = ref("");
const { Param } = defineProps(["Param"]);
onMounted(async () => {
  await store.fetchCharityByCategory(Param);
});
watchEffect(() => {
  Charitys.value = store.charityByCategory.filter((data) => data.Status === 0);
});
const changeUppercase = (a) => {
  return a[0].toUpperCase() + dataFind.value.slice(1);
};
const dataCharity = computed(() => {
  let data = Charitys.value;
  if (dataFind.value) {
    data = Charitys.value.filter((data) =>
      data.Title.includes(changeUppercase(dataFind.value))
    );
  }
  return data;
});
</script>
<style scoped>
.Page {
  display: flex;
  justify-content: center;
}
.Page-Online {
  display: flex;
  flex-wrap: wrap;
  width: calc((440px * 3));
}
</style>
