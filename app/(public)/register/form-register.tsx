"use client"
import { createUser } from "@/api/user"
import Button from "@/components/button"
import Heading from "@/components/heading"
import Input from "@/components/input"
import { IUser } from "@/types"
import Link from "next/link"
import { FieldError, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import FormError from "@/components/form-error"

export default function FormRegister() {
    const {register, handleSubmit, setError, formState } = useForm()
    const router = useRouter()

    const errors = formState.errors as Record<string, FieldError>

    const handleRegister = async (data: unknown) => {
        const user = data as IUser
        const res = await createUser(user)
        if (res.status === "success") {
            toast.success(res.message, {
                onClick: () => router.push("/login"),
                delay: 700
            })
            return
        }

        toast.error(res.message)
        res.errors.forEach(({ field, message }) => setError(field, { message }))
    }

    return (
        <div>
            <Heading as="h1" className="mb-6">
                Cadastre-se
            </Heading>
            <form className="mb-6 flex flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>
                <Input
                    type="text"
                    placeholder="Username"
                    {...register("username")}
                />
                <FormError
                    error={errors.username}
                />
                <Input
                    placeholder="Email"
                    {...register("email")}
                />
                <FormError
                    error={errors.email}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                />
                <FormError
                    error={errors.password}
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                />
                <FormError
                    error={errors.confirmPassword}
                />
                <Button variant={1} type="submit" className="mt-4">
                    Sign In
                </Button>
            </form>
            <p className="text-center font-montserrat text-sm text-tertiary">
                <span>Já tem uma conta? </span>
                <Link href="/login" className="font-bold">
                    Faça o login
                </Link>
            </p>
        </div>
    )
}
