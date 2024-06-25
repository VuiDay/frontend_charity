<template>
  <div class="post">
    <div class="form-post">
      <form action="#" @submit.prevent="CreatePost">
        <div class="text-from">
          <label for="text">Bình luận</label>
          <div class="input-post">
            <div class="img">
              <img :src="avaUser" alt="" />
            </div>
            <textarea
              v-model="message"
              name=""
              id=""
              cols="20"
              rows="5"
              class="createPost"
            ></textarea>
            <div class="image-input">
              <input
                style="display: none"
                id="imageInput"
                type="file"
                name="image"
                @change="handleFile($event, 'post')"
                multiple
              />
              <label for="imageInput"
                ><i class="fa-solid fa-plus-large"></i
              ></label>
            </div>
          </div>
          <div style="display: flex; justify-content: center">
            <div class="img-show">
              <div
                v-for="(image, key) of imageShow"
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
        </div>
        <div class="send-post">
          <button class="button-post bg-[#ccc] rounded-[50px] hover:bg-[#ddd]">
            Gửi
          </button>
        </div>
      </form>
    </div>

    <div v-for="(post, key) of posts" class="show-post" :key="key">
      <div class="post-user">
        <div class="main-post">
          <div class="avatar">
            <img :src="post?.Avatar?.Image" alt="" />
          </div>
          <div class="text-func">
            <div class="text-post">
              <div class="name-user">
                <h6>{{ post.UserName }}</h6>
              </div>
              <div class="text-user">
                {{ post.Message }}
                <div
                  class="image-post"
                  v-for="(image, imageKey) of post.Image"
                  :key="imageKey"
                >
                  <img
                    class="image-post-user"
                    :src="image"
                    alt=""
                    @click="showImage(key, imageKey)"
                  />
                  <div
                    v-if="showOverlay && selectKey === `${key}-${imageKey}`"
                    class="image-zoom"
                    @click="transImage"
                  >
                    <img
                      class="!w-[auto] !h-[700px]"
                      :src="image"
                      alt=""
                      @click.stop
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="func-Post">
              <p>{{ Functional.getTimeAgo(post.Time) }}</p>
              <p style="cursor: pointer">Thích</p>
              <p style="cursor: pointer" @click="showForm(key)">
                {{ post.isOpen ? "Huỷ" : "Phản hồi" }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="post.isOpen">
        <CreateComment
          :id="post.id"
          :totalCm="totalCm"
          :post="posts"
          :number="key"
        ></CreateComment>
      </div>
      <p
        style="
          margin: 0 35px;
          opacity: 0.7;
          font-size: 12px;
          cursor: pointer;
          width: 50%;
        "
        @click="getComment(key, post.id)"
        v-if="!post.showCm && post.Comment"
      >
        <i class="fa-thin fa-arrow-right"></i>
        Xem {{ post.countComment }} phản hồi
      </p>
      <Comment
        v-if="post.showCm"
        :id="post.id"
        :totalCm="totalCm"
        :number="key"
      ></Comment>
    </div>
    <div class="pagination">
      <b></b>
      <div class="pagination-chill">
        <span @click="previousPage"><<</span>
        <span
          v-for="(total, keyPage) in totalPages"
          :key="keyPage"
          @click="changPage(total)"
          :class="total === currentPage ? 'bg-dark' : ''"
          >{{ total }}</span
        >
        <span @click="nextPage">>></span>
      </div>
      <b></b>
    </div>
  </div>
</template>

<script setup>
import { watchEffect, ref, onMounted, provide } from "vue";
import { useRoute } from "vue-router";
import useCharityStore from "../../../../store/fetchAPI";
import Functional from "../../../../function/Functional";
import CreateComment from "./CreateComment.vue";
import Comment from "./Comment.vue";
const store = useCharityStore();
const avaUser = ref("");
const message = ref("");
const image = ref([]);
const imageShow = ref([]);
const id = useRoute().params.id;
const totalPage = ref(1);
const totalCm = ref(1);
const totalPages = ref();
const currentPage = ref();
const posts = ref([]);
const showOverlay = ref(false);
const selectKey = ref();

watchEffect(() => {
  avaUser.value = store.user.Avatar.Image;
  posts.value = store.dataPost.map((post) => ({
    ...post,
    isOpen: false,
    showCm: false,
  }));
  totalPages.value = store.totalPage;
  currentPage.value = store.currentPage;
});

const getComment = async (key, id) => {
  posts.value[key].showCm = !posts.value[key].showCm;
  await store.fetchGetComment(id, totalCm.value);
};

const showImage = (key, imageKey) => {
  showOverlay.value = true;
  selectKey.value = `${key}-${imageKey}`;
};

const transImage = () => {
  showOverlay.value = !showOverlay.value;
};

const handleFile = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    image.value.push(file);
    if (file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      imageShow.value.push(imageURL);
    }
  }
};

