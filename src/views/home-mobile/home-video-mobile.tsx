const HomeVideoMobile = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-[5rem]">
        <div className="relative min-h-screen w-full bg-[url('/images/bg-image-video.png')] bg-cover bg-no-repeat">
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
          <div className="text-primary-900 absolute left-[24.5%] top-[36%] max-w-[286px] -translate-x-1/2 -translate-y-1/2 text-center text-sm font-medium max-md:hidden">
            Poke Quest is a role-playing game to catch Pokémon on land adventure RPG based on blockchain technology with
            a Play-to-Earn (P2E) structure and Non-Fungible Token (NFT) assets.
          </div>
          <div className="text-primary-900 absolute bottom-[15.5%] right-[13.5%] max-w-[200px] -translate-x-1/2 -translate-y-1/2 text-center text-sm font-medium max-md:hidden">
            Players take a journey together by owning a piece of land on the marketplace. Build and develop your land
            powerfully by catching Pokémon while inviting your friends to join the journey.
          </div>
          <img
            className="absolute left-[32%] top-[58%] w-[10%] -translate-x-1/2 -translate-y-1/2 max-md:hidden"
            src="/gifs/pika.gif"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default HomeVideoMobile
