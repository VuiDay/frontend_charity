<template>
  <div class="Charity-List">
    <div>
      <div class="Title-charity">
        <div class="Text-title">
          <h2
            class="text-[40px] !text-[black]"
            style="font-family: 'Lora', serif"
          >
            Danh Mục Quyên Góp
          </h2>
        </div>
      </div>
      <div class="Charity-Top-Out">
        <div class="Charity-Top justify-center">
          <!-- <RouterLink
            :to="{ name: 'CharityCategory', params: { id: charity._id } }"
            v-for="(charity, index) of Categorys"
            :key="index"
            class="Router"
          >
            <Card
              :Image="charity.Image"
              :Title="charity.Title"
              :Description="charity.Description"
            ></Card>
          </RouterLink> -->
          <Carousel
            :value="Categorys"
            :numVisible="3"
            :numScroll="3"
            :responsiveOptions="responsiveOptions"
            style="width: calc(470px * 3)"
            class="carsoul"
          >
            <template #item="slotProps" class="flex justify-center">
              <div class="surface-border border-round m-2 p-3">
                <RouterLink
                  :to="{
                    name: 'CharityCategory',
                    params: { id: slotProps.data._id },
                  }"
                >
                  <Card
                    :Image="slotProps.data.Image"
                    :Title="slotProps.data.Title"
                    :Description="slotProps.data.Description"
                    :Count="countCate(slotProps.data._id)"
                  ></Card>
                </RouterLink>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from "./CardCategory.vue";
import Carousel from "primevue/carousel";
import { computed, onMounted, ref, watchEffect } from "vue";
import useCharityStore from "../../../store/fetchAPI";
const store = useCharityStore();

//
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
//
let Categorys = ref([]);
let count = ref([]);
onMounted(async () => {
  await store.fetchCategoryCharity();
});
watchEffect(() => {
  if (store.categories.length > 0) {
    Categorys.value = store.categories;
    count.value = store.countCategory;
  }
});
const countCate = computed(() => {
  return (id) => {
    const result = count.value.find((data) => data.id === id);
    return result ? result.count : 0;
  };
});
</script>
<style scoped>
.Title-charity {
  margin: 27px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Text-title {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.Text-title > h2 {
  font-weight: 600;
  color: #035898;
}
.Text-title > h2 > button {
  border: 0;
  background-color: #ff0000;
  color: white;
  padding: 10px 10px;
  border-radius: 10px;
}
.Text-title > h2 > button:hover {
  background-color: #6b6868;
  color: #ff0000;
  transition: 0.2s;
}
.Title-charity > b {
  display: block;
  border-radius: 10px;
  height: 2px;
  width: 1100px;
  background-color: #ccc;
  align-self: center;
}
.Charity-List {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Charity-Top-Out {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Charity-Top {
  display: flex;
}
.Router {
  text-decoration: none;
}
</style>
