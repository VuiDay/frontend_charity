<template>
  <div class="form-infor">
    <div class="infor-user">
      <div class="infor-left">
        <p>Tên người dùng</p>
        <p>Email</p>
        <p>Điểm thưởng</p>
      </div>
      <div class="infor-right">
        <input
          type="text"
          name=""
          id=""
          :placeholder="user.UserName"
          :disabled="enable !== 0"
          v-model="username"
        />
        <input
          type="text"
          name=""
          id=""
          :placeholder="user.Email"
          :disabled="enable !== 1"
          v-model="email"
        />

        <input
          type="text"
          class="input-point"
          name=""
          id=""
          :placeholder="user.Rating"
          @mouseover="showText = true"
          @mouseleave="showText = false"
          disabled
        />
      </div>
      <div class="btn-func">
        <div v-for="(data, key) in 3">
          <p v-if="!isEdit[key]" @click="onEdit(key)">
            {{ key === 2 || key === 1 ? "x" : "Sửa" }}
          </p>
          <p v-else @click="saveChange(key)">Lưu</p>
        </div>
      </div>
    </div>
    <ul v-if="showText" class="text-[#c30047] font-semibold ul-text">
      *Điểm thưởng sẽ được cộng khi bạn ủng hộ chiến dịch trên website
    </ul>
    <Button label="Show" @click="showModal('password')" class="btn-pss"
      >Đổi mật khẩu?</Button
    >
    <Dialog
      v-model:visible="store.visiable"
      modal
      header="Thay đổi mật khẩu"
      :style="{ width: '25rem' }"
    >
      <component :is="component"></component>
    </Dialog>
  </div>
</template>

<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import useCharityStore from "../../../../store/fetchAPI";
import Password from "./Function/ChangePassWord.vue";
import { ref, watchEffect } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const showText = ref(false);

const store = useCharityStore();
const user = ref([]);
const isEdit = ref({});
const enable = ref("");
const email = ref("");
const username = ref("");
const component = ref("");
const data = {
  username: "",
};

const modal = {
  password: Password,
};

const onEdit = (key) => {
  for (let prop in isEdit.value) {
    isEdit.value[prop] = false;
  }
  if (key === 2 || key === 1) {
    enable.value = "";
    return;
  }
  isEdit.value[key] = true;
  enable.value = key;
};

const saveChange = async (key) => {
  if (key === 0) {
    data.username = username.value;
    await store.changeInfor(data);
    if (store.statusChangeInfor === true) {
      toast("Thay đổi thành công", {
        theme: "auto",
        type: "success",
        dangerouslyHTMLString: true,
      });
      isEdit.value[key] = false;
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast("Tên này đã tồn tại", {
        theme: "auto",
        type: "error",
        dangerouslyHTMLString: true,
      });
      isEdit.value[key] = false;
    }
  }
};

const showModal = (name) => {
  component.value = modal[name];
  store.visiable = true;
};

watchEffect(() => {
  user.value = store.user;
  email.value = store.user.Email;
  username.value = store.user.UserName;
});
</script>

<style scoped>
p {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
.form-infor {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% / 3);
}
.infor-user {
  display: flex;
  align-items: center;
}
.infor-left {
  width: 62%;
}
.infor-left > p {
  width: 70%;
  margin: 15px 0;
  padding: 10px 0 10px 15px;
}
.infor-right {
  width: 100%;
}
.infor-right > input {
  width: 290px;
  padding: 10px 20px;
  margin: 5px 0;
  border: 2px solid transparent;
  border-radius: 50px;
  background-color: #ddd;
}
.btn-func > div > p {
  padding: 10px 10px;
  margin: 15px 0;
  background-color: #ddd;
  margin-right: 20px;
  border-radius: 50px;
  text-align: center;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  cursor: pointer;
}
.btn-func > div > p:active {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
.btn-pss {
  width: 40%;
  margin: 10px 20px;
  padding: 10px 25px !important;
  border: none !important;
  border-radius: 50px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  background: transparent;
  color: black !important;
}
.btn-pss:active {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset !important;
}
</style>
