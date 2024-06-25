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
          <label for="Code">Nhập mã vừa gửi về Email</label>
          <div class="form-code">
            <input
              v-for="(input, index) in inputs"
              :key="index"
              ref="codeInputs"
              v-model="codes[index]"
              maxlength="1"
              type="text"
              class="code-input"
            />
          </div>
        </div>
        <div class="Button-Accept">
          <button @click="Accept">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import useCharityStore from "../../store/fetchAPI";
const store = useCharityStore();
const status = inject("status");
const data = {
  code: "",
};
const codes = ref(["", "", "", "", "", ""]);
const inputs = ref(6);

const Accept = async () => {
  data.code = codes.value.join("");
  await store.fetchVerifyCode(data);
  if (store.statusCode) {
    status.value = "Register";
  }
};

onMounted(() => {
  const inputElements = document.querySelectorAll("input.code-input");
  inputElements.forEach((ele, index) => {
    ele.addEventListener("keydown", (e) => {
      if (e.keyCode === 8 && e.target.value === "")
        inputElements[Math.max(0, index - 1)].focus();
    });
    ele.addEventListener("input", (e) => {
      const [first, ...rest] = e.target.value;
      e.target.value = first ?? "";
      const lastInputBox = index === inputElements.length - 1;
      const didInsertContent = first !== undefined;
      if (didInsertContent && !lastInputBox) {
        inputElements[index + 1].focus();
        inputElements[index + 1].value = rest.join("");
        inputElements[index + 1].dispatchEvent(new Event("input"));
      }
    });
  });
});
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
.form-code {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.form-code > input {
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border: none;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
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
