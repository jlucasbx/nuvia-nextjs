import LayoutInitialPage from "@/components/layout-initial-page"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <LayoutInitialPage>
            {children}
        </LayoutInitialPage>
    )
}
