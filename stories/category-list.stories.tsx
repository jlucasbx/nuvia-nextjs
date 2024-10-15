import type { Meta, StoryObj } from '@storybook/react'
import { CategoryList as Component, CategoryItem } from '@/components/category-list'
import { FaFile } from 'react-icons/fa'
import { IoIosCamera } from 'react-icons/io'
import { IoVideocamSharp } from 'react-icons/io5'
import { AiFillAudio } from 'react-icons/ai'

const meta: Meta<typeof Component> = {
    title: "CategoryList",
}

export default meta
type Story = StoryObj<typeof Component>

export const CategoryList: Story = {
    render: (args) => (
        <Component {...args}>
            <CategoryItem
                icon={<IoIosCamera />}
                label="Imagens"
                bg='#6663fe'
                total={12}
            />
            <CategoryItem
                icon={<FaFile />}
                bg='#00a0b6'
                label="Documentos"
                total={17}
            />
            <CategoryItem
                icon={<IoVideocamSharp />}
                bg='#e06c9f'
                label="Vídeos"
                total={27}
            />
            <CategoryItem
                icon={<AiFillAudio />}
                bg='#266fd5'
                label="Áudios"
                total={21}
            />

        </Component>
    )
}
