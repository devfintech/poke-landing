import { openLinkInNewTab } from "@/utils/common"
import { Tooltip } from "antd"

const HomeHowToPlayMobileV2 = () => {
  return (
    <div className="relative mb-auto flex h-auto min-h-screen flex-col items-center justify-center overflow-hidden pt-[7.125rem] md:hidden">
      <div className="relative flex flex-col">
        <img className="mx-auto flex max-w-[1224px] justify-center" src="/images/image-howtoplay-mobile.png" alt="" />
        <h1 className="font-arco absolute left-1/2 top-[15%] max-w-[391px] -translate-x-1/2 -translate-y-1/2 text-center text-[32px] font-bold leading-none text-[#CC5631] max-md:w-full">
          HOW TO PLAY?
        </h1>

        <div className="relative -mt-20 flex flex-col gap-4">
          <div className="mt-10 flex flex-col justify-center gap-4">
            <div className="group relative">
              <img className="max-md:mx-auto max-md:w-[21.5rem]" src="/images/bg-howtoplay-x.png" alt="" />
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
                  className="font-arco item-center absolute bottom-[20%] left-[50%] mx-auto hidden h-[3rem] min-w-[12.2231875rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center bg-[url('/images/button-all-monsters.png')] bg-cover bg-no-repeat text-white transition-all duration-1000 ease-in-out hover:scale-95 group-hover:flex max-md:bottom-4 max-md:left-1/2 max-md:h-[2rem] max-md:min-w-[8.148791666666667rem] max-md:text-sm max-sm:bottom-2"
                >
                  PLAY NOW
                </div>
              </Tooltip>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4">
            <div className="group relative">
              <img className="max-md:mx-auto max-md:w-[21.5rem]" src="/images/bg-howtoplay-tele.png" alt="" />
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
                className="font-arco item-center absolute bottom-[20%] left-[50%] mx-auto hidden h-[3rem] min-w-[12.2231875rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center bg-[url('/images/button-all-monsters.png')] bg-cover bg-no-repeat text-white transition-all duration-1000 ease-in-out hover:scale-95 group-hover:flex max-md:bottom-4 max-md:left-1/2 max-md:h-[2rem] max-md:min-w-[8.148791666666667rem] max-md:text-sm max-sm:bottom-2 max-sm:bottom-2"
              >
                PLAY NOW
              </div>
              {/* </Tooltip> */}
            </div>
          </div>

          <div className="relative mt-10 flex flex-col justify-center gap-4">
            <img className="max-md:mx-auto" src="/images/item-text-video-1.png" alt="" />
            <div className="absolute left-[46%] top-[25%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[17px] overflow-hidden">
              <p className="text-primary-900 min-h-[100px] w-[231px] text-center text-sm font-medium">
                Poke Quest is a role-playing game to catch Pokémon on land adventure RPG based on blockchain technology
                with a Play-to-Earn (P2E) structure and Non-Fungible Token (NFT) assets.
              </p>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col justify-center gap-4">
            <img className="max-md:mx-auto" src="/images/item-text-video-2.png" alt="" />
            <div className="absolute left-[53%] top-[33%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[17px] overflow-hidden">
              <p className="text-primary-900 min-h-[100px] w-[231px] text-center text-sm font-medium">
                Players take a journey together by owning a piece of land on the marketplace. Build and develop your
                land powerfully by catching Pokémon while inviting your friends to join the journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHowToPlayMobileV2
