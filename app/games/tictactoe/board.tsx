import styles from './page.module.css'
import Square from './square'

export default function Board({ squares, xIsNext, onPlay }) {

    const winner = calculateWinner(squares);
    let status: string;
    if (winner) {
        status = `winner: ${winner}`
    } else {
        status = (xIsNext ? `next player: X` : `next player: O`)
    }
    function handleClick(i: number) {
        if (calculateWinner(squares)) {
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
            return squares[a]
        }
    }
    return null;
}