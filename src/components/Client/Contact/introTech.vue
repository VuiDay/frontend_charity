<template>
  <div class="intro-tech">
    <div class="infor-check infor">
      <div class="icon">
        <i class="fa-light fa-octagon-check"></i>
      </div>
      <h5>Minh Bạch</h5>
      <p>Mọi giao dịch đều công khai và được ghi nhận đầy đủ</p>
    </div>
    <div class="infor-auth infor">
      <div class="icon">
        <i class="fa-regular fa-lock-keyhole"></i>
      </div>
      <h5>Bảo Mật</h5>
      <p>Mọi giao dịch đều công khai và được ghi nhận đầy đủ</p>
    </div>
    <div class="infor-user infor">
      <div class="icon">
        <i class="fa-light fa-users"></i>
      </div>
      <h5>Thân Thiện Với Người Dùng</h5>
      <p>Giao diện dễ dàng sử dụng, thiết kế thân thiện với người dùng</p>
    </div>
    <div class="infor-support infor">
      <div class="icon">
        <i class="fa-light fa-money-bill-transfer"></i>
      </div>
      <h5>Cộng Đồng</h5>
      <p>Cho đi để nhận lại. Bạn hỗ trợ cộng đồng, cộng đồng hỗ trợ bạn</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
p {
  margin: 0;
}
h1 h2 h3 h4 h5 h6 {
  margin: 0;
}
.intro-tech {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  padding: 30px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.infor {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  width: 300px;
}
.infor > h5 {
  font-weight: 550;
}
.infor > p {
  text-align: center;
}
.icon {
  border: 3px solid rgb(255, 99, 120);
  background-color: rgb(247, 174, 183);
  padding: 15px;
  border-radius: 50px;
  margin-bottom: 10px;
}
.icon > i {
  font-size: 30px;
}
</style>
