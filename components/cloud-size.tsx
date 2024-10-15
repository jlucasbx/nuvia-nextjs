import { filesize } from "filesize"
interface Props {
    total: number
    used: number
}

export default function CloudSize({ total, used }: Props) {

    const gbToBytes = 1_073_741_824
    const sizeInBytes = gbToBytes * total
    const percentageUsed = !used ? 0 : (used / sizeInBytes * 100)
    const percentageNotUsed = 100 - percentageUsed

    return (
        <div className="bg-quartenary p-4 rounded-lg flex flex-col gap-2 font-montserrat shadow">
            <p className="flex justify-between">
                <span className="text-xs text-primary">
                    Seu espaço
                </span>
                <span className="text-xs text-[#15A8BC]">
                    {percentageNotUsed.toString().slice(0, 3)}% restante
                </span>
            </p>
            <p className="text-[calc(10/16*1rem)]">
                {filesize(used)} de {total}GB foram usados
            </p>
            <div
                className="bg-[#cddef7] h-1 w-full rounded-full"
            >
                <div
                    style={{ width: `${percentageUsed.toPrecision(2)}%` }}
                    className="h-full rounded-full bg-[#266fd5]"
                />
            </div>
        </div>
    )
}
