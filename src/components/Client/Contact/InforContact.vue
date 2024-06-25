<script setup>
const Phone = import.meta.env.VITE_PHONE;
const Email = import.meta.env.VITE_EMAIL;
</script>

<template>
  <div class="Contact">
    <div class="Contact-Text">
      <div class="Title-Contact">
        <h2 style="color: #212529" class="text-4xl">
          <i class="fa-sharp fa-solid fa-address-card"></i> STAY IN CONTACT
          <div class="hline-4"></div>
        </h2>
      </div>
      <div class="Body-Contact">
        <div class="Body-Contact-Left contact">
          <div class="icon">
            <i class="fa-regular fa-address-card"></i>
            <h5 class="text-2xl">INFORMATION</h5>
          </div>
          <div class="text-infor-left text">
            <div>
              Phone
              <p>
                <a style="text-decoration: none" :href="`tel:${Phone}`">{{
                  Phone
                }}</a>
              </p>
            </div>
            <div>
              Email
              <p>
                <a style="text-decoration: none" :href="`mailto:${Email}`">{{
                  Email
                }}</a>
              </p>
            </div>
          </div>
        </div>
        <div class="Body-Contact-Center contact">
          <div class="icon">
            <i class="fa-regular fa-map"></i>
            <h5 class="text-2xl">VISIT US</h5>
          </div>
          <div class="text-infor-center text">
            <a href="https://maps.app.goo.gl/8tK8vdRpZWsPbBtr7"
              ><img
                src="../../../image/Logo/Jec8sKStRPb9FcwzCNupQkZKAX8Sty7Ws2VMB_doNttf9kdDFcv7_GwRZnard9ZIgfI=w240-h480-rw.webp"
                alt=""
            /></a>
            <div>
              Address
              <p>Tecco A, Quang Trung, Thành phố Vinh, Nghệ An, Vietnam</p>
            </div>
          </div>
        </div>
        <div class="Body-Contact-Right contact">
          <div class="icon">
            <i class="fa-light fa-users-rectangle"></i>
            <h5 class="text-2xl">OFFICE HOURS</h5>
          </div>
          <div class="text-infor-left text">
            <div>
              Monday - Friday
              <p>8:00hrs - 17:30hrs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Contact {
  background-color: #eff6ff;
  padding: 30px 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin-top: 50px;
}
.Image-contact {
  opacity: 0.5;
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.Title-Contact {
  text-align: center;
}
.hline-4 {
  background-image: linear-gradient(
    to right,
    #744fff 0%,
    #21d397 51%,
    #744fff 100%
  );
  height: 3px;
  position: relative;
  background-size: 200% auto;
  z-index: 2;
  display: block;
  width: 50px;
  display: block;
  margin-bottom: 12px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
.Body-Contact {
  display: flex;
  justify-content: space-around;
  margin: 30px 0 0 0;
  flex-wrap: wrap;
}
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 20px 30px;
  width: 25%;
}
.text > div {
  font-weight: 550;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text > div > p {
  font-weight: 400;
}
.text-infor-center > a {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.text-infor-center > a > img {
  width: 40%;
  border-radius: 50%;
}
.icon {
  font-size: 50px;
  text-align: center;
}
</style>
