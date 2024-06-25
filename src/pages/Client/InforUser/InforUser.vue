<template>
  <div class="Infor-User">
    <NoteInfor></NoteInfor>
    <b></b>
    <AvatarUser></AvatarUser>
    <b></b>
    <FormInfor></FormInfor>
  </div>
</template>

<script setup>
import FormInfor from "../../../components/Client/InforUser/Infor/FormInfor.vue";
import AvatarUser from "../../../components/Client/InforUser/Infor/AvatarUser.vue";
import NoteInfor from "../../../components/Client/InforUser/Infor/NoteInfor.vue";
</script>

<style scoped>
.Infor-User {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
b {
  display: block;
  width: 1px;
  height: 400px;
  background-color: #ccc;
}
</style>
