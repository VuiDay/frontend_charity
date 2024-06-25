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
            required
          />
        </div>
        <div class="Button-Accept">
          <button @click="Accept">Nhận mã</button>
          <a href="#" @click="changePage">Đã có tài khoản?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import useCharityStore from "../../store/fetchAPI";
const store = useCharityStore();
const status = inject("status");
const Email = ref("");
const data = {
  email: "",
};
const changePage = () => {
  status.value = "Login";
};
const Accept = async () => {
  data.email = Email.value;
  await store.fetchVerifyEmail(data);
  if (store.statusVerify) {
    alert("Kiểm tra email để nhận code!");
    status.value = "VerifyCode";
  }
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
