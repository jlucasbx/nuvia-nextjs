import type { Meta, StoryObj } from '@storybook/react'
import Component from "../../app/(public)/starter/page"
import LayoutInitialPage from '@/components/layout-initial-page'

const meta: Meta<typeof Component> = {
    title: "pages/Starter",
    component: Component,
    decorators: [
        (Story) => (
            <LayoutInitialPage>
                {<Story />}
            </LayoutInitialPage>
        )
    ]

}

export default meta
type Story = StoryObj<typeof Component>

export const Starter: Story = {}
