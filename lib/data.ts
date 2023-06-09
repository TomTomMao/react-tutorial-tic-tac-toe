import fs, { readdir } from 'fs/promises';
import path from 'path';

export interface comment {
    time: string,
    content: string
}
const likesPath = path.join(process.cwd(), 'public/likes.txt');
const commentsPath = path.join(process.cwd(), 'public/comments')
export async function getLikeData() {
    const likes = await fs.readFile(likesPath, {encoding: 'utf-8'});
    return {likes: likes, likesPath: likesPath}
}
export async function getCommentsData() {
    const commentsFileNames = await readdir(commentsPath);
    const comments: Array<comment> = [];
    for (let commentFileName of commentsFileNames) {
        const commentTime = commentFileName;
        const commentContent = await fs.readFile(path.join(commentsPath, commentFileName), {encoding: 'utf-8'})
        comments.push({time: commentTime, content: commentContent})
    }
    return {comments:comments, commentsPath: commentsPath, commentsFileNames: commentsFileNames}
}
export async function changeLikeData(newLikes: number) {
    const content = String(newLikes);
    await fs.writeFile(likesPath, content)
}