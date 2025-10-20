import Axios from "axios"

export type ApiResponse<T = any> = {
  success: boolean
  message: string
  data: T
}

export const api = Axios.create({
  baseURL: "/api",
})
