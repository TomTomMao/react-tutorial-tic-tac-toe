import Image from "next/image"
import Link from "next/link"
import RootLayout from "./layout"
export default function Page() {
    return (
        <>
            <h1 >Hello World</h1>
            <Image
                src="/a hipster drinking coffee.jpg"
                alt="cartoon hipster drinking coffee"
                width={300}
                height={300}
            />
            <br />
            <Link
                href="/games/tictactoe">play Tictactoe</Link>
        </>
    )
}