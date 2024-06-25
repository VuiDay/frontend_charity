<template>
  <TaskBarName
    :msg="CharityID.Title"
    :img="
      CharityID.Image && CharityID.Image.length > 0 ? CharityID.Image[0] : ''
    "
  ></TaskBarName>
  <div class="Header-Name">
    <h4 class="text-[25px] !text-[#C30047]">{{ CharityID.Title }}</h4>
    <h6>Chiến dịch được tạo bởi {{ CharityID.User }}</h6>
    <b></b>
  </div>
  <div class="Infor-Charity">
    <div class="Infor-Left">
      <div class="Body-Post">
        <h5 class="mb-2">
          <i class="fa-regular fa-location-dot"></i> {{ CharityID.Address }}
        </h5>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner rounded-[20px]">
            <div
              class="carousel-item"
              :class="{ active: index === currentIndex }"
              v-for="(Image, index) of CharityID.Image"
              :key="index"
            >
              <img :src="Image" class="d-block" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div style="margin-top: 10px" v-html="CharityID.Description"></div>
        <p style="text-align: end">{{ func(CharityID.createdAt) }} (VN)</p>
        <div class="button-page">
          <button class="button-donate !bg-[#C30047]">
            <RouterLink
              class="route-donate"
              :to="{ name: 'DonatePage', params: { id: CharityID._id } }"
              >Đóng Góp</RouterLink
            >
          </button>
        </div>
        <div class="button-back-list">
          <RouterLink
            class="back-route !bg-[#C30047] rounded-[50px] button-donate"
            :to="{ name: 'LongCharity' }"
          >
            <i class="fa-solid fa-arrow-left"></i> Xem các trường hoàn các khác
          </RouterLink>
          <RouterLink
            class="back-route !bg-[#C30047] rounded-[50px] button-donate"
            :to="{ name: 'HomePage' }"
          >
            Trở về trang chủ <i class="fa-solid fa-arrow-right"></i>
          </RouterLink>
        </div>
        <div class="button-func">
          <div class="button-func-top">
            <b class="line-1"></b>
            <div class="button-child">
              <button
                :class="statusBt ? 'border-bt-none-right' : ''"
                @click="changeStatusBtTrue"
              >
                Danh Sách Ủng Hộ
              </button>
              <button
                :class="!statusBt ? 'border-bt-none-left' : ''"
                @click="changeStatusBtFalse"
              >
                Bình Luận
              </button>
            </div>
            <b class="line-2"></b>
          </div>
          <div class="body-func">
            <Donater v-if="statusBt"></Donater>
            <Post v-else></Post>
          </div>
        </div>
      </div>
    </div>
    <ViewRightInfor></ViewRightInfor>
  </div>
</template>
<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import TableTopUser from "../ViewCardCharity/TableTopUser.vue";
import ViewCharity from "../ViewCardCharity/ViewCharity.vue";
import ViewRightInfor from "../ViewCardCharity/ViewRightInfor.vue";
import TaskBarName from "../PageInforCharity/TaskBarName.vue";
import Post from "./Comment-Post/Post.vue";
import Donater from "./Comment-Post/Donater.vue";
import useCharityStore from "../../../store/fetchAPI";
import { onMounted, reactive, ref, resolveDirective, watchEffect } from "vue";
import Image from "primevue/image";

const store = useCharityStore();
const route = useRoute().params.id;
const router = useRouter();
const CharityID = ref([]);
const currentIndex = ref(0);
const statusBt = ref(true);
onMounted(async () => {
  await store.fetchCharityById(route);
});
watchEffect(async () => {
  CharityID.value = store.charityByID;
  setTimeout(() => {
    if (CharityID.value.length === 0) {
      router.push({ path: "/:pathMatch(.*)" });
    }
  }, 500);
});

const changeStatusBtTrue = () => {
  statusBt.value = true;
};
const changeStatusBtFalse = () => {
  statusBt.value = false;
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
.carousel-item {
  width: 100%;
  height: 600px;
  overflow: hidden;
}
.carousel-item > img {
  bottom: 0;
  width: 100%;
}
.Infor-Charity {
  display: flex;
  padding-top: 20px;
}
.Infor-Left {
  width: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.Header-Name {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.Header-Name > h4 {
  text-align: center;
  font-weight: 600;
  color: #035898;
}
.Header-Name > h6 {
  text-align: center;
}
.Header-Name > b {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  margin: 0 30px;
  background-color: #ccc;
}
.Body-Post {
  display: flex;
  flex-direction: column;
}
.button-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-donate {
  border-radius: 50px;
  border: none;
  padding: 10px 10px;
}
.button-donate:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  transition: 0.2s;
}
.route-donate {
  padding: 10px 20px;
  color: white;
  text-decoration: none;
}
.button-back-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
.back-route {
  max-width: 300px;
  min-width: 100px;
  width: 300px;
  text-align: center;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #008cb7;
  color: white;
}
.button-func {
  margin-top: 20px;
  margin-bottom: 20px;
}
.button-func-top {
  display: flex;
  align-items: self-end;
}
.line-1 {
  width: 4% !important;
}
.line-2 {
  width: 70% !important;
}
.button-func-top > b {
  content: "";
  display: block;
  width: 30%;
  height: 2px;
  background-color: #ddd;
}
.border-bt-none-right {
  border-bottom: none !important;
  border-right: none !important;
  background-color: #eff6ff !important;
}
.border-bt-none-left {
  border-bottom: none !important;
  border-left: none !important;
  background-color: #eff6ff !important;
}
.button-child {
  display: flex;
}
.button-child > button {
  padding: 5px 10px;
  font-weight: 600;
  background-color: white;
  border: 2px solid #ddd;
}
</style>
./Comment-Donater/Donater.vue
