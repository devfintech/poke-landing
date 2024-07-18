import { Tooltip } from "antd"

const HomeHowToPlayMobile = () => {
  return (
    <div className="relative mb-auto flex h-auto min-h-[300vh] flex-col items-center justify-center overflow-hidden pt-[5rem] md:hidden">
      <div className="relative flex flex-col">
        <img className="mx-auto flex max-w-[1224px] justify-center" src="/images/image-howtoplay-mobile.png" alt="" />
        <h1 className="font-arco absolute left-1/2 top-1/2 max-w-[391px] -translate-x-1/2 -translate-y-1/2 text-center text-[56px] leading-none text-[#CC5631] max-md:w-full max-md:text-[32px]">
          HOW TO PLAY?
        </h1>
        <div className="flex flex-col gap-4">
          <div className="group absolute left-1/2 top-[85%] -translate-x-1/2 -translate-y-1/2">
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
            <Tooltip title="Coming soon">
              <div
                style={{ transitionDuration: "1.5s" }}
                className="font-arco item-center absolute bottom-[10%] right-[20%] mx-auto hidden h-[3rem] min-w-[12.2231875rem] max-w-[320px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center bg-[url('/images/button-all-monsters.png')] bg-cover bg-no-repeat transition-all duration-1000 ease-in-out hover:scale-95 group-hover:flex"
              >
                PLAY NOW
              </div>
            </Tooltip>
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
            <Tooltip title="Coming soon">
              <div
                style={{ transitionDuration: "1.5s" }}
                className="font-arco item-center absolute bottom-[10%] left-[50%] mx-auto hidden h-[3rem] min-w-[12.2231875rem] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center bg-[url('/images/button-all-monsters.png')] bg-cover bg-no-repeat transition-all duration-1000 ease-in-out hover:scale-95 group-hover:flex max-md:bottom-0 max-md:left-1/2 max-md:h-[2rem] max-md:min-w-[8.148791666666667rem] max-md:text-sm"
              >
                PLAY NOW
              </div>
            </Tooltip>
          </div>
          <div className="group absolute hidden max-md:left-1/2 max-md:top-[205%] max-md:block max-md:-translate-x-1/2 max-md:-translate-y-1/2">
            <img className="max-md:mx-auto" src="/images/item-text-video-1.png" alt="" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[17px] overflow-hidden max-md:left-[40%] max-md:top-[25%]">
              <p className="text-primary-900 min-h-[100px] min-w-[250px] text-center text-base font-medium max-md:text-sm">
                Poke Quest is a role-playing game to catch Pokémon on land adventure RPG based on blockchain technology
                with a Play-to-Earn (P2E) structure and Non-Fungible Token (NFT) assets.
              </p>
            </div>
          </div>
          <div className="group absolute hidden max-md:left-1/2 max-md:top-[275%] max-md:block max-md:-translate-x-1/2 max-md:-translate-y-1/2">
            <img className="max-md:mx-auto" src="/images/item-text-video-2.png" alt="" />
            <div className="absolute left-[58%] top-[32%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[17px] overflow-hidden">
              <p className="text-primary-900 min-h-[100px] min-w-[13.375rem] text-center text-sm font-medium">
                Poke Quest is a role-playing game to catch Pokémon on land adventure RPG based on blockchain technology
                with a Play-to-Earn (P2E) structure and Non-Fungible Token (NFT) assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHowToPlayMobile
