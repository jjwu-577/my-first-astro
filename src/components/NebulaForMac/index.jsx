import style from "./style.module.scss";
import { useRef,useEffect } from 'preact/hooks';


import bg from "@assets/images/nebula-for-mac/bg.jpg"
import screen from "@assets/images/nebula-for-mac/screen.png"
import mac from "@assets/images/nebula-for-mac/mac.png"
import img_1 from "@assets/images/nebula-for-mac/spatial.png"
import img_2 from "@assets/images/nebula-for-mac/img_2.png"
import img_3 from "@assets/images/nebula-for-mac/img_3.png"
import img_4 from "@assets/images/nebula-for-mac/img_4.png"

import img_5 from "@assets/images/nebula-for-mac/img_5.svg"

import discord from "@assets/images/nebula-for-mac/discord.png"

import reddit from "@assets/images/nebula-for-mac/reddit.png"
const preOrderVideo="https://oss-test-website.nreal.ai:9000/xreal-web-frontend/www-xreal-com/video/pre_order.mp4"

export default function NebulaForMac() {
  let img1 = useRef(null)
  let img2 = useRef(null)
  let img4 = useRef(null)
  let content = useRef(null)
  let titlesvgspan = useRef(null)
  console.log("123")
  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const handleScroll = () => {
    // requestAnimationFrame 可以将其与浏览器的绘制过程同步，避免不必要的样式计算和重绘
    requestAnimationFrame(parallaxScroll)
  }

  const parallaxScroll = () => {
    
    if (content.current !== undefined && content.current !== null) {
      let isTopAboveViewport = content.current.getBoundingClientRect().top < 0


      if (!isTopAboveViewport) {
        const img1Style = img1.current.style
        const img2Style = img2.current.style
        const img4Style = img4.current.style
        const contentStyle = content.current.style
        const titlesvgspanStyle = titlesvgspan.current.style

        const scrolled =
          window.pageYOffset || document.documentElement.scrollTop
        const windowHeight = window.innerHeight

        if (scrolled < 0) {
          img1Style.transform = `translateY(${0 - scrolled * 0.25}px)`
          img2Style.transform = `translateY(${80 - scrolled * 0.5}px)`
          img4Style.transform = `translateY(${120 - scrolled * 0.75}px)`
        } else if (scrolled <= windowHeight) {
          const ratio = scrolled / windowHeight
          titlesvgspanStyle.willChange = "transform"
          titlesvgspanStyle.transform = `scale(${2 - 0.6 * ratio})`
          img1Style.transform = `translateY(${0 - 30 * ratio}px)`
          img2Style.transform = `translateY(${80 - 80 * ratio}px)`
          img4Style.transform =
            window.innerWidth > 768
              ? `translateY(${120 - 120 * ratio}px)`
              : `translateY(${90 - 90 * ratio}px)`
          img4Style.zIndex = "1"
        } else if(scrolled <= windowHeight*2){
          const ratio = (scrolled - windowHeight) / windowHeight
          img1Style.transform = `translateY(${-30 - 60 * ratio}px)`
          img2Style.transform = `translateY(${0 - 100 * ratio}px)`
          img4Style.zIndex = "3"
          img4Style.transform = `translateY(${0 - 200 * ratio}px)`
          contentStyle.transform = `translateY(${0 - 200 * ratio}px)`
        }
      }
    }
  }
  return (
    <>
      <div class={style.layer}>
        <div class={style.imgs}>
          <img src={bg} class={style.img1} ref={img1} />
          <img src={screen} class={style.img2} ref={img2} />
          
        </div>
        <img src={mac} class={style.img4} ref={img4} />
        <div class={style.titlesvg}>
          <span class={style.titlesvgspan} ref={titlesvgspan}>
            Spatial Cinema
          </span>
        </div>
      </div>
      <div class={style.content} ref={content}>
        <div class={style.sec1}>
          <img src={img_1} />
          <div>Spatial Cinema</div>
          <a>Click to download</a>
        </div>
        <div class={style.sec2}>
          <h3 class={style.mrBot20}>Features</h3>
          <div class={style.donmissTxt}>
            Support left & right eye 3D movies
          </div>
          <div class={style.donmissTxt}>Support .mp4/.m4v/.mov videos</div>
          <div class={style.donmissTxt}>Flat and curved screens</div>
          <div class={style.donmissTxt}>
            Scroll to adjust the virtual display`s size
          </div>
          <div class={style.donmissTxt}>Press Ctrl button to recenter</div>
        </div>
        <div class={style.sec3}>
          <h3 class={style.mrBot40}>System Requirement</h3>
          <div class={`${style.sysData} ${style.mrBot40}`}>
            <div class={`${style.mrBot10} ${style.donmissTxt}`}>
              <span class={style.textLabel}>CPU</span>
              <span>M1/M2/intel</span>
            </div>
            <div class={style.donmissTxt}>
              <span class={style.textLabel}>macOS</span>
              <span>12.0 and above</span>
            </div>
          </div>
          <div class={style.donmissTxt}>
            Performance on M1 and M2 Mac is better than intel Mac.
          </div>
        </div>
        <div class={style.sec4}>
          <h3 class={style.mrBot20}>How to</h3>
          <div class={`${style.donmissTxt} ${style.mrBot10}`}>
            <span class={style.textLabel}>Step1: </span>Connect your XREAL
            Air glasses
          </div>
          <div class={`${style.donmissTxt} ${style.mrBot10}`}>
            <span class={style.textLabel}>Step2: </span>Press and hold the
            brightness + button to switch to 3D and ready
          </div>
          <div class={`${style.donmissTxt} ${style.mrBot40}`}>
            <span class={style.textLabel}>Step3: </span>Open your movie file
            or drag and drop your movie file within the window
          </div>
          <div class={`${style.flexImgs} ${style.mrBot60}`}>
            <img src={img_2} />
            <img src={img_3} />
            <img src={img_4} />
          </div>
          <div class={`${style.donmissTxt} ${style.fw7} ${style.mrBot40}`}>
            The window below will stay on our Mac screen an trackpad for the
            spatial interface.The movies will play in your glasses.
          </div>
          <video autoPlay muted loop playsInline class={style.sec4Video}>
            <source src={preOrderVideo} type="video/mp4" />
          </video>
        </div>
        <div class={style.sec5}>
          <h3 class={style.mrBot60}>Dont't miss!</h3>
          <div class={style.mrBot60}>
            <img class={style.mrBot20} src={img_5} />
            <div class={style.donmissTxt}>
              Scroll to adjust the screen size
            </div>
          </div>
          <div class={style.mrBot60}>
            <img class={style.mrBot20} src={img_5} />
            <div class={style.donmissTxt}>
              Scroll to adjust the screen size
            </div>
          </div>
          <div>
            <img class={style.mrBot20} src={img_5} />
            <div class={style.donmissTxt}>
              Scroll to adjust the screen size
            </div>
          </div>
        </div>
        <div class={style.sec6}>
          <h3 class={style.mrBot60}>Social</h3>
          <div class={style.mrBot60}>
            <img class={style.mrBot40} src={discord} />
            <div class={style.donmissTxt}>
              Talk about the app on Discord
            </div>
          </div>
          <div>
            <img class={style.mrBot40} src={reddit} />
            <div class={style.donmissTxt}>
              Meet us and other users on Reddit
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
