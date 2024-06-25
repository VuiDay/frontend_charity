<template>
  <div class="infor-user mb-[20px]">
    <div class="infor-menu">
      <RouterLink :to="{ name: 'Infor' }" href="#">Tài khoản </RouterLink>
      <RouterLink :to="{ name: 'CharityUser' }" href="#"
        >Chiến dịch của tôi
      </RouterLink>
      <RouterLink :to="{ name: 'InforUserDonate' }" href="#"
        >Lịch sử ủng hộ
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import useCharityStore from "../../../store/fetchAPI";
const store = useCharityStore();
const user = ref("");
watchEffect(() => {
  user.value = store.user;
});
</script>

<style scoped>
.router-link-exact-active {
  color: #c30047 !important;
  border-top: 1px solid #c30047 !important;
  border-bottom: 1px solid #c30047 !important;
}
.infor-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.infor-user > h4 {
  font-weight: 600;
  color: rgb(3, 88, 152);
}
.infor-menu {
  margin-top: 20px;
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.infor-menu > a {
  padding: 10px 20px;
  text-decoration: none;
  font-size: 20px;
  color: #656565;
  border: 1px solid transparent;
}
.infor-menu > a:hover {
  color: #c30047;
  border-top: 1px solid #c30047;
  border-bottom: 1px solid #c30047;
}
</style>
