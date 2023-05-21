import { stringify } from "querystring";
import utilStyles from "../styles/utils.module.css"


export default function RootLayout({
    children, param}: {
    children: React.ReactNode;
    param: any;
}) {
    return (
        <html lang="en">
            <body>
                <div className={utilStyles.containerFlexColCenter}>{children}</div>
                <p>{stringify(param)}</p>
            </body>
        </html>
    );
}