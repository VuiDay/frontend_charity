<template>
  <div>
    <div class="Title">
      <div
        class="Title-Left Title-Child"
        :class="status ? 'RedClick' : ''"
        @click="changeStatusTrue"
      >
        <p>Dự Án Đang Hoạt Động</p>
      </div>
      <div
        class="Title-Right Title-Child"
        :class="!status ? 'RedClick' : ''"
        @click="changeStatusFlase"
      >
        <p>Dự Án Đã Kết Thúc</p>
      </div>
    </div>
    <div>
      <div>
        <CharityOnline v-if="status" :type="0"></CharityOnline>
        <CharityOffline v-else :type="0"></CharityOffline>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script setup>
import CharityOnline from "../../components/Client/UserCampaignPage/CharityOnline.vue";
import CharityOffline from "../../components/Client/UserCampaignPage/CharityOffline.vue";
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import useCharityStore from "../../store/fetchAPI";
const store = useCharityStore();
const time = ref("");
const status = ref(true);
onMounted(() => {
  store.changeMsg("Ngắn Hạn");
});
const changeStatusTrue = () => {
  status.value = true;
};
const changeStatusFlase = () => {
  status.value = false;
};
const func = () => {
  console.log(time.value);
};
</script>
<style scoped>
.Title {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 10px 0 5px 0;
}
.Title > .Title-Child:hover {
  border-bottom: 1px solid red;
  color: red;
  cursor: pointer;
}
.RedClick {
  border-bottom: 1px solid red;
  color: red !important;
  cursor: pointer;
}
.Title-Child {
  text-decoration: none;
  color: black;
}
.Title > .Title-Child > p {
  margin: 0;
}
.Title-Left {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 5px 0;
}
.Title-Right {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 5px 0;
}
</style>
