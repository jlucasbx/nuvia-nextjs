import { ReactNode } from "react"
import { Montserrat ,Poppins} from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400","500","600","700"],
    variable: '--font-montserrat'
})

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400","500","600","700"],
    variable: '--font-poppins'
})

export default function Font({
    children
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <div className={`${montserrat.variable} ${poppins.variable}`}>
            {children}
        </div>
    )
}
