<template>
  <div class="card">
    <h5 class="card-header text-start">Các bài viết liên quan</h5>
    <div class="card-body">
      <div
        v-for="(list, key) of listCharity"
        :key="key"
        @click="onReload(list._id)"
        class="p-[10px] mt-[10px] rounded-[20px] items-start"
      >
        <img class="rounded-[20px]" :src="list.Image[0]" alt="" />
        <div class="overflow-hidden">
          <h5 class="card-title font-semibold text-[20px] truncate">
            {{ list.Title }}
          </h5>
          <div class="card-text overflow-hidden !h-[50px] campaign-desc">
            <p class="leading-[17px]" style="margin: 0">
              {{ list.Description }}
            </p>
          </div>
          <div class="mt-[10px] flex justify-end">
            <div>
              <!-- <div class="text-[#191970] font-semibold">
                {{ Functional.formattedMoney(list.Money) }} /
                {{ Functional.formattedMoney(list.TargetMoney) }}
              </div> -->
              <div class="">{{ func(list.createdAt) }}</div>
            </div>
            <!-- <div class="block h-[5px] w-[100%] bg-[#B0C4DE] rounded-[50px]">
              <b
                class="rounded-[50px] block h-[5px] bg-[#333366]"
                :style="{
                  width:
                    completionPercentage(list.Money, list.TargetMoney) + '%',
                }"
              ></b>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, watchEffect, ref } from "vue";
import useCharityStore from "../../../store/fetchAPI";
import { RouterLink, useRouter } from "vue-router";
import Functional from "../../../function/Functional";
const listCharity = ref([]);
const store = useCharityStore();
const router = useRouter();
onMounted(async () => {
  await store.fetchCharity(5);
});
watchEffect(() => {
  listCharity.value = store.data.filter((data) => data.Status === 0);
});
const onReload = (charityId) => {
  router.push({ name: "InforCharity", params: { id: charityId } });
  setTimeout(() => {
    window.location.reload();
  }, 100);
};
const completionPercentage = (Money, TargetMoney) => {
  return Math.floor((Money / TargetMoney) * 100);
};
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
<style scoped>
.campaign-desc {
  color: var(--bluegray-500);
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card {
  border: none;
  background-color: transparent;
}
.card-header {
  border: none;
}
.card-body {
  padding: 0;
}
.card-body > div {
  display: flex;
  cursor: pointer;
}
.card-body > div > img {
  width: 30%;
  padding: 0 10px 0 0;
}
.card-text {
  height: 22px;
  overflow: hidden;
}
</style>
