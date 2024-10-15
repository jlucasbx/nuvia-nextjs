import type { Meta, StoryObj } from '@storybook/react'
import Component from '@/components/button'

const meta: Meta<typeof Component> = {
    title: "Button",
    component: Component,
    args: {
        children: "button"
    }
}

export default meta
type Story = StoryObj<typeof Component>

export const Variant1: Story = {
    args: {
        variant: 1
    }
}

export const Variant2: Story = {
    args: {
        variant: 2
    }
}
