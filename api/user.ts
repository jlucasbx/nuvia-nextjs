import { IAPIResponse, IUser } from "@/types"
import { api } from "./instance"

const endpoint = "/user"

export async function createUser(user: IUser) {
    const res = await api.post(endpoint, user)
    const data = res.data as IAPIResponse<IUser>
    return data
}

export async function getUser() {
    const res = await api.get(endpoint)
    const data = res.data as IAPIResponse<IUser>
    return data
}
