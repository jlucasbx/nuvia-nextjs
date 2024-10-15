import Image from "next/image"
import { ReactNode } from "react"


interface Props {
    children: ReactNode
}

export default function LayoutInitialPage({ children }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="bg-white px-4 md:px-8 h-full flex items-center">
                {children}
            </div>
            <div className="bg-quartenary px-4 md:pl-4 md:pr-24 h-full flex items-center">
                <Image
                    src="/cloud.svg"
                    alt=""
                    width={0}
                    height={0}
                    className="w-full h-auto"
                />
            </div>
        </div>
    )
}
