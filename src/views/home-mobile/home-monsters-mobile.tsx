import { LIST_MONSTER } from "@/pages/home-desktop"
import { Tooltip } from "antd"

const HomeMonsterMobile = () => {
  return (
    <div className="over relative h-full md:hidden">
      <div className="mx-auto flex max-w-[1228px] flex-col justify-center gap-10 px-2 text-center">
        <h1 className="font-arco mt-[11.125rem] text-[56px] text-[#CC5631] max-md:text-[32px]">MONSTERS</h1>
        <div className="flex flex-col gap-6 max-md:gap-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {LIST_MONSTER.map((item, key) => (
              <>
                <div
                  className="relative flex min-h-[150px] flex-col gap-1 p-4 hover:scale-105"
                  key={key}
                  style={{
                    backgroundImage: `url(${item.bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <img
                    className="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2"
                    src={item.image}
                    alt=""
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        <Tooltip title="Coming soon">
          <div className="font-arco mx-auto flex h-[3rem] w-[12.2231875rem] cursor-pointer items-center justify-center bg-[url('/images/button-all-monsters.png')] bg-cover bg-no-repeat text-white hover:scale-95">
            ALL MONSTERS
          </div>
        </Tooltip>
      </div>
      <img className="absolute bottom-[-10%] w-[15%] max-lg:hidden" src="/images/item-pokemon.png" alt="" />
    </div>
  )
}

export default HomeMonsterMobile
