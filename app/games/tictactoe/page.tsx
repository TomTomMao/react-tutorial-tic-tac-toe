'use client';
import styles from './page.module.css';
import utilStyles from '../../../styles/utils.module.css'
import { useState } from 'react';
function Square({ value, onSquareClick }: { value: string | null, onSquareClick: () => void }) {
    return (
        <button className={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    )
}
function Board() {
    const [squares , setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(squares);
    let status : string;
    if (winner) {
        status = `winner: ${winner}`
    } else {
        status = (xIsNext ? `next player: X` : `next player: O`)  
    }
    function handleClick(i: number) {
        if (calculateWinner(squares)) {
            return;
        }
        console.log(`button ${i} clicked`)
        const newSquares = squares.slice()
        xIsNext ? newSquares[i] = "X" : newSquares[i] = "O"
        setXIsNext(!xIsNext);
        setSquares(newSquares);
    }
    return (
        <div className={styles.board}>
            <h2>{status}</h2>
            <div className={styles.boardRow}>
                <Square key={0} value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square key={1} value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square key={2} value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className={styles.boardRow}>
                <Square key={3} value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square key={4} value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square key={5} value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className={styles.boardRow}>
                <Square key={6} value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square key={7} value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square key={8} value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>)
}
export default function Game() {
    return (
        <>
            <h1>tictactoe</h1>
            <Board></Board>
        </>
    )
}
function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let [a,b,c] of lines) {
        if (squares[a] && squares[a]==squares[b] && squares[b]==squares[c]) {
            console.log([a,b,c])
            return squares[a]
        }
    }
    return null;
}