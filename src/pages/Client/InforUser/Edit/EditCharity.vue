<template>
  <div class="flex items-center ">
      <h2 class="text-[#c30047] font-semibold text-[40px] ml-[100px] text-center w-[100%]">
        <i class="fa-solid fa-gear"></i> Chiến dịch của bạn
      </h2>
    </div>
  <div class="w-[100%] flex justify-center">
    <div class="bg-[#ddd] h-[100%] w-[300px] rounded-[20px] p-[20px]">
      <div class="flex flex-col mb-2 gap-2 items-center">
        <button class="flex items-center" @click="active = 0">
          <p
            class="bg-[#c30047] w-[50px] h-[50px] text-center flex justify-center items-center rounded-[50px] text-white"
            :class="active !== 0 ? '!bg-[#ccc]' : ''"
          >
            1
          </p>
          <p class="w-[200px]" :class="active === 0 ? 'font-semibold' : ''">
            Thông tin chiến dịch
          </p>
        </button>
        <button class="flex items-center" @click="active = 1">
          <p
            class="bg-[#c30047] w-[50px] h-[50px] text-center flex justify-center items-center rounded-[50px] text-white"
            :class="active !== 1 ? '!bg-[#ccc]' : ''"
          >
            2
          </p>
          <p class="w-[200px]" :class="active === 1 ? 'font-semibold' : ''">
            Thông tin tài chính
          </p>
        </button>
      </div>
    </div>
    <div
      class="ml-[25px] form-create flex !px-10 !py-10 rounded-[20px] w-[60%] flex-col bg-[#ccc]"
    >
      <div v-if="active === 0" class="w-[100%]">
        <p class="text-[#C30047] font-semibold">Thông tin chiến dịch</p>
        <!-- Tên chiến dịch -->
        <div class="mt-[20px]">
          <p class="font-semibold">Tên chiến dịch</p>
          <p class="text-[#696969]">
            Tên chiến dịch nên ngắn gọn nhưng rõ ràng để mọi người dễ hiểu.
          </p>
          <input
            type="text"
            class="py-[7px] px-[15px] rounded-[10px] w-[100%]"
            v-model="Charity"
          />
        </div>
        <!-- Chủ đề chiến dịch -->
        <div class="mt-[20px]">
          <p class="font-semibold">Chủ đề chiến dịch</p>
          <button
            class="py-[7px] px-[15px] rounded-[10px] w-[100%] bg-white cursor-pointer text-start"
            @click="changeStatusCategory"
          >
            {{
              categoryName !== null ? categoryName : "Chọn chủ đề chiến dịch"
            }}
          </button>
          <div
            class="bg-white mt-[10px] rounded-[10px] py-[10px] px-[15px] !max-h-[200px] overflow-scroll"
            style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
            v-if="categoryStatus"
          >
            <p
              class="my-[5px] cursor-pointer"
              v-for="(categori, index) of categories"
              @click="saveCategory(categori._id, categori.Title)"
            >
              {{ categori.Title }}
            </p>
          </div>
        </div>
        <!-- Địa chỉ chiến dịch -->
        <div class="mt-[20px]">
          <p class="font-semibold">Địa chỉ chiến dịch</p>
          <div>
            <div class="flex justify-center">
              <div class="mx-[60px]">
                <p class="text-[#696969]">Tỉnh / Thành phố</p>
                <button
                  class="py-[7px] px-[15px] rounded-[10px] w-[100%] bg-white cursor-pointer text-start"
                  @click="onConsciou"
                >
                  {{ nameConsciou ? nameConsciou : "Chọn tỉnh / thành phố" }}
                </button>
                <div
                  class="bg-white mt-[10px] rounded-[10px] py-[10px] px-[15px] !max-h-[200px] overflow-scroll"
                  v-if="statusConsciou"
                >
                  <p
                    v-for="(consciou, index) of Conscious"
                    class="my-[5px] cursor-pointer"
                    @click="fetchCity(consciou.code, consciou.name)"
                  >
                    {{ consciou.name }}
                  </p>
                </div>
              </div>
              <div class="mx-[60px]">
                <p class="text-[#696969]">Thành phố / Huyện</p>
                <button
                  class="py-[7px] px-[15px] rounded-[10px] w-[100%] bg-white cursor-pointer text-start"
                  @click="
                    () => {
                      if (nameConsciou) {
                        statusCity = !statusCity;
                      }
                      return;
                    }
                  "
                >
                  {{ nameCity ? nameCity : "Trống" }}
                </button>
                <div
                  class="bg-white mt-[10px] rounded-[10px] py-[10px] px-[15px] !max-h-[200px] overflow-scroll"
                  v-if="statusCity"
                >
                  <p
                    v-for="(city, index) of Citys"
                    class="my-[5px] cursor-pointer"
                    @click="fetchWard(city.code, city.name)"
                  >
                    {{ city.name }}
                  </p>
                </div>
              </div>
              <div class="mx-[60px]">
                <p class="text-[#696969]">Phường / Xã</p>
                <button
                  class="py-[7px] px-[15px] rounded-[10px] w-[100%] bg-white cursor-pointer text-start"
                  @click="
                    () => {
                      if (nameConsciou) {
                        statusWard = !statusWard;
                      }
                      return;
                    }
                  "
                >
                  {{ nameWard ? nameWard : "Trống" }}
                </button>
                <div
                  class="bg-white mt-[10px] rounded-[10px] py-[10px] px-[15px] !max-h-[200px] overflow-scroll"
                  v-if="statusWard"
                >
                  <p
                    v-for="(ward, index) of Wards"
                    class="my-[5px] cursor-pointer"
                    @click="saveData(ward.name)"
                  >
                    {{ ward.name }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-[10px]">
              <p class="text-[#696969]">Địa chỉ cụ thể</p>
              <input
                type="text"
                class="py-[7px] px-[15px] rounded-[10px] w-[100%]"
                v-model="arrayAddress"
              />
            </div>
          </div>
        </div>
        <!-- Ảnh chiến dịch -->
        <div class="mt-[20px]">
          <p class="font-semibold">Ảnh chiến dịch</p>
          <p class="text-[#696969]">
            Lưu ý ảnh đầu tiên sẽ là ảnh hiển thị ở ngoài giới thiệu chiến dịch
          </p>
          <div class="flex flex-wrap">
            <div class="mt-[10px]">
              <input
                id="image_charity"
                type="file"
                class="hidden"
                @change="handleFile"
              />
              <label
                for="image_charity"
                class="w-[250px] h-[150px] flex justify-center items-center bg-[rgb(136,136,136,0.4)] cursor-pointer rounded-[10px]"
              >
                <img src="/plus.svg" alt="" />
              </label>
            </div>
            <div
              class="ml-[10px] w-[250px] h-[150px] overflow-hidden flex justify-center items-center rounded-[10px] relative mt-[10px]"
              v-for="(image, index) of imageShow"
            >
              <Image :src="image" alt="Image" width="250" preview />
              <p
                class="absolute top-0 right-0 p-[2px] cursor-pointer"
                @click="removeImage(index)"
              >
                <img src="/multiply.svg" alt="" />
              </p>
            </div>
          </div>
        </div>
        <!-- Thời gian chiến dịch kêt thúc -->
        <div class="mt-[20px]">
          <p class="font-semibold">Thời gian chiến dịch kết thúc</p>
          <input type="datetime-local" class="py-[7px] px-[15px] rounded-[10px] w-[100%]" v-model="timeEnd">
        </div>
        <!--Nội dung chiến dịch -->
        <div class="mt-[20px]">
          <p class="font-semibold">Nội dung chiến dịch</p>
          <Editor
            v-model="Description"
            editorStyle="height: 320px"
            class="border-[1px] border-[#585858] rounded-[10px] mt-[10px]"
          />
        </div>
      </div>
      <div v-if="active === 1">
        <p class="text-[#C30047] font-semibold">Thông tin tài chính</p>
        <!-- Thông tin tài khoản ngân hàng -->
        <div class="mt-[20px]">
          <p class="font-semibold">Thông tin tài khoản</p>
          <div class="flex items-center">
            <button
              class="py-[7px] px-[15px] rounded-[10px] w-[20%] bg-white cursor-pointer text-start flex"
              @click="() => (statusBank = !statusBank)"
            >
              <img src="/bank.svg" class="mr-[10px]" alt="" />
              {{ nameBank ? nameBank : "Chọn ngân hàng" }}
            </button>
            <input
              type="text"
              class="ml-[10px] py-[7px] px-[15px] rounded-[10px] w-[60%]"
              v-model="idBank"
              placeholder="Nhập số tài khoản ngân hàng của người cần ủng hộ"
            />
          </div>

          <div
            class="bg-white mt-[10px] rounded-[10px] py-[10px] px-[15px] !max-h-[200px] overflow-scroll w-[30%]"
            v-if="statusBank"
          >
            <p
              v-for="(bank, index) of banks"
              class="my-[5px] cursor-pointer flex justify-start items-center"
              @click="
                () => ((nameBank = bank.shortName), (statusBank = !statusBank))
              "
            >
              <img width="50px" :src="bank.logo" alt="" />
              {{ bank.shortName }}
            </p>
          </div>
        </div>
        <!-- Thông tin số tiền cần ủng hộ -->
        <div class="mt-[20px]">
          <p class="font-semibold flex">
            Số tiền cần quyên góp của chiến dịch
            <p v-if="targetMoney" class="ml-[10px] text-[#c30047]">{{ Functional.formattedMoney(targetMoney) }}đ</p>
          </p>
          <input
            type="number"
            class="py-[7px] px-[15px] rounded-[10px] w-[100%]"
            v-model="targetMoney"
            placeholder="VNĐ"
          />
        </div>
        <div class="mt-[50px]">
          <p class="text-[#c30047] font-semibold ">*Chiến dịch của bạn sẽ được hiển thị trên website sau khi được duyệt!</p>
          <div class="w-[100%] flex justify-center mt-[20px]">
            <button class="text-white bg-[#c30047] py-3 px-5 rounded-[50px] font-semibold" @click="updateCharity">Xác nhận thông tin</button>
          </div>
        </div>
      </div>
      <div class="w-[100%] flex justify-between mt-[30px]">
        <p
          class="text-[20px] font-semibold text-[#c30047] cursor-pointer px-[10px] py-[7px] rounded-[50px]"
          style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          @click="
            () => {
              if (active <= 0) {
                return;
              }
              active -= 1;
            }
          "
        >
          <<
        </p>
        <p
          class="text-[20px] font-semibold text-[#c30047] cursor-pointer px-[10px] py-[7px] rounded-[50px]"
          style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          @click="
            () => {
              if (active >= 1) {
                return;
              }
              active += 1;
            }
          "
        >
          >>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import Editor from "primevue/editor";
import ProgressSpinner from "primevue/progressspinner";
import Image from "primevue/image";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import useCharityStore from "@/store/fetchAPI";
import { onMounted, ref, watchEffect } from "vue";
import {useRoute} from 'vue-router';
import { watch } from "vue";
import axios from "axios";
import Functional from "@/function/Functional";
import Toast from '../../../../function/Toast'
const Charity = ref(null);
const Address = ref("");
const image = ref([]);
let categoryId = ref("");
let categoryName = ref(null);
let categoryStatus = ref(false);
const timeEnd = ref("");
const arrayAddress = ref("");
const targetMoney = ref("");
const Description = ref("");
const route = useRoute().params.id;
//
const store = useCharityStore();

//Ngân hàng
const banks = ref([]);
const statusBank = ref(false);
const nameBank = ref("");
const idBank = ref("");

const Conscious = ref([]);
const Citys = ref([]);
const Wards = ref([]);
// Trạng thái địa chỉ
const statusConsciou = ref(false);
const statusCity = ref(false);
const statusWard = ref(false);
// Tên địa chỉ
const nameConsciou = ref("");
const nameCity = ref("");
const nameWard = ref("");
//
const imageShow = ref([]);
const categories = ref([]);
const isLoading = ref(true);

// redirect
const active = ref(0);


//Category
const saveCategory = (id, name) => {
  categoryId.value = id;
  categoryName.value = name;
  categoryStatus.value = !categoryStatus.value;
};

const changeStatusCategory = () => {
  categoryStatus.value = !categoryStatus.value;
  console.log(categoryStatus.value);
};
//Mở chọn thành phố
const onConsciou = () => {
  nameCity.value = "";
  nameWard.value = "";
  statusConsciou.value = !statusConsciou.value;
  if (statusCity.value || statusWard.value) {
    statusCity.value = !statusCity.value;
    statusWard.value = !statusWard.value;
  } else if (statusWard.value) {
  }
};
//
const fetchCity = async (code, name) => {
  await store.getCity(code);
  nameConsciou.value = name;
  statusConsciou.value = !statusConsciou.value;
  statusCity.value = !statusCity.value;
};

const fetchWard = async (code, name) => {
  await store.getWard(code);
  nameCity.value = name;
  statusCity.value = !statusCity.value;
  statusWard.value = !statusWard.value;
  Citys.value.find((data) => data.code === codeCitys.value)?.name || "";
};

const saveData = (name) => {
  nameWard.value = name;
  statusWard.value = !statusWard.value;
  arrayAddress.value = `${nameConsciou.value}, ${nameCity.value}, ${nameWard.value}`;
};

const handleFile = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const check = image.value.some((data) => data.name === file.name);
    if (check) {
      return;
    }
    image.value.push(file);
    if (file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      imageShow.value.push(imageURL);
    }
  }
};

