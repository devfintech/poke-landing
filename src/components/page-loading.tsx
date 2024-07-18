export const PageLoading = () => {
  return (
    <div className="pageLoading fixed left-0 top-0 z-[99] flex h-screen w-screen items-center justify-center bg-[url(/images/bg-loading.png)] bg-cover bg-center bg-no-repeat">
      <div className="loading-text flex items-end gap-2 text-8xl font-bold leading-none tracking-[-2px] text-white">
        LOADING
        <div className="mb-3 flex items-center gap-4">
          <div className="loading-page h-4 w-4 rotate-45 bg-white opacity-0"></div>
          <div className="loading-page h-4 w-4 rotate-45 bg-white opacity-0" style={{ animationDelay: "0.5s" }}></div>
          <div className="loading-page h-4 w-4 rotate-45 bg-white opacity-0" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </div>
  )
}
export const PageLoadingMobile = () => {
  return (
    <div className="pageLoading fixed left-0 top-0 z-[99] flex h-screen w-screen items-center justify-center bg-[url(/images/bg-image-footer-mb-1.png)] bg-cover bg-center bg-no-repeat">
      <div className="loading-text flex flex-col items-center gap-2 text-6xl font-bold leading-none tracking-[-2px] text-white">
        LOADING
        <div className="mb-3 flex items-center gap-4">
          <div className="loading-page h-4 w-4 rotate-45 bg-white opacity-0"></div>
          <div className="loading-page h-4 w-4 rotate-45 bg-white opacity-0" style={{ animationDelay: "0.5s" }}></div>
          <div className="loading-page h-4 w-4 rotate-45 bg-white opacity-0" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </div>
  )
}
