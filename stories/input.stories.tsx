import type { Meta, StoryObj } from '@storybook/react'
import Component from '@/components/input'

const meta: Meta<typeof Component> = {
    title: "Input",
    component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Input: Story = {
    args: {
       type: "email",
        placeholder: "Email"
    }
}
