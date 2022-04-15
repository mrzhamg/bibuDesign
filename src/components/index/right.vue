<template>
  <div class="rightComponent">
    <ul>
      <li :class="{'on':r_img}">
        <span @click="r_img=true">微信客服</span>
        <div class="img1"
             v-show="r_img">
          <i @click="r_img=false">X</i>
          <img src="../../assets/img/erwma.png"
               alt="">
          <p>微信扫一扫，直接沟通！</p>
        </div>
      </li>
      <li :class="{'toTop':isTotop}"
          @click="toTop()">
        <i><svg t="1648035071816"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="30962"
               width="20"
               height="20">
            <path d="M820.394667 614.165333a21.333333 21.333333 0 0 0 30.165333-30.186666L528.853333 262.250667a21.333333 21.333333 0 0 0-30.186666 0L176.917333 583.978667a21.333333 21.333333 0 1 0 30.165334 30.186666L490.666667 330.581333v501.482667c0 11.882667 9.557333 21.269333 21.333333 21.269333 11.861333 0 21.333333-9.514667 21.333333-21.269333v-504.96l287.061334 287.061333zM170.666667 192c0-11.776 9.706667-21.333333 21.333333-21.333333h640c11.776 0 21.333333 9.472 21.333333 21.333333 0 11.776-9.706667 21.333333-21.333333 21.333333H192c-11.776 0-21.333333-9.472-21.333333-21.333333z"
                  fill="#ffffff"
                  p-id="30963"></path>
          </svg></i>
        <div class="toTop">回到顶部</div>
      </li>
      <li>
        <i>
          <svg t="1648035269463"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="33769"
               width="20"
               height="20">
            <path d="M944.626667 731.686667a149.82 149.82 0 0 0-31.713334-66.313334L758.766667 480.4A148.926667 148.926667 0 0 0 644.046667 426.666667H379.953333a148.926667 148.926667 0 0 0-114.72 53.733333L111.086667 665.373333a149.82 149.82 0 0 0-31.713334 66.313334L58.393333 836.6A85.333333 85.333333 0 0 0 142.066667 938.666667h739.866666a85.333333 85.333333 0 0 0 83.673334-102.066667z m-29.7 148.666666a42.513333 42.513333 0 0 1-32.993334 15.646667H142.066667a42.666667 42.666667 0 0 1-41.84-51.033333l20.986666-104.913334a107.013333 107.013333 0 0 1 22.666667-47.333333L298 507.713333A106.38 106.38 0 0 1 379.953333 469.333333h264.093334A106.38 106.38 0 0 1 726 507.713333L880.14 692.666667a107.013333 107.013333 0 0 1 22.666667 47.333333l20.986666 104.913333a42.52 42.52 0 0 1-8.866666 35.473334zM630 547.213333C598.2 524.506667 556.3 512 512 512s-86.2 12.506667-118 35.213333c-16.146667 11.533333-28.92 25.126667-37.96 40.4C346.28 604.1 341.333333 621.72 341.333333 640s4.946667 35.9 14.713334 52.386667c9.04 15.273333 21.813333 28.866667 37.96 40.4C425.8 755.493333 467.7 768 512 768s86.2-12.506667 118-35.213333c16.146667-11.533333 28.92-25.126667 37.96-40.4 9.766667-16.486667 14.713333-34.106667 14.713333-52.386667s-4.946667-35.9-14.713333-52.386667c-9.046667-15.273333-21.82-28.866667-37.96-40.4z m-24.8 150.853334c-24.62 17.58-57.72 27.266667-93.2 27.266666s-68.58-9.686667-93.193333-27.266666c-22.446667-16-34.806667-36.666667-34.806667-58.066667s12.36-42 34.806667-58.066667C443.42 564.353333 476.52 554.666667 512 554.666667s68.58 9.686667 93.193333 27.266666C627.64 598 640 618.586667 640 640s-12.36 42.033333-34.806667 58.066667z m232.76-548.18C750.533333 108.26 634.773333 85.333333 512 85.333333s-238.533333 22.926667-325.953333 64.553334C93.586667 193.92 42.666667 254.333333 42.666667 320v53.333333a53.393333 53.393333 0 0 0 53.333333 53.333334h192a53.393333 53.393333 0 0 0 53.333333-53.333334v-53.333333c0-13.253333 16.666667-28.9 43.566667-40.846667C418.493333 264.22 463.633333 256 512 256s93.506667 8.22 127.1 23.153333C666 291.1 682.666667 306.746667 682.666667 320v53.333333a53.393333 53.393333 0 0 0 53.333333 53.333334h192a53.393333 53.393333 0 0 0 53.333333-53.333334v-53.333333c0-65.666667-50.92-126.08-143.38-170.113333zM938.666667 373.333333a10.666667 10.666667 0 0 1-10.666667 10.666667h-192a10.666667 10.666667 0 0 1-10.666667-10.666667v-53.333333c0-31.733333-24.473333-60.086667-68.906666-79.833333C617.5 222.86 566.206667 213.333333 512 213.333333s-105.5 9.526667-144.426667 26.833334C323.14 259.913333 298.666667 288.266667 298.666667 320v53.333333a10.666667 10.666667 0 0 1-10.666667 10.666667H96a10.666667 10.666667 0 0 1-10.666667-10.666667v-53.333333c0-23.42 10.033333-46.593333 29.82-68.873333 20.666667-23.253333 50.666667-44.36 89.233334-62.713334C286.2 149.453333 395.446667 128 512 128s225.8 21.453333 307.613333 60.413333c38.553333 18.353333 68.573333 39.46 89.233334 62.713334C928.666667 273.406667 938.666667 296.58 938.666667 320z"
                  fill="#ffffff"
                  p-id="33770"></path>
          </svg>
        </i>
        <div class="phone">13888888888</div>
      </li>
      <li>
        <i>
          <svg t="1648035171808"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="32859"
               width="20"
               height="20">
            <path d="M802.714 906.739H212.368c-54.338 0-98.39-44.082-98.39-98.452V217.55c0-54.378 44.698-103.115 99.039-103.115h396.155v49.52H213.017c-27.169 0-49.843 26.41-49.843 53.597v590.736c0 27.185 22.026 49.228 49.194 49.228h590.346c27.168 0 54.05-22.623 54.05-49.81V411.553h49.52v396.15c-0.002 54.372-49.23 99.036-103.57 99.036zM508.68 668.173c-7.192 7.199-16.2 10.798-25.486 12.607L267.797 787.325c-24.242 11.257-43.659-10.484-34.725-34.748l106.475-215.542c1.805-9.292 5.404-18.303 12.597-25.501L734.796 128.63c19.211-19.227 50.36-19.227 69.57 0l86.965 87.023c19.214 19.222 19.214 50.395 0 69.618l-382.65 382.902z m-228.498 54.634c-5.628 11.35 5.242 23.006 17.363 17.374l133.01-80.566-69.861-69.907-80.512 133.1z m124.138-159.06l52.182 52.216c9.603 9.612-15.222-15.233 17.39 17.402L752.186 354.89l-87.586-86.403-277.67 277.855c9.24 9.244 7.785 7.794 17.392 17.404z m434.83-330.688l-52.179-52.217c-9.604-9.612-25.18-9.612-34.785 0l-50.935 50.965 85.717 88.27 52.182-52.216c9.607-9.61 9.607-25.19 0-34.802z"
                  p-id="32860"
                  fill="#ffffff"></path>
          </svg>
        </i>
        <div class="zaixianliuyan">在线留言</div>
      </li>
      <li class="r_wap">
        <i>
          <svg t="1648279240475"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="2413"
               width="20"
               height="20">
            <path d="M776.676 1010.080h-479.92c-28.332 0-51.33-22.999-51.33-51.33v-891.12c0-28.332 22.999-51.33 51.33-51.33h479.92c28.332 0 51.33 22.999 51.33 51.33v891.12c0 28.332-22.999 51.33-51.33 51.33v0zM536.576 958.751c19.073 0 34.221-15.426 34.221-34.221s-15.426-34.221-34.221-34.221-34.221 15.426-34.221 34.221 15.426 34.221 34.221 34.221v0zM776.676 118.96h-479.92v719.742h479.641v-719.742h0.279z"
                  p-id="2414"
                  fill="#ffffff"></path>
          </svg>
        </i>
        <div class="img1 r_wap_erweima">
          <img src=""
               alt="">
          <p>微信扫一扫，直接沟通！</p>
        </div>
      </li>
      <li class="r_wecheat">
        <i>
          <svg t="1648279282460"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="3311"
               width="20"
               height="20">
            <path d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                  p-id="3312"
                  fill="#ffffff"></path>
          </svg>
        </i>
        <div class="img1">
          <img src=""
               alt="">
          <p>微信扫一扫，直接沟通！</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from '@vue/runtime-core'
