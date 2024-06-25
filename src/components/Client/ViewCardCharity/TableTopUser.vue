<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col" style="color: rgb(255, 99, 120)">Xếp hạng</th>
        <th scope="col" style="color: rgb(255, 99, 120)">
          Tài khoản người dùng
        </th>
        <th scope="col" style="color: rgb(255, 99, 120)">Số tiền đã Donate</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(list, key) in listTop" :key="key">
        <th scope="row">{{ key + 1 }}</th>
        <td class="Infor-User">
          <div class="img-avatar">
            <img :src="list.Avatar.Image" alt="" />
          </div>
          <p>{{ list.UserName }}</p>
        </td>
        <td>{{ Functional.formattedMoney(list.Amount) }} VNĐ</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import useCharityStore from "../../../store/fetchAPI";
import Functional from "../../../function/Functional";

const store = useCharityStore();
const listTop = ref([]);

onMounted(async () => {
  await store.fetchListUser();
});

watchEffect(() => {
  listTop.value = store.listUser.sort((a, b) => b.Amount - a.Amount);
});
</script>
<style scoped>
.table {
}
.Infor-User {
  display: flex;
  justify-content: start;
  align-items: center;
}

.Infor-User > .img-avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
}
.img-avatar > img {
  width: 100%;
}
.Infor-User > p {
  margin: 0;
  padding-left: 5px;
}
th {
  text-align: center;
  line-height: 57px;
  background-color: transparent;
}
td {
  text-align: center;
  line-height: 57px;
  background-color: transparent;
}
</style>
