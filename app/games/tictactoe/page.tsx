import { Metadata } from 'next';
import Game from './game';

export default function Page() {
    return (
        <Game></Game>
    )
}
export const metadata: Metadata = {
    title: 'tic tac toe'
  };