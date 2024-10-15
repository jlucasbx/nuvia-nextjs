import { cn } from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"
import { FaFile, FaTools, FaUser } from "react-icons/fa"
import { IoIosLogOut } from "react-icons/io"
import userPicture from "@/public/user.jpeg"

interface Props {
    userPicture: string;
}

export default function Menu({ }: Props) {
    const s =
        "text-left inline-flex items-center gap-4 w-full hover:bg-primary-dark px-10 py-4 transition-colors"

    return (
        <section
            className={cn(
                "bg-primary w-64 text-white font-montserrat font-sm flex flex-col h-full",
                "justify-between pt-8"
            )}
        >
            <div className="flex items-center flex-col">
                <Link href="/user/info" className="w-full flex justify-center mb-12">
                    <Image
                        src={userPicture}
                        alt=""
                        className="size-16 bg-primary-dark object-cover rounded-full"
                    />
                </Link>
                <div className="flex flex-col items-center w-full">
                    <Link href="/mycloud" className="w-full">
                        <button className={s}>
                            <FaUser size={24} />
                            Meus dados
                        </button>
                    </Link>
                    <Link href="/upload" className="w-full">
                        <button className={s}>
                            <FaFile size={24} />
                            Subir arquivo
                        </button>
                    </Link>
                    <Link href="/plugins" className="w-full">
                        <button className={s}>
                            <FaTools size={24} />
                            Plugins
                        </button>
                    </Link>
                </div>
            </div>
            <Link href="/" className="w-full">
                <button className={s}>
                    <IoIosLogOut size={24} />
                    Sair
                </button>
            </Link>
        </section>
    )
}
