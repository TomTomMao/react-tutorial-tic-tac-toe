import { getLikeData } from '../../../lib/data';

export async function GET(Request) {
    return new Response(JSON.stringify({name: "tom"}));
}