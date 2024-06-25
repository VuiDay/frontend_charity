<template>
  <div
    class="flex justify-center items-center mt-[40px] bg-[#FCF8F9] py-[120px]"
  >
    <div class="relative ml-[200px]">
      <img
        width="800px"
        src="https://res.cloudinary.com/dn6xdmqbl/image/upload/v1716062063/slide/ael4eol9zynp3crivjd8.jpg"
        alt=""
        class="rounded-[20px]"
      />
      <div
        class="absolute h-[100%] w-[100%] flex items-center top-0 rounded-[20px]"
        style="
          background-image: linear-gradient(
            90deg,
            hsla(336, 79%, 50%, 0.5) 0%,
            hsla(338, 81%, 56%, 0.5) 24%,
            hsla(340, 83%, 62%, 0.5) 34%,
            hsla(341, 84%, 67%, 0.5) 40%,
            hsla(343, 87%, 73%, 0.5) 44%,
            hsla(344, 89%, 79%, 0.5) 48%,
            hsla(342, 91%, 83%, 0.5) 53%,
            hsla(339, 94%, 87%, 0.5) 58%,
            hsla(336, 95%, 91%, 0.5) 64%,
            hsla(334, 100%, 95%, 0.5) 76%,
            hsla(330, 100%, 100%, 0.5) 100%
          );
        "
      ></div>
    </div>
    <div class="ml-[100px] mr-[200px] w-[50%]">
      <h2 class="text-[46px] text-[#c30047] font-semibold">{{ data.titel }}</h2>
      <p class="font-semibold">{{ data.answer }}</p>
      <p>{{ data.define }}</p>
    </div>
  </div>
</template>

<script setup>
const data = {
  titel: "Who we are?",
  answer:
    "Chúng tôi là nhóm những người trẻ genz làm nên dự án để phục vụ cộng đồng",
  define:
    "Định nghĩa pháp lý về tổ chức từ thiện và cách thức hoạt động của chúng có thể khác nhau giữa các quốc gia và thậm chí giữa các vùng trong cùng một quốc gia. Các quy định, chính sách thuế và luật pháp liên quan đến từ thiện đều ảnh hưởng đến cách các tổ chức từ thiện hoạt động và quản lý. Những khác biệt này có thể tác động đáng kể đến việc thiết kế và triển khai các chiến dịch từ thiện trên trang web của bạn.",
};
</script>

<style scoped></style>
