import { cn } from "@/utils/cn"
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLDivElement> {
    parentClassName?: string
}

export default function Container({ parentClassName, ...props }: Props) {

    return (
        <div
            className={cn("px-4", parentClassName || "")}
        >
            <div
                {...props}
                className={cn("container mx-auto", props.className)}
            >
                {props.children}
            </div>
        </div>
    )
}
