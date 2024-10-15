import type { Meta, StoryObj } from '@storybook/react'
import Component from '@/components/drag-drop-mycloud'

const meta: Meta<typeof Component> = {
    title: "DragDropMyCloud",
    component: Component
}

export default meta
type Story = StoryObj<typeof Component>

export const DragDropMyCloud: Story = {
    args: {
        onFileDrop: (files) => {
            console.log(files)
            return new Promise((res) => {
                setTimeout(() => res(true), 10000)
            })
        }
    }
}
