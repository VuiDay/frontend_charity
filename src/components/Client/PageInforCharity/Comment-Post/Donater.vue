<template>
  <div class="donater">
    <div class="search">
      <input type="text" class="input-search" />
      <i class="fa-thin fa-magnifying-glass"></i>
    </div>
    <div class="table-donater">
      <table id="customers">
        <tr>
          <th>Tên người ủng hộ</th>
          <th>Số tiền(VNĐ)</th>
          <th>Thời Gian</th>
        </tr>
        <tr v-for="(donater, index) of donaters">
          <td>{{ donater.UserName }}</td>
          <td>{{ Functional.formattedMoney(donater.Amount) }} VNĐ</td>
          <td>{{ func(donater.Time) }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import useCharityStore from "../../../../store/fetchAPI";
import { useRoute } from "vue-router";
import Functional from "../../../../function/Functional";
const store = useCharityStore();
const id = useRoute().params.id;
const donaters = ref([]);
onMounted(async () => {
  await store.fetchGetDonate(id);
});
watchEffect(() => {
  donaters.value = store.dataInforDonate;
  console.log(donaters.value);
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

<style scoped>
.donater {
  margin-top: 15px;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-search {
  width: 80%;
  border: 1px solid #ddd;
  padding: 5px 10px;
}
.input-search:focus {
  border-color: #ccc;
  outline: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.search > i {
  padding: 9px;
  border: 1px solid #ddd;
  cursor: pointer;
}
.search > i:active {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
/* Table */
.table-donater {
  margin-top: 10px;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f0f4fb;
  color: #2e3c4b;
}
</style>
