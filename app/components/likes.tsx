"use client";
import { useState } from 'react';
import axios from 'axios';

export default function Likes({ ssrLikes }: { ssrLikes: number }) {
    const [likes, setLikes] = useState(ssrLikes);
    async function handleClick() {
        // update the server likes
        try {
            await axios.post("/api/likes", {
                newLikes: likes + 1,
                firstName: "fred"
            })
            console.log("posted")
        } catch (error) {
            console.log(error)
        }
        // get new likes from the server
        try {
            const newLikes = (await axios.get("/api/likes")).data.likes
            setLikes(newLikes);
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <h1>likes: {likes}</h1>
            <button onClick={handleClick}>add like</button>
        </>
    )
}
