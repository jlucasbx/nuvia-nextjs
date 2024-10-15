import { cn } from "@/utils/cn"
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 1 | 2
}

export default function Button({ variant, className, children, ...props }: Props) {
    return (
        <button
            {...props}
            className={cn(
                "bg-secondary text-[#F0F5FC] font-bold",
                { "py-3 w-full rounded-2xl font-poppins": variant === 1 },
                { "font-montserrat py-4 px-14 rounded-tl-3xl rounded-br-3xl": variant === 2 },
                className
            )}>
            {children}
        </button>
    )
}
