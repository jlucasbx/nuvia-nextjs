import type { Meta, StoryObj } from '@storybook/react'
import Component from "../../app/(user)/mycloud/page"
import Layout from '../../app/(user)/layout'

const meta: Meta<typeof Component> = {
    title: "pages/MyCloud",
    component: Component,
    decorators: [
        (Story) => (
            <Layout>
                {<Story />}
            </Layout>
        )
    ]

}

export default meta
type Story = StoryObj<typeof Component>

export const MyCloud: Story = {}
