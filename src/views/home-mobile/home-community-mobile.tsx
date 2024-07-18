import { openLinkInNewTab } from "@/utils/common"

const HomeCommunityMobile = () => {
  return (
    <div className="relative z-0 flex h-screen w-full flex-col content-center items-center justify-center gap-10 bg-[url('/images/bg-image-community-mobile.png')] bg-cover bg-bottom bg-no-repeat md:hidden">
      <p className="font-arco mt-auto text-center text-[2rem] font-bold text-white">Community</p>
      <div className="z-50 mx-4 my-auto flex h-auto min-h-[17rem] flex-col gap-10 bg-red-500">
        <div className="w-full">
          <div className="w-full">
            <img
              className="absolute left-[46.5%] top-[50%] w-[60.8vw] -translate-x-1/2 -translate-y-1/2"
              src="/images/line-purper.png"
              alt=""
            />
            <img
              className="absolute left-11 top-[45%] w-[15vw] -translate-x-1/2 -translate-y-1/2 -scale-x-100"
              src="/gifs/bat.gif"
              alt=""
            />
            <img
              className="absolute left-[40.5%] top-[55%] w-[32vw] -translate-x-1/2 -translate-y-1/2 sm:top-[56%]"
              src="/gifs/worm.gif"
              alt=""
            />
            <img
              className="absolute left-[36%] top-[57%] w-[18.13vw] -translate-x-1/2 -translate-y-1/2 -scale-x-100 sm:top-[56%]"
              src="/gifs/turtle.gif"
              alt=""
            />
            <img
              className="absolute right-[15vw] top-[56.5%] w-[15.47vw] -translate-x-1/2 -translate-y-1/2 sm:top-[57%]"
              src="/gifs/snake.gif"
              alt=""
            />
            <img
              className="absolute right-[25vw] top-[57%] w-[17.06vw] -translate-x-1/2 -translate-y-1/2 sm:top-[58%]"
              src="/gifs/poke.gif"
              alt=""
            />
            <img
              className="absolute left-1/2 top-1/2 w-[86.67vw] -translate-x-1/2 -translate-y-1/2"
              src="/images/image-community.png"
              alt=""
            />
            <a
              onClick={() => openLinkInNewTab("https://t.me/PokeQuestcommunity")}
              className="absolute left-4 top-[54%] w-[14.67vw] -translate-y-1/2 hover:scale-95"
            >
              <img src="/images/button-tele.png" alt="" className="" />
            </a>
            <a
              onClick={() => openLinkInNewTab("https://x.com/PokeQuest_TG")}
              className="absolute right-[11%] top-[48%] w-[11.25vw] -translate-x-1/2 -translate-y-1/2 hover:scale-95 sm:top-[45%]"
            >
              <img src="/images/button-x.png" alt="" className="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCommunityMobile
