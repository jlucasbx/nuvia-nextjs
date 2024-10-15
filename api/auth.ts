import { IAPIResponse, IAuth } from "@/types"
import { api } from "./instance"

const endpoint = "/auth"

export async function createToken(auth: IAuth) {
    const res = await api.post(endpoint, auth)
    const data = res.data as IAPIResponse<{ token: string }>
    return data
}
