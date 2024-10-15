"use client"
import { ChakraProvider } from "@chakra-ui/react"
import { ReactNode } from "react"
import { ToastContainer } from "react-toastify"

interface Props {
    children?: ReactNode
}

export default function Providers({ children }: Props) {
    return (
        <ChakraProvider>
            <ToastContainer position="bottom-right" autoClose={700}/>
            {children}
        </ChakraProvider>
    )
}
