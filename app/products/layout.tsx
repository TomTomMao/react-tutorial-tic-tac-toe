import Link from 'next/link'
import utilStyles from "../../styles/utils.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className={utilStyles.containerFlexColCenter}>
        {children}
        <h2>
            <Link href="/">back to home</Link>
        </h2>
    </div>
}
