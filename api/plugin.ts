import { IAPIResponse, IPlugin, ITransformPlugin } from "@/types"
import { api } from "./instance"

const endpoint = "/plugin"

export async function createPlugin(plugin: IPlugin) {
    const res = await api.post(endpoint, plugin)
    const data = res.data as IAPIResponse<void>
    return data
}

export async function getAllPlugins() {
    const res = await api.get(endpoint)
    const data = res.data as IAPIResponse<IPlugin>
    return data
}

export async function renamePlugin(id: string, name: string) {
    const res = await api.patch(`${endpoint}/${id}`, { name })
    const data = res.data as IAPIResponse<IPlugin>
    return data
}
export async function deletePlugin(id: string) {
    const res = await api.delete(`${endpoint}/${id}`)
    const data = res.data as IAPIResponse<void>
    return data
}

export async function pluginTransform(info:ITransformPlugin) {
    const res = await api.post(`${endpoint}/transform`,info,{
        timeout: Infinity
    })
    const data = res.data as IAPIResponse<void>
    return data
}


