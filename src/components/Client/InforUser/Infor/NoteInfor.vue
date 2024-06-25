<template>
  <div class="note-text">
    <p>*Bạn nên diền đầy đủ thông tin để thuận tiện sử dụng</p>
    <p>*Các thông tin phải là thông tin chính xác của cá nhân bạn</p>
    <p>
      *Mật khẩu bạn nên sử dụng kí tự đặng biệt, số và chữ để tăng độ bảo mật
      cho tài khoản
    </p>
    <p>
      *Bạn cần hỗ trợ vui lòng liên hệ với chung tôi theo thông tin ở bên dưới
      cùng
    </p>
    <p>*Giúp đỡ những mảnh đời tội nghiệp để cuộc sống trửo nên tốt đẹp hơn</p>
  </div>
</template>

<script setup></script>

<style scoped>
.note-text {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: calc(100% / 3);
  margin: 0 50px;
}
.note-text > p {
  font-family: "Pacifico", cursive;
  padding: 5px 10px;
}
</style>
