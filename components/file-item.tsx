import type { IFile, IPlugin } from "@/types"
import Image from "next/image"
import { filesize } from "filesize"
import { Menu, MenuItem, MenuButton, MenuList, IconButton } from "@chakra-ui/react"
import { RxHamburgerMenu } from "react-icons/rx"
import { useRef, useState } from "react"
import Link from "next/link"

interface Props extends IFile {
    plugins: IPlugin[]
    onDelete: (file: IFile) => void | Promise<void>
    onRename: (file: IFile, name: string) => void | Promise<void>
    onPlugin: (file: IFile, plugin: IPlugin) => void | Promise<void>
}

export default function FileItem({ plugins, onDelete, onPlugin, onRename, ...file }: Props) {
    const [rename, setRename] = useState(false)
    const inputRef = useRef({} as HTMLInputElement)
    const { name, size, previewUrl, mimeType, } = file
    const getFileName = (file: string) => file.split(".")[0]
    plugins = plugins ?? []

    const handleRename = () => {
        const name = inputRef.current.value
        onRename(file, name)
    }


    const fileSrc = `http://192.168.144.162:3000/file/${previewUrl}`

    return (
        <li className="grid grid-cols-3 items-center bg-white p-2 rounded-lg font-montserrat text-xs gap-4 shadow">
            <div className="inline-flex gap-4 items-center col-span-2 md:col-span-1">
                <Image
                    alt=""
                    width={24}
                    height={24}
                    src={fileSrc}
                    className="rounded-lg object-cover size-6"
                />
                {!rename ?
                    <span className="text-nowrap overflow-hidden w-full overflow-ellipsis">
                        {getFileName(name)}
                    </span>
                    :
                    <input
                        className="outline-nono px-2"
                        placeholder="digite o novo nome"
                        onBlur={handleRename}
                        ref={inputRef}
                    />
                }
            </div>
            <span className="text-typo-light-primary hidden md:inline">
                {mimeType}
            </span>
            <div className="inline-flex items-center w-full justify-between text-typo-light-primary">
                <span>
                    {filesize(size)}
                </span>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<RxHamburgerMenu />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem _hover={{ color: "#06367a" }} onClick={() => onDelete(file)}>
                            Deletar
                        </MenuItem>
                        <MenuItem _hover={{ color: "#06367a" }} onClick={() => setRename(true)}>
                            Renomear
                        </MenuItem>
                        <MenuItem _hover={{ color: "#06367a" }}>
                            <Link href={fileSrc} download={file.name}>
                                Download
                            </Link>
                        </MenuItem>
                        {plugins.map((plugin) => (
                            <MenuItem
                                key={plugin.name}
                                _hover={{ color: "#06367a" }}
                                onClick={() => onPlugin(file, plugin)}
                            >
                                {plugin.name}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </div>
        </li>
    )
}
