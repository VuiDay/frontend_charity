<template>
  <div class="Layout-Login">
    <div class="Form-Login">
      <div class="Login-Left">
        <img
          src="https://res.cloudinary.com/dn6xdmqbl/image/upload/v1715979691/slide/spn74stlisyflhzyje8t.png"
          alt=""
        />
      </div>
      <div class="Login-Right">
        <div class="Form-input Form-Email">
          <label for="Email">Email</label>
          <input
            type="Email"
            name=""
            id="Email"
            placeholder="Nhập email của bạn..."
            v-model="Email"
          />
        </div>
        <div class="Form-input Form-Password">
          <label for="Pass">Password</label>
          <input
            :type="showPassword.value ? 'text' : 'password'"
            name=""
            id="Pass"
            placeholder="Nhập mật khẩu của bạn..."
            v-model="Password"
          />
        </div>
        <div class="Accessory">
          <div class="Show-password">
            <input type="checkbox" name="" id="" @click="changeShowPassword" />
            <p style="margin: 0">Hiện mật khẩu</p>
          </div>
          <div class="Back-up-pass">
            <a href="#">Quên mật khẩu?</a>
          </div>
        </div>
        <div class="Button-Accept">
          <button @click="login">Đăng Nhập</button>
          <a href="#" @click="changePage">Chưa có tài khoản?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, provide, inject, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import useCharityStore from "../../store/fetchAPI";
const store = useCharityStore();
const showPassword = reactive({ value: false });
const Email = ref("");
const Password = ref("");
const status = inject("status");
const data = {
  email: "",
  password: "",
};
const login = async () => {
  data.email = Email.value;
  data.password = Password.value;
  await store.fetchLogin(data);
};
const changeShowPassword = () => {
  showPassword.value = !showPassword.value;
};
const changePage = () => {
  status.value = "VerifyEmail";
};
</script>

<style scoped>
.Layout-Login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Login-Left {
  display: flex;
  align-items: center;
  margin-left: 30px;
}
.Login-Left > img {
  width: 60%;
}
.Login-Right {
  display: flex;
  align-items: center;
  margin-right: 30px;
  flex-direction: column;
  justify-content: center;
}
.Container {
}
.Form-input > label {
}
.Form-input > input {
  margin-top: 5px;
  padding: 10px 50px 10px 5px;
  border: none;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
}
.Form-Email {
}
.Form-Password {
  margin-top: 20px;
}
.Accessory {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Show-password {
  padding: 10px 0 0 0;
  display: flex;
  font-size: 13px;
}
.Back-up-pass {
  padding-top: 10px;
  font-size: 13px;
}
.Button-Accept {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 13px;
}
.Button-Accept > a {
  margin-top: 10px;
}
.Button-Accept > button {
  color: white;
  font-weight: 600;
  background-color: #5a5a5a;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 30px;
}
.Button-Accept > button:hover {
  opacity: 0.8;
  transition: 0.2s;
}
.Form-Login {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 40%;
  height: 400px;
  display: flex;
  justify-content: space-between;
}
</style>
