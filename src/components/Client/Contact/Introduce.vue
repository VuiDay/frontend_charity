<template>
  <div class="intro">
    <div class="text-head">
      <h4 class="text-[30px] text-white">Tại sao lại chọn chúng tôi</h4>
      <!-- <img src="../../../image/Logo/logo_new.png" alt="" /> -->
    </div>
    <div class="explain">
      <div
        v-for="(question, index) of questionList"
        :key="index"
        style="width: 100%; border-bottom: 1px solid #fff; max-width: 850px"
      >
        <button class="button-question" @click="handleShow(index)">
          <p>{{ index + 1 }}. {{ question.Question }}</p>
          <i
            class="fa-regular fa-arrow-up"
            :class="question.isOpen ? 'rotate' : ''"
          ></i>
        </button>
        <div :class="{ answer: true, visible: question.isOpen }">
          <p class="text-white">
            {{ question.Answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import useCharityStore from "../../../store/fetchAPI";
const questionList = ref([]);
const store = useCharityStore();
onMounted(async () => {
  await store.fetchQuestion();
});
watchEffect(() => {
  questionList.value = store.question.map((question) => ({
    ...question,
    isOpen: false,
  }));
});
const handleShow = (index) => {
  questionList.value[index].isOpen = !questionList.value[index].isOpen;
};
</script>

<style scoped>
.intro {
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 99, 120);
  padding: 40px;
}
.text-head {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-head > img {
  width: 50%;
}
.text-head > h4 {
  margin: 20px 0 10px 0;
  color: #035898;
  font-weight: 550;
}
.explain {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.button-question {
  background-color: transparent;
  border: none;
  color: white;
  font-weight: 550;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button-question > p {
  margin: 0;
  padding: 20px 0;
}
.button-question > .rotate {
  transform: rotate(-180deg);
  transition: transform 0.2s ease-out;
}
.answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.visible {
  max-height: 200px;
}
.answer > p {
  color: #ccc;
  padding: 0 0 20px 0;
  margin: 0;
}
</style>
