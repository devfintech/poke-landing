import { FC } from "react"
import { Outlet } from "react-router-dom"

interface DefaultLayoutProps {}

export const DefaultLayout: FC<DefaultLayoutProps> = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <main className="pt-20"> */}
      <main className="">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
