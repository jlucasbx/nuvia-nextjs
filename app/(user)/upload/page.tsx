"use client"
import { Progress } from "@chakra-ui/react"
import UploadForm from "./upload-form"

export default function Upload() {

    return (
        <div className="p-4 w-full bg-[#ebf2fc] h-screen">
            <div className="p-8 rounded bg-white">
                <h2 className="text-3xl mb-4">Subir Arquivos</h2>
                <main className="w-full flex flex-col items-center justify-center mt-7 gap-6">
                    {<UploadForm />}
                </main>
            </div>
        </div>
    )
}
