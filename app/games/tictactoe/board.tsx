import { ReactNode } from 'react';
import styles from './page.module.css'
import Square from './square'

export default function Board({ squares, xIsNext, onPlay }) {

    const {winner, squaresWin} = calculateWinner(squares);
    let status: string;
    if (winner) {
        status = `winner: ${winner}`
    } else {
        if (squares.filter((square) => square === "X" || square === "O").length === 9) {
            status = "draw"
        } else {
            status = (xIsNext ? `next player: X` : `next player: O`)
        }
    }
    function handleClick(i: number) {
        const {winner} = calculateWinner(squares);
        if (winner) {
            return;
        }
        console.log(`button ${i} clicked, squares${i} = ${squares[i]}`)
        if (squares[i] != null) {
            return
        }
        const newSquares = squares.slice()
        xIsNext ? newSquares[i] = "X" : newSquares[i] = "O";
        onPlay(newSquares);
    }
    const rows: React.ReactNode[] = []
    for (let i = 0; i <= 2; i++) {
        const squaresInRow:Array<React.ReactNode> = [];
        for (let j = 0; j <= 2; j++) {
            const squareId = i * 3 + j;
                squaresInRow.push(<Square key={squareId} value={squares[squareId]} squareWin={squaresWin.includes(squareId)} onSquareClick={() => handleClick(squareId)} />)
        }
        rows.push((
            <div className={styles.boardRow}>
                {squaresInRow}
            </div>)
        )
    }
    return (
        <div className={styles.board}>
            <h2>{status}</h2>
            {rows}
            {/* <div className={styles.boardRow}>
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
            </div> */}
        </div>)
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
            console.log([a, b, c])
            return {winner: squares[a], squaresWin: [a, b, c]}
        }
    }
    return {winner: null, squaresWin:[]};
}