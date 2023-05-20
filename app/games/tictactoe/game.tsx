'use client';
import styles from './page.module.css';
import { useState } from 'react';
import Board from './board'
import MoveHistoryList from './moveHistoryList';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;
    const [buttonsAscending, setButtonsAscending] = useState(true);
    const moves: React.ReactNode[] = history.map((square, move) => {
        let description: string;
        if (move === currentMove) {
            description = `You are at move #${move}`;
        } else {
            description = (move === 0 ? "go back to the initial game" : `Go to move #${move}`)
        }
        return (
            <li key={move}>
                <button onClick={() => goBackTo(move)}>{description} </button>
            </li>
        )
    })
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        const nextMove = currentMove + 1;
        setCurrentMove(nextMove);
    }
    function goBackTo(newMove) {
        setCurrentMove(newMove);
    }
    return (
        <>
            <div className={styles.game}>
                <div className="col">
                    <h1>tictactoe</h1>
                    <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay}></Board>
                </div>
                <div className="col">
                    <ul>{buttonsAscending ? moves : moves.reverse()}
                        <button onClick={() => setButtonsAscending(!buttonsAscending)}>{buttonsAscending ? "current order: ascending" : "current order: descending"}</button>
                    </ul>
                </div>
                <MoveHistoryList history={history} currentMove={currentMove} ascending={buttonsAscending}/>
            </div>
        </>
    )
}