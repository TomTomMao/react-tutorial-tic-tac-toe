import styles from './layout.module.css'
import utilStyles from "../styles/utils.module.css"

import Link from "next/link"

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className={utilStyles.containerFlexColCenter}>{children}</div>
            </body>
        </html>
    );
}