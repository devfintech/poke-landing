import HomeCommunityMobile from "@/views/home-mobile/home-community-mobile"
import HomeFooterMobile from "@/views/home-mobile/home-footer-mobile"
import HomeHowToPlayMobileV2 from "@/views/home-mobile/home-howtoplay-mobilev2"
import HomeMonsterMobile from "@/views/home-mobile/home-monsters-mobile"
import HomeNftLandMobile from "@/views/home-mobile/home-nftland-mobile"
import HomeVideoMobile from "@/views/home-mobile/home-video-mobile"
import { useEffect, useRef } from "react"

const HomePageMobile = () => {
  const bottomPage = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (bottomPage.current) {
      bottomPage.current.scrollIntoView()
    }
  }, [])
  const scrollBottom = () => {
    window.scrollTo(0, 99999)
  }
  useEffect(() => {
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", scrollBottom, false)
    } else if ((window as any).attachEvent) {
      // eslint-disable-next-line no-extra-semi
      ;(window as any).attachEvent("onload", scrollBottom)
    }
  }, [])
  window.onload = scrollBottom
  return (
    <>
      <div className="bg-homepage">
        <HomeCommunityMobile />
        <HomeMonsterMobile />
        <HomeNftLandMobile />
        {/* <HomeHowToPlayMobile /> */}
        <HomeHowToPlayMobileV2 />
        <HomeVideoMobile />
        <HomeFooterMobile />
        <div ref={bottomPage}></div>
      </div>
    </>
  )
}

export default HomePageMobile
