'use client';
import styles from './page.module.css';
import { useState } from 'react';
import Board from './board'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;
    const moves: React.ReactNode = history.map((square, move) => {
        const discription = (move === 0 ? "go back to the initial game" : `go back to the ${move} step`)
        return (
            <li>
                <button key={move} onClick={() => goBackTo(move)}>{discription} </button>
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
                    <ul>{moves}</ul>
                </div>
            </div>
        </>
    )
}