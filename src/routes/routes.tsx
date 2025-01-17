import { BaseRoute } from "@/types/core.type"

export const routePath = {
  home: "/",
  translation: "/translation",
  comingSoon: "/coming-soon",
  notFound: "*",
} as const

export const routes: BaseRoute[] = [
  { label: "Home", to: routePath.home },
  { label: "Translation", to: routePath.translation },
  { label: "Coming Soon", to: routePath.comingSoon, isComingSoon: true },
]
