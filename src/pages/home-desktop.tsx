import { openLinkInNewTab } from "@/utils/common"
import HomeFooter from "@/views/home/home-footer"
import { Tooltip } from "antd"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/src/ScrollTrigger"
import { FC, useLayoutEffect, useRef } from "react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

gsap.registerPlugin(ScrollTrigger)
const DURATION = 1
const EASE = "sine.in"
const DURATION_BEFORE = `-=${DURATION}`
export const LIST_MONSTER = [
  {
    bg: "/images/bg-item-monster-2.png",
    image: "/gifs/item-monster-1.gif",
  },
  {
    bg: "/images/bg-item-monster-3.png",
    image: "/gifs/item-monster-2.gif",
  },
  {
    bg: "/images/bg-item-monster-4.png",
    image: "/gifs/item-monster-3.gif",
  },
  {
    bg: "/images/bg-item-monster-5.png",
    image: "/gifs/item-monster-1.gif",
  },
  {
    bg: "/images/bg-item-monster-5.png",
    image: "/gifs/item-monster-4.gif",
  },
  {
    bg: "/images/bg-item-monster-1.png",
    image: "/gifs/item-monster-5.gif",
  },
  {
    bg: "/images/bg-item-monster-6.png",
    image: "/gifs/item-monster-6.gif",
  },
  {
    bg: "/images/bg-item-monster-1.png",
    image: "/gifs/item-monster-7.gif",
  },
  {
    bg: "/images/bg-item-monster-4.png",
    image: "/gifs/item-monster-8.gif",
  },
  {
    bg: "/images/bg-item-monster-6.png",
    image: "/gifs/item-monster-9.gif",
  },
  {
    bg: "/images/bg-item-monster-5.png",
    image: "/gifs/item-monster-10.gif",
  },
  {
    bg: "/images/bg-item-monster-3.png",
    image: "/gifs/item-monster-11.gif",
  },
]

