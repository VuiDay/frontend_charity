<template>
  <div v-if="!isOpen">
    <div class="create-top">
      <div class="text-create">
        <h4 class="title">Lưu ý trước khi tạo chiến dịch</h4>
        <p>
          Chúng tôi ra đời với sứ mệnh giúp đỡ những hoàn cảnh khó khăn trong xã
          hội. Kỳ vọng đó không thể trở thành hiện thực nếu không có sự đóng góp
          của bạn. Hãy cùng chúng tôi xây dựng một cộng đồng lành mạnh, tin
          tưởng và sẻ chia.
        </p>
      </div>
      <div class="image-create">
        <img src="../../../image/Slider/createCharity.jpeg" alt="" />
      </div>
    </div>
    <div class="create-bottom">
      <p>
        1. Chúng tôi là trang web phục vụ cộng đồng. Vui lòng có trách nhiệm với
        những thông tin bạn đăng tải lên. Trung thực là yếu tố tiên quyết để
        chúng tôi được tin tưởng và giúp đỡ được nhiều trường hợp hơn
      </p>
      <p>
        2. Chúng tôi sẽ yêu cầu những người dùng khác xác minh thông tin chiến
        dịch mà bạn đưa lên. Vui lòng kiểm tra lại số điện thoại bạn đã đăng ký
        với chúng tôi và chú ý giữ điện thoại bên mình. Hãy lịch sự với những
        người liên hệ để xác minh thông tin chiến dịch của bạn.
      </p>
      <p>
        3. Nếu thông tin bạn đưa ra được xác nhận là không đúng sự thật, bạn sẽ
        mất số điểm tín dụng đặt cược cho chiến dịch, đồng thời Hồ sơ cá nhân
        của bạn sẽ lưu lại thông tin này. Việc này sẽ làm cho bạn khó gọi vốn
        hơn trong tương lai.
      </p>
      <p>
        4. Chúng tôi khuyến khích bạn mô tả rõ lộ trình sử dụng tiền quyên góp
        để các mạnh thường quân có niềm tin vào chiến dịch của bạn. Hãy chia
        thành các giai đoạn giải ngân nếu bạn kêu gọi số tiền lớn.
      </p>
    </div>
  </div>
  <div class="button-create">
    <button @click="changOpen" v-if="!isOpen">Tạo chiến dịch</button>
    <div v-else class="w-100 flex justify-center items-center">
      <div
        v-if="user.Rating < 5"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <p style="color: red">
          *Bạn phải đạt 5 điểm thưởng mới có thể tạo chiến dịch
        </p>
        <button
          class="bg-[#c30047] rounded-full weight-600 font-semibold text-white"
        >
          <RouterLink :to="{ name: 'LongCharity' }" class=":underline py-2 px-3"
            >Click vào đây để xem các chiến dịch</RouterLink
          >
        </button>
      </div>
      <FormCreate v-else></FormCreate>
    </div>
  </div>
</template>

<script setup>
import FormCreate from "./FormCreate.vue";
import { onMounted, ref, watchEffect } from "vue";
import useCharityStore from "../../../store/fetchAPI";
const store = useCharityStore();
const isOpen = ref(false);
const user = ref("");

watchEffect(() => {
  user.value = store.user;
});

const changOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.text-create {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-create > h4 {
  width: 70%;
  padding: 10px 0;
  font-size: 30px;
}
.text-create > p {
  padding: 10px 0;
  width: 70%;
  font-size: 15px;
  color: #858585;
}
.text-create > h4 .text-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.image-create {
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-create > img {
  width: 70%;
  height: auto;
}
.create-bottom {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.create-bottom > p {
  width: 60%;
  font-size: 18px;
}
.button-create {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.button-create > button {
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 50px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  animation: rotateBorder 4s linear infinite;
  transition: 0.3s;
  font-weight: 600;
}
@keyframes rotateBorder {
  0% {
    border: 2px solid green;
  }
  25% {
    border: 2px solid yellow;
  }
  50% {
    border: 2px solid red;
  }
  75% {
    border: 2px solid blue;
  }
  100% {
    border: 2px solid purple;
  }
}
.button-create > button:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  animation: none;
}
</style>
