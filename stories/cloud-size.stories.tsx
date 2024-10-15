import type { Meta, StoryObj } from '@storybook/react'
import Component from '@/components/cloud-size'

const meta: Meta<typeof Component> = {
    title: "CloudSize",
    component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const CloudSize: Story = {
    args: {
        total: 50,
        used: 10
    }
}
