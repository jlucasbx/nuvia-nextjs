import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Heading,
    useColorModeValue,
    Badge,
    Flex,
} from '@chakra-ui/react'
import Button from './button'
import { KeyboardEventHandler, useState } from 'react'
import { FieldError, useForm } from 'react-hook-form'
import { IPlugin } from '@/types'
import { createPlugin } from '@/api/plugin'
import FormError from './form-error'
import { toast } from 'react-toastify'

interface Props {
    onClose: () => void | Promise<void>
}

export default function PluginForm({ onClose }: Props) {
    const [types, setTypes] = useState<string[]>([])
    const [input, setInput] = useState("")

    const { handleSubmit, register, setError, formState } = useForm()
    const errors = formState.errors as Record<string, FieldError>

    const handleAddType: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key !== "Enter") return
        const value = e.currentTarget.value.trim()
        if (!value) return
        setTypes((types) => ([...types, value]))
        setInput("")
    }

    const handlePluginSubmit = async (data: object) => {
        const plugin = { ...data, types } as IPlugin
        const res = await createPlugin({ ...plugin, types })
        if (res.status !== "success") {
            res.errors.forEach(({ field, message }) => setError(field, { message }))
            toast.error(res.message)
            return
        }
        toast.success(res.message, { onClose })
    }

    const handleDeleteType = (type: string) => {
        setTypes((types) => (types.filter((value) => value !== type)))
    }
    return (
        <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            width={500}
            p={8}>

            <Stack align={'center'}>
                <Heading
                    fontSize={'3xl'}
                    mb={4}
                    textAlign="center"
                >
                    Plugin
                </Heading>
            </Stack>
            <form
                onSubmit={handleSubmit(handlePluginSubmit)}
                onKeyDown={(e) => { if (e.key === "Enter") e.preventDefault() }}
            >
                <Stack spacing={4}>
                    <FormControl id="name">
                        <FormLabel>Nome</FormLabel>
                        <Input
                            {...register("name")}
                        />
                        <FormError error={errors.name} />
                    </FormControl>
                    <FormControl id="url">
                        <FormLabel>URL</FormLabel>
                        <Input {...register("url")} />
                        <FormError error={errors.url} />
                    </FormControl>
                    {types.length &&
                        <Flex gap={2}>
                            {types.map((type) => (
                                <Badge
                                    key={type}
                                    onClick={() => handleDeleteType(type)}
                                    cursor="pointer"
                                >
                                    {type}
                                </Badge>
                            ))}
                        </Flex>
                    }
                    <FormControl id="types">
                        <FormLabel>Tipos de arquivo</FormLabel>
                        <Input
                            name="types"
                            value={input}
                            onKeyDown={handleAddType}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <FormError error={errors.types} />
                    </FormControl>
                    <Button variant={1}>
                        Criar
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}
