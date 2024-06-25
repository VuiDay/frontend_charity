<template>
  <div style="background-color: #eff6ff">
    <LoginPage v-if="status === 'Login'"></LoginPage>
    <RegisterPage v-if="status === 'Register'"></RegisterPage>
    <VerifyCode v-if="status === 'VerifyCode'"></VerifyCode>
    <VerifyEmail v-if="status === 'VerifyEmail'"></VerifyEmail>
  </div>
</template>

<script setup>
import LoginPage from "../../components/Accuracy/LoginPage.vue";
import RegisterPage from "../../components/Accuracy/RegisterPage.vue";
import VerifyCode from "../../components/Accuracy/VerifyCode.vue";
import VerifyEmail from "../../components/Accuracy/VerifyEmail.vue";
import { reactive, ref, provide, onMounted } from "vue";
const status = ref("Login");
provide("status", status);
onMounted(() => {
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("status", status.value);
  });
});
</script>

<style scoped></style>
