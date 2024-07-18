import { axiosInstance } from "@/libs/axios/axios-instance"
import { UserInfo } from "@/types/auth.type"

export class AuthService {
  async getNonce(address: string) {
    const { data } = await axiosInstance.request<{
      nonce: string
    }>({
      method: "GET",
      url: "/auth/get-nonce/",
      params: {
        address,
      },
    })
    return data
  }

  async login(address: string, sign: string) {
    const { data } = await axiosInstance.request<{
      userInfo: UserInfo
      token: string
    }>({
      method: "POST",
      url: "/auth/login/",
      data: {
        address,
        sign,
      },
    })
    return data
  }
}
