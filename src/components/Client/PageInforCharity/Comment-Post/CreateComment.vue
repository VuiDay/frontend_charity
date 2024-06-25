<template>
  <form
    class="form-comment"
    @submit.prevent="creaetComment(id, true)"
    enctype="multipart/form-data"
  >
    <div class="creaete-comment">
      <textarea
        name=""
        id=""
        cols="30"
        rows="2"
        v-model="messageComment"
        class="createCm"
      ></textarea>
      <div class="image-input">
        <input
          style="display: none"
          id="imageCm"
          type="file"
          name="image-comment"
          @change="handleFile"
          multiple
        />
        <label class="icon-plus" for="imageCm"
          ><i class="fa-solid fa-plus-large"></i
        ></label>
      </div>
    </div>
    <div style="display: flex; justify-content: center; width: 100%">
      <div class="img-show">
        <div
          v-for="(image, key) of localImageComment"
          class="img-list"
          :key="key"
        >
          <img :src="image" alt="" />
          <div class="bt-remove" @click="removeImage(key)">
            <i class="fa-solid fa-xmark-large"></i>
          </div>
        </div>
      </div>
    </div>
    <button class="bg-[#ccc] rounded-[50px] hover:bg-[#ddd]">Gửi</button>
  </form>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { useRoute } from "vue-router";
const { id, totalCm, post, number } = defineProps([
  "id",
  "totalCm",
  "post",
  "number",
]);
import useCharityStore from "../../../../store/fetchAPI";
const store = useCharityStore();
const messageComment = ref("");
const localImageComment = ref([]);
const localImage = ref([]);
const route = useRoute().params.id;

const creaetComment = async (id) => {
  const formData = new FormData();
  formData.append("post", id);
  formData.append("message", messageComment.value);
  for (let i = 0; i < localImage.value.length; i++) {
    formData.append("image", localImage.value[i]);
  }
  await store.fetchCreateComment(formData);
  if (store.statusComment) {
    messageComment.value = "";
    localImage.value = [];
    localImageComment.value = [];
    post[number].isOpen = false;
    post[number].showCm = true;
    await store.fetchGetComment(id, totalCm);
  }
};

const handleFile = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    localImage.value.push(file);
    if (file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      localImageComment.value.push(imageURL);
    }
  }
};

const removeImage = (key) => {
  localImage.value.splice(key, 1);
  localImageComment.value.splice(key, 1);
};

onMounted(async () => {
  const inputCmd = document.querySelector(".createCm");
  if (inputCmd) {
    inputCmd.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        creaetComment(id);
      }
    });
    inputCmd.addEventListener("paste", (event) => {
      const items = (event.clipboardData || event.originalEvent.clipboardData)
        .items;
      let file = null;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          file = items[i].getAsFile();
          localImage.value.push(file);
          if (file.type.startsWith("image/")) {
            const imageURL = URL.createObjectURL(file);
            localImageComment.value.push(imageURL);
          }
          break;
        }
      }
    });
  }
});
</script>

<style scoped>
.form-comment {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  margin-top: 10px;
}
.form-comment > .creaete-comment > textarea {
  width: 90%;
  padding: 5px 10px;
}
.form-comment > button {
  margin-top: 10px;
  padding: 5px 15px;
  border: none;
}
.creaete-comment {
  display: flex;
  width: 100%;
  justify-content: end;
}
.img-show {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;
}
.img-show > .img-list {
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: self-start;
  margin: 10px;
  position: relative;
}
.img-show > .img-list > img {
  width: 100%;
  height: 50px;
}
.bt-remove {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 12px;
  cursor: pointer;
}
.bt-remove > i {
  font-size: 10px;
  background-color: #ccc;
  border-radius: 50px;
  padding: 1px 2px;
}
.image-input {
  margin-left: 10px;
}
.icon-plus {
  border-radius: 50px;
  padding: 1px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}
.icon-plus:hover {
  background-color: white;
}
</style>