export default {
  name: 'right',
  setup () {
    let r_img = ref(true)
    let isTotop = ref(false)
    let scrollTop1 = ref('')
    function toTop () {
      scrollTop1.value.target.scrollTop = 0
    }
    onMounted(() => {
      window.addEventListener("scroll", (e) => {
        scrollTop1.value = e
        if (e.target.scrollTop > 100) {
          isTotop.value = true
        } else {
          isTotop.value = false
        }
      }, true)

    })
    onUnmounted(() => {
      window.removeEventListener("scroll")
    })
    return {
      r_img,
      isTotop,
      toTop
    }
  }
}
</script>

<style lang="less" scoped>
.rightComponent {
  width: 45px;
  position: fixed;
  right: 0;
  top: 50%;
  margin: -100px 0;
  z-index: 999;
  ul {
    li:nth-of-type(2) {
      overflow: hidden;
      height: 0;
      transition: all 0.3s;
    }
    li.toTop {
      height: 45px;
      transition: all 0.5s;
    }
    li {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1px;
      height: 45px;
      background-color: #000;
      color: #fff;
      div.img1 {
        position: absolute;
      }
      div {
        position: absolute;
        height: 100%;
      }
      div.toTop,
      div.phone,
      div.zaixianliuyan {
        width: 0px;
        right: 45px;
        line-height: 45px;
        font-size: 14px;
        background-color: #000;
        overflow: hidden;
      }
    }
    .on {
      background-color: #ff0000;
    }
    li:hover {
      div.toTop,
      div.phone,
      div.zaixianliuyan {
        width: 100px;
        padding-left: 10px;
        transition: all 0.3s;
      }
    }
    .r_wap div.img1 {
      display: none;
      position: absolute;
      right: 70px;
      top: 50%;
      width: 150px;
      height: 200px;
      margin: -100px 0;
      background: url(../../assets/img/qr_img2.png) no-repeat center center;
      font-size: 12px;
      i {
        position: absolute;
        right: -15px;
        top: -15px;
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: black;
        border-radius: 50%;
        line-height: 30px;
        text-align: center;
        color: #fff;
        cursor: pointer;
      }
      img {
        width: 130px;
        height: 130px;
        margin-top: 10px;
        margin-left: 10px;
        object-fit: cover;
        object-position: center;
        -o-object-fit: cover;
        -o-object-position: center;
        -webkit-object-fit: cover;
        -webkit-object-position: center;
        -moz-object-fit: cover;
        -moz-object-position: center;
      }
      p {
        width: 100%;
        box-sizing: border-box;
        padding: 0 0 0 10px;
        color: #000;
      }
    }
    .r_wap:hover div.img1 {
      display: block;
    }
    .r_wecheat div.img1 {
      display: none;
      position: absolute;
      right: 70px;
      top: 50%;
      width: 150px;
      height: 200px;
      margin: -100px 0;
      background: url(../../assets/img/qr_img2.png) no-repeat center center;
      font-size: 12px;
      i {
        position: absolute;
        right: -15px;
        top: -15px;
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: black;
        border-radius: 50%;
        line-height: 30px;
        text-align: center;
        color: #fff;
        cursor: pointer;
      }
      img {
        width: 130px;
        height: 130px;
        margin-top: 10px;
        margin-left: 10px;
        object-fit: cover;
        object-position: center;
        -o-object-fit: cover;
        -o-object-position: center;
        -webkit-object-fit: cover;
        -webkit-object-position: center;
        -moz-object-fit: cover;
        -moz-object-position: center;
      }
      p {
        width: 100%;
        box-sizing: border-box;
        padding: 0 0 0 10px;
        color: #000;
      }
    }
    .r_wecheat:hover div.img1 {
      display: block;
    }
    li:nth-of-type(1) {
      position: relative;
      width: 100%;
      height: 100px;
      span {
        writing-mode: vertical-lr;
      }
      div.img1 {
        position: absolute;
        right: 70px;
        top: 50%;
        width: 150px;
        height: 200px;
        margin: -100px 0;
        background: url(../../assets/img/qr_img2.png) no-repeat center center;
        font-size: 12px;
        i {
          position: absolute;
          right: -15px;
          top: -15px;
          display: inline-block;
          width: 30px;
          height: 30px;
          background-color: black;
          border-radius: 50%;
          line-height: 30px;
          text-align: center;
          color: #fff;
          cursor: pointer;
        }
        img {
          width: 130px;
          height: 130px;
          margin-top: 10px;
          margin-left: 10px;
          object-fit: cover;
          object-position: center;
          -o-object-fit: cover;
          -o-object-position: center;
          -webkit-object-fit: cover;
          -webkit-object-position: center;
          -moz-object-fit: cover;
          -moz-object-position: center;
        }
        p {
          width: 100%;
          box-sizing: border-box;
          padding: 0 0 0 10px;
          color: #000;
        }
      }
    }
  }
}
</style>
