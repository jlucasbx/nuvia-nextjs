import { IAPIResponse, IFile, IQuery } from "@/types"
import { api } from "./instance"

const endpoint = "/file"

export async function createFile(file: File) {
    const form = new FormData()
    form.set("file", file)
    const res = await api.post(endpoint, form, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        timeout: Infinity
    })

    const data = res.data as IAPIResponse<IFile>

    return data
}

export async function deleteFile(id: string) {
    const res = await api.delete(`${endpoint}/${id}`)
    const data = res.data as IAPIResponse<void>
    return data
}

export async function renameFile(id: string, name: string) {
    const res = await api.post(`${endpoint}/${id}`, { name })
    const data = res.data as IAPIResponse<void>
    return data
}

export async function getAllFiles(query?: IQuery) {
    const res = await api.get(endpoint, {})
    const data = res.data as IAPIResponse<IFile>
    return data
}

