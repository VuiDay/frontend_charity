<template>
  <div class="w-[100%] flex justify-center">
    <table class="w-[80%]">
      <tr class="border-[1px] bg-[#c30047] border-[black] text-white">
        <th class="w-calc-width text-center border-[1px] p-[10px]">
          Tên chiến dịch
        </th>
        <th class="w-calc-width text-center border-[1px]">Số tiền đã ủng hộ</th>
        <th class="w-calc-width text-center border-[1px]">Thời gian</th>
      </tr>
      <tr
        v-for="(charity, index) of charityDonate"
        class="border-[1px] border-[gray] text-black"
      >
        <td
          class="w-calc-width text-center border-[1px] border-[#c30047] p-[10px]"
        >
          <RouterLink
            class="font-semibold"
            :to="{ name: 'InforCharity', params: { id: charity._id } }"
          >
            {{ charity.Title }}
          </RouterLink>
        </td>
        <td
          class="w-calc-width text-center border-[1px] border-[#c30047] p-[10px]"
        >
          {{ Functional.formattedMoney(charity.Amount) }}đ
        </td>
        <td
          class="w-calc-width text-center border-[1px] border-[#c30047] p-[10px]"
        >
          {{ Functional.setTime(charity.timeDonate) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useCharityStore from "../../../store/fetchAPI";
import { watchEffect } from "vue";
import { ref } from "vue";
import Functional from "@/function/Functional.js";
const charityDonate = ref([]);
const store = useCharityStore();
onMounted(async () => {
  await store.fetchCharityDonate();
});
watchEffect(() => {
  charityDonate.value = store.charityUserDonate;
});
</script>

<style scoped></style>
