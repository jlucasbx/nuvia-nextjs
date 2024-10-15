import type { IPlugin } from "@/types"
import { Menu, MenuItem, MenuButton, MenuList, IconButton } from "@chakra-ui/react"
import { RxHamburgerMenu } from "react-icons/rx"
import { useRef, useState } from "react"

interface Props extends IPlugin {
    onDelete: (file: IPlugin) => void | Promise<void>
    onRename: (file: IPlugin, name: string) => void | Promise<void>
}

export default function PluginItem({ onDelete, onRename, ...plugin }: Props) {
    const [rename, setRename] = useState(false)
    const inputRef = useRef({} as HTMLInputElement)

    const handleRename = () => {
        const name = inputRef.current.value
        onRename(plugin, name)
    }

    return (
        <li className="grid grid-cols-3 items-center bg-white p-2 rounded-lg font-montserrat text-xs gap-4 shadow">
            <div className="inline-flex gap-4 items-center col-span-2 md:col-span-1">
                {!rename ?
                    <span className="text-nowrap overflow-hidden w-full overflow-ellipsis">
                        {plugin.name}
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
                {plugin.types.join(" ,")}
            </span>
            <div className="inline-flex w-full overflow-x-hidden items-center justify-between text-typo-light-primary">
                <span className="line-clamp-1">
                    {plugin.url}
                </span>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<RxHamburgerMenu />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem _hover={{ color: "#06367a" }} rounded={"md"} onClick={() => onDelete(plugin)}>
                            Deletar
                        </MenuItem>
                        <MenuItem _hover={{ color: "#06367a" }} rounded={"md"} onClick={() => setRename(true)}>
                            Renomear
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </li>
    )
}
