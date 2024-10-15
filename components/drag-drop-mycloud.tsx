import { useState } from "react"
import DragDropFile from "./drag-drop-file"
import Image from "next/image"
import { TailSpin } from "react-loader-spinner"

interface Props {
    onFileDrop: (files: File) => void | Promise<void>
}

export default function DragDropMyCloud({ onFileDrop }: Props) {
    const [dragOver, setDragOver] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <DragDropFile
            className={dragOver ? "shadow-inner" : "shadow"}
            onFileOver={() => setDragOver(true)}
            onFileLeave={() => setDragOver(false)}
            onFileDrop={async (file) => {
                setIsLoading(true)
                await onFileDrop(file)
                setIsLoading(false)
            }}
        >
            {isLoading ? (
                <TailSpin
                    visible={true}
                    height="48"
                    width="48"
                    color="#266fd5"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            ) : (
                <Image
                    alt="Upload a file"
                    src="/upload-cloud-icon.svg"
                    width={48}
                    height={48}
                    className="size-12"
                />
            )}
            <span className="font-poppins text-sm text-primary">
                {isLoading
                    ? "Enviando arquivo"
                    : dragOver
                        ? "Solte o arquivo"
                        : "Novo arquivo"}
            </span>
        </DragDropFile>
    )
}
