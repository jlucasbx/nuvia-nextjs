import Menu from "@/components/menu"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className="flex items-center h-screen">
            <Menu userPicture="" />
            <main className="size-full">
                {children}
            </main>
        </div>
    )
}
