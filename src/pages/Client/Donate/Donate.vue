<template>
  <div class="infor-donate">
    <div class="donate-form" v-if="true">
      <div class="Title">
        <h4 class="text-[25px] text-[#c30047]">
          Ủng hộ {{ funcLowerCase(nameCharity.Title) }}
        </h4>
        <b></b>
      </div>
      <div class="Form">
        <label for="fname">Tên người đóng góp: </label>
        <input
          type="text"
          id="fname"
          name="fname"
          :placeholder="dataUser.UserName"
          disabled
        />
        <label for="lname">Chiến dịch đóng góp: </label>
        <input
          type="text"
          id="fname"
          name="fname"
          :placeholder="nameCharity.Title"
          disabled
        />
        <label for="fname" class="flex"
          >Số tiền đóng góp:
          <p class="text-[#c30047] ml-[10px]">
            {{ Functional.formattedMoney(moneyDonate) }} VNĐ
          </p></label
        >
        <input
          type="Number"
          id="fname"
          name="fname"
          placeholder="0"
          v-model="moneyDonate"
        />
        <!-- <label for="fname">Phương thức thanh toán: </label>
        <select name="" id="payment" v-model="payment">
          <option
            v-for="(payment, index) of paymentName"
            :key="index"
            :value="payment._id"
          >
            {{ payment.Method }}
          </option>
        </select> -->
        <!-- <label for="fname">Tin nhắn để lại: </label>
        <textarea placeholder="..." v-model="message"></textarea> -->
        <div class="flex justify-center mt-[20px] w-[80%]">
          <button
            @click="Donate"
            class="bg-[#c30047] text-[white] px-3 py-2 rounded-[20px] font-semibold w-[30%]"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
    <ViewRightInfor></ViewRightInfor>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import ViewRightInfor from "../../../components/Client/ViewCardCharity/ViewRightInfor.vue";
import useCharityStore from "../../../store/fetchAPI";
const store = useCharityStore();
import { onMounted, watchEffect, ref } from "vue";
import Functional from "../../../function/Functional";
import Toast from "../../../function/Toast";
const id = useRoute().params.id;
const nameCharity = ref("");
const paymentName = ref([]);
// form
const moneyDonate = ref("");
const payment = ref("");
const message = ref("");
const router = useRouter();
const dataUser = ref("");
const data = {
  code: "",
  amount: "",
};

onMounted(async () => {
  await store.fetchCharityById(id);
  // await store.fetchPayment();
});
watchEffect(() => {
  nameCharity.value = store.charityByID;
  // paymentName.value = store.payments.filter(
  //   (payment) => payment.Enable === true
  // );
  dataUser.value = store.user;
});
const funcLowerCase = (name) => {
  if (name) {
    return name.toLowerCase();
  }
};
const Donate = async () => {
  if (Number(moneyDonate.value) < 0) {
    Toast.toastFailed("Số tiền ko được âm!");
  } else {
    data.code = id;
    data.amount = moneyDonate.value;
    await store.fetchDonate(data);
    setTimeout(() => {
      window.location.href = `${store.statusDonate}`;
    }, 100);
  }
};
</script>
<style scoped>
.infor-donate {
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
}
.donate-form {
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
}
.Title {
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Title > b {
  content: "";
  display: block;
  width: 90%;
  height: 2px;
  background-color: #ccc;
}
.Form {
  margin-top: 30px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
}
.Form > label {
  font-size: 20px;
  font-weight: 600;
}
.Form > input {
  padding: 10px 20px;
  width: 80%;
  margin: 20px 0;
}
.Form > textarea {
  width: 80%;
  padding: 10px 20px;
}
.Form > select {
  width: 80%;
  padding: 10px 20px;
  margin: 20px 0;
}
</style>
