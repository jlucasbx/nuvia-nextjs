import Button from "@/components/button"
import Heading from "@/components/heading"
import Link from "next/link"

export default function StarterPage() {
    return (
        <main className="flex flex-col gap-8">
            <Heading as="h1">
                Expanda as
                <span className="md:break-all"> possibilidades </span>
                dos seus arquivos multimídias
            </Heading>
            <p className="font-montserrat text-tertirary text-[#87B1EB] font-xl">
                Arquivos de vídeos, audios entre outros
            </p>
            <div>
                <Button variant={2} className="w-full md:w-auto">
                    <Link href="/register">
                        Comece aqui
                    </Link>
                </Button>
            </div>
        </main>
    )
}
