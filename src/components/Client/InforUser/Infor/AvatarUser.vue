<template>
  <div class="Infor-ava">
    <div class="ava-user">
      <img :src="user" alt="" />
    </div>
    <input id="avatar" @change="handleFile" style="display: none" type="file" />
    <label for="avatar"
      ><i class="fa-thin fa-images"></i> Thay ảnh đại diện</label
    >
    <p v-if="errorImg" style="color: red">*Vui lòng chọn ảnh!</p>
    <button v-if="!status" @click="saveImage">Lưu lại</button>
    <ProgressSpinner
      v-else
      style="width: 50px; height: 50px"
      strokeWidth="8"
      class="fill-surface-0 dark:fill-surface-800"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
</template>

<script setup>
import ProgressSpinner from "primevue/progressspinner";
import { ref, watchEffect } from "vue";
import useCharityStore from "../../../../store/fetchAPI";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
const store = useCharityStore();
const user = ref("");
const image = ref("");
const errorImg = ref(false);
const status = ref(false);

const handleFile = (event) => {
  const file = event.target.files[0];
  image.value = file;
  if (file.type.startsWith("image/")) {
    const imageURL = URL.createObjectURL(file);
    user.value = imageURL;
    console.log(user.value);
  }
};

const saveImage = async () => {
  const formData = new FormData();
  formData.append("avatar", image.value);
  console.log(image.value);
  if (image.value === "") {
    errorImg.value = true;
    setTimeout(() => {
      errorImg.value = false;
    }, 1000);
  } else {
    status.value = true;
    await store.updateAvatar(formData);
  }
  if (store.statusUpdateImg === true) {
    toast("Cập nhật ảnh thành công", {
      theme: "dark",
      type: "success",
      autoClose: 5,
      hideProgressBar: true,
      transition: "zoom",
      position: "bottom-center",
      dangerouslyHTMLString: true,
    });
    status.value = false;
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
};

watchEffect(() => {
  user.value = store.user?.Avatar?.Image;
});
</script>

<style scoped>
.Infor-ava {
  width: calc(100% / 4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ava-user {
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.ava-user > img {
  width: 100%;
  height: auto;
}
label {
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
}
button {
  margin-top: 10px;
  border: none;
  padding: 10px 25px;
  border-radius: 50px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  width: 35%;
}
button:active {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
</style>
