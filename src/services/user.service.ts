import { axiosInstance } from "@/libs/axios/axios-instance"
import { UserInfo } from "@/types/auth.type"

export class UserService {
  async getUser() {
    const { data } = await axiosInstance.request<UserInfo>({
      method: "GET",
      url: "/user/get/",
      params: {},
    })
    return data
  }
}
