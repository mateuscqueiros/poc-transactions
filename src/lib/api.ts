import Axios from "axios"

export type ApiResponse<T> = {
  success: boolean
  message: string
  data: T
}

export const api = Axios.create({
  baseURL: "/api",
})
