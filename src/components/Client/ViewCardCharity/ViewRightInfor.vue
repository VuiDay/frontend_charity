<template>
  <div class="Infor-Right">
    <div class="Top-Donate">
      <h4 class="!text-[#C30047]">Bảng xếp hạng người dùng</h4>
      <TableTopUser></TableTopUser>
    </div>
    <div class="Post-User-Outstanding">
      <ViewCharity></ViewCharity>
    </div>
  </div>
</template>
<script setup>
import ViewCharity from "./ViewCharity.vue";
import TableTopUser from "./TableTopUser.vue";
</script>
<style scoped>
.Infor-Right {
  width: 50%;
  padding-left: 10px;
  border-left: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Post-User-Outstanding {
  margin-top: 30px;
}
.Top-Donate > h4 {
  text-align: center;
  font-weight: 600;
  color: #035898;
}
</style>
