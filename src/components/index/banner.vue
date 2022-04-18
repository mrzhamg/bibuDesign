<template>
  <div class="banner">
    <div class="cloud1 blow1"></div>
    <div class="cloud2 blow2"></div>
    <div class="airShip fly"></div>
    <div class="car1 driveDelay"></div>
    <div class="car2 fastDrive"></div>
    <div class="car3 driveA"></div>
    <div class="car4 driveB"></div>
    <div class="car5 driveC"></div>
    <div class="car6 driveD"></div>
  </div>
</template>

<script>
export default {
  name: 'bannerBox'
}
</script>

<style scoped>
.banner {
  position: relative;
  width: 1200px;
  height: 210px;
  margin: 0 auto;
  background: #eeeff1 url(../../assets/img/building.png) no-repeat center center;
  overflow: hidden;
}
.banner .cloud1 {
  background: url(../../assets/img/cloud.png) 50% no-repeat;
  background-size: 70px;
  height: 119px;
  width: 200px;
  position: absolute;
  bottom: -8px;
  z-index: 5;
  left: -140px;
}
.banner .blow1 {
  -webkit-animation-name: Blow;
  animation-name: Blow;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-duration: 60s;
  animation-duration: 60s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
.banner .cloud2 {
  background: url(../../assets/img/cloud.png) 50% no-repeat;
  background-size: 80px;
  height: 119px;
  width: 200px;
  position: absolute;
  bottom: 64px;
  z-index: 6;
  left: -140px;
}
.banner .blow2 {
  -webkit-animation-name: Blow;
  animation-name: Blow;
  -webkit-animation-delay: 8s;
  animation-delay: 8s;
  -webkit-animation-duration: 60s;
  animation-duration: 60s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
.banner .airShip {
  background: url(../../assets/img/airship.png) no-repeat;
  background-size: 110px;
  height: 60px;
  width: 110px;
  position: absolute;
  z-index: 3;
  bottom: 90px;
}
.banner .fly {
  -webkit-animation-name: fly;
  animation-name: fly;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-duration: 80s;
  animation-duration: 80s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
.banner .car1 {
  background: url(../../assets/img/car1.png) no-repeat;
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: -24px;
  background-size: 50px;
  z-index: 3;
}
.banner .driveDelay {
  -webkit-animation-name: driveDelay;
  animation-name: driveDelay;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-duration: 30s;
  animation-duration: 30s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
.banner .car2 {
  background: url(../../assets/img/car2.png) no-repeat;
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: -24px;
  background-size: 50px;
  z-index: 3;
}
.banner .fastDrive {
  -webkit-animation-name: drive;
  animation-name: drive;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-duration: 20s;
  animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
.banner .car3 {
  background: url(../../assets/img/car3.png) no-repeat;
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: -23px;
  background-size: 50px;
  z-index: 3;
}
.banner .driveA {
  -webkit-animation-name: driveA;
  animation-name: driveA;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-duration: 30s;
  animation-duration: 30s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
.banner .car4 {
  background: url(../../assets/img/car4.png) no-repeat;
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: -31px;
  background-size: 50px;
  z-index: 3;
}
.banner .driveB {
  -webkit-animation-name: driveB;
  animation-name: driveB;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-duration: 40s;
  animation-duration: 40s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
.banner .car5 {
  background: url(../../assets/img/car5.png) no-repeat;
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: -24px;
  background-size: 50px;
  z-index: 3;
}
.banner .driveC {
  -webkit-animation-name: driveC;
  animation-name: driveC;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-duration: 15s;
  animation-duration: 15s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
.banner .car6 {
  background: url(../../assets/img/car6.png) no-repeat;
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: -27px;
  background-size: 50px;
  z-index: 3;
}
.banner .driveD {
  -webkit-animation-name: driveD;
  animation-name: driveD;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-duration: 15s;
  animation-duration: 15s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

@keyframes Blow {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100px, 0, 0);
    transform: translate3d(100px, 0, 0);
  }
  2%,
  98% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(1100px, 0, 0);
    transform: translate3d(1100px, 0, 0);
  }
}
@keyframes fly {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }
  2%,
  98% {
    opacity: 1;
  }
  6% {
    -webkit-transform: translate3d(60px, -30px, 0);
    transform: translate3d(60px, -30px, 0);
  }
  14% {
    -webkit-transform: translate3d(140px, 30px, 0);
    transform: translate3d(140px, 30px, 0);
  }
  30% {
    -webkit-transform: translate3d(300px, -30px, 0);
    transform: translate3d(300px, -30px, 0);
  }
  46% {
    -webkit-transform: translate3d(460px, 30px, 0);
    transform: translate3d(460px, 30px, 0);
  }
  54% {
    -webkit-transform: translate3d(540px, -30px, 0);
    transform: translate3d(540px, -30px, 0);
  }
  70% {
    -webkit-transform: translate3d(700px, 30px, 0);
    transform: translate3d(700px, 30px, 0);
  }
  86% {
    -webkit-transform: translate3d(860px, -30px, 0);
    transform: translate3d(860px, -30px, 0);
  }
  94% {
    -webkit-transform: translate3d(940px, 30px, 0);
    transform: translate3d(940px, 30px, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(1000px, 0, 0);
    transform: translate3d(1000px, 0, 0);
  }
}
@keyframes driveDelay {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(1200px, 0, 0);
    transform: translate3d(1200px, 0, 0);
  }
  4%,
  90% {
    opacity: 1;
  }
  96% {
    opacity: 0;
    -webkit-transform: translate3d(-1px, 0, 0);
    transform: translate3d(-1px, 0, 0);
  }
  100% {
    opacity: 0;
  }
}
@keyframes drive {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(1100px, 0, 0);
    transform: translate3d(1100px, 0, 0);
  }
  2%,
  90% {
    opacity: 1;
  }
  100%,
  91% {
    opacity: 0;
  }
  96% {
    opacity: 0;
    -webkit-transform: translate3d(-1px, 0, 0);
    transform: translate3d(-1px, 0, 0);
  }
}
@keyframes driveA {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-1px, 0, 0);
    transform: translate3d(-1px, 0, 0);
  }
  2%,
  95% {
    opacity: 1;
  }
  96% {
    opacity: 0;
    -webkit-transform: translate3d(1100px, 0, 0);
    transform: translate3d(1100px, 0, 0);
  }
  100% {
    opacity: 0;
  }
}
@keyframes driveB {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(1100px, 0, 0);
    transform: translate3d(1100px, 0, 0);
  }
  2%,
  90% {
    opacity: 1;
  }

  100%,
  91% {
    opacity: 0;
  }

  96% {
    opacity: 0;
    -webkit-transform: translate3d(-1px, 0, 0);
    transform: translate3d(-1px, 0, 0);
  }
}
@keyframes driveC {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(1100px, 0, 0);
    transform: translate3d(1100px, 0, 0);
  }
  2%,
  90% {
    opacity: 1;
  }
  100%,
  91% {
    opacity: 0;
  }
  96% {
    opacity: 0;
    -webkit-transform: translate3d(-1px, 0, 0);
    transform: translate3d(-1px, 0, 0);
  }
}
@keyframes driveD {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-1px, 0, 0);
    transform: translate3d(-1px, 0, 0);
  }
  2%,
  95% {
    opacity: 1;
  }
  96% {
    opacity: 0;
    -webkit-transform: translate3d(1100px, 0, 0);
    transform: translate3d(1100px, 0, 0);
  }
  100% {
    opacity: 0;
  }
}
</style>
