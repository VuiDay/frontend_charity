<template>
  <div class="TaskBarMenu" :class="isScroll ? 'Scroll' : ''">
    <div class="logo" onclick="window.location.href = '/'">
      <img
        src="https://res.cloudinary.com/dn6xdmqbl/image/upload/v1715979691/slide/spn74stlisyflhzyje8t.png"
        alt=""
      />
    </div>
    <div class="MenuChild">
      <h5>
        <RouterLink :to="{ name: 'HomePage' }">Trang Chủ</RouterLink>
      </h5>
      <h5>
        <RouterLink :to="{ name: 'LongCharity' }"
          >Chiến Dịch Dài Hạn</RouterLink
        >
      </h5>
      <h5>
        <RouterLink :to="{ name: 'ShortCharity' }"
          >Chiến Dịch Ngắn Hạn</RouterLink
        >
      </h5>
      <h5>
        <RouterLink :to="{ name: 'Contact' }">Liên Hệ Với Chúng Tôi</RouterLink>
      </h5>
    </div>
    <div class="account">
      <RouterLink :to="{ name: 'CreateCharity' }" class="create-charity"
        ><i class="fa-solid fa-plus"></i> Tạo chiến dịch của bạn</RouterLink
      >
      <Account></Account>
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import Account from "../Account/AccountHeader.vue";
const isScroll = ref(false);
const handleScroll = () => {
  isScroll.value = window.scrollY > 400;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeMount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.router-link-active {
  color: #c30047 !important;
}
.TaskBarMenu {
  height: 75px;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  justify-content: space-between;
  background-color: #fff;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  overflow: hidden;
}
.logo > img {
  width: 90px;
}
.TaskBarMenu.Scroll {
  position: fixed;
  transition: 0.2s;
}
.MenuChild {
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.MenuChild > h5 {
  margin: 0 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 550;
}
.MenuChild > h5 > a {
  text-decoration: none;
  color: #212529;
  padding: calc(57px / 2) 0;
}
.account {
  display: flex;
  align-items: center;
}
.create-charity {
  padding: 5px 20px;
  border-radius: 50px;
  border: none;
  background-color: #c30047;
  font-weight: 600;
  margin: 5px 10px 5px 0;
  height: 75%;
  color: white !important;
  text-decoration: none;
  align-items: center;
  display: flex;
}
</style>
