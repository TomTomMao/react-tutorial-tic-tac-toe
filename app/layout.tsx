import { stringify } from "querystring";
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";


export default function RootLayout({
    children, param }: {
        children: React.ReactNode;
        param: any;
    }) {
    return (
        <html lang="en">
            <body>
                <Link
                    href="/">Home</Link>
                <div className={utilStyles.containerFlexColCenter}>{children}</div>
                <p>{stringify(param)}</p>
            </body>
        </html>
    );
}