const CreatePost = async () => {
  const formData = new FormData();
  formData.append("Charity", id);
  formData.append("Message", message.value);
  for (let i = 0; i < image.value.length; i++) {
    formData.append("image", image.value[i]);
  }
  console.log(image.value);
  await store.fecthCreaetPost(formData);
  if (store.statusPost) {
    message.value = "";
    image.value = [];
    imageShow.value = [];
    await store.fecthGetPost(id, totalPage.value);
  }
};

const showForm = async (key) => {
  posts.value[key].isOpen = !posts.value[key].isOpen;
};

const previousPage = async () => {
  if (currentPage.value > 1) {
    let page = currentPage.value - 1;
    await store.fecthGetPost(id, page);
    // currentPage.value = page;
    store.changeCurrentPage(page);
    store.dataComment = [];
  }
};

const changPage = async (total) => {
  // currentPage.value = total;
  store.changeCurrentPage(total);
  await store.fecthGetPost(id, total);
  store.dataComment = [];
};

const nextPage = async () => {
  if (currentPage.value < totalPages.value) {
    const page = currentPage.value + 1;
    await store.fecthGetPost(id, page);
    // currentPage.value = page;
    store.changeCurrentPage(page);
    store.dataComment = [];
  }
};

const removeImage = (key) => {
  image.value.splice(key, 1);
  imageShow.value.splice(key, 1);
};

onMounted(async () => {
  await store.fecthGetPost(id, totalPage.value);
  const inputFile = document.querySelector(".createPost");
  if (inputFile) {
    inputFile.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        CreatePost();
      }
    });
    inputFile.addEventListener("paste", (event) => {
      const items = (event.clipboardData || event.originalEvent.clipboardData)
        .items;
      let file = null;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          file = items[i].getAsFile();
          image.value.push(file);
          if (file.type.startsWith("image/")) {
            const imageURL = URL.createObjectURL(file);
            imageShow.value.push(imageURL);
          }
          break;
        }
      }
    });
  }
});
</script>

<style>
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
.bg-dark {
  background-color: #696969 !important;
  color: white;
}
.fs-14 {
  font-size: 14px !important;
}
.fs-12 {
  font-size: 12px !important;
}
.post {
  width: 100%;
  margin-top: 20px;
}
.form-post > form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-from {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 600;
}
.input-post {
  width: 100%;
  display: flex;
  align-items: self-start;
}
.input-post > .img {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.input-post > .img > img {
  width: 110%;
}
.text-from > div > textarea {
  width: 100%;
  padding: 5px 10px;
}
.text-from > div > textarea:focus {
  outline: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.text-from > div > .image-input {
  margin-left: 10px;
}
.text-from > div > .image-input > label {
  border-radius: 50px;
  padding: 1px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
.text-from > div > .image-input > label:hover {
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
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
.send-post {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.button-post {
  padding: 5px 15px;
  border: 1px solid #ddd;
  font-weight: 600;
}
.button-post:active {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
.show-post {
  margin: 10px 60px;
}

/* Show-Post */
.post-user {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.main-post {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}
.avatar {
  width: 30px;
  height: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 5px;
}
.avatar > img {
  width: 105%;
}
.text-func {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
}
.text-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 5px 15px;
  background-color: #d6d6d6;
  border-radius: 20px;
  margin-left: 5px;
}
.name-user > h6 {
  font-weight: 550;
}
.image-post {
  width: auto;
  height: 200px;
  overflow: hidden;
  margin: 3px 0 10px 5px;
  display: flex;
}
.image-post > img {
  cursor: pointer;
}
.func-Post {
  margin-left: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 30%;
}
.func-Post > p {
  margin-right: 20px;
}
.image-zoom {
  position: fixed;
  background-color: rgba(37, 32, 119, 0.1);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-zoom > img {
  animation: imgZoom 0.3s forwards;
}
@keyframes imgZoom {
  0% {
    opacity: 0.6;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
/* Form Comment */
.form-comment {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  margin-top: 10px;
}
.form-comment > .creaete-comment > textarea {
  width: 95%;
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
/* Comment */
.cm {
  width: 25px;
  height: 25px;
}
.comment-user {
  margin: 10px 35px;
  display: flex;
}
.name-user-cm > h6 {
  font-size: 0.8rem;
}
.text-user-cm {
  font-size: 0.8rem;
}
.func-cm {
  font-size: 0.8rem;
}
/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination-chill {
  display: flex;
  justify-content: center;
  width: 20%;
}
.pagination-chill > span {
  background-color: #ddd;
  padding: 2px 5px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 5px;
}
</style>
