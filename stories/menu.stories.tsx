import type { Meta, StoryObj } from '@storybook/react'
import Component from '@/components/menu'
import userPicture from './assets/Yoriichi_Tsugikuni_28Anime29.jpg'

const meta: Meta<typeof Component> = {
    title: "Menu",
    component: Component
}

export default meta
type Story = StoryObj<typeof Component>

export const Menu: Story = {
    args: {
        userPicture: userPicture.src
    },
    decorators: [
        (Story) => (
            <div className='h-screen'>
                <Story/>
            </div>
        )
    ]
}
