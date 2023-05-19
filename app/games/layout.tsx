import Link from 'next/link'
import utilStyles from "../../styles/utils.module.css"

export default function Layout({ children, title }: { children: React.ReactNode, title:string }) {
    return <div className={utilStyles.containerFlexColCenter}>
        {children}
        <h2>
            <Link href="/">back to home</Link>
        </h2>
    </div>
}
