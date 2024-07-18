import { FC, useRef } from "react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const HomeNftLandMobile = () => {
  interface SliderNftLandProps {}
  const SliderNftLand: FC<SliderNftLandProps> = () => {
    const swiperRef = useRef<any>()
    return (
      <>
        <div className="mx-auto mt-10 flex max-w-[1320px] flex-col justify-center gap-10 max-md:w-full">
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
              rotate: 50,
              stretch: 500,
              depth: 10,
              modifier: 1,
              slideShadows: false,
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
          >
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
          <div className="flex justify-center gap-4">
            <button onClick={() => swiperRef.current.slidePrev()}>
              <img src="/images/button-next.png" alt="" className="cursor-pointer hover:scale-95" />
            </button>
            <button onClick={() => swiperRef.current.slideNext()}>
              <img
                className="-scale-x-100 cursor-pointer hover:scale-95 hover:-scale-x-100"
                src="/images/button-next.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-center bg-none bg-cover bg-center bg-no-repeat px-4 pt-[7.75rem] md:hidden">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-arco text-center text-[2rem] font-bold text-[#CC5631]">NFT LAND</h1>
        <p className="text-primary-900 text-center text-base font-medium">
          To start catching Pokémon, you need to own an NFT land. Invite friends to join in catching Pokémon, building,
          and developing your land to become powerful.
        </p>
      </div>
      <div className="relative flex justify-center">
        <img src="/images/image-sun.png" alt="" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <SliderNftLand />
        </div>
      </div>
    </div>
  )
}

export default HomeNftLandMobile
