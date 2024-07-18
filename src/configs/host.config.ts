import { ENV, Env, isBuildedProduction } from "./env.config"

const HOSTS = <const>{
  [Env.development]: "",
  [Env.staging]: "",
  [Env.production]: "",
}

export const HOST = !isBuildedProduction ? window.location.origin : HOSTS[ENV] ?? window.location.origin
