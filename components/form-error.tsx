import { FieldError } from "react-hook-form"

interface Props {
    error?: FieldError
}

export default function FormError({ error }: Props) {
    if (!error) return
    return (
        <p className="text-red-400 text-sm">
            {error.message}
        </p>
    )
}