const removeImage = (key) => {
  image.value.splice(key, 1);
  imageShow.value.splice(key, 1);
};

const updateCharity = async () => {
  const formData = new FormData();
  if( !Charity.value || !arrayAddress.value || !categoryId.value || 
  !targetMoney.value || !image.value || !Description.value || !timeEnd.value || !nameBank.value || !idBank.value) {
    Toast.toastFailed('Yêu cầu nhập đủ thông tin vào form!!')
    return;
  }
  formData.append("Title", Charity.value);
  formData.append("Address", arrayAddress.value);
  formData.append("Category", categoryId.value);
  formData.append("TargetMoney", targetMoney.value);
  for (let i = 0; i < image.value.length; i++) {
    formData.append("Image", image.value[i]);
  }
  formData.append("Description", Description.value);
  formData.append("EndTime", timeEnd.value);
  formData.append("Bank", nameBank.value);
  formData.append("idBank", idBank.value);
  await store.fetchUpdateCharity(formData, route);
  if (store.statusUpCompaign) {
    Toast.toastSuccess('Thay đổi thành công')
    setTimeout(()=> {
      route.push('/campaign')
    }, 3000)
  }
};

watchEffect(() => {
  Conscious.value = store.conscious;
  Citys.value = store.city;
  Wards.value = store.ward;
  categories.value = store.categories;
  //
  Charity.value = store.charityByID?.Title
  arrayAddress.value = store.charityByID?.Address
  imageShow.value = store.charityByID?.Image
  timeEnd.value = store.charityByID?.EndTime
  Description.value = store.charityByID?.Description
});

onMounted(async () => {
  await store.getConscious();
  await store.fetchCategoryCharity();
  const fetchBank = async () => {
    const res = await axios.get("https://api.vietqr.io/v2/banks");
    banks.value = res.data.data;
  };
  fetchBank();
  await store.fetchCharityById(route)
});
</script>