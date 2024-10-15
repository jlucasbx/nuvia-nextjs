import { cn } from '@/utils/cn'
import React, { forwardRef, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            className={cn(
                "inline-block w-full bg-quartenary border-tertiary border-solid border rounded-xl",
                "px-3 py-4 text-tertiary font-montserrat text-sm outline-none placeholder:text-tertiary",
                className
            )}
        />
    )
})

Input.displayName = "Input"
export default Input
