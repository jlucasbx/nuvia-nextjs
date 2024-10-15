import { cn } from "@/utils/cn"
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLHeadingElement> {
    as: "h1" | "h2"
}

export default function Heading({ children, as, className, ...props }: Props) {

    const s = cn("font-poppins text-5xl font-bold text-primary", className)

    return (
        as === "h1" ?
            <h1 {...props} className={s}>{children}</h1>
            :
            <h2 {...props} className={s}>{children}</h2>
    )
}
