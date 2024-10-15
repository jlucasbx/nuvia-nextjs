"use client"
import { createFile } from "@/api/file"
import DragDropMyCloud from "@/components/drag-drop-mycloud"
import { toast } from "react-toastify"

interface Props{
    onClose?: () => void
}

export default function UploadForm({onClose}:Props) {

    const handleFileDrop = async (data: File) => {
        const res = await createFile(data)
        const key = res.status === "success" ? "success" : "error"
        toast[key](res.message, { delay: 500 })
        if(key==="success") onClose?.()
    }

    return (
        <DragDropMyCloud
            onFileDrop={handleFileDrop}
        />
    )
}
