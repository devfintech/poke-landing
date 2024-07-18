import { appConfig } from "@/configs/app.config"
import { sleep } from "@/utils/promise"
import useSWR from "swr"
import { useVersionStore } from "../stores/use-version-store"

export const useSentryVersion = () => {
  const { version: storedVersion, setVersion: setStoredVersion } = useVersionStore()

  // useEffect(() => {
  //   const updateVersion = async () => {
  //     if (storedVersion !== appConfig.version) {
  //       localStorage.clear()
  //       sessionStorage.clear()
  //       setVersion(appConfig.version)
  //       await sleep(500)

  //       window.location.reload()
  //     }
  //   }
  //   updateVersion()
  // }, [storedVersion, appConfig.version])

  useSWR(["sentry-version", storedVersion, appConfig.version], async () => {
    if (storedVersion !== appConfig.version) {
      localStorage.clear()
      sessionStorage.clear()
      await sleep(300)

      setStoredVersion(appConfig.version)

      // Reload Page
      // @ts-ignore
      window.location.reload(true)
    }
  })
}
