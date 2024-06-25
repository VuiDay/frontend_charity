<template>
  <div class="card h-[600px]" style="width: 400px">
    <div class="image-charity max-h-[250px] max-w-[400px] w-[400px] flex">
      <img :src="data.Image[0]" class="card-img-top self-start  h-[270px] w-[auto]" alt="..." />
    </div>
    <div class="card-body w-[100%] max-h-[300px]">
      <h5 class="card-title text-center text-[25px] text-[#C30047] truncate">
        <RouterLink v-if="data.Status === 0" :to="{ name: 'InforCharity', params: { id: data._id } }">{{
          data.Title
        }}</RouterLink>
        <p class="text-[red]" v-else-if="data.Status === 1">CHIẾN DỊCH ĐÃ KẾT THÚC</p>
      </h5>
      <div class="flex justify-start flex-col mb-[7px]">
        <div class="overflow-hidden h-[50px] campaign-desc">
          <p class="leading-[17px] text-[#696969]" v-html="data.Description"></p>
        </div>
      </div>
      <div class="flex justify-between mt-[20px]">
        <div class="font-semibold">
          <p class="text-[#C30047]">{{ category?.Title }}</p>
        </div>
        <div class="font-semibold">
          {{ Functional.formattedMoney(data.Money) }} /
          {{ Functional.formattedMoney(data.TargetMoney) }} VNĐ
        </div>
      </div>
      <div class="line">
        <b
          :style="{
            width: completionPercentage(data.Money, data.TargetMoney) + '%',
          }"
        ></b>
      </div>
      <div class="mt-[20px]">
        <b class="block h-[1px] w-[100%] bg-[#ccc]"></b>
      </div>
      <div>
        <div class="flex justify-between">
          <div class="flex flex-col justify-center">
            <p class="text-[#C30047] font-semibold">Thời gian:</p>
            <p class="">{{ day }} ngày</p>
          </div>
          <div class="flex flex-col justify-center mt-[10px] mb-[10px]">
            <p class="text-[#C30047] font-semibold">Kiểu chiến dịch:</p>
            <p class="">{{ data.Type === 0 ? 'Chiến dịch ngắn hạn':'Chiến dịch dài hạn' }}</p>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-[#C30047] font-semibold">Người tạo chiến dịch</p>
          <p class="flex items-center bg-[#ccc] px-[5px] py-[10px] rounded-[20px] w-[50%]">
            <Avatar
              :image="user.Avatar?.Image"
              class="mr-2"
              size="large"
              shape="circle"
            />
            <p class="font-semibold">{{user.UserName }}</p>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from "primevue/avatar";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { RouterLink } from "vue-router";
import Functional from "../../../function/Functional";
import useCharityStore from "../../../store/fetchAPI";
const { data } = defineProps(["data"]);
const store = useCharityStore();
const category = ref(null);
const completionPercentage = (Money, TargetMoney) => {
  return Math.floor((Money / TargetMoney) * 100);
};
const day = ref(null);
const user = ref(null);
watchEffect(() => {
  category.value = store.categoryByID.find((item)=> item._id === data?.Category);
  const dateStart = new Date(data?.createdAt);
  const dateEnd = new Date(data?.EndTime);
  day.value = Math.floor((dateEnd - dateStart) / (1000 * 60 * 60 * 24));
  user.value = store.userID;
});

onMounted(async () => {
  await store.fetchCategoryID(data.Category);
  await store.fetchUserID(data.User);
});
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
.image-charity {
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  margin: 20px;
  box-shadow: rgba(255, 99, 120, 0.1) 0px 1px 0px,
    rgba(255, 99, 120, 0.1) 0px 8px 24px, rgba(255, 99, 120, 0.1) 0px 16px 48px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: none;
  overflow: hidden;
  transition: .2s;
}
.card:hover {
  box-shadow: rgba(255, 99, 120) 0px 3px 25px;
}
.card-title {
  font-weight: 700;
}
.description {
  height: 50px;
  overflow: hidden;
}
.line {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;
  display: block;
  height: 10px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #ccc;
}
.line > b {
  top: 0;
  position: absolute;
  display: block;
  height: 10px;
  border-radius: 10px;
  /* background: linear-gradient(45deg, #24c6dc, #514a9d); */
  background-color: #C30047;
}
.button-show {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-show > .btn {
  width: 150px;
  font-size: 18px;
  border-radius: 20px;
}
</style>
