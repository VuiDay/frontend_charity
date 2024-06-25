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
        <form class="Container" @submit.prevent="saveAccount">
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
              <input type="checkbox" name="" @click="changeShowPassword" />
              <p style="margin: 0">Hiện mật khẩu</p>
            </div>
          </div>
          <div class="Form-input Form-Username">
            <label for="Username">Username</label>
            <input
              type="text"
              name=""
              id="Username"
              v-model="Username"
              placeholder="Nhập tên tài khoản..."
            />
          </div>
          <div class="Form-input Form-Avatar">
            <label for="Avatar">Avatar</label>
            <input type="file" name="" @change="saveFileAvatar" />
          </div>
          <div class="Button-Accept">
            <button>Đăng Kí Tài Khoản</button>
            <a href="#" @click="changePage"
              >Đã có tài khoản? Chuyển đến đăng nhập</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { reactive, ref, inject, watchEffect } from "vue";
import useCharityStore from "../../store/fetchAPI";
const store = useCharityStore();
const showPassword = reactive({ value: false });
const Password = ref("");
const Username = ref("");
const Avatar = ref(null);
const status = inject("status");
const changeShowPassword = () => {
  showPassword.value = !showPassword.value;
};
const saveAccount = async () => {
  const formData = new FormData();
  formData.append("username", Username.value);
  formData.append("password", Password.value);
  formData.append("avatar", Avatar.value);
  await store.fetchRegister(formData);
  if (store.statusRegister) {
    localStorage.removeItem("Verify");
    status.value = "Login";
  }
};
const saveFileAvatar = (e) => {
  const file = e.target.files[0];
  Avatar.value = file;
};

const changePage = () => {
  status.value = "Login";
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
}
.Container {
}

.Form-input {
  display: flex;
  flex-direction: column;
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
  margin-top: 20px;
}
.Form-Password {
  margin-top: 20px;
}
.Form-Username {
  margin-top: 20px;
}
.Form-Avatar {
  margin-top: 20px;
}
.Accessory {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Show-password {
  padding: 2px 0 0 0;
  display: flex;
  font-size: 13px;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 30px;
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
  width: 50%;
  display: flex;
  justify-content: space-between;
}
</style>
