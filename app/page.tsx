
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { getLikeData, getCommentsData, comment, changeLikeData } from "../lib/data";
import Likes from "./components/likes";
export default async function Page() {
    try {
        var { comments, commentsFileNames }: { comments: Array<comment>, commentsFileNames: Array<string> } = await getCommentsData();
    } catch (error) {
        var { comments, commentsFileNames }: { comments: Array<comment>, commentsFileNames: Array<string> } =
            { comments: [{time: "error",content: JSON.stringify(error)}], commentsFileNames: [JSON.stringify(error)] }
    }
    const {likes} : {likes: string} = await getLikeData()
    return (
        <>
            <h1 >Wentao Mao</h1>
            <Image
                src="/profile.jpg"
                alt="cartoon hipster drinking coffee"
                width={300}
                height={300}
            />
            <Likes ssrLikes={parseInt(likes)}></Likes>
            {/* <p>{JSON.stringify({ likes, comments, likesPath, commentsFileNames })}</p> */}
            <br />
            <Link
                href="/games/tictactoe">play Tictactoe</Link>
            <Link
                href="/products">products</Link>
            <Link
                href="/reactapp/todolist">to-do-list</Link>
        </>
    )
}
export const metadata: Metadata = {
    title: 'home page'
}
async function updateServerLikes(newLikes:number) {
    await changeLikeData(newLikes);
}