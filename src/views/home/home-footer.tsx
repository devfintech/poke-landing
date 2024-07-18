const HomeFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  // const pokequest = document.getElementById("pokequest") as HTMLElement
  // window.addEventListener("scroll", function () {
  //   const value = window.scrollY
  //   if (pokequest) pokequest.style.top = value + 0.5 + "px"
  // })

  return (
    <div className="relative min-h-[1800px] w-full bg-[url('/images/bg-image-footer.png')] bg-cover bg-no-repeat">
      <img
        id="pokequest"
        className="pokequest absolute bottom-0 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2"
        src="/images/pokequest.png"
        alt=""
      />
      <img
        className="absolute bottom-[30%] left-[8%] w-[17%] min-[1280px]:bottom-[15%] min-[1366px]:bottom-[15%] min-[1920px]:bottom-[22%] min-[2560px]:bottom-[30%]"
        src="/gifs/snake.gif"
        alt=""
      />
      <img className="absolute bottom-0 w-full" src="/images/image-footer-layer-1.png" alt="" />
      <img
        className="absolute bottom-[13.5%] left-[45%] w-[10%] min-[1280px]:bottom-[10%] min-[1366px]:bottom-[10%] min-[1920px]:bottom-[13%] min-[2560px]:bottom-[16.5%] min-[3333px]:bottom-[19%] min-[3333px]:w-[8%]"
        src="/gifs/turtle.gif"
        alt=""
      />
      <img
        className="absolute bottom-[15%] left-[22%] w-[22%] min-[1280px]:bottom-[8%] min-[1366px]:bottom-[10%] min-[1920px]:bottom-[12%] min-[2560px]:bottom-[16%] min-[3333px]:w-[18%]"
        src="/gifs/worm.gif"
        alt=""
      />
      <img
        className="absolute bottom-[20%] left-[58%] w-[12%] min-[1280px]:bottom-[10%] min-[1366px]:bottom-[12%] min-[1920px]:bottom-[18%] min-[2560px]:bottom-[25%] min-[3333px]:w-[10%]"
        src="/gifs/poke.gif"
        alt=""
      />
      <img className="absolute bottom-[35%] right-[3%] w-[15%] min-[2560px]:bottom-[50%]" src="/gifs/bat.gif" alt="" />

      <img className="absolute bottom-0 w-full" src="/images/image-footer-layer-2.png" alt="" />

      <button
      // onClick={() => scrollToTop()}
      >
        <img
          className="upImage absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-95 min-[1280px]:bottom-[18%] min-[1280px]:w-[8%] min-[1920px]:bottom-[25%] min-[2560px]:bottom-1/3"
          src="/images/button-up-only.png"
          alt=""
        />
      </button>
    </div>
  )
}

export default HomeFooter
