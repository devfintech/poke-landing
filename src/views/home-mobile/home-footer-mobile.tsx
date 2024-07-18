const HomeFooterMobile = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="relative min-h-[55.75rem] w-full bg-[url('/images/bg-image-footer-mb.png')] bg-cover bg-no-repeat md:hidden">
      <img
        src="/images/logo-footer2.png"
        alt="Footer mobile"
        className="absolute left-[50%] top-[30%] w-[100vw] -translate-x-1/2 sm:top-[20%]"
      />
      <img className="absolute bottom-0 z-10  w-full max-sm:hidden " src="/images/image-footer-layer-1.png" alt="" />
      <img className="absolute bottom-0 w-full max-sm:hidden" src="/images/image-footer-layer-2.png" alt="" />

      <img className="absolute bottom-[16%] left-[8%] w-[17%] max-sm:hidden" src="/gifs/snake.gif" alt="" />

      <img
        className="absolute bottom-[18%] left-[38%] z-50 w-[31.7%] max-w-[120px] min-[430px]:bottom-[15%] sm:bottom-[11%] sm:left-[45%]"
        src="/gifs/turtle.gif"
        alt=""
      />

      <img
        className="absolute -left-14 bottom-[8%] z-50 w-[55.46vw] max-w-[208px] max-sm:bottom-[17.5%] min-[430px]:bottom-[14.5%] sm:left-[22%] md:bottom-[8%]"
        src="/gifs/worm.gif"
        alt=""
      />

      <img
        className="absolute bottom-[13%] left-[70%] z-50 w-[30vw] max-w-[95px] max-sm:bottom-[22%] min-[430px]:bottom-[18.5%] md:bottom-[22%]"
        src="/gifs/poke.gif"
        alt=""
      />

      <img className="absolute right-[3%] top-[15%] w-[40.8%] sm:top-[15%] sm:w-[15%]" src="/gifs/bat.gif" alt="" />

      <button
      // onClick={() => scrollToTop()}
      >
        <img
          className="upImage sm:bottom-1/3.5 absolute bottom-1/3 left-1/2 w-[21.33vw] max-w-[10rem] -translate-x-1/2 cursor-pointer hover:scale-95 max-sm:-translate-y-1/2"
          src="/images/button-up-only.png"
          alt=""
        />
      </button>
    </div>
  )
}

export default HomeFooterMobile
