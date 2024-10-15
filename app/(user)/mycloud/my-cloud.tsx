"use client"
import { CiSearch } from "react-icons/ci"
import useSWR from "swr"
import { deleteFile, getAllFiles, renameFile } from "@/api/file"
import CloudSize from "@/components/cloud-size"
import { getUser } from "@/api/user"
import InfiniteScroll from "react-infinite-scroll-component"
import { ChangeEvent, useState } from "react"
import FileItem from "@/components/file-item"
import { IFile, IPlugin } from "@/types"
import { toast } from "react-toastify"
import { pluginTransform } from "@/api/plugin"
import UploadForm from "../upload/upload-form"

const handleDummy = () => { }
export default function MyCloud() {
    const { data, mutate } = useSWR("/file", () => getAllFiles(), { fallback: [] })
    const [search, setSearch] = useState({ value: "" })
    const userF = useSWR("/user", getUser, { fallback: [] })

    const allMutate = () => {
        mutate()
        userF.mutate()
    }
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSearch({ value })
    }

    const handleDelete = async ({ _id }: IFile) => {
        const res = await deleteFile(_id)
        if (res.status === "success") allMutate()
        const key = res.status === "success" ? "success" : "error"
        toast[key](res.message)
    }

    const handleRename = async ({ _id }: IFile, name: string) => {
        const res = await renameFile(_id, name)
        if (res.status === "success") {
            toast.success(res.message)
            mutate()
            return
        }
        setSearch({ value: "" })
        toast.error(res.message)
    }

    const handlePlugin = async (file: IFile, plugin: IPlugin) => {
        const res = await pluginTransform({
            fileId: file._id,
            pluginId: plugin._id
        })
        const key = res.status === "success" ? "success" : "error"
        toast[key](res.message)
        if(key==="success") allMutate()
    }

    let files = data ? data.data : []

    files = search.value ?
        files.filter(({ name }) => name.includes(search.value))
        :
        files

    const [{ cloud, plugins }] = userF.data?.data ?? [{ cloud: undefined, plugins: [] }]

    return (
        <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col gap-4 col-span-3">
                <div className="flex items-center bg-white h-[38px] px-6 py-2 rounded-xl gap-1 mb-3 shadow">
                    <CiSearch className="fill-tertiary" />
                    <input
                        type="text"
                        onChange={handleSearch}
                        value={search.value}
                        className="bg-transparent placeholder:text-tertiary text-tertiary outline-none"
                        placeholder="Buscar por nome..."
                    />
                </div>

                <div className="h-[600px] overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">Arquivos</h2>
                    <InfiniteScroll
                        className="flex flex-col gap-4"
                        dataLength={files.length}
                        next={handleDummy}
                        hasMore={files.length < 20}
                        loader={null}
                        scrollableTarget="scrollableDiv"

                    >
                        <div className="flex flex-col gap-4">
                            {files.map((file) => (
                                <FileItem
                                    key={file._id}
                                    plugins={plugins}
                                    {...file}
                                    onPlugin={handlePlugin}
                                    onRename={handleRename}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>

            </div>
            <div className="bg-white h-min p-4 rounded flex flex-col gap-2">
                <UploadForm onClose={allMutate}/>
                {cloud &&
                    <CloudSize
                        total={cloud.totalSize}
                        used={cloud.usedSize}
                    />
                }
            </div>
        </div>
    )
}
