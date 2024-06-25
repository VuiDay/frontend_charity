<template>
  <div class="Account">
    <div class="Account-Image">
      <img :src="dataUser?.Avatar?.Image" alt="" />
    </div>
    <div class="Account-Infor">
      <ul>
        <li>
          {{ dataUser.UserName }}
          <ul class="munu-child">
            <li>
              <i class="fa-thin fa-gear"></i>
              <RouterLink :to="{ name: 'Infor' }" class="font-semibold"
                >Thông tin</RouterLink
              >
            </li>
            <li @click="logout" class="font-semibold">
              <i class="fa-thin fa-right-from-bracket"></i> Đăng xuất
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import useCharityStore from "../../../store/fetchAPI";
const store = useCharityStore();
import { onMounted, ref, watch, watchEffect } from "vue";
const dataUser = ref([]);
const logout = () => {
  localStorage.removeItem("Token");
  setTimeout(() => {
    window.location.reload();
  }, 200);
};
onMounted(async () => {
  await store.fetchUser();
  const token = localStorage.getItem("Token");
  if (token) {
    const tokenData = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = tokenData.exp * 1000;
    const currentTime = Date.now();
    if (currentTime > expirationTime) {
      localStorage.removeItem("Token");
    }
  }
});
watchEffect(() => {
  dataUser.value = store.user;
});

if (store.user === null) {
  window.location.reload();
}
</script>
<style scoped>
.Account {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  line-height: 40px;
  z-index: 10;
  background-color: rgba(249, 154, 179, 0.5);
  padding: 5px 10px;
  border-radius: 50px;
}
.Account-Image {
  width: 40px;
  height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
}
.Account-Image > img {
  width: 100%;
}
.Account-Infor {
}
.Account-Infor > ul {
  margin: 0;
  padding: 0 0 0 5px;
  font-weight: 550;
  color: #212529;
}
.Account-Infor > ul > li {
  list-style-type: none;
  cursor: pointer;
}
.munu-child {
  width: 125%;
  margin-top: 10px;
  position: absolute;
  background-color: rgba(249, 154, 179);
  opacity: 0;
  visibility: hidden;
  left: 0px;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: 200;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.2s ease-in-out;
}

.Account-Infor > ul > li:hover > .munu-child {
  opacity: 1;
  visibility: visible;
}
.munu-child::after {
  background-color: rgba(249, 154, 179);
  position: absolute;
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  transform: rotate(135deg);
  top: -5px;
}

.munu-child > li {
  list-style-type: none;
  color: black;
  cursor: pointer;
}

.munu-child > li > a {
  text-decoration: none;
  margin-left: 2px;
  color: black;
}
</style>
