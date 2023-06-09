import { NextRequest } from 'next/server';
import { getLikeData } from '../../../lib/data';

export async function GET(request: Request) {
    const data = await getLikeData()
    // const { searchParams } = new URL(request.url);
    // const newLikes = searchParams.get('newLikes');
    // return new Response(JSON.stringify(newLikes));
    return new Response(JSON.stringify(data))
}

export async function POST(request) {
    console.log("post recieved from /api/likes, request.body:",request.payload);
    return new Response(JSON.stringify(request.body))
}