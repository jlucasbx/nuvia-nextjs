import type { Meta, StoryObj } from '@storybook/react'
import Component from '@/components/file-list'
import thumb from "./assets/image01.jpg"

const meta: Meta<typeof Component> = {
    title: "FileList",
    component: Component,
    decorators: [
        (Story) => (
            <div style={{ background: '#ebf2fc', padding: "1rem" }}>
                <Story />
            </div>
        )
    ],
}

export default meta
type Story = StoryObj<typeof Component>

export const FileList: Story = {
    args: {
        data: [
            { name: 'Document1.clsx', size: 1024, url: thumb.src, thumbnail: thumb.src },
            { name: 'Image1.jpg', size: 2048, url: thumb.src, thumbnail: thumb.src },
            { name: 'Spreadsheet1.xlsx', size: 3072, url: thumb.src, thumbnail: thumb.src },
            { name: 'Presentation1.pptx', size: 4096, url: thumb.src, thumbnail: thumb.src },
            { name: 'Code1.ts', size: 512, url: thumb.src, thumbnail: thumb.src },
            { name: 'Text1.txt', size: 256, url: thumb.src, thumbnail: thumb.src },
            { name: 'Audio1.mp3', size: 6144, url: thumb.src, thumbnail: thumb.src },
            { name: 'Video1.mp4', size: 8192, url: thumb.src, thumbnail: thumb.src },
            { name: 'Archive1.zip', size: 10240, url: thumb.src, thumbnail: thumb.src },
            { name: 'Presentation2.pptx', size: 5120, url: thumb.src, thumbnail: thumb.src }
        ]
    }
}
