"use client"
import { createToken } from "@/api/auth"
import Button from "@/components/button"
import Heading from "@/components/heading"
import Input from "@/components/input"
import { IAuth } from "@/types"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { setToken } from "@/api/instance"

export default function Login() {

    const { register, handleSubmit } = useForm()
    const router = useRouter()

    const handleLogin = async (auth: unknown) => {
        const res = await createToken(auth as IAuth)
        if (res.status !== "success") return toast.error(res.message)
        const [{ token }] = res.data
        setToken(token)
        toast.success(res.message, {
            onClose: () => router.push("/mycloud"),
            autoClose: 700,
        })
        return
    }

    return (
        <main className="w-full">
            <Heading as="h1" className="mb-6">
                Entrar
            </Heading>
            <form className="mb-6" onSubmit={handleSubmit(handleLogin)}>
                <Input
                    {...register("username")}
                    type="text"
                    placeholder="Username"
                    className="mb-4"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    className="mb-6 inline-block"
                    {...register("password")}
                />
                <Button variant={1} type="submit">
                    Sign In
                </Button>
            </form>
            <p className="text-center font-montserrat text-sm text-tertiary">
                <span>Não tem conta? </span>
                <Link href="/register" className="font-bold">
                    cadastra-se já
                </Link>
            </p>
        </main>
    )
}
