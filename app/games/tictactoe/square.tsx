import styles from './page.module.css';

export default function Square({ value, squareWin, onSquareClick }: { value: string | null, squareWin:boolean, onSquareClick: () => void }) {
    return (
        <button className={squareWin ? styles.squareWin : styles.square} onClick={onSquareClick}>
            {value}
        </button>
    )
}