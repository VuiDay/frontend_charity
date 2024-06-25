<template>
  <div class="card w-[100%] flex">
    <h5 class="card-header text-center">CHIẾN DỊCH CỦA BẠN</h5>
    <div
      class="card-body flex flex-wrap self-center"
      style="width: calc((480px * 3))"
    >
      <div
        v-for="(list, key) of dataCharity"
        :key="key"
        @click="onReload(list._id)"
        class="p-[10px] mt-[10px] rounded-[20px] items-start flex relative"
      >
        <Card :data="list"></Card>
        <div>
          <button
            class="absolute top-[30px] left-[30px] w-[400px] h-[250px]"
            style="
              background-color: rgb(136, 136, 136, 0.5);
              border-radius: 20px 20px 0 0;
            "
          >
            <RouterLink
              :to="{ name: 'EditCharity', params: { id: list._id } }"
              class="bg-[#c30047] px-3 py-3.5 rounded-[50px] text-white font-semibold"
              >Sửa</RouterLink
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../../../components/Client/ViewCardCharity/Card.vue";
import useCharityStore from "../../../store/fetchAPI";
import { onMounted } from "vue";
import { ref, watchEffect } from "vue";
const store = useCharityStore();
const dataCharity = ref([]);
let data = {
  id: "",
};
onMounted(async () => {
  await store.fetchCharityByUser(data);
});
watchEffect(() => {
  data.id = store.user._id;
  dataCharity.value = store.charityUser;
  console.log(dataCharity.value);
});

const func = (time) => {
  const currentDate = new Date(time);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Chuyển đổi sang định dạng 12 giờ
  const formattedHours = hours.toString().padStart(2, "0"); // Đảm bảo giờ có hai chữ số
  const formattedMinutes = minutes.toString().padStart(2, "0"); // Đảm bảo phút có hai chữ số
  return `${day}/${month}/${year} - ${formattedHours}:${formattedMinutes} ${period}`;
};
</script>

<style scoped></style>
