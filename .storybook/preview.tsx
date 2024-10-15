import type { Preview } from "@storybook/react"
import "../app/globals.css"
import Font from "../app/font"
import React from "react"

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <Font>
                <Story />
            </Font>
        )
    ]
}

export default preview

