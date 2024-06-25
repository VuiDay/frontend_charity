<template>
  <div>
    <div class="flex align-items-center gap-3 mb-3">
      <label for="username" class="font-semibold w-6rem w-[30%]"
        >Mật khẩu</label
      >
      <InputText
        id="username"
        class="flex-auto"
        autocomplete="off"
        v-model="password"
      />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
      <label for="email" class="font-semibold w-6rem w-[30%]"
        >Mật khẩu mới</label
      >
      <InputText
        id="email"
        class="flex-auto"
        autocomplete="off"
        v-model="newpw"
      />
    </div>
    <div class="flex justify-content-end gap-2">
      <Button
        type="button"
        label="Save"
        @click="submitPw"
        class="bg-[#333366] px-3 py-2 rounded-[20px] font-semibold"
        >Xác nhận</Button
      >
    </div>
  </div>
</template>

<script setup>
import InputText from "primevue/inputtext";
import useCharityStore from "../../../../../store/fetchAPI";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const store = useCharityStore();
const status = ref(null);
const password = ref("");
const newpw = ref("");
const data = {
  password: "",
  newpw: "",
};
const submitPw = async () => {
  if (!password.value || !newpw.value) {
    toast("Ko để trống form", {
      theme: "auto",
      type: "error",
      dangerouslyHTMLString: true,
    });
    return;
  }
  if (newpw.value.length <= 8) {
    toast("Yêu cầu mật khẩu trên 8 kí tự", {
      theme: "auto",
      type: "error",
      dangerouslyHTMLString: true,
    });
    return;
  }
  data.password = password.value;
  data.newpw = newpw.value;
  await store.changePw(data);
  if (store.statusChangePw) {
    toast("Đổi mật khẩu thành công", {
      theme: "auto",
      type: "success",
      dangerouslyHTMLString: true,
    });
    password.value = "";
    newpw.value = "";
    store.visiable = false;
  } else {
    toast("Kiểm tra lại mật khẩu của bạn", {
      theme: "auto",
      type: "error",
      dangerouslyHTMLString: true,
    });
  }
};
</script>

<style scoped></style>