const HomeDesktop = () => {
  interface SliderNftLandProps {}
  const SliderNftLand: FC<SliderNftLandProps> = () => {
    const swiperRef = useRef<any>()
    return (
      <>
        <div className="mx-auto mt-10 flex flex-col justify-center gap-10 max-md:gap-4">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            navigation={false}
            slidesPerView={"auto"}
            modules={[Navigation, EffectCoverflow, Autoplay]}
            coverflowEffect={{
              scale: 0.6,
              rotate: 45,
              stretch: 1000,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              active: {
                slidesPerView: 2,
              },
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ thresholdDelta: 70 }}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1000,
            }}
          >
            <SwiperSlide className="flex items-center justify-center">
              <img src="/images/item-nft-land-1.png" />
            </SwiperSlide>
            <SwiperSlide className="active flex items-center justify-center">
              <img src="/images/item-nft-land-2.png" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <img src="/images/item-nft-land-3.png" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <img src="/images/item-nft-land-1.png" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <img src="/images/item-nft-land-2.png" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <img src="/images/item-nft-land-3.png" />
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center gap-4 max-md:gap-0">
            <button onClick={() => swiperRef.current.slidePrev()}>
              <img src="/images/button-next.png" alt="" className="hover:scale-95 max-md:w-2/3 max-md:cursor-pointer" />
            </button>
            <button onClick={() => swiperRef.current.slideNext()}>
              <img
                className="-scale-x-100 cursor-pointer hover:scale-95 hover:-scale-x-100 max-md:w-2/3 "
                src="/images/button-next.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </>
    )
  }

  useLayoutEffect(() => {
    gsap.to(".section0", {
      translateX: "0vw",
      opacity: 1,
      duration: DURATION,
      ease: EASE,
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        start: 0,
        end: 6500,
      },
    })
    tl.to(".community", {
      translateX: "100vw",
      duration: DURATION,
      ease: EASE,
      opacity: 1,
    })
      .to(".pika", {
        translateX: "0vw",
        translateY: "0vw",
        opacity: 1,
        duration: 0.5,
        ease: EASE,
      })
      .to(".pika", {
        translateX: "-80vw",
        translateY: "5vw",
        opacity: 1,
        duration: 0.5,
        ease: EASE,
      })
      .to(".turtle", {
        translateX: "80vw",
        translateY: "-10vw",
        opacity: 1,
        duration: 0.5,
        ease: EASE,
      })
      .to(".turtle", {
        translateX: "0vw",
        translateY: "0vw",
        opacity: 1,
        duration: 0.5,
        ease: EASE,
      })
      .to(".nftLand", {
        translateX: "0vw",
        duration: 0.5,
        ease: EASE,
        opacity: 1,
      })
      .to(".nftLand", {
        translateX: "100vw",
        duration: 0.5,
        ease: EASE,
        opacity: 1,
      })
      .to(".howtoplay", {
        translateX: "0vw",
        translateY: "0vw",
        opacity: 1,
        duration: 1,
        ease: EASE,
      })
      .to(".howtoplay", {
        translateX: "-100vw",
        translatey: "20vw",
        opacity: 1,
        duration: 1,
        ease: EASE,
      })
      .to(".gsap-video", {
        translateX: "0vw",
        opacity: 1,
        duration: 1,
        ease: EASE,
      })
      .to(".gsap-video", {
        translateX: "100vw",
        opacity: 1,
        duration: 1,
        ease: EASE,
      })
      .to(".pokequest", {
        translateY: "100vw",
        width: "982.87",
        opacity: 1,
        duration: 0.5,
        ease: EASE,
      })
      .to(".pokequest", {
        translateY: "-50vw",
        width: 0,
        opacity: 1,
        duration: 0.5,
        ease: EASE,
      })
  }, [])

  // const community = document.querySelector("#community") as HTMLElement
  // window.addEventListener("scroll", function () {
  //   const value = window.scrollY
  //   if (community) community.style.left = value + 0.5 + "px"
  // })

  // const bottomPage = useRef<HTMLDivElement>(null)
  // useEffect(() => {
  //   if (bottomPage.current) {
  //     bottomPage.current.scrollIntoView()
  //   }
  // }, [])

  // useEffect(() => {
  //   // if (document.addEventListener) {
  //   //   document.addEventListener("DOMContentLoaded", scrollBottom, false)
  //   // } else if ((window as any).attachEvent) {
  //   //   // eslint-disable-next-line no-extra-semi
  //   //   ;(window as any).attachEvent("onload", scrollBottom)
  //   // }
  // }, [])

  const scrollBottom = () => {
    window.scrollTo(0, 99999)
  }
  window.onload = scrollBottom

  return (
    <>
      <div id="container-main" className="bg-homepage overflow-hidden">
        {/* min-h-[750vh] */}
        {/* h-[614.7222222222222vh] */}
        <div className="section0 h-screen w-full overflow-hidden bg-[url('/images/bg-image-community.png')] bg-cover bg-bottom bg-no-repeat max-md:bg-[url('/images/bg-image-community-mobile.png')]">
          <div id="community" className="community relative top-[50%] mx-auto max-w-[1440px] scale-125">
            <img
              className="absolute left-[46.5%] top-[50%] w-1/3 -translate-x-1/2 -translate-y-1/2"
              src="/images/line-purper.png"
              alt=""
            />
            <img
              className="absolute left-[25%] top-[-10vh] w-[8.5%] -scale-x-100 min-[2560px]:top-[-8vh]"
              src="/gifs/bat.gif"
              alt=""
            />

            <img className="absolute left-[33%] w-[18%] translate-y-[-1vh]" src="/gifs/worm.gif" alt="" />
            <img
              className="absolute left-[30%] w-[10%] translate-y-[4vh] -scale-x-100 min-[2560px]:top-[-1vh]"
              src="/gifs/turtle.gif"
              alt=""
            />
            <img className="absolute left-[55%] w-[10%]" src="/gifs/snake.gif" alt="" />
            <img
              className="absolute left-[45%] w-[12.5%] translate-y-[4vh] min-[2560px]:top-[-2vh]"
              src="/gifs/poke.gif"
              alt=""
            />
            <img
              className="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/images/image-community.png"
              alt=""
            />
            <a
              onClick={() => openLinkInNewTab("https://t.me/PokeQuestcommunity")}
              className="upTele absolute left-[20%] w-[8.5%] translate-y-[2vh] hover:scale-95"
            >
              <img src="/images/button-tele.png" alt="" className="" />
            </a>
            <a
              onClick={() => openLinkInNewTab("https://x.com/PokeQuest_TG")}
              className="upX absolute right-[30%] w-[6.5%] translate-y-[-10vh] hover:scale-95 min-[2560px]:top-[5vh]"
            >
              <img src="/images/button-x.png" alt="" className="" />
            </a>
          </div>
        </div>

        {/* monster */}
        <div className="relative h-full overflow-hidden py-[5rem]">
          <div className="mx-auto flex max-w-[1228px] flex-col justify-center gap-10 px-2 text-center">
            <h1 className="font-arco mt-[11.125rem] text-[56px] text-[#CC5631] max-md:text-[32px]">MONSTERS</h1>
            <div className="z-50 flex flex-col gap-6 max-md:gap-4">
              <div className="grid min-h-[238px] grid-cols-6 gap-6 max-md:grid-cols-3 max-md:gap-4">
                {LIST_MONSTER.map((item, key) => (
                  <>
                    <div
                      key={key}
                      style={{
                        backgroundImage: `url(${item.bg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                      }}
                      className="relative flex min-h-[238px] min-w-[183.417px] cursor-pointer flex-col gap-2 p-4 hover:scale-110"
                    >
                      <img
                        className="absolute left-1/2 top-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2"
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
            <Tooltip title="Coming soon">
              <div className="font-arco mx-auto flex h-[3rem] w-[12.2231875rem] cursor-pointer items-center justify-center bg-[url('/images/button-all-monsters.png')] bg-cover bg-no-repeat hover:scale-95">
                ALL MONSTERS
              </div>
            </Tooltip>
          </div>
          <div className="hidden min-[1440px]:block">
            {/* min-[1280px]:hidden min-[1366px]:hidden min-[1632px]:hidden */}
            <img
              id="pika"
              className="pika absolute right-[5%] top-[60%] w-[15%] max-lg:hidden"
              src="/images/cloud-monster-poke.png"
              alt=""
            />
            <img
              id="pika"
              className="pika absolute right-[8%] top-[50%] w-[10%] -scale-x-100 max-lg:hidden min-[2560px]:w-[8%]"
              src="/gifs/pika.gif"
              alt=""
            />
          </div>
          <div className="hidden min-[1440px]:block">
            {/* min-[1280px]:hidden min-[1366px]:hidden min-[1632px]:hidden */}
            <img
              id="turtle"
              className="turtle absolute bottom-[5%] left-[5%] w-[15%] max-lg:hidden"
              src="/images/cloud-monster-turtle.png"
              alt=""
            />
            <img
              id="turtle"
              className="turtle absolute bottom-[10%] left-[8%] w-[10%] max-lg:hidden min-[2560px]:w-[8%]"
              src="/gifs/turtle.gif"
              alt=""
            />
          </div>
        </div>

        {/* nftLand */}
        <div className="mx-auto flex h-full w-full flex-col justify-center overflow-hidden bg-[url('/images/bg-image-nft-land.png')] bg-cover bg-center bg-no-repeat pt-[10rem] max-md:bg-none">
          <div id="nftLand" className="nftLand relative">
            <div className="flex flex-col items-center justify-center pt-[5rem] text-center">
              <h1 className="font-arco text-[56px] text-[#CC5631] max-md:text-[32px]">NFT LAND</h1>
              <p className="text-primary-900 max-w-[700px] text-center text-xl font-medium max-md:text-base">
                To start catching Pokémon, you need to own an NFT land. Invite friends to join in catching Pokémon,
                building, and developing your land to become powerful.
              </p>
            </div>
            <div className="relative flex justify-center">
              <img src="/images/image-sun.png" alt="" />
              <div className="absolute left-1/2 top-1/2 w-[1440px] -translate-x-1/2 -translate-y-1/2 max-md:w-1/2">
                <SliderNftLand />
              </div>
            </div>
          </div>
        </div>

        {/* howtoplay */}
        <div className="flex flex-col items-center justify-center py-[15rem] max-md:min-h-[300vh]">
          <div id="howtoplay" className="howtoplay relative">
            <img
              className="mx-auto flex max-w-[1224px] justify-center"
              src="/images/image-howtoplay-mobile.png"
              alt=""
            />
            <h1 className="font-arco absolute left-1/2 top-1/2 max-w-[391px] -translate-x-1/2 -translate-y-1/2 text-center text-[56px] leading-none text-[#CC5631] max-md:w-full max-md:text-[32px]">
              HOW TO PLAY?
            </h1>
            <div className="flex gap-4">
              <div className="group absolute left-[-20%] top-1/2 max-md:left-1/2 max-md:top-[85%] max-md:-translate-x-1/2 max-md:-translate-y-1/2">
                <img className="max-md:mx-auto max-md:w-3/4" src="/images/bg-howtoplay-x.png" alt="" />
                <div className="absolute left-1/2 top-1/2 flex min-h-[250px] max-w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[17px] overflow-hidden transition-all duration-1000 group-hover:-translate-y-[60%] max-md:left-1/2 max-md:top-1/2">
                  <img className="w-1/4" src="/images/social-x.png" alt="" />
                  <p className="text-primary-900 text-center text-base font-medium max-md:text-sm">
                    It is the first game that users can play directly within the post. It creates a quick and convenient
                    experience for all users.
                  </p>
                </div>
                <Tooltip title="Coming soon">
                  <div
                    style={{ transitionDuration: "1.5s" }}
                    className="font-arco item-center absolute bottom-[10%] left-[50%] mx-auto hidden h-[3rem] min-w-[12.2231875rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center bg-[url('/images/button-all-monsters.png')] bg-cover bg-no-repeat transition-all duration-1000 ease-in-out hover:scale-95 group-hover:flex max-md:bottom-0 max-md:left-1/2 max-md:h-[2rem] max-md:min-w-[8.148791666666667rem] max-md:text-sm"
                  >
                    PLAY NOW
                  </div>
                </Tooltip>
              </div>
              <div className="group absolute right-[-20%] top-1/2 max-md:right-1/2 max-md:top-[90%] max-md:hidden max-md:-translate-x-1/2 max-md:-translate-y-1/2">
                <img src="/images/bg-howtoplay-tele.png" alt="" />
                <div className="absolute right-0 top-[50%] flex min-h-[250px] max-w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[17px] overflow-hidden transition-all duration-1000 group-hover:-translate-y-[60%] max-md:left-1/2 max-md:top-1/2">
                  <img className="w-1/4" src="/images/social-tele.png" alt="" />
                  <p className="text-primary-900 text-center text-base font-medium">
                    It is the first game that users can play directly within the post. It creates a quick and convenient
                    experience for all users.
                  </p>
                </div>
                {/* <Tooltip title="Coming soon"> */}
                <div
                  onClick={() => openLinkInNewTab("https://t.me/pokequest_bot")}
                  style={{ transitionDuration: "1.5s" }}
                  className="font-arco item-center absolute bottom-[10%] right-[20%] mx-auto hidden h-[3rem] min-w-[12.2231875rem] max-w-[320px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center bg-[url('/images/button-all-monsters.png')] bg-cover bg-no-repeat transition-all duration-1000 ease-in-out hover:scale-95 group-hover:flex"
                >
                  PLAY NOW
                </div>
                {/* </Tooltip> */}
              </div>
              <div className="group absolute left-[-20%] top-1/2 hidden max-md:left-1/2 max-md:top-[135%] max-md:block max-md:-translate-x-1/2 max-md:-translate-y-1/2">
                <img className="max-md:mx-auto max-md:w-3/4" src="/images/bg-howtoplay-x.png" alt="" />
                <div className="absolute left-1/2 top-1/2 flex min-h-[250px] max-w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[17px] overflow-hidden transition-all duration-1000 group-hover:-translate-y-[60%] max-md:left-1/2 max-md:top-1/2">
                  <img className="w-1/4" src="/images/social-tele.png" alt="" />
                  <p className="text-primary-900 text-center text-base font-medium max-md:text-sm">
                    It is the first game that users can play directly within the post. It creates a quick and convenient
                    experience for all users.
                  </p>
                </div>
                {/* <Tooltip title="Coming soon"> */}
                <div
                  onClick={() => openLinkInNewTab("https://t.me/pokequest_bot")}
                  style={{ transitionDuration: "1.5s" }}
                  className="font-arco item-center absolute bottom-[10%] left-[50%] mx-auto hidden h-[3rem] min-w-[12.2231875rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center bg-[url('/images/button-all-monsters.png')] bg-cover bg-no-repeat transition-all duration-1000 ease-in-out hover:scale-95 group-hover:flex max-md:bottom-0 max-md:left-1/2 max-md:h-[2rem] max-md:min-w-[8.148791666666667rem] max-md:text-sm"
                >
                  PLAY NOW
                </div>
                {/* </Tooltip> */}
              </div>
              <div className="group absolute hidden max-md:left-1/2 max-md:top-[205%] max-md:block max-md:-translate-x-1/2 max-md:-translate-y-1/2">
                <img className="max-md:mx-auto" src="/images/item-text-video-1.png" alt="" />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[17px] overflow-hidden max-md:left-[40%] max-md:top-[25%]">
                  <p className="text-primary-900 min-h-[100px] min-w-[250px] text-center text-base font-medium max-md:text-sm">
                    Poke Quest is a role-playing game to catch Pokémon on land adventure RPG based on blockchain
                    technology with a Play-to-Earn (P2E) structure and Non-Fungible Token (NFT) assets.
                  </p>
                </div>
              </div>
              <div className="group absolute hidden max-md:left-1/2 max-md:top-[275%] max-md:block max-md:-translate-x-1/2 max-md:-translate-y-1/2">
                <img className="max-md:mx-auto" src="/images/item-text-video-2.png" alt="" />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[17px] overflow-hidden max-md:left-[40%] max-md:top-[25%]">
                  <p className="text-primary-900 min-h-[100px] min-w-[250px] text-center text-base font-medium max-md:text-sm">
                    Poke Quest is a role-playing game to catch Pokémon on land adventure RPG based on blockchain
                    technology with a Play-to-Earn (P2E) structure and Non-Fungible Token (NFT) assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* homevideo */}
        <div className="flex flex-col items-center justify-center pt-[10rem]">
          <div id="gsap-video" className="gsap-video relative min-h-screen w-full">
            <div className="pika-text">
              <div className="text-primary-900 absolute left-[28.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-sm font-medium max-md:hidden min-[1280px]:left-[20%] min-[1366px]:left-[25%] min-[1366px]:w-[25%] min-[2560px]:left-[32.5%] min-[2560px]:top-[35%]">
                <img className="w-full" src="/images/video-text-poke.png" alt="" />
              </div>
              <img
                className="absolute left-[34%] top-[50%] w-[10%] -translate-x-1/2 -translate-y-1/2 max-md:hidden min-[1280px]:left-[25%] min-[1366px]:left-[30%] min-[2560px]:left-[35%] min-[2560px]:top-[35%] min-[2560px]:w-[7%]"
                src="/gifs/pika.gif"
                alt=""
              />
            </div>
            <div>
              <div className="text-primary-900 absolute right-[2%] top-[75%] -translate-x-1/2 -translate-y-1/2 text-center text-sm font-medium max-[1280px]:right-[-20%] max-md:hidden min-[1366px]:w-[25%] min-[2560px]:right-[10%] min-[2560px]:top-[45%]">
                <img className="w-full" src="/images/video-text-pika.png" alt="" />
              </div>
              <img
                className="absolute bottom-[5%] right-[23%] w-[10%] -translate-x-1/2 -translate-y-1/2 max-md:hidden min-[1280px]:bottom-[10%] min-[1280px]:right-[15%] min-[1366px]:bottom-[10%] min-[1366px]:right-[20%] min-[2560px]:right-[30%] min-[2560px]:top-[48%] min-[2560px]:w-[8%] min-[3333px]:right-[25%]"
                src="/gifs/poke.gif"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img src="/images/border-video.png" alt="" />
                <img
                  className="absolute left-[49%] top-[62.5%] -translate-x-1/2 -translate-y-1/2 max-md:w-[56%]"
                  src="/images/video.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* homefooter */}
        <HomeFooter />

        {/* <div ref={bottomPage}></div> */}
      </div>
    </>
  )
}

export default HomeDesktop
