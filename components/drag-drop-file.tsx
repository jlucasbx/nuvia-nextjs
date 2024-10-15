import { cn } from "@/utils/cn"
import { ChangeEventHandler, DragEventHandler, ReactNode, useEffect } from "react"

interface Props {
    onFileDrop: (files: File) => void
    onFileOver: () => void
    onFileLeave: () => void
    children: ReactNode
    className?:string
}

export default function DragDropFile({ onFileDrop, onFileOver, onFileLeave, children ,className}: Props) {

    useEffect(() => {
        window.addEventListener("drop", (e) => e.preventDefault())
    }, [])

    const handleFileChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        if (!target.files) return
        const file = target.files[0]
        onFileDrop(file)
    }

    const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        if (!e.dataTransfer.files.length) return
        const file = e.dataTransfer.files[0]
        onFileDrop(file)
    }

    
    const handleDragOver: DragEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        onFileOver()
    }

    return (
        <div
            id="container"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={onFileLeave}
            className={cn(
                "bg-quartenary h-44 w-full flex flex-col gap-5 items-center justify-center rounded-lg transition-shadow",
                className
            )}
        >
            {children}
            <input
                type="file"
                hidden
                onChange={handleFileChange}
                multiple
            />
        </div>
    )
}
