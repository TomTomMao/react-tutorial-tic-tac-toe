import utilStyles from "../styles/utils.module.css"


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