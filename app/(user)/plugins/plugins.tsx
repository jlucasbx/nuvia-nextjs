"use client"
import { CiSearch } from "react-icons/ci"
import InfiniteScroll from "react-infinite-scroll-component"
import { ChangeEvent, useRef, useState } from "react"
import { IPlugin } from "@/types"
import PluginItem from "@/components/plugin-item"
import { Badge, Portal } from "@chakra-ui/react"
import PluginForm from "@/components/plugin-form"
import useSWR from "swr"
import { deletePlugin, getAllPlugins, renamePlugin } from "@/api/plugin"
import { toast } from "react-toastify"

const handleDummy = () => { }
export default function Plugins() {

    const { data, mutate } = useSWR("/plugin", getAllPlugins)
    const [search, setSearch] = useState({ value: "" })
    const [createPlugin, setCreatePlugin] = useState(false)
    const divRef = useRef({} as HTMLDivElement)

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSearch({ value })
    }

    const handleDelete = async ({ _id }: IPlugin) => {
        const res = await deletePlugin(_id)
        if (res.status !== "success") {
            toast.error(res.message)
            return
        }
        toast.success(res.message, { delay: 700 })
        mutate()
    }

    const handleRename = async ({ _id }: IPlugin, name: string) => {
        const res = await renamePlugin(_id, name)
        const key = res.status === "success" ? "success" : "error"
        toast[key](res.message, { delay: 700 })
    }


    let plugins = data ? data.data : []

    plugins = search.value ?
        plugins.filter(({ name }) => name.toLowerCase().includes(search.value.toLowerCase()))
        :
        plugins

    return (
        <div className="flex flex-col gap-4 col-span-3">
            {createPlugin &&
                <Portal>
                    <div
                        ref={divRef}
                        onClick={(e) => {
                            if (e.target !== divRef.current) return
                            setCreatePlugin(false)
                        }}
                        className="z-[100] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 w-full h-screen flex items-center justify-center"
                    >
                        <PluginForm
                            onClose={() => {
                                setCreatePlugin(false)
                                mutate()
                            }}
                        />
                    </div>
                </Portal>
            }
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
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">Plugins</h2>
                    <Badge
                        bg={"#06367a"}
                        color="white"
                        cursor="pointer"
                        rounded="md"
                        h="min-content"
                        p={2}
                        onClick={() => setCreatePlugin(true)}
                    >
                        Criar plugin
                    </Badge>
                </div>
                <InfiniteScroll
                    className="flex flex-col gap-4"
                    dataLength={plugins.length}
                    next={handleDummy}
                    hasMore={plugins.length < 20}
                    loader={null}
                    scrollableTarget="scrollableDiv"

                >
                    <div className="flex flex-col gap-4">
                        {plugins.map((plugin) => (
                            <PluginItem
                                key={plugin._id + plugin.name}
                                {...plugin}
                                onRename={handleRename}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>

        </div>
    )
}
