<template>
  <div
    v-for="(comment, keyCm) of CommentReturn(id)"
    class="comment-user"
    :key="keyCm"
  >
    <div v-if="!comment.isEdit" style="display: flex; width: 100%">
      <div class="avatar cm">
        <img :src="comment?.Avatar?.Image" alt="" />
      </div>
      <div class="text-func text-func-cm">
        <div class="text-post text-cm">
          <div class="name-user name-user-cm">
            <h6>{{ comment.UserName }}</h6>
          </div>
          <div class="text-user text-user-cm">
            {{ comment.Message }}
            <div
              class="image-post"
              v-for="(image, imageKeyCm) of comment.Image"
              :key="imageKeyCm"
            >
              <img
                class="image-post-user"
                :src="image"
                alt=""
                @click="showImage(keyCm, imageKeyCm)"
              />
              <div
                v-if="showOverlay && selectKeyCm === `${keyCm}-${imageKeyCm}`"
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
        <div class="func-Post func-cm">
          <p>{{ Functional.getTimeAgo(comment.Time) }}</p>
          <p>Thích</p>
        </div>
      </div>
    </div>
    <div></div>
  </div>
  <p
    style="
      margin: 0 35px;
      opacity: 0.7;
      font-size: 12px;
      cursor: pointer;
      width: 80%;
      text-align: center;
    "
    @click="addComment()"
    v-if="store.statusGetCm[id]"
  >
    Xem thêm
  </p>
</template>

<script setup>
import { onMounted, watchEffect, ref } from "vue";
import useCharityStore from "../../../../store/fetchAPI";
import Functional from "../../../../function/Functional";
let { id, totalCm, number } = defineProps(["id", "totalCm", "number"]);
const store = useCharityStore();
const dataComment = ref([]);
const showOverlay = ref(false);
const selectKeyCm = ref("");
let page = totalCm;

watchEffect(() => {
  dataComment.value = store.dataComment
    .map((data) => ({
      ...data,
      isEdit: false,
    }))
    .filter((data) => data.idPost === id);
  console.log(store.statusGetCm);
});

const addComment = async () => {
  page++;
  await store.fetchGetComment(id, page);
};

const CommentReturn = (id) => {
  const uniqueComments = {};
  const result = [];
  dataComment.value.forEach((data) => {
    if (data.idPost === id && !uniqueComments[data.id]) {
      uniqueComments[data.id] = true;
      result.push(data);
    }
  });
  result.sort((a, b) => new Date(b.Time) - new Date(a.Time));
  return result;
};

const transImage = () => {
  showOverlay.value = !showOverlay.value;
};

const showImage = (keyCm, imageKeyCm) => {
  selectKeyCm.value = `${keyCm}-${imageKeyCm}`;
  showOverlay.value = true;
};
</script>

<style scoped></style>
