import Font from "./font"
import "./globals.css"
import 'react-toastify/dist/ReactToastify.css'

import Providers from "./providers"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body>
                <Font>
                    <Providers>
                        {children}
                    </Providers>
                </Font>
            </body>
        </html>
    )
}
