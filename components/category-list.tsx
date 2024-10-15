import { ReactNode } from "react"

interface CategoryItemProps {
    label: string
    total: number
    bg: string
    icon: ReactNode
}

interface CategoryListProps {
    children: ReactNode
}

export function CategoryItem({ bg, label, total, icon }: CategoryItemProps) {
    return (
        <li
            style={{ backgroundColor: bg }}
            className="rounded-lg flex flex-col justify-between p-3 text-white font-montserrat"
        >
            <span
                style={{ color: bg }}
                className="size-6 bg-white inline-flex rounded-full items-center justify-center"
            >
                {icon}
            </span>
            <div className="flex flex-col">
                <span>{label}</span>
                <span className="text-sm">{total} arquivos</span>
            </div>
        </li>
    )
}

export function CategoryList({ children }: CategoryListProps) {
    return (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 flex-wrap h-28">
            {children}
        </ul>
    )
}
