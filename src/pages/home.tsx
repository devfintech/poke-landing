import { PageLoading, PageLoadingMobile } from "@/components/page-loading"
import { useEffect, useState } from "react"
import HomeDesktop from "./home-desktop"
import HomePageMobile from "./home-mobile"

const HomePage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  if (window.innerWidth > 768) {
    return (
      <>
        {loading && <PageLoading />}
        <div>
          <HomeDesktop />
        </div>
      </>
    )
  }
  return (
    <>
      {loading && <PageLoadingMobile />}
      <HomePageMobile />
    </>
  )
}

export default HomePage
